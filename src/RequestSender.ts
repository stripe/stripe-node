import {
  StripeAPIError,
  StripeAuthenticationError,
  StripeConnectionError,
  StripeError,
  StripePermissionError,
  StripeRateLimitError,
  generateV1Error,
  generateV2Error,
} from './Error.js';
import {StripeContext} from './StripeContext.js';
import {
  StripeObject,
  RequestHeaders,
  RequestEvent,
  ResponseEvent,
  RequestCallback,
  RequestCallbackReturn,
  RequestData,
  RequestDataProcessor,
  RequestOptions,
  RequestSettings,
  StripeRequest,
  RequestOpts,
  RequestArgs,
  RequestAuthenticator,
  ApiMode,
} from './Types.js';
import {HttpClient, HttpClientResponseInterface} from './net/HttpClient.js';
import {
  emitWarning,
  jsonStringifyRequestData,
  normalizeHeaders,
  queryStringifyRequestData,
  removeNullish,
  getAPIMode,
  getOptionsFromArgs,
  getDataFromArgs,
  parseHttpHeaderAsString,
  parseHttpHeaderAsNumber,
} from './utils.js';

export type HttpClientResponseError = {code: string};

const MAX_RETRY_AFTER_WAIT = 60;

export class RequestSender {
  protected _stripe: StripeObject;
  private readonly _maxBufferedRequestMetric: number;

  constructor(stripe: StripeObject, maxBufferedRequestMetric: number) {
    this._stripe = stripe;
    this._maxBufferedRequestMetric = maxBufferedRequestMetric;
  }

  private _normalizeStripeContext(
    optsContext?: string | StripeContext | null,
    clientContext?: string | StripeContext | null
  ): string | null {
    if (optsContext) {
      return optsContext.toString() || null; // return null for empty strings
    }

    return clientContext?.toString() || null; // return null for empty strings
  }

  _addHeadersDirectlyToObject(obj: any, headers: RequestHeaders): void {
    // For convenience, make some headers easily accessible on
    // lastResponse.

    // NOTE: Stripe responds with lowercase header names/keys.
    obj.requestId = headers['request-id'];
    obj.stripeAccount = obj.stripeAccount || headers['stripe-account'];
    obj.apiVersion = obj.apiVersion || headers['stripe-version'];
    obj.idempotencyKey = obj.idempotencyKey || headers['idempotency-key'];
  }

  _makeResponseEvent(
    requestEvent: RequestEvent,
    statusCode: number,
    headers: RequestHeaders
  ): ResponseEvent {
    const requestEndTime = Date.now();
    const requestDurationMs = requestEndTime - requestEvent.request_start_time;

    return removeNullish({
      api_version: headers['stripe-version'] as string,
      account: headers['stripe-account'] as string,
      idempotency_key: headers['idempotency-key'] as string,
      method: requestEvent.method,
      path: requestEvent.path,
      status: statusCode,
      request_id: this._getRequestId(headers),
      elapsed: requestDurationMs,
      request_start_time: requestEvent.request_start_time,
      request_end_time: requestEndTime,
    });
  }

  _getRequestId(headers: RequestHeaders): string {
    return headers['request-id'] as string;
  }

  /**
   * Used by methods with spec.streaming === true. For these methods, we do not
   * buffer successful responses into memory or do parse them into stripe
   * objects, we delegate that all of that to the user and pass back the raw
   * http.Response object to the callback.
   *
   * (Unsuccessful responses shouldn't make it here, they should
   * still be buffered/parsed and handled by _jsonResponseHandler -- see
   * makeRequest)
   */
  _streamingResponseHandler(
    requestEvent: RequestEvent,
    usage: Array<string>,
    callback: RequestCallback
  ): (res: HttpClientResponseInterface) => RequestCallbackReturn {
    return (res: HttpClientResponseInterface): RequestCallbackReturn => {
      const headers = res.getHeaders();

      const streamCompleteCallback = (): void => {
        const responseEvent = this._makeResponseEvent(
          requestEvent,
          res.getStatusCode(),
          headers
        );
        this._stripe._emitter.emit('response', responseEvent);
        this._recordRequestMetrics(
          this._getRequestId(headers),
          responseEvent.elapsed,
          usage
        );
      };

      const stream = res.toStream(streamCompleteCallback);

      // This is here for backwards compatibility, as the stream is a raw
      // HTTP response in Node and the legacy behavior was to mutate this
      // response.
      this._addHeadersDirectlyToObject(stream, headers);

      return callback(null, stream);
    };
  }

