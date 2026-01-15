import { RequestHeaders, RequestEvent, ResponseEvent, RequestCallback, RequestCallbackReturn, RequestData, RequestDataProcessor, RequestOptions, RequestSettings, RequestAuthenticator, ApiMode } from './Types.js';
import { HttpClientResponseInterface } from './net/HttpClient.js';
import { Stripe } from './stripe.core.js';
export type HttpClientResponseError = {
    code: string;
};
export declare class RequestSender {
    protected _stripe: Stripe;
    private readonly _maxBufferedRequestMetric;
    constructor(stripe: Stripe, maxBufferedRequestMetric: number);
    private _normalizeStripeContext;
    _addHeadersDirectlyToObject(obj: any, headers: RequestHeaders): void;
    _makeResponseEvent(requestEvent: RequestEvent, statusCode: number, headers: RequestHeaders): ResponseEvent;
    _getRequestId(headers: RequestHeaders): string;
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
    _streamingResponseHandler(requestEvent: RequestEvent, usage: Array<string>, callback: RequestCallback): (res: HttpClientResponseInterface) => RequestCallbackReturn;
    /**
     * Default handler for Stripe responses. Buffers the response into memory,
     * parses the JSON and returns it (i.e. passes it to the callback) if there
     * is no "error" field. Otherwise constructs/passes an appropriate Error.
     */
    _jsonResponseHandler(requestEvent: RequestEvent, apiMode: 'v1' | 'v2', usage: Array<string>, callback: RequestCallback): (res: HttpClientResponseInterface) => void;
    static _generateConnectionErrorMessage(requestRetries: number): string;
    static _shouldRetry(res: null | HttpClientResponseInterface, numRetries: number, maxRetries: number, error?: HttpClientResponseError): boolean;
    _getSleepTimeInMS(numRetries: number, retryAfter?: number | null): number;
    _getMaxNetworkRetries(settings?: RequestSettings): number;
    _defaultIdempotencyKey(method: string, settings: RequestSettings, apiMode: ApiMode): string | null;
    _makeHeaders({ contentType, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings, stripeAccount, stripeContext, apiMode, }: {
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
    }): RequestHeaders;
    _getUserAgentString(apiMode: string): string;
    _getTelemetryHeader(): string | undefined;
    _recordRequestMetrics(requestId: string, requestDurationMs: number, usage: Array<string>): void;
    _rawRequest(method: string, path: string, params?: RequestData, options?: RequestOptions, usage?: Array<string>): Promise<any>;
    _getContentLength(data: string | Uint8Array): number;
    _request(method: string, host: string | null, path: string, data: RequestData | null, authenticator: RequestAuthenticator | null, options: RequestOptions, usage: string[] | undefined, callback: RequestCallback, requestDataProcessor?: RequestDataProcessor | null): void;
}
