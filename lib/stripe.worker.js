"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stripe = require("./stripe.common");
Stripe.createHttpClient = Stripe.createFetchHttpClient;
Stripe.webhooks._createCryptoProvider = Stripe.createSubtleCryptoProvider;
module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Stripe;
