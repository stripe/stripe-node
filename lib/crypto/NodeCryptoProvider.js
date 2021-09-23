'use strict';

const crypto = require('crypto');

const CryptoProvider = require('./CryptoProvider');

/**
 * `CryptoProvider which uses the Node `crypto` package for its computations.
 */
class NodeCryptoProvider extends CryptoProvider {
  /** @override */
  computeHMACSignature(payload, secret) {
    return crypto
      .createHmac('sha256', secret)
      .update(payload, 'utf8')
      .digest('hex');
  }
}

module.exports = NodeCryptoProvider;
