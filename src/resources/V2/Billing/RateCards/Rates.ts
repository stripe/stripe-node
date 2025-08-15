// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Rates = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/rate_cards/{rate_card_id}/rates',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/rate_cards/{rate_card_id}/rates/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/rate_cards/{rate_card_id}/rates',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v2/billing/rate_cards/{rate_card_id}/rates/{id}',
  }),
});