  /**
   * Default handler for Stripe responses. Buffers the response into memory,
   * parses the JSON and returns it (i.e. passes it to the callback) if there
   * is no "error" field. Otherwise constructs/passes an appropriate Error.
   */
  _jsonResponseHandler(
    requestEvent: RequestEvent,
    apiMode: 'v1' | 'v2',
    usage: Array<string>,
    callback: RequestCallback
  ) {
    return (res: HttpClientResponseInterface): void => {
      const headers = res.getHeaders();
      const requestId = this._getRequestId(headers);
      const statusCode = res.getStatusCode();

      const responseEvent = this._makeResponseEvent(
        requestEvent,
        statusCode,
        headers
      );
      this._stripe._emitter.emit('response', responseEvent);

      res
        .toJSON()
        .then(
          (jsonResponse) => {
            if (jsonResponse.error) {
              let err;

              // Convert OAuth error responses into a standard format
              // so that the rest of the error logic can be shared
              if (typeof jsonResponse.error === 'string') {
                jsonResponse.error = {
                  type: jsonResponse.error,
                  message: jsonResponse.error_description,
                };
              }

              jsonResponse.error.headers = headers;
              jsonResponse.error.statusCode = statusCode;
              jsonResponse.error.requestId = requestId;

              if (statusCode === 401) {
                err = new StripeAuthenticationError(jsonResponse.error);
              } else if (statusCode === 403) {
                err = new StripePermissionError(jsonResponse.error);
              } else if (statusCode === 429) {
                err = new StripeRateLimitError(jsonResponse.error);
              } else if (apiMode === 'v2') {
                err = generateV2Error(jsonResponse.error);
              } else {
                err = generateV1Error(jsonResponse.error);
              }

              throw err;
            }

            return jsonResponse;
          },
          (e: Error) => {
            throw new StripeAPIError({
              message: 'Invalid JSON received from the Stripe API',
              exception: e,
              requestId: headers['request-id'] as string,
            });
          }
        )
        .then(
          (jsonResponse) => {
            this._recordRequestMetrics(requestId, responseEvent.elapsed, usage);

            // Expose raw response object.
            const rawResponse = res.getRawResponse();
            this._addHeadersDirectlyToObject(rawResponse, headers);
            Object.defineProperty(jsonResponse, 'lastResponse', {
              enumerable: false,
              writable: false,
              value: rawResponse,
            });

            callback(null, jsonResponse);
          },
          (e) => callback(e, null)
        );
    };
  }

  static _generateConnectionErrorMessage(requestRetries: number): string {
    return `An error occurred with our connection to Stripe.${
      requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ''
    }`;
  }

  // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
  static _shouldRetry(
    res: null | HttpClientResponseInterface,
    numRetries: number,
    maxRetries: number,
    error?: HttpClientResponseError
  ): boolean {
    if (
      error &&
      numRetries === 0 &&
      HttpClient.CONNECTION_CLOSED_ERROR_CODES.includes(error.code)
    ) {
      return true;
    }

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
    if (res.getHeaders()['stripe-should-retry'] === 'false') {
      return false;
    }
    if (res.getHeaders()['stripe-should-retry'] === 'true') {
      return true;
    }

    // Retry on conflict errors.
    if (res.getStatusCode() === 409) {
      return true;
    }

    // Retry on 500, 503, and other internal errors.
    //
    // Note that we expect the stripe-should-retry header to be false
    // in most cases when a 500 is returned, since our idempotency framework
    // would typically replay it anyway.
    if (res.getStatusCode() >= 500) {
      return true;
    }

    return false;
  }

  _getSleepTimeInMS(
    numRetries: number,
    retryAfter: number | null = null
  ): number {
    const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
    const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();

    // Apply exponential backoff with initialNetworkRetryDelay on the
    // number of numRetries so far as inputs. Do not allow the number to exceed
    // maxNetworkRetryDelay.
    let sleepSeconds = Math.min(
      initialNetworkRetryDelay * Math.pow(2, numRetries - 1),
      maxNetworkRetryDelay
    );

    // Apply some jitter by randomizing the value in the range of
    // (sleepSeconds / 2) to (sleepSeconds).
    sleepSeconds *= 0.5 * (1 + Math.random());

    // But never sleep less than the base sleep seconds.
    sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);

