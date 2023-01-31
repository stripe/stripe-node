"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stripe = require("./stripe.common");
const StripeEmitter = require("./StripeEmitter");
Stripe.createHttpClient = Stripe.createFetchHttpClient;
Stripe.webhooks._createCryptoProvider = Stripe.createSubtleCryptoProvider;
// StripeEmitter uses the Event Web API. `Event` is not available
// in the global scope until Node 15, so we set `createEmitter` here
// to avoid reference errors.
Stripe._platformFunctions.createEmitter = () => {
    return new StripeEmitter(new EventTarget());
};
module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Stripe;
