// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const BalanceSettings = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/balance_settings'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/balance_settings'}),
});
