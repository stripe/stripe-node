// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AccountTokens = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/account_tokens',
    requestSchema: {
      kind: 'object',
      fields: {
        identity: {
          kind: 'object',
          fields: {
            individual: {
              kind: 'object',
              fields: {
                relationship: {
                  kind: 'object',
                  fields: {percent_ownership: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/account_tokens/{id}',
  }),
});
