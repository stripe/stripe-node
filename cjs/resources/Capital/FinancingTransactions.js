"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancingTransactions = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.FinancingTransactions = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/capital/financing_transactions/{financing_transaction}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/capital/financing_transactions',
        methodType: 'list',
    }),
});
