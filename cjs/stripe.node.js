"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stripe = void 0;
const NodePlatformFunctions_js_1 = require("./platform/NodePlatformFunctions.js");
const stripe_common_js_1 = require("./stripe.common.js");
exports.Stripe = (0, stripe_common_js_1.createStripe)(new NodePlatformFunctions_js_1.NodePlatformFunctions());
// module.exports = Stripe;
// // expose constructor as a named property to enable mocking with Sinon.JS
// module.exports.Stripe = Stripe;
// // Allow use with the TypeScript compiler without `esModuleInterop`.
// // We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
// module.exports.default = Stripe;
exports.default = exports.Stripe;
