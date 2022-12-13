'use strict';
const utils = require('./utils');
utils.crypto = require('crypto');
const _Stripe = require('./stripe.common');
const {HttpClient} = require('./net/HttpClient');
// The following property setting involves Node-specific dependencies.
// If these dependencies are unavailable, stripe.worker.js
// should be used as the main entrypoint.
_Stripe.utils = utils;
_Stripe.createNodeHttpClient = (agent) => {
  const {NodeHttpClient} = require('./net/NodeHttpClient');
  return new NodeHttpClient(agent);
};
/**
 * Create a CryptoProvider which uses the built-in Node crypto libraries for
 * its crypto operations.
 */
_Stripe.createNodeCryptoProvider = () => {
  const NodeCryptoProvider = require('./crypto/NodeCryptoProvider');
  return new NodeCryptoProvider();
};
module.exports = _Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = _Stripe;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = _Stripe;
