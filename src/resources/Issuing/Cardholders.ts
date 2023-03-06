// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Cardholders = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/cardholders',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/cardholders/{cardholder}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/cardholders/{cardholder}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/cardholders',
    methodType: 'list',
  }),
});
