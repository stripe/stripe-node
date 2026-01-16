"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class PaymentIntentResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_intents',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_intents/{intent}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}',
        }).call(this, ...args);
    }
    search(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_intents/search',
            methodType: 'search',
        }).call(this, ...args);
    }
    applyCustomerBalance(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/apply_customer_balance',
        }).call(this, ...args);
    }
    cancel(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/cancel',
        }).call(this, ...args);
    }
    capture(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/capture',
        }).call(this, ...args);
    }
    confirm(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/confirm',
        }).call(this, ...args);
    }
    incrementAuthorization(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/increment_authorization',
        }).call(this, ...args);
    }
    verifyMicrodeposits(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/verify_microdeposits',
        }).call(this, ...args);
    }
    listAmountDetailsLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_intents/{intent}/amount_details_line_items',
            methodType: 'list',
        }).call(this, ...args);
    }
}
exports.PaymentIntentResource = PaymentIntentResource;
//# sourceMappingURL=PaymentIntents.js.map