// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const MeteredItems = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/billing/metered_items'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/metered_items/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/metered_items/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/metered_items',
    methodType: 'list',
  }),
});
