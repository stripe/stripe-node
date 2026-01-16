import { RequestHeaders, ResponseHeaders } from '../Types.js';
import { HttpClient, HttpClientResponse, FetchHttpClientInterface, FetchHttpClientResponseInterface } from './HttpClient.js';
/**
 * HTTP client which uses a `fetch` function to issue requests.
 *
 * By default relies on the global `fetch` function, but an optional function
 * can be passed in. If passing in a function, it is expected to match the Web
 * Fetch API. As an example, this could be the function provided by the
 * node-fetch package (https://github.com/node-fetch/node-fetch).
 */
export declare class FetchHttpClient extends HttpClient implements FetchHttpClientInterface {
    private readonly _fetchFn;
    constructor(fetchFn?: typeof fetch);
    private static makeFetchWithRaceTimeout;
    private static makeFetchWithAbortTimeout;
    /** @override. */
    getClientName(): string;
    makeRequest(host: string, port: string, path: string, method: string, headers: RequestHeaders, requestData: string, protocol: string, timeout: number): Promise<FetchHttpClientResponseInterface>;
}
export declare class FetchHttpClientResponse extends HttpClientResponse implements FetchHttpClientResponseInterface {
    _res: Response;
    constructor(res: Response);
    getRawResponse(): Response;
    toStream(streamCompleteCallback: () => void): ReadableStream<Uint8Array>;
    toJSON(): Promise<any>;
    static _transformHeadersToObject(headers: Headers): ResponseHeaders;
}
