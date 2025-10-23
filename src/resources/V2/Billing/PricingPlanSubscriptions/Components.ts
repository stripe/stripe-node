// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Components = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plan_subscriptions/{id}/components',
  }),
});
