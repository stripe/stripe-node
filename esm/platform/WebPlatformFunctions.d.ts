import { CryptoProvider } from '../crypto/CryptoProvider.js';
import { HttpClient, NodeHttpClientInterface } from '../net/HttpClient.js';
import { PlatformFunctions } from './PlatformFunctions.js';
import { StripeEmitter } from '../StripeEmitter.js';
import { MultipartRequestData, RequestData, BufferedFile } from '../Types.js';
/**
 * Specializes WebPlatformFunctions using APIs available in Web workers.
 */
export declare class WebPlatformFunctions extends PlatformFunctions {
    /** @override */
    getUname(): Promise<string | null>;
    /** @override */
    createEmitter(): StripeEmitter;
    /** @override */
    tryBufferData(data: MultipartRequestData): Promise<RequestData | BufferedFile>;
    /** @override */
    createNodeHttpClient(): NodeHttpClientInterface;
    /** @override */
    createDefaultHttpClient(): HttpClient;
    /** @override */
    createNodeCryptoProvider(): CryptoProvider;
    /** @override */
    createDefaultCryptoProvider(): CryptoProvider;
}
