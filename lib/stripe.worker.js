"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebPlatformFunctions_1 = require("./platform/WebPlatformFunctions");
const stripe_common_1 = require("./stripe.common");
const Stripe = (0, stripe_common_1.createStripe)(new WebPlatformFunctions_1.WebPlatformFunctions());
module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Stripe;
