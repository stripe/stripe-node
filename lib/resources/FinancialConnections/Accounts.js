// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Accounts = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts/{account}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts',
        methodType: 'list',
    }),
    disconnect: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/disconnect',
    }),
    listOwners: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts/{account}/owners',
        methodType: 'list',
    }),
    refresh: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/refresh',
    }),
});
