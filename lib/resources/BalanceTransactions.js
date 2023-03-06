// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceTransactions = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.BalanceTransactions = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/balance_transactions/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/balance_transactions',
        methodType: 'list',
    }),
});
