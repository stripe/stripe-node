// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Sources = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/sources',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/sources/{source}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/sources/{source}',
  }),

  listSourceTransactions: stripeMethod({
    method: 'GET',
    fullPath: '/v1/sources/{source}/source_transactions',
    methodType: 'list',
  }),

  verify: stripeMethod({
    method: 'POST',
    fullPath: '/v1/sources/{source}/verify',
  }),
});
