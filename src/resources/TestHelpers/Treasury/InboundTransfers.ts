// File generated from our OpenAPI spec

import * as InboundTransferParams from '../params/InboundTransferParams.js';
import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const InboundTransferResource = StripeResource.extend({
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
export class InboundTransfer {}
