// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const LicensedItems = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/licensed_items',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/licensed_items/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/licensed_items/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/licensed_items',
    methodType: 'list',
  }),
});
