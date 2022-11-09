/* eslint-disable camelcase */
type StripeObject = {
  on: any;
  off: any;
  once: any;
  VERSION: string;
  StripeResource: StripeResourceObject;
  errors: any;
  webhooks: any;
  getApiField: <T = string>(name: string) => T;
  _prepResources: () => void;
  _setAppInfo: (appInfo: AppInfo) => void;
  _setApiKey: (apiKey: string) => void;
  _prevRequestMetrics: number[];
  _api: {
    auth: string;
    host: string;
    port: string | number;
    protocol: string;
    basePath: string;
    version: string;
    timeout: string;
    maxNetworkRetries: number;
    agent: string;
    httpClient: any;
    dev: boolean;
    stripeAccount: string;
  };
  _emitter: import('events').EventEmitter;
  _enableTelemetry: boolean;
  _getPropsFromConfig: (config: Record<string, unknown>) => UserProvidedConfig;
};
type StripeResourceObject = {
  createResourcePathWithSymbols: (path: string) => string;
  createFullPath: (
    interpolator: UrlInterpolator,
    urlData: RequestData
  ) => string;
  _request: (
    method: string,
    host: string,
    path: string,
    data: RequestData,
    auth: string,
    options: RequestOptions,
    callback: RequestCallback
  ) => void;
};
type RequestCallbackReturn = any;
type RequestCallback = (
  this: StripeResourceObject | void,
  error: Error,
  response?: any
) => RequestCallbackReturn;

type RequestEvent = {
  api_version?: string;
  account?: string;
  idempotency_key?: string;
  method?: string;
  path?: string;
  request_start_time?: number;
};

type ResponseEvent = {
  api_version?: string;
  account?: string;
  idempotency_key?: string;
  method?: string;
  path?: string;
  status?: number;
  request_id?: string;
  elapsed?: number;
  request_start_time?: number;
  request_end_time?: number;
};
type RequestOptions = {
  settings?: RequestSettings;
  streaming?: boolean;
  headers?: RequestHeaders;
};
type RequestSettings = {
  timeout?: number;
  maxNetworkRetries?: number;
};
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
type HttpHeaderValue = string | number | string[];
type RequestHeaders = Record<string, string | number | string[]>;
type RequestData = Record<string, unknown>;
type MultipartRequestData = RequestData | StreamingFile | BufferedFile;

type BufferedFile = {
  name: string;
  type: string;
  file: {
    data: Buffer;
  };
};

type StreamingFile = {
  name: string;
  type: string;
  file: {
    data: import('events').EventEmitter;
  };
};
type RequestArgs = Array<any>;
type UrlInterpolator = (params: Record<string, unknown>) => string;
type AppInfo = {
  name?: string;
} & Record<string, unknown>;
type StripeResourceNamespaceObject = Record<
  string,
  StripeResourceObject | unknown
>;
type MethodSpec = {
  method: string;
  methodType: string;
  urlParams: Array<string>;
  path?: string;
  fullPath?: string;
  encode: (data: RequestData) => RequestData;
  validator: (data: RequestData, headers: RequestHeaders) => void;
  headers: Record<string, string>;
  streaming?: boolean;
  host?: string;
  transformResponseData?: (response: HttpClientResponseInterface) => any;
};
type RequestOpts = {
  requestMethod: string;
  requestPath: string;
  bodyData: RequestData;
  queryData: RequestData;
  auth: string;
  headers: RequestHeaders;
  host: string;
  streaming: boolean;
  settings: RequestSettings;
};
type StripeCryptoProvider = {
  computeHMACSignature: (data: string, secret: string) => string;
  computeHMACSignatureAsync: (data: string, secret: string) => Promise<string>;
};
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
type ResponseHeaderValue = string | string[];
type ResponseHeaders = Record<string, ResponseHeaderValue>;
interface HttpClientResponseInterface {
  getStatusCode: () => number;
  getHeaders: () => ResponseHeaders;
  getRawResponse: () => unknown;
  toStream: (streamCompleteCallback: () => void) => unknown;
  toJSON: () => Promise<any>;
}
type RawErrorType =
  | 'card_error'
  | 'invalid_request_error'
  | 'api_error'
  | 'idempotency_error'
  | 'rate_limit_error'
  | 'authentication_error'
  | 'invalid_grant';

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
  detail?: string;
  charge?: string;
  payment_method_type?: string;

  payment_intent?: any;
  payment_method?: any;
  setup_intent?: any;
  source?: any;
  exception?: any;
};
type IterationDoneCallback = () => void;
type IterationItemCallback = (
  item: any,
  next: any
) => void | boolean | Promise<void | boolean>;
type ListResult = {
  data: Array<any>;
  has_more: boolean;
};
type HttpClientResponseError = {
  code: number;
};
