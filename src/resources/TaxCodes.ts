// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const TaxCodes = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax_codes/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax_codes',
    methodType: 'list',
  }),
});
