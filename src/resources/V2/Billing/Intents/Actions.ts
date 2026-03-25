// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Actions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/intents/{intent_id}/actions/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        apply: {
          kind: 'object',
          fields: {
            invoice_discount_rule: {
              kind: 'object',
              fields: {
                percent_off: {
                  kind: 'object',
                  fields: {percent_off: {kind: 'decimal_string'}},
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
    fullPath: '/v2/billing/intents/{intent_id}/actions',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              apply: {
                kind: 'object',
                fields: {
                  invoice_discount_rule: {
                    kind: 'object',
                    fields: {
                      percent_off: {
                        kind: 'object',
                        fields: {percent_off: {kind: 'decimal_string'}},
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
