/* eslint-disable camelcase */
import {EventEmitter} from 'events';
import {
  HttpClientInterface,
  HttpClientResponseInterface,
} from './net/HttpClient.js';
import {PlatformFunctions} from './platform/PlatformFunctions.js';
import {HttpClientResponseError, RequestSender} from './RequestSender.js';
import {StripeContext} from './StripeContext.js';
import {Stripe} from './stripe.core.js';
import {AppInfo} from './lib.js';

export type ApiMode = 'v1' | 'v2';
export type BaseAddress = 'api' | 'files' | 'connect' | 'meter_events';
export const DEFAULT_BASE_ADDRESSES: Record<BaseAddress, string> = {
  api: 'api.stripe.com',
  files: 'files.stripe.com',
  connect: 'connect.stripe.com',
  meter_events: 'meter-events.stripe.com',
};
export type BufferedFile = {
  name: string;
  type: string;
  file: {data: Uint8Array};
};
export type V2RuntimeSchema =
  | {kind: 'int64_string'}
  | {kind: 'decimal_string'}
  | {kind: 'refObject'}
  | {kind: 'object'; fields: Record<string, V2RuntimeSchema>}
  | {kind: 'array'; element: V2RuntimeSchema}
  | {kind: 'nullable'; inner: V2RuntimeSchema};
export type MethodSpec = {
  method: string;
  methodType?: string;
  urlParams?: Array<string>;
  path?: string;
  fullPath?: string;
  encode?: (data: RequestData) => RequestData;
  validator?: (data: RequestData, options: {headers: RequestHeaders}) => void;
  headers?: Record<string, string>;
  streaming?: boolean;
  apiBase?: BaseAddress;
  transformResponseData?: (response: HttpClientResponseInterface) => any;
  usage?: Array<string>;
  requestSchema?: V2RuntimeSchema;
  responseSchema?: V2RuntimeSchema;
};
export type MultipartRequestData = RequestData | StreamingFile | BufferedFile;
// rawErrorTypeEnum: The beginning of the section generated from our OpenAPI spec
export type RawErrorType =
  | 'card_error'
  | 'invalid_request_error'
  | 'api_error'
  | 'idempotency_error'
  | 'rate_limit_error'
  | 'authentication_error'
  | 'invalid_grant'
  | 'invalid_client'
  | 'invalid_request'
  | 'invalid_scope'
  | 'unsupported_grant_type'
  | 'unsupported_response_type'
  | 'rate_limit'
  | 'temporary_session_expired';
// rawErrorTypeEnum: The end of the section generated from our OpenAPI spec
export type RequestArgs = Array<any>;
export type StripeRequest = {
  host: string;
  port: string;
  path: string;
  method: string;
  headers: RequestHeaders;
  body: string;
  protocol: string;
};
export type RequestAuthenticator = (request: StripeRequest) => Promise<void>;
export type RequestCallback = (
  this: void,
  error: Error | null,
  response?: any
) => RequestCallbackReturn;
export type RequestCallbackReturn = any;
export type RequestData = Record<string, any>;
export type RequestEvent = {
  api_version?: string;
  account?: string;
  idempotency_key?: string;
  method?: string;
  path?: string;
  request_start_time: number;
  usage?: Array<string>;
};
export type RequestHeaders = Record<string, string | number | string[]>;
/**
 * this is similar but distinct from the user-facing `RequestOptions`
 */
export type InternalRequestOptions = {
  settings?: RequestSettings;
  streaming?: boolean;
  headers?: RequestHeaders;
  stripeContext?: string | StripeContext;
  stripeAccount?: string;
};
export type RequestOpts = {
  authenticator: RequestAuthenticator | null;
  requestMethod: string;
  requestPath: string;
  bodyData: RequestData | null;
  queryData: RequestData;
  headers: RequestHeaders;
  host: string | null;
  streaming: boolean;
  settings: RequestSettings;
  usage: Array<string>;
};
export type RequestSettings = {timeout?: number; maxNetworkRetries?: number};
export type ResponseEvent = {
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
export type ResponseHeaderValue = string | string[];
export type ResponseHeaders = Record<string, ResponseHeaderValue>;
export type StreamingFile = {
  name: string;
  type: string;
  file: {data: EventEmitter};
};
export type StripeRawError = {
  message?: string;
  user_message?: string;
  type?: RawErrorType;
  headers?: {[header: string]: string};
  statusCode?: number;
  requestId?: string;
  code?: string;
  doc_url?: string;
  decline_code?: string;
  param?: string;
  detail?: string | Error | HttpClientResponseError;
  charge?: string;
  payment_method_type?: string;
  payment_intent?: any;
  payment_method?: any;
  setup_intent?: any;
  source?: any;
  exception?: any;
};
/**
 * Stripe-generated ways to affect how a request works.
 */
export type MakeRequestSpec = {
  methodType?: 'search' | 'list';
  streaming?: boolean;
  validator?: (data: RequestData, options: {headers: RequestHeaders}) => void;
  headers?: Record<string, string>;
  apiBase?: BaseAddress;
  encode?: (data: RequestData) => RequestData;
  usage?: Array<string>;
  requestSchema?: V2RuntimeSchema;
  responseSchema?: V2RuntimeSchema;
  transformResponseData?: (response: HttpClientResponseInterface) => any;
};
export type StripeResourceObject = {
  _stripe: Stripe;
  basePath: UrlInterpolator;
  path: UrlInterpolator;
  resourcePath: string;
  initialize: (...args: Array<any>) => void;
  requestDataProcessor: null | RequestDataProcessor;
  _makeRequest(
    method: string,
    path: string,
    params: RequestData | undefined,
    options: import('./lib.js').RequestOptions | undefined,
    spec?: MakeRequestSpec
  ): Promise<any>;
};
export type RequestDataProcessor = (
  method: string,
  data: RequestData | null,
  headers: RequestHeaders | undefined,
  prepareAndMakeRequest: (error: Error | null, data: string) => void
) => void;
export type UrlInterpolator = (params: Record<string, unknown>) => string;
export type UserProvidedConfig = {
  authenticator?: RequestAuthenticator;
  apiVersion?: string;
  protocol?: string;
  host?: string;
  httpAgent?: any;
  timeout?: number;
  port?: number;
  maxNetworkRetries?: number;
  httpClient?: HttpClientInterface;
  stripeAccount?: string;
  stripeContext?: string | StripeContext;
  typescript?: boolean;
  telemetry?: boolean;
  appInfo?: AppInfo;
};
