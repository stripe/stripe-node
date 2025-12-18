"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class ReviewResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/reviews',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/reviews/{review}',
        }).call(this, ...args);
    }
    approve(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/reviews/{review}/approve',
        }).call(this, ...args);
    }
}
exports.ReviewResource = ReviewResource;
