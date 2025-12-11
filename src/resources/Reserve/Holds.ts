// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Holds = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/reserve/holds/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reserve/holds',
    methodType: 'list',
  }),
});