    // And never sleep less than the time the API asks us to wait, assuming it's a reasonable ask.
    if (Number.isInteger(retryAfter) && retryAfter! <= MAX_RETRY_AFTER_WAIT) {
      sleepSeconds = Math.max(sleepSeconds, retryAfter!);
    }

    return sleepSeconds * 1000;
  }

  // Max retries can be set on a per request basis. Favor those over the global setting
  _getMaxNetworkRetries(settings: RequestSettings = {}): number {
    return settings.maxNetworkRetries !== undefined &&
      Number.isInteger(settings.maxNetworkRetries)
      ? settings.maxNetworkRetries
      : this._stripe.getMaxNetworkRetries();
  }

  _defaultIdempotencyKey(
    method: string,
    settings: RequestSettings,
    apiMode: ApiMode
  ): string | null {
    // If this is a POST and we allow multiple retries, ensure an idempotency key.
    const maxRetries = this._getMaxNetworkRetries(settings);

    const genKey = (): string =>
      `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;

    // more verbose than it needs to be, but gives clear separation between V1 and V2 behavior
    if (apiMode === 'v2') {
      if (method === 'POST' || method === 'DELETE') {
        return genKey();
      }
    } else if (apiMode === 'v1') {
      if (method === 'POST' && maxRetries > 0) {
        return genKey();
      }
    }

    return null;
  }

  _makeHeaders({
    contentType,
    contentLength,
    apiVersion,
    clientUserAgent,
    method,
    userSuppliedHeaders,
    userSuppliedSettings,
    stripeAccount,
    stripeContext,
    apiMode,
  }: {
    contentType: string;
    contentLength: number;
    apiVersion: string | null;
    clientUserAgent: string;
    method: string;
    userSuppliedHeaders: RequestHeaders | null;
    userSuppliedSettings: RequestSettings;
    stripeAccount: string | null;
    stripeContext: string | null;
    apiMode: ApiMode;
  }): RequestHeaders {
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': contentType,
      'User-Agent': this._getUserAgentString(apiMode),
      'X-Stripe-Client-User-Agent': clientUserAgent,
      'X-Stripe-Client-Telemetry': this._getTelemetryHeader(),
      'Stripe-Version': apiVersion,
      'Stripe-Account': stripeAccount,
      'Stripe-Context': stripeContext,
      'Idempotency-Key': this._defaultIdempotencyKey(
        method,
        userSuppliedSettings,
        apiMode
      ),
    } as RequestHeaders;

    // As per https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.2:
    //   A user agent SHOULD send a Content-Length in a request message when
    //   no Transfer-Encoding is sent and the request method defines a meaning
    //   for an enclosed payload body.  For example, a Content-Length header
    //   field is normally sent in a POST request even when the value is 0
    //   (indicating an empty payload body).  A user agent SHOULD NOT send a
    //   Content-Length header field when the request message does not contain
    //   a payload body and the method semantics do not anticipate such a
    //   body.
    //
    // These method types are expected to have bodies and so we should always
    // include a Content-Length.
    const methodHasPayload =
      method == 'POST' || method == 'PUT' || method == 'PATCH';

    // If a content length was specified, we always include it regardless of
    // whether the method semantics anticipate such a body. This keeps us
    // consistent with historical behavior. We do however want to warn on this
    // and fix these cases as they are semantically incorrect.
    if (methodHasPayload || contentLength) {
      if (!methodHasPayload) {
        emitWarning(
          `${method} method had non-zero contentLength but no payload is expected for this verb`
        );
      }
      defaultHeaders['Content-Length'] = contentLength;
    }

    return Object.assign(
      removeNullish(defaultHeaders),
      // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
      normalizeHeaders(userSuppliedHeaders)
    );
  }

  _getUserAgentString(apiMode: string): string {
    const packageVersion = this._stripe.getConstant('PACKAGE_VERSION');
    const appInfo = this._stripe._appInfo
      ? this._stripe.getAppInfoAsString()
      : '';

    return `Stripe/${apiMode} NodeBindings/${packageVersion} ${appInfo}`.trim();
  }

  _getTelemetryHeader(): string | undefined {
    if (
      this._stripe.getTelemetryEnabled() &&
      this._stripe._prevRequestMetrics.length > 0
    ) {
      const metrics = this._stripe._prevRequestMetrics.shift();
      return JSON.stringify({
        last_request_metrics: metrics,
      });
    }
  }

  _recordRequestMetrics(
    requestId: string,
    requestDurationMs: number,
    usage: Array<string>
  ): void {
    if (this._stripe.getTelemetryEnabled() && requestId) {
      if (
        this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric
      ) {
        emitWarning(
          'Request metrics buffer is full, dropping telemetry message.'
        );
      } else {
        const m: {
          request_id: string;
          request_duration_ms: number;
          usage?: Array<string>;
        } = {
          request_id: requestId,
          request_duration_ms: requestDurationMs,
        };
        if (usage && usage.length > 0) {
          m.usage = usage;
        }
        this._stripe._prevRequestMetrics.push(m);
      }
    }
  }

  _rawRequest(
    method: string,
    path: string,
    params?: RequestData,
    options?: RequestOptions,
    usage?: Array<string>
  ): Promise<any> {
    const requestPromise = new Promise<any>((resolve, reject) => {
      let opts: RequestOpts;
      try {
        const requestMethod = method.toUpperCase();
        if (
          requestMethod !== 'POST' &&
          params &&
          Object.keys(params).length !== 0
        ) {
          throw new Error(
            'rawRequest only supports params on POST requests. Please pass null and add your parameters to path.'
          );
        }
        const args: RequestArgs = [].slice.call([params, options]);

        // Pull request data and options (headers, auth) from args.
        const dataFromArgs = getDataFromArgs(args);
        const data =
          requestMethod === 'POST' ? Object.assign({}, dataFromArgs) : null;
        const calculatedOptions = getOptionsFromArgs(args);

        const headers = calculatedOptions.headers;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const authenticator: RequestAuthenticator = calculatedOptions.authenticator!;
        opts = {
          requestMethod,
          requestPath: path,
          bodyData: data,
          queryData: {},
          authenticator,
          headers,
          host: calculatedOptions.host,
          streaming: !!calculatedOptions.streaming,
          settings: {},
          // We use this for thin event internals, so we should record the more specific `usage`, when available
          usage: usage || ['raw_request'],
        };
      } catch (err) {
        reject(err);
        return;
      }

      function requestCallback(
        err: any,
        response: HttpClientResponseInterface
      ): void {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }

      const {headers, settings} = opts;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const authenticator: RequestAuthenticator = opts.authenticator!;

      this._request(
        opts.requestMethod,
        opts.host,
        path,
        opts.bodyData,
        authenticator,
        {headers, settings, streaming: opts.streaming},
        opts.usage,
        requestCallback
      );
    });

    return requestPromise;
  }

  _request(
    method: string,
    host: string | null,
    path: string,
    data: RequestData | null,
    authenticator: RequestAuthenticator,
    options: RequestOptions,
    usage: Array<string> = [],
    callback: RequestCallback,
    requestDataProcessor: RequestDataProcessor | null = null
  ): void {
    let requestData: string;
    authenticator = authenticator ?? this._stripe._authenticator ?? null;
    const apiMode: ApiMode = getAPIMode(path);
    const retryRequest = (
      requestFn: typeof makeRequest,
      apiVersion: string,
      headers: RequestHeaders,
      requestRetries: number,
      retryAfter: number | null
    ): NodeJS.Timeout => {
      return setTimeout(
        requestFn,
        this._getSleepTimeInMS(requestRetries, retryAfter),
        apiVersion,
        headers,
        requestRetries + 1
      );
    };

    const makeRequest = (
      apiVersion: string,
      headers: RequestHeaders,
      numRetries: number
    ): void => {
      // timeout can be set on a per-request basis. Favor that over the global setting
      const timeout =
        options.settings &&
        options.settings.timeout &&
        Number.isInteger(options.settings.timeout) &&
        options.settings.timeout >= 0
          ? options.settings.timeout
          : this._stripe.getApiField('timeout');

      const request = <StripeRequest>{
        host: host || this._stripe.getApiField('host'),
        port: this._stripe.getApiField('port'),
        path: path,
        method: method,
        headers: Object.assign({}, headers),
        body: requestData,
        protocol: this._stripe.getApiField('protocol'),
      };

      authenticator(request)
        .then(() => {
          const req = this._stripe
            .getApiField('httpClient')
            .makeRequest(
              request.host,
              request.port,
              request.path,
              request.method,
              request.headers,
              request.body,
              request.protocol,
              timeout
            );

          const requestStartTime = Date.now();

          const requestEvent: RequestEvent = removeNullish({
            api_version: apiVersion,
            account: parseHttpHeaderAsString(headers['Stripe-Account']),
            idempotency_key: parseHttpHeaderAsString(
              headers['Idempotency-Key']
            ),
            method,
            path,
            request_start_time: requestStartTime,
          });

          const requestRetries = numRetries || 0;

          const maxRetries = this._getMaxNetworkRetries(options.settings || {});
          this._stripe._emitter.emit('request', requestEvent);

          req
            .then((res: HttpClientResponseInterface) => {
              if (RequestSender._shouldRetry(res, requestRetries, maxRetries)) {
                return retryRequest(
                  makeRequest,
                  apiVersion,
                  headers,
                  requestRetries,
                  parseHttpHeaderAsNumber(res.getHeaders()['retry-after'])
                );
              } else if (options.streaming && res.getStatusCode() < 400) {
                return this._streamingResponseHandler(
                  requestEvent,
                  usage,
                  callback
                )(res);
              } else {
                return this._jsonResponseHandler(
                  requestEvent,
                  apiMode,
                  usage,
                  callback
                )(res);
              }
            })
            .catch((error: HttpClientResponseError) => {
              if (
                RequestSender._shouldRetry(
                  null,
                  requestRetries,
                  maxRetries,
                  error
                )
              ) {
                return retryRequest(
                  makeRequest,
                  apiVersion,
                  headers,
                  requestRetries,
                  null
                );
              } else {
                const isTimeoutError =
                  error.code && error.code === HttpClient.TIMEOUT_ERROR_CODE;

                return callback(
                  new StripeConnectionError({
                    message: isTimeoutError
                      ? `Request aborted due to timeout being reached (${timeout}ms)`
                      : RequestSender._generateConnectionErrorMessage(
                          requestRetries
                        ),
                    detail: error,
                  })
                );
              }
            });
        })
        .catch((e: any) => {
          throw new StripeError({
            message: 'Unable to authenticate the request',
            exception: e,
          });
        });
    };

    const prepareAndMakeRequest = (error: Error | null, data: string): void => {
      if (error) {
        return callback(error);
      }

      requestData = data;

      this._stripe.getClientUserAgent((clientUserAgent: string) => {
        const apiVersion = this._stripe.getApiField('version');
        const headers = this._makeHeaders({
          contentType:
            apiMode == 'v2'
              ? 'application/json'
              : 'application/x-www-form-urlencoded',
          contentLength: new TextEncoder().encode(requestData).length, // if we calculate this wrong, the server treats it as invalid json
          apiVersion: apiVersion,
          clientUserAgent,
          method,
          // other callers expect null, but .headers being optional means it's undefined if not supplied. So we normalize to null.
          userSuppliedHeaders: options.headers ?? null,
          userSuppliedSettings: options.settings ?? {},
          stripeAccount:
            options.stripeAccount ?? this._stripe.getApiField('stripeAccount'),
          stripeContext: this._normalizeStripeContext(
            options.stripeContext,
            this._stripe.getApiField('stripeContext')
          ),
          apiMode: apiMode,
        });

        makeRequest(apiVersion, headers, 0);
      });
    };

    if (requestDataProcessor) {
      requestDataProcessor(
        method,
        data,
        options.headers,
        prepareAndMakeRequest
      );
    } else {
      let stringifiedData: string;

      if (apiMode == 'v2') {
        stringifiedData = data ? jsonStringifyRequestData(data) : '';
      } else {
        stringifiedData = queryStringifyRequestData(data || {}, apiMode);
      }

      prepareAndMakeRequest(null, stringifiedData);
    }
  }
}
