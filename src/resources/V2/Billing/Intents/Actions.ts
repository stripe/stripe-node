// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Actions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/intents/{intent_id}/actions/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/intents/{intent_id}/actions',
    methodType: 'list',
  }),
});
