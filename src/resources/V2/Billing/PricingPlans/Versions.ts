// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Versions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plans/{pricing_plan_id}/versions/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plans/{pricing_plan_id}/versions',
    methodType: 'list',
  }),
});
