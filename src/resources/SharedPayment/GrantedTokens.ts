// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const GrantedTokens = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath:
      '/v1/shared_payment/granted_tokens/{shared_payment_granted_token}',
  }),
});
