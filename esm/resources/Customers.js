// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Customers = StripeResource.extend({
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
    createBalanceTransaction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions',
    }),
    createSource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources',
    }),
    createTaxId: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/tax_ids',
    }),
    deleteDiscount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/discount',
    }),
    deleteSource: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),
    deleteTaxId: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}',
    }),
    listPaymentMethods: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods',
        methodType: 'list',
    }),
    listBalanceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions',
        methodType: 'list',
    }),
    listCashBalanceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions',
        methodType: 'list',
    }),
    listSources: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources',
        methodType: 'list',
    }),
    listTaxIds: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids',
        methodType: 'list',
    }),
    retrievePaymentMethod: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods/{payment_method}',
    }),
    retrieveBalanceTransaction: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
    }),
    retrieveCashBalance: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance',
    }),
    retrieveCashBalanceTransaction: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions/{transaction}',
    }),
    retrieveSource: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),
    retrieveTaxId: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}',
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/search',
        methodType: 'search',
    }),
    updateBalanceTransaction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
    }),
    updateCashBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/cash_balance',
    }),
    updateSource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}',
    }),
    verifySource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}/verify',
    }),
});
