// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Cards = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/gift_cards/cards',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/gift_cards/cards/{id}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/gift_cards/cards/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/gift_cards/cards',
    methodType: 'list',
  }),

  validate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/gift_cards/cards/validate',
  }),
});
