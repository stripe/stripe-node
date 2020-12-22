'use strict';

let defaultHttpAgent;
const initDefaultHttpAgent = () => {
  defaultHttpAgent = new (require('http').Agent)({keepAlive: true});
  return defaultHttpAgent;
};

let defaultHttpsAgent;
const initDefaultHttpsAgent = () => {
  defaultHttpsAgent = new (require('https').Agent)({keepAlive: true});
  return defaultHttpsAgent;
};

const MAX_NETWORK_RETRY_DELAY_MS = 2000;
const INITIAL_NETWORK_RETRY_DELAY_MS = 500;
const MAX_RETRY_AFTER_WAIT_MS = 60000;

const retryOperation = (
  operation,
  maxRetries,
  shouldRetry,
  calculateRetryDelayMs,
  callback
) => {
  const go = (numRetries) => {
    operation((result) => {
      if (shouldRetry(result) && numRetries < maxRetries) {
        return setTimeout(
          () => go(numRetries + 1),
          calculateRetryDelayMs(result, numRetries + 1)
        );
      }
      return callback(result, numRetries);
    }, numRetries);
  };
  go(0);
};

/* eslint-disable class-methods-use-this */
class HttpClient {
  /**
   * Makes an http request
   */
  request(
    {
      /** The data for the body of the request, as a string */
      data,
      /** The host to send the request to */
      host,
      /** The port to use, e.g. 80 or 443 */
      port,
      /** The HTTP path, e.g. /v1/customers */
      path,
      /** The HTTP verb, e.g. 'POST', 'GET', or 'DELETE' */
      method,
      /** an object with lowercase header names as keys, and header values as values */
      headers,
      /** gets a per-request setting */
      getRequestSetting,
      /** gets a globally-configured setting */
      getApiField,

      shouldReadBody,
      shouldRetry,
      maxRetries,
    },
    callback
  ) {
    throw new Error('Unimplemented');
  }
}

class HttpResponse {
  constructor() {
    this._status = 'started';
  }

  /**
   * The value of the `should-retry` header.
   */
  getRetryHeader() {
    throw new Error('Unimplemented');
  }

  /**
   * The headers of the request, as a dictionary with lower-cased header names as keys and header
   * values as values.
   */
  getHeaders() {
    throw new Error('Unimplemented');
  }

  /**
   * The status code of the request, as a number. null if the response was never received.
   */
  getStatusCode() {
    throw new Error('Unimplemented');
  }

  /**
   * The underlying object that represents the response. Will be exposed to the user.
   */
  getRawResponse() {
    throw new Error('Unimplemented');
  }

  /**
   * The body of the request as a string. Should return 'null' if the body was never
   * buffered, for instance if `shouldReadBody` returned false, or if a response
   * was never received.
   */
  getBody() {
    throw new Error('Unimplemented');
  }

  /** The number of times the request that generated the response was retried */
  getNumRetries() {
    throw new Error('Unimplemented');
  }

  /** Should return true if the request errored before a status code or headers
   * was received */
  isConnectionError() {
    throw new Error('Unimplemented');
  }

  /** Returns a raw, underlying error in the case of a connection error or a timeout error.
   * This will be exposed to the user. */
  getRawError() {
    throw new Error('Unimplemented');
  }

  /** Can return true to indicate that the request timed out */
  isTimeoutError() {
    throw new Error('Unimplemented');
  }
}
/* eslint-enable class-methods-use-this */

/**
 * Creates a request
 * sets a request event on the request
 * sets a start time on the request
 * sets a timeout on the request
 * emits a requestEvent
 *
 * listens for the response, and retries the request if appropriate
 * else, waits for the response to finish
 * grabs requestId, stripeAccount, stripeVersion, and idempotencyKey
 * off the headers and places them directly on the response
 * calculates the requestDuration
 * emits a responseEvent
 *
 * parses the response body, constructs an error if appropriate
 * calls the callback with an error or the parsed response. Records
 * metrics.
 *
 * -- Callback with a last response corresponding to the raw response
 *
 */
class NodeHttpClient extends HttpClient {
  constructor(protocol, {agent}) {
    super();
    this._setProtocol(protocol, agent);
    this._maxRetryAfterWaitMs = MAX_RETRY_AFTER_WAIT_MS;
    this._maxNetworkRetryDelayMs = MAX_NETWORK_RETRY_DELAY_MS;
    this._initialNetworkRetryDelayMs = INITIAL_NETWORK_RETRY_DELAY_MS;
  }

  _setProtocol(protocol, agent) {
    if (protocol === 'http') {
      this.httpLib = require('http');
      this.connectEvent = 'connect';
      if (!agent) {
        this.agent = defaultHttpAgent || initDefaultHttpAgent();
      }
    } else {
      this.httpLib = require('https');
      this.connectEvent = 'secureConnect';
      if (!agent) {
        this.agent = defaultHttpsAgent || initDefaultHttpsAgent();
      }
    }
  }

