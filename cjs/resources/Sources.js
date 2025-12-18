"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class SourceResource extends StripeResource_js_1.StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/sources/{source}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/sources/{source}',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/sources',
        }).call(this, ...args);
    }
    verify(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/sources/{source}/verify',
        }).call(this, ...args);
    }
    listSourceTransactions(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/sources/{source}/source_transactions',
            methodType: 'list',
        }).call(this, ...args);
    }
}
exports.SourceResource = SourceResource;
