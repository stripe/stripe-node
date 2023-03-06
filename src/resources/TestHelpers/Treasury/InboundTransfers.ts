// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../../StripeResource';
const stripeMethod = StripeResource.method;

export const InboundTransfers = StripeResource.extend({
  fail: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/fail',
  }),

  returnInboundTransfer: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/return',
  }),

  succeed: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed',
  }),
});
