// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const OutboundPayments = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/outbound_payments',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/outbound_payments/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/outbound_payments',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/outbound_payments/{id}/cancel',
  }),
});
