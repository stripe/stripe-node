// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const TransactionEntries = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transaction_entries/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transaction_entries',
    methodType: 'list',
  }),
});
