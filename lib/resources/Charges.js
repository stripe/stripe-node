// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charges = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Charges = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/charges',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/charges/{charge}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/charges/{charge}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/charges',
        methodType: 'list',
    }),
    capture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/charges/{charge}/capture',
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/charges/search',
        methodType: 'search',
    }),
});
