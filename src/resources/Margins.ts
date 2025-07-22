// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Margins = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/billing/margins'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/margins/{margin}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/margins/{margin}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/margins',
    methodType: 'list',
  }),
});
