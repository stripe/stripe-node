"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stripe = require("./stripe.common");
const NodePlatformFunctions = require("./platform/NodePlatformFunctions");
Stripe._platformFunctions = new NodePlatformFunctions();
Stripe.webhooks._platformFunctions = Stripe._platformFunctions;
const createNodeHttpClient = (agent) => {
    const { NodeHttpClient } = require('./net/NodeHttpClient');
    return new NodeHttpClient(agent);
};
Stripe.createNodeHttpClient = createNodeHttpClient;
Stripe.createHttpClient = createNodeHttpClient;
const createNodeCryptoProvider = () => {
    const NodeCryptoProvider = require('./crypto/NodeCryptoProvider');
    return new NodeCryptoProvider();
};
Stripe.createNodeCryptoProvider = createNodeCryptoProvider;
Stripe.webhooks._createCryptoProvider = createNodeCryptoProvider;
module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Stripe;
