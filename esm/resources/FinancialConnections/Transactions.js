// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Transactions = StripeResource.extend({
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/transactions',
        methodType: 'list',
    }),
});
