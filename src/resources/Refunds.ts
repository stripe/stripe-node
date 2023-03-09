// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Refunds = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/refunds',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/refunds/{refund}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/refunds/{refund}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/refunds',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/refunds/{refund}/cancel',
  }),
});
