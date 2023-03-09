// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Customers = StripeResource_1.StripeResource.extend({
    fundCashBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance',
    }),
});
