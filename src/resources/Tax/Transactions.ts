// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Transactions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/transactions',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/transactions/{transaction}',
  }),

  createReversal: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/transactions/create_reversal',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/transactions/{transaction}/line_items',
    methodType: 'list',
  }),
});
