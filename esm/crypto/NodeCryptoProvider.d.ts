import { CryptoProvider } from './CryptoProvider.js';
/**
 * `CryptoProvider which uses the Node `crypto` package for its computations.
 */
export declare class NodeCryptoProvider extends CryptoProvider {
    /** @override */
    computeHMACSignature(payload: string, secret: string): string;
    /** @override */
    computeHMACSignatureAsync(payload: string, secret: string): Promise<string>;
    /** @override */
    computeSHA256Async(data: Uint8Array): Promise<Uint8Array>;
}
