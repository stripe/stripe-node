// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const BalanceTransactions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/balance_transactions/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/balance_transactions',
    methodType: 'list',
  }),
});
