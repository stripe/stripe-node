

const http = require('http');
const https = require('https');
const path = require('path');

const utils = require('./utils');
const Error = require('./Error');

const hasOwn = {}.hasOwnProperty;

// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
StripeResource.method = require('./StripeMethod');
StripeResource.BASIC_METHODS = require('./StripeMethod.basic');

/**
 * Encapsulates request logic for a Stripe Resource
 */
function StripeResource(stripe, urlData) {
  this._stripe = stripe;
  this._urlData = urlData || {};

  this.basePath = utils.makeURLInterpolator(stripe.getApiField('basePath'));
  this.resourcePath = this.path;
  this.path = utils.makeURLInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach((methodName) => {
      this[methodName] = StripeResource.BASIC_METHODS[methodName];
    }, this);
  }

  this.initialize.apply(this, arguments);
}

StripeResource.prototype = {

  path: '',

  initialize() {},

  // Function to override the default data processor. This allows full control
  // over how a StripeResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,

  // String that overrides the base API endpoint. If `overrideHost` is not null
  // then all requests for a particular resource will be sent to a base API
  // endpoint as defined by `overrideHost`.
  overrideHost: null,

  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,

  createFullPath(commandPath, urlData) {
    return path.join(
      this.basePath(urlData),
      this.path(urlData),
      typeof commandPath === 'function' ?
        commandPath(urlData) : commandPath,
    ).replace(/\\/g, '/'); // ugly workaround for Windows
  },

  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols(pathWithSymbols) {
    return `/${path.join(
      this.resourcePath,
      pathWithSymbols,
    ).replace(/\\/g, '/')}`; // ugly workaround for Windows
  },

  createUrlData() {
    const urlData = {};
    // Merge in baseData
    for (const i in this._urlData) {
      if (hasOwn.call(this._urlData, i)) {
        urlData[i] = this._urlData[i];
      }
    }
    return urlData;
  },

  wrapTimeout(promise, callback) {
    if (callback) {
      // Ensure callback is called outside of promise stack.
      return promise.then((res) => {
        setTimeout(() => { callback(null, res); }, 0);
      }, (err) => {
        setTimeout(() => { callback(err, null); }, 0);
      });
    }

    return promise;
  },

  _timeoutHandler(timeout, req, callback) {
    const self = this;
    return function _timeoutHandler() {
      const timeoutErr = new Error('ETIMEDOUT');
      timeoutErr.code = 'ETIMEDOUT';

      req._isAborted = true;
      req.abort();

      callback.call(
        self,
        new Error.StripeConnectionError({
          message: `Request aborted due to timeout being reached (${timeout}ms)`,
          detail: timeoutErr,
        }),
        null,
      );
    };
  },

  _responseHandler(req, callback) {
    const self = this;
    return function _responseHandler(res) {
      let response = '';

      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        response += chunk;
      });
      res.on('end', () => {
        const headers = res.headers || {};
        // NOTE: Stripe responds with lowercase header names/keys.

        // For convenience, make Request-Id easily accessible on
        // lastResponse.
        res.requestId = headers['request-id'];

        const responseEvent = utils.removeEmpty({
          api_version: headers['stripe-version'],
          account: headers['stripe-account'],
          idempotency_key: headers['idempotency-key'],
          method: req._requestEvent.method,
          path: req._requestEvent.path,
          status: res.statusCode,
          request_id: res.requestId,
          elapsed: Date.now() - req._requestStart,
        });

        self._stripe._emitter.emit('response', responseEvent);

        try {
          response = JSON.parse(response);

          if (response.error) {
            let err;

            response.error.headers = headers;
            response.error.statusCode = res.statusCode;
            response.error.requestId = res.requestId;

            if (res.statusCode === 401) {
              err = new Error.StripeAuthenticationError(response.error);
            } else if (res.statusCode === 403) {
              err = new Error.StripePermissionError(response.error);
            } else if (res.statusCode === 429) {
              err = new Error.StripeRateLimitError(response.error);
            } else {
              err = Error.StripeError.generate(response.error);
            }
            return callback.call(self, err, null);
          }
        } catch (e) {
          return callback.call(
            self,
            new Error.StripeAPIError({
              message: 'Invalid JSON received from the Stripe API',
              response,
              exception: e,
              requestId: headers['request-id'],
            }),
            null,
          );
        }
        // Expose res object
        Object.defineProperty(response, 'lastResponse', {
          enumerable: false,
          writable: false,
          value: res,
        });
        callback.call(self, null, response);
      });
    };
  },

  _errorHandler(req, callback) {
    const self = this;
    return function _errorHandler(error) {
      if (req._isAborted) {
        // already handled
        return;
      }
      callback.call(
        self,
        new Error.StripeConnectionError({
          message: 'An error occurred with our connection to Stripe',
          detail: error,
        }),
        null,
      );
    };
  },

  _defaultHeaders(auth, contentLength, apiVersion) {
    let userAgentString = `Stripe/v1 NodeBindings/${this._stripe.getConstant('PACKAGE_VERSION')}`;

    if (this._stripe._appInfo) {
      userAgentString += ` ${this._stripe.getAppInfoAsString()}`;
    }

    const headers = {
      // Use specified auth token or use default from this stripe instance:
      Authorization: auth ?
        `Bearer ${auth}` :
        this._stripe.getApiField('auth'),
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': contentLength,
      'User-Agent': userAgentString,
    };

    if (apiVersion) {
      headers['Stripe-Version'] = apiVersion;
    }

    return headers;
  },

  _request(method, path, data, auth, options, callback) {
    const self = this;
    let requestData;

    if (self.requestDataProcessor) {
      requestData = self.requestDataProcessor(method, data, options.headers);
    } else {
      requestData = utils.stringifyRequestData(data || {});
    }

    const apiVersion = this._stripe.getApiField('version');

    const headers = self._defaultHeaders(auth, requestData.length, apiVersion);

    // Grab client-user-agent before making the request:
    this._stripe.getClientUserAgent((cua) => {
      headers['X-Stripe-Client-User-Agent'] = cua;

      if (options.headers) {
        Object.assign(headers, options.headers);
      }

      makeRequest();
    });

    function makeRequest() {
      const timeout = self._stripe.getApiField('timeout');
      const isInsecureConnection = self._stripe.getApiField('protocol') == 'http';

      const host = self.overrideHost || self._stripe.getApiField('host');

      const req = (
        isInsecureConnection ? http : https
      ).request({
        host,
        port: self._stripe.getApiField('port'),
        path,
        method,
        agent: self._stripe.getApiField('agent'),
        headers,
        ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
      });

      const requestEvent = utils.removeEmpty({
        api_version: apiVersion,
        account: headers['Stripe-Account'],
        idempotency_key: headers['Idempotency-Key'],
        method,
        path,
      });

      req._requestEvent = requestEvent;

      req._requestStart = Date.now();

      self._stripe._emitter.emit('request', requestEvent);

      req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));
      req.on('response', self._responseHandler(req, callback));
      req.on('error', self._errorHandler(req, callback));

      req.on('socket', (socket) => {
        socket.on((isInsecureConnection ? 'connect' : 'secureConnect'), () => {
          // Send payload; we're safe:
          req.write(requestData);

          req.end();
        });
      });
    }
  },

};

module.exports = StripeResource;
