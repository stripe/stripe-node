import { RequestHeaders, ResponseHeaders } from '../Types.js';
type TimeoutError = TypeError & {
    code?: string;
};
export interface HttpClientInterface {
    getClientName: () => string;
    makeRequest: (host: string, port: string, path: string, method: string, headers: RequestHeaders, requestData: string, protocol: string, timeout: number) => Promise<HttpClientResponseInterface>;
}
export interface HttpClientResponseInterface {
    getStatusCode: () => number;
    getHeaders: () => ResponseHeaders;
    getRawResponse: () => unknown;
    toStream: (streamCompleteCallback: () => void) => unknown;
    toJSON: () => Promise<any>;
}
/**
 * Encapsulates the logic for issuing a request to the Stripe API.
 *
 * A custom HTTP client should should implement:
 * 1. A response class which extends HttpClientResponse and wraps around their
 *    own internal representation of a response.
 * 2. A client class which extends HttpClient and implements all methods,
 *    returning their own response class when making requests.
 */
export declare class HttpClient implements HttpClientInterface {
    static CONNECTION_CLOSED_ERROR_CODES: string[];
    static TIMEOUT_ERROR_CODE: string;
    /** The client name used for diagnostics. */
    getClientName(): string;
    makeRequest(host: string, port: string, path: string, method: string, headers: RequestHeaders, requestData: string, protocol: string, timeout: number): Promise<HttpClientResponseInterface>;
    /** Helper to make a consistent timeout error across implementations. */
    static makeTimeoutError(): TimeoutError;
}
export declare class HttpClientResponse implements HttpClientResponseInterface {
    _statusCode: number;
    _headers: ResponseHeaders;
    constructor(statusCode: number, headers: ResponseHeaders);
    getStatusCode(): number;
    getHeaders(): ResponseHeaders;
    getRawResponse(): unknown;
    toStream(streamCompleteCallback: () => void): unknown;
    toJSON(): any;
}
export {};
