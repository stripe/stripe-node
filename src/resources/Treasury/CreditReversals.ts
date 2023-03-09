// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const CreditReversals = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/credit_reversals',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/credit_reversals/{credit_reversal}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/credit_reversals',
    methodType: 'list',
  }),
});
