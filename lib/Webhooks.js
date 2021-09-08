'use strict';

const utils = require('./utils');
const {StripeError, StripeSignatureVerificationError} = require('./Error');

const Webhook = {
  DEFAULT_TOLERANCE: 300, // 5 minutes

  constructEvent(payload, header, secret, tolerance, cryptoProvider) {
    this.signature.verifyHeader(
      payload,
      header,
      secret,
      tolerance || Webhook.DEFAULT_TOLERANCE,
      cryptoProvider
    );

    const jsonPayload = JSON.parse(payload);
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
  generateTestHeaderString: function(opts) {
    if (!opts) {
      throw new StripeError({
        message: 'Options are required',
      });
    }

    opts.timestamp =
      Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
    opts.scheme = opts.scheme || signature.EXPECTED_SCHEME;

    opts.cryptoProvider = opts.cryptoProvider || getNodeCryptoProvider();

    opts.signature =
      opts.signature ||
      opts.cryptoProvider.computeHMACSignature(
        opts.timestamp + '.' + opts.payload,
        opts.secret
      );

    const generatedHeader = [
      't=' + opts.timestamp,
      opts.scheme + '=' + opts.signature,
    ].join(',');

    return generatedHeader;
  },
};

const signature = {
  EXPECTED_SCHEME: 'v1',

  verifyHeader(payload, header, secret, tolerance, cryptoProvider) {
    payload = Buffer.isBuffer(payload) ? payload.toString('utf8') : payload;

    // Express's type for `Request#headers` is `string | []string`
    // which is because the `set-cookie` header is an array,
    // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
    // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
    if (Array.isArray(header)) {
      throw new Error(
        'Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.'
      );
    }

    header = Buffer.isBuffer(header) ? header.toString('utf8') : header;

    const details = parseHeader(header, this.EXPECTED_SCHEME);

    if (!details || details.timestamp === -1) {
      throw new StripeSignatureVerificationError({
        message: 'Unable to extract timestamp and signatures from header',
        detail: {
          header,
          payload,
        },
      });
    }

    if (!details.signatures.length) {
      throw new StripeSignatureVerificationError({
        message: 'No signatures found with expected scheme',
        detail: {
          header,
          payload,
        },
      });
    }

    cryptoProvider = cryptoProvider || getNodeCryptoProvider();
    const expectedSignature = cryptoProvider.computeHMACSignature(
      `${details.timestamp}.${payload}`,
      secret
    );

    const signatureFound = !!details.signatures.filter(
      utils.secureCompare.bind(utils, expectedSignature)
    ).length;

    if (!signatureFound) {
      throw new StripeSignatureVerificationError({
        message:
          'No signatures found matching the expected signature for payload.' +
          ' Are you passing the raw request body you received from Stripe?' +
          ' https://github.com/stripe/stripe-node#webhook-signing',
        detail: {
          header,
          payload,
        },
      });
    }

    const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;

    if (tolerance > 0 && timestampAge > tolerance) {
      throw new StripeSignatureVerificationError({
        message: 'Timestamp outside the tolerance zone',
        detail: {
          header,
          payload,
        },
      });
    }

    return true;
  },
};

function parseHeader(header, scheme) {
  if (typeof header !== 'string') {
    return null;
  }

  return header.split(',').reduce(
    (accum, item) => {
      const kv = item.split('=');

      if (kv[0] === 't') {
        accum.timestamp = kv[1];
      }

      if (kv[0] === scheme) {
        accum.signatures.push(kv[1]);
      }

      return accum;
    },
    {
      timestamp: -1,
      signatures: [],
    }
  );
}

let webhooksNodeCryptoProviderInstance = null;

/**
 * Lazily instantiate a NodeCryptoProvider instance. This is a stateless object
 * so a singleton can be used here.
 */
function getNodeCryptoProvider() {
  if (!webhooksNodeCryptoProviderInstance) {
    const NodeCryptoProvider = require('./crypto/NodeCryptoProvider');
    webhooksNodeCryptoProviderInstance = new NodeCryptoProvider();
  }
  return webhooksNodeCryptoProviderInstance;
}

Webhook.signature = signature;

module.exports = Webhook;
