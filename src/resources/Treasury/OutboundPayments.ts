// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const OutboundPayments = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/outbound_payments',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/outbound_payments/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/outbound_payments',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/outbound_payments/{id}/cancel',
  }),
});
