// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Transactions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transactions/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/transactions',
    methodType: 'list',
  }),
});
