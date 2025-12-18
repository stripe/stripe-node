"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class SecretResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/apps/secrets',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/apps/secrets',
        }).call(this, ...args);
    }
    find(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/apps/secrets/find',
        }).call(this, ...args);
    }
    deleteWhere(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/apps/secrets/delete',
        }).call(this, ...args);
    }
}
exports.SecretResource = SecretResource;
