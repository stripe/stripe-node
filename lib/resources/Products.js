// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Products = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/products',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/{id}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/products/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/products/{id}',
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/search',
        methodType: 'search',
    }),
});
