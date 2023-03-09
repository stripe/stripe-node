// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const ExchangeRates = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/exchange_rates/{rate_id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/exchange_rates',
    methodType: 'list',
  }),
});
