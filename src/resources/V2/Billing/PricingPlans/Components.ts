// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Components = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/pricing_plans/{pricing_plan_id}/components',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plans/{pricing_plan_id}/components/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/pricing_plans/{pricing_plan_id}/components/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plans/{pricing_plan_id}/components',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v2/billing/pricing_plans/{pricing_plan_id}/components/{id}',
  }),
});
