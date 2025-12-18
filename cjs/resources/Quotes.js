"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class QuoteResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/quotes',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/quotes',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/quotes/{quote}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/quotes/{quote}',
        }).call(this, ...args);
    }
    accept(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/quotes/{quote}/accept',
        }).call(this, ...args);
    }
    cancel(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/quotes/{quote}/cancel',
        }).call(this, ...args);
    }
    finalizeQuote(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/quotes/{quote}/finalize',
        }).call(this, ...args);
    }
    pdf(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/quotes/{quote}/pdf',
            host: 'files.stripe.com',
            streaming: true,
        }).call(this, ...args);
    }
    listComputedUpfrontLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/quotes/{quote}/computed_upfront_line_items',
            methodType: 'list',
        }).call(this, ...args);
    }
    listLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/quotes/{quote}/line_items',
            methodType: 'list',
        }).call(this, ...args);
    }
}
exports.QuoteResource = QuoteResource;
