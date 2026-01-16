"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class PaymentMethodResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_methods',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_methods',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_methods/{payment_method}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_methods/{payment_method}',
        }).call(this, ...args);
    }
    attach(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_methods/{payment_method}/attach',
        }).call(this, ...args);
    }
    detach(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_methods/{payment_method}/detach',
        }).call(this, ...args);
    }
}
exports.PaymentMethodResource = PaymentMethodResource;
//# sourceMappingURL=PaymentMethods.js.map