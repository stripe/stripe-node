// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CreditBalanceSummary = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_balance_summary',
  }),
});
