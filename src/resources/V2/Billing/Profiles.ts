// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Profiles = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/billing/profiles'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/profiles/{id}',
  }),
  update: stripeMethod({method: 'POST', fullPath: '/v2/billing/profiles/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/profiles',
    methodType: 'list',
  }),
});
