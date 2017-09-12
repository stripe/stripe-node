const crypto = require('crypto');

const utils = require('./utils');
const Error = require('./Error');

var Webhook = {
  DEFAULT_TOLERANCE: 300,

  constructEvent(payload, header, secret, tolerance) {
    const jsonPayload = JSON.parse(payload);

    this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE);

    return jsonPayload;
  },
};

const signature = {
  EXPECTED_SCHEME: 'v1',

  _computeSignature(payload, secret) {
    return crypto.createHmac('sha256', secret)
      .update(payload, 'utf8')
      .digest('hex');
  },

  verifyHeader(payload, header, secret, tolerance) {
    const details = parseHeader(header, this.EXPECTED_SCHEME);

    if (!details || details.timestamp === -1) {
      throw new Error.StripeSignatureVerificationError({
        message: 'Unable to extract timestamp and signatures from header',
        detail: {
          header,
          payload,
        },
      });
    }

    if (!details.signatures.length) {
      throw new Error.StripeSignatureVerificationError({
        message: 'No signatures found with expected scheme',
        detail: {
          header,
          payload,
        },
      });
    }

    const expectedSignature = this._computeSignature(`${details.timestamp}.${payload}`, secret);

    const signatureFound = !!details.signatures
      .filter(utils.secureCompare.bind(utils, expectedSignature))
      .length;

    if (!signatureFound) {
      throw new Error.StripeSignatureVerificationError({
        message: 'No signatures found matching the expected signature for payload',
        detail: {
          header,
          payload,
        },
      });
    }

    const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;

    if (tolerance > 0 && timestampAge > tolerance) {
      throw new Error.StripeSignatureVerificationError({
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

  return header.split(',').reduce((accum, item) => {
    const kv = item.split('=');

    if (kv[0] === 't') {
      accum.timestamp = kv[1];
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

Webhook.signature = signature;

module.exports = Webhook;
