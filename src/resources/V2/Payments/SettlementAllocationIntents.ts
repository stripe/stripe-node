// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Splits} from './SettlementAllocationIntents/Splits.js';
const stripeMethod = StripeResource.method;
export const SettlementAllocationIntents = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.splits = new Splits(...args);
  },
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/payments/settlement_allocation_intents',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/payments/settlement_allocation_intents/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/payments/settlement_allocation_intents/{id}',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/payments/settlement_allocation_intents/{id}/cancel',
  }),
  submit: stripeMethod({
    method: 'POST',
    fullPath: '/v2/payments/settlement_allocation_intents/{id}/submit',
  }),
});
