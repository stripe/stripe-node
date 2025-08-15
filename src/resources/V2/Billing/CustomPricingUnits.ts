// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CustomPricingUnits = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/custom_pricing_units',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/custom_pricing_units/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/custom_pricing_units/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/custom_pricing_units',
    methodType: 'list',
  }),
});
