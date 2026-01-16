/// <reference types="node" />
/// <reference types="node" />
import * as http from 'http';
import { CryptoProvider } from '../crypto/CryptoProvider.js';
import { EventEmitter } from 'events';
import { HttpClient, NodeHttpClientInterface, FetchHttpClientInterface } from '../net/HttpClient.js';
import { StripeEmitter } from '../StripeEmitter.js';
import { MultipartRequestData, RequestData, BufferedFile } from '../Types.js';
/**
 * Interface encapsulating various utility functions whose
 * implementations depend on the platform / JS runtime.
 */
export declare class PlatformFunctions {
    _fetchFn: any | null;
    _agent: http.Agent | null;
    constructor();
    /**
     * Gets uname with Node's built-in `exec` function, if available.
     */
    getUname(): Promise<string | null>;
    /**
     * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
     */
    uuid4(): string;
    /**
     * Compares strings in constant time.
     */
    secureCompare(a: string, b: string): boolean;
    /**
     * Creates an event emitter.
     */
    createEmitter(): StripeEmitter | EventEmitter;
    /**
     * Checks if the request data is a stream. If so, read the entire stream
     * to a buffer and return the buffer.
     */
    tryBufferData(data: MultipartRequestData): Promise<RequestData | BufferedFile>;
    /**
     * Creates an HTTP client which uses the Node `http` and `https` packages
     * to issue requests.
     */
    createNodeHttpClient(agent?: http.Agent): NodeHttpClientInterface;
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */
    createFetchHttpClient(fetchFn?: typeof fetch): FetchHttpClientInterface;
    /**
     * Creates an HTTP client using runtime-specific APIs.
     */
    createDefaultHttpClient(): HttpClient;
    /**
     * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
     */
    createNodeCryptoProvider(): CryptoProvider;
    /**
     * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
     */
    createSubtleCryptoProvider(subtleCrypto?: typeof crypto.subtle): CryptoProvider;
    createDefaultCryptoProvider(): CryptoProvider;
}
