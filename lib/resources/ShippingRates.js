// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingRates = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.ShippingRates = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/shipping_rates',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/shipping_rates/{shipping_rate_token}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/shipping_rates/{shipping_rate_token}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/shipping_rates',
        methodType: 'list',
    }),
});
