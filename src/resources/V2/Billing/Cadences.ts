// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Cadences = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/billing/cadences'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/cadences/{id}',
  }),
  update: stripeMethod({method: 'POST', fullPath: '/v2/billing/cadences/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/cadences',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/cadences/{id}/cancel',
  }),
});
