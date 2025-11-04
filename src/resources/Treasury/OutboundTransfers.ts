// File generated from our OpenAPI spec

import * as OutboundTransferParams from '../params/OutboundTransferParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const OutboundTransferResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/outbound_transfers',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/outbound_transfers',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}/cancel',
  }),
});
export class OutboundTransfer {}
