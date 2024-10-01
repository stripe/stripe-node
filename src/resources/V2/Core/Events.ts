// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Events = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v2/core/events/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/events',
    methodType: 'list',
  }),
});
