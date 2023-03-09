// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Events = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/events/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/events',
    methodType: 'list',
  }),
});
