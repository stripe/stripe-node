// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Splits = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath:
      '/v2/payments/settlement_allocation_intents/{settlement_allocation_intent_id}/splits',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath:
      '/v2/payments/settlement_allocation_intents/{settlement_allocation_intent_id}/splits/{id}',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath:
      '/v2/payments/settlement_allocation_intents/{settlement_allocation_intent_id}/splits/{id}/cancel',
  }),
});
