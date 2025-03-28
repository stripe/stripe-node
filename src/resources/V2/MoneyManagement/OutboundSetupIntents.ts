// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const OutboundSetupIntents = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/outbound_setup_intents',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/outbound_setup_intents/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/outbound_setup_intents/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/outbound_setup_intents',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/outbound_setup_intents/{id}/cancel',
  }),
});
