// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Transactions = StripeResource.extend({
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/transactions',
    methodType: 'list',
  }),
});
