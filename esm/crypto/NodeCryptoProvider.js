import * as crypto from 'crypto';
import { CryptoProvider } from './CryptoProvider.js';
/**
 * `CryptoProvider which uses the Node `crypto` package for its computations.
 */
export class NodeCryptoProvider extends CryptoProvider {
    /** @override */
    computeHMACSignature(payload, secret) {
        return crypto
            .createHmac('sha256', secret)
            .update(payload, 'utf8')
            .digest('hex');
    }
    /** @override */
    async computeHMACSignatureAsync(payload, secret) {
        const signature = await this.computeHMACSignature(payload, secret);
        return signature;
    }
    /** @override */
    async computeSHA256Async(data) {
        return new Uint8Array(await crypto
            .createHash('sha256')
            .update(data)
            .digest());
    }
}
