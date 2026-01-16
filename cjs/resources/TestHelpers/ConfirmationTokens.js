"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationTokenResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class ConfirmationTokenResource extends StripeResource_js_1.StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/confirmation_tokens',
        }).call(this, ...args);
    }
}
exports.ConfirmationTokenResource = ConfirmationTokenResource;
//# sourceMappingURL=ConfirmationTokens.js.map