// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const CountrySpecs = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/country_specs/{country}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/country_specs',
    methodType: 'list',
  }),
});
