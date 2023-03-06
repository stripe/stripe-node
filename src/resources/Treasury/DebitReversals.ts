// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const DebitReversals = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/debit_reversals',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/debit_reversals/{debit_reversal}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/debit_reversals',
    methodType: 'list',
  }),
});
