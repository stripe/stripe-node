// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Transactions = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transactions/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transactions',
        methodType: 'list',
    }),
});
