"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sources = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Sources = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}',
    }),
    listSourceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}/source_transactions',
        methodType: 'list',
    }),
    verify: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}/verify',
    }),
});
