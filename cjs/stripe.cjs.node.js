"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodePlatformFunctions_js_1 = require("./platform/NodePlatformFunctions.js");
const stripe_core_js_1 = require("./stripe.core.js");
// Initialize the Stripe class with Node platform functions
stripe_core_js_1.Stripe.initialize(new NodePlatformFunctions_js_1.NodePlatformFunctions());
// Create a callable wrapper for backward compatibility
const StripeConstructor = function (key, config) {
    // Support calling without `new`
    if (!(this instanceof StripeConstructor)) {
        return new stripe_core_js_1.Stripe(key, config);
    }
    // If called with `new`, return a new Stripe instance
    return new stripe_core_js_1.Stripe(key, config);
};
// Copy all static properties from Stripe to the wrapper
Object.setPrototypeOf(StripeConstructor, stripe_core_js_1.Stripe);
Object.setPrototypeOf(StripeConstructor.prototype, stripe_core_js_1.Stripe.prototype);
// Copy static properties explicitly
for (const key of Object.getOwnPropertyNames(stripe_core_js_1.Stripe)) {
    if (key !== 'length' && key !== 'prototype' && key !== 'name') {
        Object.defineProperty(StripeConstructor, key, {
            value: stripe_core_js_1.Stripe[key],
            writable: true,
            enumerable: true,
            configurable: true,
        });
    }
}
module.exports = StripeConstructor;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = StripeConstructor;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = StripeConstructor;
