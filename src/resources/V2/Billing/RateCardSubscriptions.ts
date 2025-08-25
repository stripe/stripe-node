// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const RateCardSubscriptions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/rate_card_subscriptions',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/rate_card_subscriptions/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/rate_card_subscriptions/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/rate_card_subscriptions',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/rate_card_subscriptions/{id}/cancel',
  }),
});
