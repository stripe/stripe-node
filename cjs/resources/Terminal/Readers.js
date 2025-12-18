"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReaderResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class ReaderResource extends StripeResource_js_1.StripeResource {
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/terminal/readers/{reader}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/terminal/readers/{reader}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers/{reader}',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/terminal/readers',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers',
        }).call(this, ...args);
    }
    cancelAction(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers/{reader}/cancel_action',
        }).call(this, ...args);
    }
    collectInputs(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers/{reader}/collect_inputs',
        }).call(this, ...args);
    }
    collectPaymentMethod(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers/{reader}/collect_payment_method',
        }).call(this, ...args);
    }
    confirmPaymentIntent(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers/{reader}/confirm_payment_intent',
        }).call(this, ...args);
    }
    processPaymentIntent(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers/{reader}/process_payment_intent',
        }).call(this, ...args);
    }
    processSetupIntent(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers/{reader}/process_setup_intent',
        }).call(this, ...args);
    }
    refundPayment(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers/{reader}/refund_payment',
        }).call(this, ...args);
    }
    setReaderDisplay(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/terminal/readers/{reader}/set_reader_display',
        }).call(this, ...args);
    }
}
exports.ReaderResource = ReaderResource;
