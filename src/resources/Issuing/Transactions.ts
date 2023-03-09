// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Transactions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/transactions/{transaction}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/transactions/{transaction}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/transactions',
    methodType: 'list',
  }),
});
