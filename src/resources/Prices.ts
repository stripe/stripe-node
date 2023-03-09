// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Prices = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/prices',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices/{price}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/prices/{price}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices',
    methodType: 'list',
  }),

  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/prices/search',
    methodType: 'search',
  }),
});
