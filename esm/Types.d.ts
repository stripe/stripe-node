/// <reference types="node" />
import { EventEmitter } from 'events';
import { HttpClientInterface, HttpClientResponseInterface } from './net/HttpClient.js';
import { HttpClientResponseError } from './RequestSender.js';
import { StripeContext } from './StripeContext.js';
import { StripeClient } from './stripe.core.js';
import { AppInfo } from './lib.js';
export type ApiMode = 'v1' | 'v2';
export type BufferedFile = {
    name: string;
    type: string;
    file: {
        data: Uint8Array;
    };
};
export type MethodSpec = {
    method: string;
    methodType?: string;
    urlParams?: Array<string>;
    path?: string;
    fullPath?: string;
    encode?: (data: RequestData) => RequestData;
    validator?: (data: RequestData, options: {
        headers: RequestHeaders;
    }) => void;
    headers?: Record<string, string>;
    streaming?: boolean;
    host?: string;
    transformResponseData?: (response: HttpClientResponseInterface) => any;
    usage?: Array<string>;
};
export type MultipartRequestData = RequestData | StreamingFile | BufferedFile;
export type RawErrorType = 'card_error' | 'invalid_request_error' | 'api_error' | 'idempotency_error' | 'rate_limit_error' | 'authentication_error' | 'invalid_grant' | 'temporary_session_expired';
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
export type RequestCallback = (this: void, error: Error | null, response?: any) => RequestCallbackReturn;
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
export type RequestOptions = {
    settings?: RequestSettings;
    streaming?: boolean;
    headers?: RequestHeaders;
    stripeContext?: string | StripeContext;
    /**
     * NOTE: prefer sending `stripeContext` instead of `stripeAccount` for new code. They're currently identical, but we will eventually discourage and (later) drop support for `stripeAccount`.
     */
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
export type RequestSettings = {
    timeout?: number;
    maxNetworkRetries?: number;
};
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
    file: {
        data: EventEmitter;
    };
};
export type StripeRawError = {
    message?: string;
    user_message?: string;
    type?: RawErrorType;
    headers?: {
        [header: string]: string;
    };
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
export type StripeResourceObject = {
    _stripe: StripeClient;
    basePath: UrlInterpolator;
    path: UrlInterpolator;
    resourcePath: string;
    createResourcePathWithSymbols: (path: string | null | undefined) => string;
    createFullPath: (interpolator: UrlInterpolator, urlData: RequestData) => string;
    initialize: (...args: Array<any>) => void;
    _joinUrlParts: (urlParts: string[]) => string;
    requestDataProcessor: null | RequestDataProcessor;
    _makeRequest(requestArgs: RequestArgs, spec: MethodSpec, overrideData: RequestData): Promise<any>;
    _getRequestOpts(requestArgs: RequestArgs, spec: MethodSpec, overrideData: RequestData): RequestOpts;
};
export type RequestDataProcessor = (method: string, data: RequestData | null, headers: RequestHeaders | undefined, prepareAndMakeRequest: (error: Error | null, data: string) => void) => void;
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
