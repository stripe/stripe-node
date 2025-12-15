// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Releases = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reserve/releases/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reserve/releases',
    methodType: 'list',
  }),
});
