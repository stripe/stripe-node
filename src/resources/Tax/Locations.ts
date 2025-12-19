// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Locations = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/tax/locations'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/locations/{location}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/locations',
    methodType: 'list',
  }),
});
