/* eslint-disable camelcase */
type AppInfo = {name?: string} & Record<string, unknown>;
type BufferedFile = {name: string; type: string; file: {data: Uint8Array}};
type HttpClientResponseError = {code: string};
type MethodSpec = {
  method: string;
  methodType: string;
  urlParams: Array<string>;
  path?: string;
  fullPath?: string;
  encode: (data: RequestData) => RequestData;
  validator: (data: RequestData, options: {headers: RequestHeaders}) => void;
  headers: Record<string, string>;
  streaming?: boolean;
  host?: string;
  transformResponseData?: (response: HttpClientResponseInterface) => any;
};
type MultipartRequestData = RequestData | StreamingFile | BufferedFile;
type RawErrorType =
  | 'card_error'
  | 'invalid_request_error'
  | 'api_error'
  | 'idempotency_error'
  | 'rate_limit_error'
  | 'authentication_error'
  | 'invalid_grant';
type RequestArgs = Array<any>;
type RequestCallback = (
  this: void,
  error: Error | null,
  response?: any
) => RequestCallbackReturn;
type RequestCallbackReturn = any;
type RequestData = Record<string, any>;
type RequestEvent = {
  api_version?: string;
  account?: string;
  idempotency_key?: string;
  method?: string;
  path?: string;
  request_start_time: number;
};
type RequestHeaders = Record<string, string | number | string[]>;
type RequestOptions = {
  settings?: RequestSettings;
  streaming?: boolean;
  headers?: RequestHeaders;
};
type RequestOpts = {
  requestMethod: string;
  requestPath: string;
  bodyData: RequestData;
  queryData: RequestData;
  auth: string | null;
  headers: RequestHeaders;
  host: string | null;
  streaming: boolean;
  settings: RequestSettings;
};
type RequestSettings = {timeout?: number; maxNetworkRetries?: number};
type ResponseEvent = {
  api_version?: string;
  account?: string;
  idempotency_key?: string;
  method?: string;
  path?: string;
  status?: number;
  request_id?: string;
  elapsed: number;
  request_start_time?: number;
  request_end_time?: number;
};
type ResponseHeaderValue = string | string[];
type ResponseHeaders = Record<string, ResponseHeaderValue>;
interface HttpClientResponseInterface {
  getStatusCode: () => number;
  getHeaders: () => ResponseHeaders;
  getRawResponse: () => unknown;
  toStream: (streamCompleteCallback: () => void) => unknown;
  toJSON: () => Promise<any>;
}
type StreamingFile = {
  name: string;
  type: string;
  file: {data: import('events').EventEmitter};
};
type StripeConstructor = {
  new (key: string, config: Record<string, unknown>): StripeObject;
};
declare const Stripe: StripeConstructor;
interface HttpClientInterface {
  getClientName: () => string;
  makeRequest: (
    host: string,
    port: string,
    path: string,
    method: string,
    headers: RequestHeaders,
    requestData: RequestData,
    protocol: string,
    timeout: number
  ) => Promise<HttpClientResponseInterface>;
}
type StripeObject = {
  getClientUserAgentSeeded: (
    seed: Record<string, string | boolean | null>,
    callback: (userAgent: string) => void
  ) => void;
  getClientUserAgent: (callback: (clientUserAgent: string) => void) => void;
  getTelemetryEnabled: () => boolean;
  getAppInfoAsString: () => string;
  getInitialNetworkRetryDelay: () => number;
  getMaxNetworkRetryDelay: () => number;
  getMaxNetworkRetries: () => number;
  getConstant: <T = string>(name: string) => T;
  _setApiField: <K extends keyof StripeObject['_api']>(
    name: K,
    value: StripeObject['_api'][K]
  ) => void;
  getApiField: <K extends keyof StripeObject['_api']>(
    key: K
  ) => StripeObject['_api'][K];
  _setApiNumberField: (name: string, value: number) => unknown;
  _appInfo: any;
  on: any;
  off: any;
  once: any;
  VERSION: string;
  StripeResource: typeof StripeResource;
  errors: any;
  webhooks: any;
  _prepResources: () => void;
  _setAppInfo: (appInfo: AppInfo) => void;
  _setApiKey: (apiKey: string) => void;
  _prevRequestMetrics: Array<{
    request_id: string;
    request_duration_ms: number;
  }>;
  _api: {
    auth: string | null;
    host: string;
    port: string | number;
    protocol: string;
    basePath: string;
    version: string;
    timeout: number;
    maxNetworkRetries: number;
    agent: string;
    httpClient: any;
    dev: boolean;
    stripeAccount: string | null;
  };
  _emitter: import('events').EventEmitter;
  _enableTelemetry: boolean;
  _requestSender: RequestSender;
  _getPropsFromConfig: (config: Record<string, unknown>) => UserProvidedConfig;
  _clientId?: string;
  _platformFunctions: import('./platform/PlatformFunctions').PlatformFunctions;
};
type RequestSender = {
  _request(
    method: string,
    host: string | null,
    path: string,
    data: RequestData,
    auth: string | null,
    options: RequestOptions,
    callback: RequestCallback,
    requestDataProcessor: RequestDataProcessor | undefined
  ): void;
};
type StripeRawError = {
  message?: string;
  type?: RawErrorType;
  headers?: {[header: string]: string};
  statusCode?: number;
  requestId?: string;
  code?: string;
  doc_url?: string;
  decline_code?: string;
  param?: string;
  detail?: string | Error;
  charge?: string;
  payment_method_type?: string;
  payment_intent?: any;
  payment_method?: any;
  setup_intent?: any;
  source?: any;
  exception?: any;
};
type StripeResourceConstructor = {
  new (stripe: StripeObject, deprecatedUrlData?: never): StripeResourceObject;
};
declare const StripeResource: StripeResourceConstructor;
type StripeResourceNamespaceObject = Record<
  string,
  StripeResourceObject | unknown
>;
type StripeResourceObject = {
  _stripe: StripeObject;
  basePath: UrlInterpolator;
  path: UrlInterpolator;
  resourcePath: string;
  createResourcePathWithSymbols: (path: string | null | undefined) => string;
  createFullPath: (
    interpolator: UrlInterpolator,
    urlData: RequestData
  ) => string;
  initialize: (...args: Array<any>) => void;
  _joinUrlParts: (urlParts: string[]) => string;
  requestDataProcessor: null | RequestDataProcessor;
  _makeRequest(
    requestArgs: RequestArgs,
    spec: MethodSpec,
    overrideData: RequestData
  ): Promise<any>;
  _getRequestOpts(
    requestArgs: RequestArgs,
    spec: MethodSpec,
    overrideData: RequestData
  ): RequestOpts;
};
type RequestDataProcessor = (
  method: string,
  data: RequestData,
  headers: RequestHeaders | undefined,
  prepareAndMakeRequest: (error: Error | null, data: string) => void
) => void;
type UrlInterpolator = (params: Record<string, unknown>) => string;
type UserProvidedConfig = {
  apiVersion?: string;
  protocol?: string;
  host?: string;
  httpAgent?: any;
  timeout?: number;
  port?: number;
  maxNetworkRetries?: number;
  httpClient?: HttpClientInterface;
  stripeAccount?: string;
  typescript?: boolean;
  telemetry?: boolean;
  appInfo?: AppInfo;
};
