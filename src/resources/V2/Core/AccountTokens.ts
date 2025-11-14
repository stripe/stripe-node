// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AccountTokens = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/core/account_tokens'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/account_tokens/{id}',
  }),
});
