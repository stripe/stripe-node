import Stripe = require('./stripe.common');
import nodeUtils = require('./nodeUtils');
import http = require('http');
import HttpClient = require('./net/HttpClient');

Stripe.safeExec = nodeUtils.safeExec;

Stripe.createNodeHttpClient = (agent: http.Agent): typeof HttpClient => {
  const {NodeHttpClient} = require('./net/NodeHttpClient');
  return new NodeHttpClient(agent);
};

Stripe.createNodeCryptoProvider = (): StripeCryptoProvider => {
  const NodeCryptoProvider = require('./crypto/NodeCryptoProvider');
  return new NodeCryptoProvider();
};

module.exports = Stripe;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Stripe;
