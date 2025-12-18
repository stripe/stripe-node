"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodDomainResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class PaymentMethodDomainResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_method_domains',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_method_domains',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_method_domains/{payment_method_domain}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_method_domains/{payment_method_domain}',
        }).call(this, ...args);
    }
    validate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_method_domains/{payment_method_domain}/validate',
        }).call(this, ...args);
    }
}
exports.PaymentMethodDomainResource = PaymentMethodDomainResource;
