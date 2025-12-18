import { CryptoProvider } from './CryptoProvider.js';
/**
 * `CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
 *
 * This only supports asynchronous operations.
 */
export declare class SubtleCryptoProvider extends CryptoProvider {
    subtleCrypto: SubtleCrypto;
    constructor(subtleCrypto?: SubtleCrypto);
    /** @override */
    computeHMACSignature(payload: string, secret: string): string;
    /** @override */
    computeHMACSignatureAsync(payload: string, secret: string): Promise<string>;
    /** @override */
    computeSHA256Async(data: Uint8Array): Promise<Uint8Array>;
}
