// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const FinancingSummary = StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/capital/financing_summary',
    }),
});