  static _calculateRetryDelayMs(
    result,
    attempt,
    initialDelayMs,
    maxDelayMs,
    maxRetryAfterWait
  ) {
    let retryAfter;
    if (result.headers && result.headers['retry-after']) {
      retryAfter = Number(result.headers['retry-after']) * 1000;
    }

    // Don't sleep more than the max
    const floor = (ms) => Math.min(maxDelayMs, ms);

    // Apply exponential backoff with initialNetworkRetryDelay on the
    // number of numRetries so far as inputs. Do not allow the number to exceed
    // maxNetworkRetryDelay.
    const backoff = (ms) => ms * Math.pow(attempt, 2);

    // Apply some jitter by randomizing the value in the range of
    // (ms / 2) to (ms).
    const jitter = (ms) => ms * 0.5 * (1 + Math.random());

    // Never sleep less than the base.
    const baseCeiling = (ms) => Math.max(initialDelayMs, ms);

    // Never sleep less than the API asks us to, unless the API
    // is asking something unreasonable.
    const apiCeiling = (ms) => {
      if (!retryAfter || retryAfter > maxRetryAfterWait) {
        return ms;
      }
      return Math.max(ms, retryAfter);
    };

    return apiCeiling(baseCeiling(jitter(floor(backoff(initialDelayMs)))));
  }

  static _resolveOptions(getRequestSetting, getApiField) {
    const isUnsetNumber = (n) => !n && n !== 0;

    let maxNetworkRetries = getRequestSetting('maxNetworkRetries');
    if (isUnsetNumber(maxNetworkRetries)) {
      maxNetworkRetries = getApiField('maxNetworkRetries');
    }
    if (isUnsetNumber(maxNetworkRetries)) {
      maxNetworkRetries = 0;
    }

    let timeoutMs = getRequestSetting('timeout');
    if (isUnsetNumber(timeoutMs)) {
      timeoutMs = getApiField('timeout');
    }
    if (isUnsetNumber(timeoutMs)) {
      timeoutMs = 80000;
    }

    return {maxNetworkRetries, timeoutMs};
  }

  request(
    {
      data,
      host,
      port,
      path,
      method,
      headers,
      getRequestSetting,
      getApiField,
      shouldReadBody,
      shouldRetry,
    },
    callback
  ) {
    const {maxNetworkRetries, timeoutMs} = NodeHttpClient._resolveOptions(
      getRequestSetting,
      getApiField
    );
    const operation = (callback, numRetries) => {
      const req = this.httpLib.request({
        host,
        port,
        path,
        method,
        headers,
        agent: this.agent,
        ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
      });

      const res = new NodeHttpResponse();
      res._setNumRetries(numRetries);
      req.on('error', (err) => {
        res._setError(err);
        return callback(res);
      });

      req.once('response', (rawResponse) => {
        res._setRawResponse(rawResponse);

        if (shouldReadBody(res)) {
          let body = '';
          rawResponse.setEncoding('utf8');
          rawResponse.on('data', (chunk) => {
            body += chunk;
          });
          rawResponse.once('end', () => {
            res._setBody(body);
            return callback(res);
          });
          return;
        }

        return callback(res);
      });

      req.setTimeout(timeoutMs, (req) => {
        req.abort();
        res._setTimedOut(timeoutMs);
        return callback(res);
      });

      req.once('socket', (socket) => {
        if (socket.connecting) {
          socket.once(this.connectEvent, () => {
            // Send payload; we're safe:
            req.write(data);
            req.end();
          });
        } else {
          // we're already connected
          req.write(data);
          req.end();
        }
      });
    };

    const calculateRetryDelayMs = (result, attempt) =>
      NodeHttpClient._calculateRetryDelayMs(
        result,
        attempt,
        this._initialNetworkRetryDelayMs,
        this._maxNetworkRetryDelayMs,
        this._maxRetryAfterWaitMs
      );

    return retryOperation(
      operation,
      maxNetworkRetries,
      shouldRetry,
      calculateRetryDelayMs,
      callback
    );
  }
}
exports.NodeHttpClient = NodeHttpClient;

class NodeHttpResponse extends HttpResponse {
  constructor() {
    super();
    this._status = 'started';
  }

  _setError(err) {
    this._rawConnectionError = err;
    this._status = 'errored';
  }

  _setTimedOut(err) {
    this._status = 'timeout';
  }

  _setRawResponse(rawResponse) {
    this._rawResponse = rawResponse;
    this._status = 'reading';
  }

  _setNumRetries(n) {
    this._numRetries = n;
  }

  _setBody(body) {
    if (this._status !== 'reading') {
      if (this._status === 'done') {
        throw new Error('Unexpected: _setBody should not be called twice');
      }
      if (this._status === 'errored') {
        throw new Error(
          'Unexpected: _setBody should not be called on an errored request'
        );
      }
      if (this._status === 'started') {
        throw new Error(
          "Unexpected: _setBody should not be called on an 'started' request that is not 'reading'"
        );
      }
      if (this._status === 'timeout') {
        throw new Error(
          "Unexpected: _setBody should not be called on an 'timeout' request"
        );
      }
      throw new Error();
    }
    this._body = body;
    this._status = 'done';
  }

  getRetryHeader() {
    return this._rawResponse.headers['stripe-should-retry'];
  }

  getHeaders() {
    return this._rawResponse.headers;
  }

  getStatusCode() {
    return this._rawResponse.statusCode;
  }

  getRawResponse() {
    return this._rawResponse;
  }

  getBody() {
    if (this._status !== 'done') {
      throw new Error(
        'Unexpected: _getBody should not be called if the body was never set'
      );
    }
    return this._body;
  }

  getNumRetries() {
    return this._numRetries;
  }

  isConnectionError() {
    return this._status === 'errored';
  }

  getRawError() {
    return this._rawConnectionError;
  }

  isTimeoutError() {
    return this._status === 'timeout';
  }

  _setConnectionError() {
    this.connectionError = true;
  }
}
exports.NodeHttpClient = NodeHttpClient;
