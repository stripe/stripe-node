'use strict';

var http = require('http');
var https = require('https');
var path = require('path');
var uuid = require('uuid/v4');

var utils = require('./utils');
var Error = require('./Error');

var hasOwn = {}.hasOwnProperty;

// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
StripeResource.method = require('./StripeMethod');
StripeResource.BASIC_METHODS = require('./StripeMethod.basic');

StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;

/**
 * Encapsulates request logic for a Stripe Resource
 */
function StripeResource(stripe, urlData) {
  this._stripe = stripe;
  this._urlData = urlData || {};

  this.basePath = utils.makeURLInterpolator(this.basePath || stripe.getApiField('basePath'));
  this.resourcePath = this.path;
  this.path = utils.makeURLInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach(function(methodName) {
      this[methodName] = StripeResource.BASIC_METHODS[methodName];
    }, this);
  }

  this.initialize.apply(this, arguments);
}

StripeResource.prototype = {

  path: '',

  // Methods that don't use the API's default '/v1' path can override it with this setting.
  basePath: null,

  initialize: function() {},

  // Function to override the default data processor. This allows full control
  // over how a StripeResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,

  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,

  createFullPath: function(commandPath, urlData) {
    return path.join(
      this.basePath(urlData),
      this.path(urlData),
      typeof commandPath == 'function' ?
        commandPath(urlData) : commandPath
    ).replace(/\\/g, '/'); // ugly workaround for Windows
  },

  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols: function(pathWithSymbols) {
    return '/' + path.join(
      this.resourcePath,
      pathWithSymbols || ''
    ).replace(/\\/g, '/'); // ugly workaround for Windows
  },

  createUrlData: function() {
    var urlData = {};
    // Merge in baseData
    for (var i in this._urlData) {
      if (hasOwn.call(this._urlData, i)) {
        urlData[i] = this._urlData[i];
      }
    }
    return urlData;
  },

  // DEPRECATED: Here for backcompat in case users relied on this.
  wrapTimeout: utils.callbackifyPromiseWithTimeout,

  _timeoutHandler: function(timeout, req, callback) {
    var self = this;
    return function() {
      var timeoutErr = new Error('ETIMEDOUT');
      timeoutErr.code = 'ETIMEDOUT';

      req._isAborted = true;
      req.abort();

      callback.call(
        self,
        new Error.StripeConnectionError({
          message: 'Request aborted due to timeout being reached (' + timeout + 'ms)',
          detail: timeoutErr,
        }),
        null
      );
    }
  },

  _responseHandler: function(req, callback) {
    var self = this;
    return function(res) {
      var response = '';

      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        response += chunk;
      });
      res.on('end', function() {
        var headers = res.headers || {};
        // NOTE: Stripe responds with lowercase header names/keys.

        // For convenience, make Request-Id easily accessible on
        // lastResponse.
        res.requestId = headers['request-id'];

        var requestDurationMs = Date.now() - req._requestStart;

        var responseEvent = utils.removeEmpty({
          api_version: headers['stripe-version'],
          account: headers['stripe-account'],
          idempotency_key: headers['idempotency-key'],
          method: req._requestEvent.method,
          path: req._requestEvent.path,
          status: res.statusCode,
          request_id: res.requestId,
          elapsed: requestDurationMs,
        });

        self._stripe._emitter.emit('response', responseEvent);

        try {
          response = JSON.parse(response);

          if (response.error) {
            var err;

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
              response: response,
              exception: e,
              requestId: headers['request-id'],
            }),
            null
          );
        }

        self._recordRequestMetrics(res.requestId, requestDurationMs);

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

  _generateConnectionErrorMessage: function(requestRetries) {
    return 'An error occurred with our connection to Stripe.' + (requestRetries > 0 ? ' Request was retried ' + requestRetries + ' times.' : '');
  },

  _errorHandler: function(req, requestRetries, callback) {
    var self = this;
    return function(error) {
      if (req._isAborted) {
        // already handled
        return;
      }
      callback.call(
        self,
        new Error.StripeConnectionError({
          message: self._generateConnectionErrorMessage(requestRetries),
          detail: error,
        }),
        null
      );
    }
  },

  _shouldRetry: function(res, numRetries) {
    // Do not retry if we are out of retries.
    if (numRetries >= this._stripe.getMaxNetworkRetries()) {
      return false;
    }

    // Retry on connection error.
    if (!res) {
      return true;
    }

    // Retry on conflict and availability errors.
    if (res.statusCode === 409 || res.statusCode === 503) {
      return true;
    }

    // Retry on 5xx's, except POST's, which our idempotency framework
    // would just replay as 500's again anyway.
    if (res.statusCode >= 500 && res.req._requestEvent.method !== 'POST') {
      return true;
    }

    return false;
  },

  _getSleepTimeInMS: function(numRetries) {
    var initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
    var maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();

    // Apply exponential backoff with initialNetworkRetryDelay on the
    // number of numRetries so far as inputs. Do not allow the number to exceed
    // maxNetworkRetryDelay.
    var sleepSeconds = Math.min(
      initialNetworkRetryDelay * Math.pow(numRetries - 1, 2),
      maxNetworkRetryDelay
    );

    // Apply some jitter by randomizing the value in the range of
    // (sleepSeconds / 2) to (sleepSeconds).
    sleepSeconds *= 0.5 * (1 + Math.random());

    // But never sleep less than the base sleep seconds.
    sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);

    return sleepSeconds * 1000;
  },

  _defaultHeaders: function(auth, contentLength, apiVersion) {
    var userAgentString = 'Stripe/v1 NodeBindings/' + this._stripe.getConstant('PACKAGE_VERSION');

    if (this._stripe._appInfo) {
      userAgentString += ' ' + this._stripe.getAppInfoAsString();
    }

    var headers = {
      // Use specified auth token or use default from this stripe instance:
      'Authorization': auth ?
        'Bearer ' + auth :
        this._stripe.getApiField('auth'),
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': contentLength,
      'User-Agent': userAgentString,
    };

    if (apiVersion) {
      headers['Stripe-Version'] = apiVersion;
    }

    return headers;
  },

  _addTelemetryHeader: function(headers) {
    if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
      var metrics = this._stripe._prevRequestMetrics.shift();
      headers['X-Stripe-Client-Telemetry'] = JSON.stringify({
        'last_request_metrics': metrics
      });
    }
  },

  _recordRequestMetrics: function(requestId, requestDurationMs) {
    if (this._stripe.getTelemetryEnabled() && requestId) {
      if (this._stripe._prevRequestMetrics.length > StripeResource.MAX_BUFFERED_REQUEST_METRICS) {
        utils.emitWarning('Request metrics buffer is full, dropping telemetry message.');
      } else {
        this._stripe._prevRequestMetrics.push({
          'request_id': requestId,
          'request_duration_ms': requestDurationMs,
        });
      }
    }
  },

  _request: function(method, host, path, data, auth, options, callback) {
    var self = this;
    var requestData;

    function makeRequestWithData(error, data) {
      var apiVersion;
      var headers;

      if (error) {
        return callback(error);
      }

      apiVersion = self._stripe.getApiField('version');
      requestData = data;
      headers = self._defaultHeaders(auth, requestData.length, apiVersion);

      self._stripe.getClientUserAgent(function(cua) {
        headers['X-Stripe-Client-User-Agent'] = cua;

        if (options.headers) {
          Object.assign(headers, options.headers);
        }

        self._addTelemetryHeader(headers);

        makeRequest(apiVersion, headers);
      });
    }

    if (self.requestDataProcessor) {
      self.requestDataProcessor(method, data, options.headers, makeRequestWithData);
    } else {
      makeRequestWithData(null, utils.stringifyRequestData(data || {}));
    }

    function retryRequest(requestFn, apiVersion, headers, requestRetries) {
      requestRetries += 1;

      return setTimeout(
        requestFn,
        self._getSleepTimeInMS(requestRetries),
        apiVersion,
        headers,
        requestRetries
      );
    }

    function makeRequest(apiVersion, headers, numRetries) {
      var timeout = self._stripe.getApiField('timeout');
      var isInsecureConnection = self._stripe.getApiField('protocol') == 'http';
      var agent = isInsecureConnection ? self._stripe.getApiField('http_agent') : self._stripe.getApiField('https_agent');

      var req = (
        isInsecureConnection ? http : https
      ).request({
        host: host || self._stripe.getApiField('host'),
        port: self._stripe.getApiField('port'),
        path: path,
        method: method,
        agent: agent,
        headers: headers,
        ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
      });

      // If this is a POST and we allow multiple retries, set a idempotency key if one is not
      // already provided.
      if (method === 'POST' && self._stripe.getMaxNetworkRetries() > 0) {
        if (!headers.hasOwnProperty('Idempotency-Key')) {
          headers['Idempotency-Key'] = uuid();
        }
      }

      var requestEvent = utils.removeEmpty({
        api_version: apiVersion,
        account: headers['Stripe-Account'],
        idempotency_key: headers['Idempotency-Key'],
        method: method,
        path: path,
      });

      var requestRetries = numRetries || 0;

      req._requestEvent = requestEvent;

      req._requestStart = Date.now();

      self._stripe._emitter.emit('request', requestEvent);

      req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));

      req.on('response', function(res) {
        if (self._shouldRetry(res, requestRetries)) {
          return retryRequest(makeRequest, apiVersion, headers, requestRetries);
        } else {
          return self._responseHandler(req, callback)(res);
        }
      });

      req.on('error', function(error) {
        if (self._shouldRetry(null, requestRetries)) {
          return retryRequest(makeRequest, apiVersion, headers, requestRetries);
        } else {
          return self._errorHandler(req, requestRetries, callback)(error);
        }
      });

      req.on('socket', function(socket) {
        if (socket.connecting) {
          socket.on((isInsecureConnection ? 'connect' : 'secureConnect'), function() {
            // Send payload; we're safe:
            req.write(requestData);
            req.end();
          });
        } else {
          // we're already connected
          req.write(requestData);
          req.end();
        }
      });
    }
  },
};

module.exports = StripeResource;
