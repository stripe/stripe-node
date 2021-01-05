'use strict';

const http = require('http');
const https = require('https');
const path = require('path');

const utils = require('./utils');
const {
  StripeConnectionError,
  StripeAuthenticationError,
  StripePermissionError,
  StripeRateLimitError,
  StripeError,
  StripeAPIError,
} = require('./Error');

const defaultHttpAgent = new http.Agent({keepAlive: true});
const defaultHttpsAgent = new https.Agent({keepAlive: true});

// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
StripeResource.method = require('./StripeMethod');
StripeResource.BASIC_METHODS = require('./StripeMethod.basic');

StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
const MAX_RETRY_AFTER_WAIT = 60;

/**
 * Encapsulates request logic for a Stripe Resource
 */
function StripeResource(stripe, deprecatedUrlData) {
  this._stripe = stripe;
  if (deprecatedUrlData) {
    throw new Error(
      'Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.'
    );
  }

  this.basePath = utils.makeURLInterpolator(
    this.basePath || stripe.getApiField('basePath')
  );
  this.resourcePath = this.path;
  this.path = utils.makeURLInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach(function(methodName) {
      this[methodName] = StripeResource.BASIC_METHODS[methodName];
    }, this);
  }

  this.initialize(...arguments);
}

StripeResource.prototype = {
  path: '',

  // Methods that don't use the API's default '/v1' path can override it with this setting.
  basePath: null,

  initialize() {},

  // Function to override the default data processor. This allows full control
  // over how a StripeResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,

  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,

  createFullPath(commandPath, urlData) {
    return path
      .join(
        this.basePath(urlData),
        this.path(urlData),
        typeof commandPath == 'function' ? commandPath(urlData) : commandPath
      )
      .replace(/\\/g, '/'); // ugly workaround for Windows
  },

  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols(pathWithSymbols) {
    return `/${path
      .join(this.resourcePath, pathWithSymbols || '')
      .replace(/\\/g, '/')}`; // ugly workaround for Windows
  },

  // DEPRECATED: Here for backcompat in case users relied on this.
  wrapTimeout: utils.callbackifyPromiseWithTimeout,

  _timeoutHandler(timeout, req, callback) {
    return () => {
      const timeoutErr = new TypeError('ETIMEDOUT');
      timeoutErr.code = 'ETIMEDOUT';

      req.destroy(timeoutErr);
    };
  },

  _responseHandler(req, callback) {
    return (res) => {
      let response = '';

      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        response += chunk;
      });
      res.once('end', () => {
        const headers = res.headers || {};
        // NOTE: Stripe responds with lowercase header names/keys.

        // For convenience, make some headers easily accessible on
        // lastResponse.
        res.requestId = headers['request-id'];

        const stripeAccount = headers['stripe-account'];
        if (stripeAccount) {
          res.stripeAccount = stripeAccount;
        }

        const apiVersion = headers['stripe-version'];
        if (apiVersion) {
          res.apiVersion = apiVersion;
        }

        const idempotencyKey = headers['idempotency-key'];
        if (idempotencyKey) {
          res.idempotencyKey = idempotencyKey;
        }

        const requestEndTime = Date.now();
        const requestDurationMs = requestEndTime - req._requestStart;

        const responseEvent = utils.removeNullish({
          api_version: headers['stripe-version'],
          account: headers['stripe-account'],
          idempotency_key: headers['idempotency-key'],
          method: req._requestEvent.method,
          path: req._requestEvent.path,
          status: res.statusCode,
          request_id: res.requestId,
          elapsed: requestDurationMs,
          request_start_time: req._requestStart,
          request_end_time: requestEndTime,
        });

        this._stripe._emitter.emit('response', responseEvent);

        try {
          response = JSON.parse(response);

          if (response.error) {
            let err;

            // Convert OAuth error responses into a standard format
            // so that the rest of the error logic can be shared
            if (typeof response.error === 'string') {
              response.error = {
                type: response.error,
                message: response.error_description,
              };
            }

            response.error.headers = headers;
            response.error.statusCode = res.statusCode;
            response.error.requestId = res.requestId;

            if (res.statusCode === 401) {
              err = new StripeAuthenticationError(response.error);
            } else if (res.statusCode === 403) {
              err = new StripePermissionError(response.error);
            } else if (res.statusCode === 429) {
              err = new StripeRateLimitError(response.error);
            } else {
              err = StripeError.generate(response.error);
            }
            return callback.call(this, err, null);
          }
        } catch (e) {
          return callback.call(
            this,
            new StripeAPIError({
              message: 'Invalid JSON received from the Stripe API',
              response,
              exception: e,
              requestId: headers['request-id'],
            }),
            null
          );
        }

        this._recordRequestMetrics(res.requestId, requestDurationMs);

        // Expose res object
        Object.defineProperty(response, 'lastResponse', {
          enumerable: false,
          writable: false,
          value: res,
        });
        callback.call(this, null, response);
      });
    };
  },

  _generateConnectionErrorMessage(requestRetries) {
    return `An error occurred with our connection to Stripe.${
      requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ''
    }`;
  },

  _errorHandler(req, requestRetries, callback) {
    return (message, detail) => {
      callback.call(
        this,
        new StripeConnectionError({
          message: this._generateConnectionErrorMessage(requestRetries),
          detail: error,
        }),
        null
      );
    };
  },

  // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
  _shouldRetry(res, numRetries, maxRetries) {
    // Do not retry if we are out of retries.
    if (numRetries >= maxRetries) {
      return false;
    }

    // Retry on connection error.
    if (!res) {
      return true;
    }

    // The API may ask us not to retry (e.g., if doing so would be a no-op)
    // or advise us to retry (e.g., in cases of lock timeouts); we defer to that.
    if (res.headers && res.headers['stripe-should-retry'] === 'false') {
      return false;
    }
    if (res.headers && res.headers['stripe-should-retry'] === 'true') {
      return true;
    }

    // Retry on conflict errors.
    if (res.statusCode === 409) {
      return true;
    }

    // Retry on 500, 503, and other internal errors.
    //
    // Note that we expect the stripe-should-retry header to be false
    // in most cases when a 500 is returned, since our idempotency framework
    // would typically replay it anyway.
    if (res.statusCode >= 500) {
      return true;
    }

    return false;
  },

  _getSleepTimeInMS(numRetries, retryAfter = null) {
    const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
    const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();

    // Apply exponential backoff with initialNetworkRetryDelay on the
    // number of numRetries so far as inputs. Do not allow the number to exceed
    // maxNetworkRetryDelay.
    let sleepSeconds = Math.min(
      initialNetworkRetryDelay * Math.pow(numRetries - 1, 2),
      maxNetworkRetryDelay
    );

    // Apply some jitter by randomizing the value in the range of
    // (sleepSeconds / 2) to (sleepSeconds).
    sleepSeconds *= 0.5 * (1 + Math.random());

    // But never sleep less than the base sleep seconds.
    sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);

    // And never sleep less than the time the API asks us to wait, assuming it's a reasonable ask.
    if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
      sleepSeconds = Math.max(sleepSeconds, retryAfter);
    }

    return sleepSeconds * 1000;
  },

  // Max retries can be set on a per request basis. Favor those over the global setting
  _getMaxNetworkRetries(settings = {}) {
    return settings.maxNetworkRetries &&
      Number.isInteger(settings.maxNetworkRetries)
      ? settings.maxNetworkRetries
      : this._stripe.getMaxNetworkRetries();
  },

  _defaultIdempotencyKey(method, settings) {
    // If this is a POST and we allow multiple retries, ensure an idempotency key.
    const maxRetries = this._getMaxNetworkRetries(settings);

    if (method === 'POST' && maxRetries > 0) {
      return `stripe-node-retry-${utils.uuid4()}`;
    }
    return null;
  },

  _makeHeaders(
    auth,
    contentLength,
    apiVersion,
    clientUserAgent,
    method,
    userSuppliedHeaders,
    userSuppliedSettings
  ) {
    const defaultHeaders = {
      // Use specified auth token or use default from this stripe instance:
      Authorization: auth ? `Bearer ${auth}` : this._stripe.getApiField('auth'),
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': contentLength,
      'User-Agent': this._getUserAgentString(),
      'X-Stripe-Client-User-Agent': clientUserAgent,
      'X-Stripe-Client-Telemetry': this._getTelemetryHeader(),
      'Stripe-Version': apiVersion,
      'Idempotency-Key': this._defaultIdempotencyKey(
        method,
        userSuppliedSettings
      ),
    };

    return Object.assign(
      utils.removeNullish(defaultHeaders),
      // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
      utils.normalizeHeaders(userSuppliedHeaders)
    );
  },

  _getUserAgentString() {
    const packageVersion = this._stripe.getConstant('PACKAGE_VERSION');
    const appInfo = this._stripe._appInfo
      ? this._stripe.getAppInfoAsString()
      : '';

    return `Stripe/v1 NodeBindings/${packageVersion} ${appInfo}`.trim();
  },

  _getTelemetryHeader() {
    if (
      this._stripe.getTelemetryEnabled() &&
      this._stripe._prevRequestMetrics.length > 0
    ) {
      const metrics = this._stripe._prevRequestMetrics.shift();
      return JSON.stringify({
        last_request_metrics: metrics,
      });
    }
  },

  _recordRequestMetrics(requestId, requestDurationMs) {
    if (this._stripe.getTelemetryEnabled() && requestId) {
      if (
        this._stripe._prevRequestMetrics.length >
        StripeResource.MAX_BUFFERED_REQUEST_METRICS
      ) {
        utils.emitWarning(
          'Request metrics buffer is full, dropping telemetry message.'
        );
      } else {
        this._stripe._prevRequestMetrics.push({
          request_id: requestId,
          request_duration_ms: requestDurationMs,
        });
      }
    }
  },

  _request(method, host, path, data, auth, options = {}, callback) {
    let requestData;

    const retryRequest = (
      requestFn,
      apiVersion,
      headers,
      requestRetries,
      retryAfter
    ) => {
      return setTimeout(
        requestFn,
        this._getSleepTimeInMS(requestRetries, retryAfter),
        apiVersion,
        headers,
        requestRetries + 1
      );
    };

    const makeRequest = (apiVersion, headers, numRetries) => {
      // timeout can be set on a per-request basis. Favor that over the global setting
      const timeout =
        options.settings &&
        Number.isInteger(options.settings.timeout) &&
        options.settings.timeout >= 0
          ? options.settings.timeout
          : this._stripe.getApiField('timeout');

      const isInsecureConnection =
        this._stripe.getApiField('protocol') === 'http';
      let agent = this._stripe.getApiField('agent');
      if (agent == null) {
        agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
      }

      const req = (isInsecureConnection ? http : https).request({
        host: host || this._stripe.getApiField('host'),
        port: this._stripe.getApiField('port'),
        path,
        method,
        agent,
        headers,
        ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
      });

      const requestStartTime = Date.now();

      const requestEvent = utils.removeNullish({
        api_version: apiVersion,
        account: headers['Stripe-Account'],
        idempotency_key: headers['Idempotency-Key'],
        method,
        path,
        request_start_time: requestStartTime,
      });

      const requestRetries = numRetries || 0;

      const maxRetries = this._getMaxNetworkRetries(options.settings);

      req._requestEvent = requestEvent;

      req._requestStart = requestStartTime;

      this._stripe._emitter.emit('request', requestEvent);

      req.setTimeout(timeout, this._timeoutHandler(timeout, req, callback));

      req.once('response', (res) => {
        if (this._shouldRetry(res, requestRetries, maxRetries)) {
          return retryRequest(
            makeRequest,
            apiVersion,
            headers,
            requestRetries,
            ((res || {}).headers || {})['retry-after']
          );
        } else {
          return this._responseHandler(req, callback)(res);
        }
      });

      req.on('error', (error) => {
        if (this._shouldRetry(null, requestRetries, maxRetries)) {
          return retryRequest(
            makeRequest,
            apiVersion,
            headers,
            requestRetries,
            null
          );
        } else {
          if (error.code === 'ETIMEDOUT') {
            return callback.call(
              this,
              new StripeConnectionError({
                message: `Request aborted due to timeout being reached (${timeout}ms)`,
                detail: error,
              })
            );
          }
          return callback.call(
            this,
            new StripeConnectionError({
              message: this._generateConnectionErrorMessage(requestRetries),
              detail: error,
            }),
            null
          );
        }
      });

      req.once('socket', (socket) => {
        if (socket.connecting) {
          socket.once(
            isInsecureConnection ? 'connect' : 'secureConnect',
            () => {
              // Send payload; we're safe:
              req.write(requestData);
              req.end();
            }
          );
        } else {
          // we're already connected
          req.write(requestData);
          req.end();
        }
      });
    };

    const prepareAndMakeRequest = (error, data) => {
      if (error) {
        return callback(error);
      }

      requestData = data;

      this._stripe.getClientUserAgent((clientUserAgent) => {
        const apiVersion = this._stripe.getApiField('version');
        const headers = this._makeHeaders(
          auth,
          requestData.length,
          apiVersion,
          clientUserAgent,
          method,
          options.headers,
          options.settings
        );

        makeRequest(apiVersion, headers);
      });
    };

    if (this.requestDataProcessor) {
      this.requestDataProcessor(
        method,
        data,
        options.headers,
        prepareAndMakeRequest
      );
    } else {
      prepareAndMakeRequest(null, utils.stringifyRequestData(data || {}));
    }
  },
};

module.exports = StripeResource;
