// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Cards = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/cards',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/cards/{card}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/cards/{card}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/cards',
    methodType: 'list',
  }),
});
