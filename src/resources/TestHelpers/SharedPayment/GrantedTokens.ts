// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const GrantedTokens = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/shared_payment/granted_tokens',
  }),
  revoke: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/shared_payment/granted_tokens/{shared_payment_granted_token}/revoke',
  }),
});
