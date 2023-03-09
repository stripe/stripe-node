// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinks = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.PaymentLinks = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_links',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_links/{payment_link}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links',
        methodType: 'list',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}/line_items',
        methodType: 'list',
    }),
});
