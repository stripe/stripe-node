// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const FinancingTransactions = StripeResource.extend({
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
