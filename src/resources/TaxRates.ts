// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const TaxRates = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax_rates',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax_rates/{tax_rate}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax_rates/{tax_rate}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax_rates',
    methodType: 'list',
  }),
});
