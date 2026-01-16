"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class RefundResource extends StripeResource_js_1.StripeResource {
    expire(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/refunds/{refund}/expire',
        }).call(this, ...args);
    }
}
exports.RefundResource = RefundResource;
//# sourceMappingURL=Refunds.js.map