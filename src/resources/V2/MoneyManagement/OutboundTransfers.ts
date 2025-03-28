// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const OutboundTransfers = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/outbound_transfers',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/outbound_transfers/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/outbound_transfers',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/outbound_transfers/{id}/cancel',
  }),
});
