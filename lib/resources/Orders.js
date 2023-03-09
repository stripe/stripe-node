// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Orders = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/orders',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/orders/{id}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/orders/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/orders',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/orders/{id}/cancel',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/orders/{id}/line_items',
        methodType: 'list',
    }),
    reopen: stripeMethod({
        method: 'POST',
        fullPath: '/v1/orders/{id}/reopen',
    }),
    submit: stripeMethod({
        method: 'POST',
        fullPath: '/v1/orders/{id}/submit',
    }),
});
