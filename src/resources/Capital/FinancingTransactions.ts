// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const FinancingTransactions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/capital/financing_transactions/{financing_transaction}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/capital/financing_transactions',
    methodType: 'list',
  }),
});
