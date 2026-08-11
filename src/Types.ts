/* eslint-disable camelcase */
// TODO(DEVSDK-3113): Remove EventEmitter from shared types in next major version.
// eslint-disable-next-line wintertc-compat
import {EventEmitter} from 'events';
import {
  HttpClientInterface,
  HttpClientResponseInterface,
} from './net/HttpClient.js';
import {HttpClientResponseError} from './RequestSender.js';
import {StripeContext} from './StripeContext.js';
import {Stripe} from './stripe.core.js';
import {AppInfo} from './lib.js';
// errorTypeImports: The beginning of the section generated from our OpenAPI spec
import {PaymentIntent} from './resources/PaymentIntents.js';
import {PaymentMethod} from './resources/PaymentMethods.js';
import {SetupIntent} from './resources/SetupIntents.js';
import {CustomerSource} from './resources/CustomerSources.js';
// errorTypeImports: The end of the section generated from our OpenAPI spec

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
  body?: RequestData;
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
  body?: Record<string, any> | string;
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
  // errorRawFields: The beginning of the section generated from our OpenAPI spec
  /**
   * For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://docs.stripe.com/declines#retrying-issuer-declines) if they provide one.
   */
  advice_code?: string;
  /**
   * For card errors, the ID of the failed charge.
   */
  charge?: string;
  /**
   * For some errors that could be handled programmatically, a short string indicating the [error code](https://docs.stripe.com/error-codes) reported.
   */
  code?: string;
  /**
   * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://docs.stripe.com/declines#issuer-declines) if they provide one.
   */
  decline_code?: string;
  /**
   * A URL to more information about the [error code](https://docs.stripe.com/error-codes) reported.
   */
  doc_url?: string;
  /**
   * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
   */
  message?: string;
  /**
   * For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchant by the card network on how to proceed with an error.
   */
  network_advice_code?: string;
  /**
   * For payments declined by the network, an alphanumeric code which indicates the reason the payment failed.
   */
  network_decline_code?: string;
  /**
   * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
   */
  param?: string;
  /**
   * The PaymentIntent object for errors returned on a request involving a PaymentIntent.
   */
  payment_intent?: PaymentIntent;
  /**
   * The PaymentMethod object for errors returned on a request involving a PaymentMethod.
   */
  payment_method?: PaymentMethod;
  /**
   * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
   */
  payment_method_type?: string;
  /**
   * A URL to the request log entry in your dashboard.
   */
  request_log_url?: string;
  /**
   * The SetupIntent object for errors returned on a request involving a SetupIntent.
   */
  setup_intent?: SetupIntent;
  /**
   * The CustomerSource object for errors returned on a request involving a CustomerSource.
   */
  source?: CustomerSource;
  /**
   * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
   */
  type?: RawErrorType;
  /**
   * The user message associated with the error.
   */
  user_message?: string;
  // errorRawFields: The end of the section generated from our OpenAPI spec
  headers?: {[header: string]: string};
  statusCode?: number;
  requestId?: string;
  detail?: string | Error | HttpClientResponseError;
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
  port?: string | number;
  maxNetworkRetries?: number;
  httpClient?: HttpClientInterface;
  stripeAccount?: string;
  stripeContext?: string | StripeContext;
  typescript?: boolean;
  telemetry?: boolean;
  emitEventBodies?: boolean;
  appInfo?: AppInfo;
};
