// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Programs = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/issuing/programs'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/programs/{program}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/programs/{program}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/programs',
    methodType: 'list',
  }),
});
