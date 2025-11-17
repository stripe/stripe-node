// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const BalanceTransfers = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/balance_transfers'}),
});
