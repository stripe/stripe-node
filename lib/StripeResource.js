'use strict';

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

// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
StripeResource.method = require('./StripeMethod');
StripeResource.BASIC_METHODS = require('./StripeMethod.basic');

StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;

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

      req._isAborted = true;
      req.abort();

      callback.call(
        this,
        new StripeConnectionError({
          message: `Request aborted due to timeout being reached (${timeout}ms)`,
          detail: timeoutErr,
        }),
        null
      );
    };
  },

  _generateConnectionErrorMessage(requestRetries) {
    return `An error occurred with our connection to Stripe.${
      requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ''
    }`;
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
  _shouldRetry(res) {
    if (res.isConnectionError()) {
      return true;
    }
    if (res.getRetryHeader() === 'false') {
      return false;
    }
    if (res.getRetryHeader() === 'true') {
      return true;
    }
    return res.getStatusCode() === 409 || res.getStatusCode() >= 500;
  },

  _sendRequest(
    method,
    host,
    port,
    path,
    data,
    apiVersion,
    headers,
    timeout,
    options,
    callback
  ) {
    const requestStartTime = Date.now();
    const requestEvent = utils.removeNullish({
      api_version: apiVersion,
      account: headers['Stripe-Account'],
      idempotency_key: headers['Idempotency-Key'],
      method,
      path,
      request_start_time: requestStartTime,
    });
    this._stripe._emitter.emit('request', requestEvent);

    this._stripe._httpClient.request(
      {
        data,
        host,
        port,
        path,
        method,
        headers,
        getRequestSetting: (name) => {
          return options.settings && options.settings[name];
        },
        getApiField: (name) => {
          return this._stripe.getApiField(name);
        },
        shouldReadBody: (res) => {
          return true;
        },
        // Always retry connection errors. Otherwise, respect the stripe-should-retry header.
        // Otherwise, retry 5xx errors and conflict errors.
        shouldRetry: (res) => this._shouldRetry(res),
        maxRetries: this._getMaxNetworkRetries(),
      },
      (result) => {
        if (result.isConnectionError()) {
          return callback(
            new StripeConnectionError({
              message: this._generateConnectionErrorMessage(
                result.getNumRetries()
              ),
              detail: result.getRawError(),
            }),
            null
          );
        }

        if (result.isTimeoutError()) {
          const timeoutErr = new TypeError('ETIMEDOUT');
          timeoutErr.code = 'ETIMEDOUT';
          return callback(
            new StripeConnectionError({
              message: `Request aborted due to timeout being reached (${timeout}ms)`,
              detail: timeoutErr,
            }),
            null
          );
        }

        const statusCode = result.getStatusCode();
        const body = result.getBody();
        const rawResponse = result.getRawResponse();

        const headers = result.getHeaders();
        const requestId = headers['request-id'];
        rawResponse.requestId = requestId;

        const stripeAccount = headers['stripe-account'];
        if (stripeAccount) {
          rawResponse.stripeAccount = stripeAccount;
        }

        const apiVersion = headers['stripe-version'];
        if (apiVersion) {
          rawResponse.apiVersion = apiVersion;
        }

        const idempotencyKey = headers['idempotency-key'];
        if (idempotencyKey) {
          rawResponse.idempotencyKey = idempotencyKey;
        }

        const requestEndTime = Date.now();
        const requestDurationMs = requestEndTime - requestStartTime;

        const responseEvent = utils.removeNullish({
          api_version: apiVersion,
          account: stripeAccount,
          idempotency_key: idempotencyKey,
          method: method,
          path: path,
          status: statusCode,
          request_id: requestId,
          elapsed: requestDurationMs,
          request_start_time: requestStartTime,
          request_end_time: requestEndTime,
        });

        this._stripe._emitter.emit('response', responseEvent);

        let parsed;
        try {
          parsed = JSON.parse(body);
        } catch (e) {
          return callback.call(
            this,
            new StripeAPIError({
              message: 'Invalid JSON received from the Stripe API',
              response: body,
              exception: e,
              requestId: headers['request-id'],
            }),
            null
          );
        }

        if (parsed.error) {
          let err;

          // Convert OAuth error responses into a standard format
          // so that the rest of the error logic can be shared
          if (typeof parsed.error === 'string') {
            parsed.error = {
              type: parsed.error,
              message: parsed.error_description,
            };
          }

          parsed.error.headers = headers;
          parsed.error.statusCode = statusCode;
          parsed.error.requestId = requestId;

          if (statusCode === 401) {
            err = new StripeAuthenticationError(parsed.error);
          } else if (statusCode === 403) {
            err = new StripePermissionError(parsed.error);
          } else if (statusCode === 429) {
            err = new StripeRateLimitError(parsed.error);
          } else {
            err = StripeError.generate(parsed.error);
          }
          return callback.call(this, err, null);
        }

        this._recordRequestMetrics(requestId, requestDurationMs);

        Object.defineProperty(parsed, 'lastResponse', {
          enumerable: false,
          writable: false,
          value: rawResponse,
        });
        callback.call(this, null, parsed);
      }
    );
  },

  _request(method, host, path, data, auth, options = {}, callback) {
    // timeout can be set on a per-request basis. Favor that over the global setting
    const timeout =
      options.settings &&
      Number.isInteger(options.settings.timeout) &&
      options.settings.timeout >= 0
        ? options.settings.timeout
        : this._stripe.getApiField('timeout');
    const apiVersion = this._stripe.getApiField('version');
    const prepareAndMakeRequest = (error, data) => {
      if (error) {
        return callback(error);
      }

      this._stripe.getClientUserAgent((clientUserAgent) => {
        const headers = this._makeHeaders(
          auth,
          data.length,
          apiVersion,
          clientUserAgent,
          method,
          options.headers,
          options.settings
        );

        return this._sendRequest(
          method,
          host || this._stripe.getApiField('host'),
          this._stripe.getApiField('port'),
          path,
          data,
          apiVersion,
          headers,
          timeout,
          options,
          callback
        );
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
