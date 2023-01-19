"use strict";
const _Error = require("./Error");
const { StripeError, StripeSignatureVerificationError } = _Error;
const Webhook = {
    DEFAULT_TOLERANCE: 300,
    // @ts-ignore
    signature: null,
    constructEvent(payload, header, secret, tolerance, cryptoProvider) {
        this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider);
        const jsonPayload = payload instanceof Uint8Array
            ? JSON.parse(new TextDecoder('utf8').decode(payload))
            : JSON.parse(payload);
        return jsonPayload;
    },
    async constructEventAsync(payload, header, secret, tolerance, cryptoProvider) {
        await this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider);
        const jsonPayload = payload instanceof Uint8Array
            ? JSON.parse(new TextDecoder('utf8').decode(payload))
            : JSON.parse(payload);
        return jsonPayload;
    },
    /**
     * Generates a header to be used for webhook mocking
     *
     * @typedef {object} opts
     * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
     * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
     * @property {string} secret - Stripe webhook secret 'whsec_...'
     * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
     * @property {string} signature - Computed webhook signature
     * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
     */
    generateTestHeaderString: function (opts) {
        if (!opts) {
            throw new StripeError({
                message: 'Options are required',
            });
        }
        opts.timestamp =
            Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
        opts.scheme = opts.scheme || signature.EXPECTED_SCHEME;
        opts.cryptoProvider = opts.cryptoProvider || getCryptoProvider();
        opts.signature =
            opts.signature ||
                opts.cryptoProvider.computeHMACSignature(opts.timestamp + '.' + opts.payload, opts.secret);
        const generatedHeader = [
            't=' + opts.timestamp,
            opts.scheme + '=' + opts.signature,
        ].join(',');
        return generatedHeader;
    },
    _createCryptoProvider: () => null,
    _platformFunctions: null,
};
const signature = {
    EXPECTED_SCHEME: 'v1',
    verifyHeader(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider) {
        const { decodedHeader: header, decodedPayload: payload, details, } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        cryptoProvider = cryptoProvider || getCryptoProvider();
        const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
        validateComputedSignature(payload, header, details, expectedSignature, tolerance);
        return true;
    },
    async verifyHeaderAsync(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider) {
        const { decodedHeader: header, decodedPayload: payload, details, } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        cryptoProvider = cryptoProvider || getCryptoProvider();
        const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
        return validateComputedSignature(payload, header, details, expectedSignature, tolerance);
    },
};
function makeHMACContent(payload, details) {
    return `${details.timestamp}.${payload}`;
}
function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
    const textDecoder = new TextDecoder('utf8');
    const decodedPayload = encodedPayload instanceof Uint8Array
        ? textDecoder.decode(encodedPayload)
        : encodedPayload;
    // Express's type for `Request#headers` is `string | []string`
    // which is because the `set-cookie` header is an array,
    // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
    // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
    if (Array.isArray(encodedHeader)) {
        throw new Error('Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.');
    }
    const decodedHeader = encodedHeader instanceof Uint8Array
        ? textDecoder.decode(encodedHeader)
        : encodedHeader;
    const details = parseHeader(decodedHeader, expectedScheme);
    if (!details || details.timestamp === -1) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
            message: 'Unable to extract timestamp and signatures from header',
        });
    }
    if (!details.signatures.length) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
            message: 'No signatures found with expected scheme',
        });
    }
    return {
        decodedPayload,
        decodedHeader,
        details,
    };
}
function validateComputedSignature(payload, header, details, expectedSignature, tolerance) {
    const signatureFound = !!details.signatures.filter(Webhook._platformFunctions.secureCompare.bind(Webhook._platformFunctions, expectedSignature)).length;
    if (!signatureFound) {
        // @ts-ignore
        throw new StripeSignatureVerificationError(header, payload, {
            message: 'No signatures found matching the expected signature for payload.' +
                ' Are you passing the raw request body you received from Stripe?' +
                ' https://github.com/stripe/stripe-node#webhook-signing',
        });
    }
    const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;
    if (tolerance > 0 && timestampAge > tolerance) {
        // @ts-ignore
        throw new StripeSignatureVerificationError(header, payload, {
            message: 'Timestamp outside the tolerance zone',
        });
    }
    return true;
}
function parseHeader(header, scheme) {
    if (typeof header !== 'string') {
        return null;
    }
    return header.split(',').reduce((accum, item) => {
        const kv = item.split('=');
        if (kv[0] === 't') {
            accum.timestamp = parseInt(kv[1], 10);
        }
        if (kv[0] === scheme) {
            accum.signatures.push(kv[1]);
        }
        return accum;
    }, {
        timestamp: -1,
        signatures: [],
    });
}
let webhooksCryptoProviderInstance = null;
/**
 * Lazily instantiate a CryptoProvider instance. This is a stateless object
 * so a singleton can be used here.
 */
function getCryptoProvider() {
    if (!webhooksCryptoProviderInstance) {
        webhooksCryptoProviderInstance = Webhook._createCryptoProvider();
    }
    return webhooksCryptoProviderInstance;
}
Webhook.signature = signature;
module.exports = Webhook;
