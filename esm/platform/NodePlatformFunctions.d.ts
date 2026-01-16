/// <reference types="node" />
/// <reference types="node" />
import * as http from 'http';
import { CryptoProvider } from '../crypto/CryptoProvider.js';
import { EventEmitter } from 'events';
import { HttpClient, NodeHttpClientInterface } from '../net/HttpClient.js';
import { PlatformFunctions } from './PlatformFunctions.js';
import { MultipartRequestData, RequestData, BufferedFile } from '../Types.js';
/**
 * Specializes WebPlatformFunctions using APIs available in Node.js.
 */
export declare class NodePlatformFunctions extends PlatformFunctions {
    /** For mocking in tests */
    _exec: any;
    _UNAME_CACHE: Promise<string | null> | null;
    constructor();
    /** @override */
    uuid4(): string;
    /**
     * @override
     * Node's built in `exec` function sometimes throws outright,
     * and sometimes has a callback with an error,
     * depending on the type of error.
     *
     * This unifies that interface by resolving with a null uname
     * if an error is encountered.
     */
    getUname(): Promise<string | null>;
    /**
     * @override
     * Secure compare, from https://github.com/freewil/scmp
     */
    secureCompare(a: string, b: string): boolean;
    createEmitter(): EventEmitter;
    /** @override */
    tryBufferData(data: MultipartRequestData): Promise<RequestData | BufferedFile>;
    /** @override */
    createNodeHttpClient(agent?: http.Agent): NodeHttpClientInterface;
    /** @override */
    createDefaultHttpClient(): HttpClient;
    /** @override */
    createNodeCryptoProvider(): CryptoProvider;
    /** @override */
    createDefaultCryptoProvider(): CryptoProvider;
}
