/// <reference types="node" />
/// <reference types="node" />
import * as http_ from 'http';
import * as https_ from 'https';
import { RequestHeaders } from '../Types.js';
import { HttpClient, HttpClientResponse, HttpClientResponseInterface } from './HttpClient.js';
/**
 * HTTP client which uses the Node `http` and `https` packages to issue
 * requests.`
 */
export declare class NodeHttpClient extends HttpClient {
    _agent?: http_.Agent | https_.Agent | undefined;
    constructor(agent?: http_.Agent | https_.Agent);
    /** @override. */
    getClientName(): string;
    makeRequest(host: string, port: string, path: string, method: string, headers: RequestHeaders, requestData: string, protocol: string, timeout: number): Promise<HttpClientResponseInterface>;
}
export declare class NodeHttpClientResponse extends HttpClientResponse implements HttpClientResponseInterface {
    _res: http_.IncomingMessage;
    constructor(res: http_.IncomingMessage);
    getRawResponse(): http_.IncomingMessage;
    toStream(streamCompleteCallback: () => void): http_.IncomingMessage;
    toJSON(): any;
}
