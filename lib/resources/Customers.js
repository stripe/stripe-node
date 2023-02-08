// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}',
    }),
    createFundingInstructions: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/funding_instructions',
    }),
    deleteDiscount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/discount',
    }),
    listPaymentMethods: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods',
        methodType: 'list',
    }),
    retrievePaymentMethod: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods/{payment_method}',
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/search',
        methodType: 'search',
    }),
    retrieveCashBalance: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance',
    }),
    updateCashBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/cash_balance',
    }),
    createBalanceTransaction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions',
    }),
    retrieveBalanceTransaction: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
    }),
    updateBalanceTransaction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
    }),
    listBalanceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions',
        methodType: 'list',
    }),
    retrieveCashBalanceTransaction: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions/{transaction}',
    }),
    listCashBalanceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions',
        methodType: 'list',
    }),
    createSource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources',
    }),
    retrieveSource: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),
    updateSource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),
    listSources: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources',
        methodType: 'list',
    }),
    deleteSource: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),
    verifySource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}/verify',
    }),
    createTaxId: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/tax_ids',
    }),
    retrieveTaxId: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}',
    }),
    listTaxIds: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids',
        methodType: 'list',
    }),
    deleteTaxId: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}',
    }),
});
