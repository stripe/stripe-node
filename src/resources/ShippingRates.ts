// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const ShippingRates = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/shipping_rates',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/shipping_rates/{shipping_rate_token}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/shipping_rates/{shipping_rate_token}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/shipping_rates',
    methodType: 'list',
  }),
});
