"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundPaymentResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class OutboundPaymentResource extends StripeResource_js_1.StripeResource {
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}',
        }).call(this, ...args);
    }
    fail(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail',
        }).call(this, ...args);
    }
    post(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post',
        }).call(this, ...args);
    }
    returnOutboundPayment(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return',
        }).call(this, ...args);
    }
}
exports.OutboundPaymentResource = OutboundPaymentResource;
//# sourceMappingURL=OutboundPayments.js.map