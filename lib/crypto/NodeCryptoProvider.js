"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const CryptoProvider_1 = require("./CryptoProvider");
/**
 * `CryptoProvider which uses the Node `crypto` package for its computations.
 */
class NodeCryptoProvider extends CryptoProvider_1.default {
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
}
exports.default = NodeCryptoProvider;
