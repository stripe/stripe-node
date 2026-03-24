// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Versions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath:
      '/v2/billing/collection_settings/{collection_setting_id}/versions/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        payment_method_options: {
          kind: 'object',
          fields: {
            card: {
              kind: 'object',
              fields: {
                mandate_options: {
                  kind: 'object',
                  fields: {amount: {kind: 'int64_string'}},
                },
              },
            },
          },
        },
      },
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath:
      '/v2/billing/collection_settings/{collection_setting_id}/versions',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              payment_method_options: {
                kind: 'object',
                fields: {
                  card: {
                    kind: 'object',
                    fields: {
                      mandate_options: {
                        kind: 'object',
                        fields: {amount: {kind: 'int64_string'}},
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }),
});
