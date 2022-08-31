'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const CryptoProvider = require('./CryptoProvider');
/**
 * `CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
 *
 * This only supports asynchronous operations.
 */
class SubtleCryptoProvider extends CryptoProvider {
    constructor(subtleCrypto) {
        super();
        // If no subtle crypto is interface, default to the global namespace. This
        // is to allow custom interfaces (eg. using the Node webcrypto interface in
        // tests).
        this.subtleCrypto = subtleCrypto || crypto.subtle;
    }
    /** @override */
    computeHMACSignature(payload, secret) {
        throw new Error('SubtleCryptoProvider cannot be used in a synchronous context.');
    }
    /** @override */
    computeHMACSignatureAsync(payload, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoder = new TextEncoder('utf-8');
            const key = yield this.subtleCrypto.importKey('raw', encoder.encode(secret), {
                name: 'HMAC',
                hash: { name: 'SHA-256' },
            }, false, ['sign']);
            const signatureBuffer = yield this.subtleCrypto.sign('hmac', key, encoder.encode(payload));
            // crypto.subtle returns the signature in base64 format. This must be
            // encoded in hex to match the CryptoProvider contract. We map each byte in
            // the buffer to its corresponding hex octet and then combine into a string.
            const signatureBytes = new Uint8Array(signatureBuffer);
            const signatureHexCodes = new Array(signatureBytes.length);
            for (let i = 0; i < signatureBytes.length; i++) {
                signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
            }
            return signatureHexCodes.join('');
        });
    }
}
// Cached mapping of byte to hex representation. We do this once to avoid re-
// computing every time we need to convert the result of a signature to hex.
const byteHexMapping = new Array(256);
for (let i = 0; i < byteHexMapping.length; i++) {
    byteHexMapping[i] = i.toString(16).padStart(2, '0');
}
module.exports = SubtleCryptoProvider;
