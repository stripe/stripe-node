// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PersonTokens = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/accounts/{account_id}/person_tokens',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/accounts/{account_id}/person_tokens/{id}',
  }),
});
