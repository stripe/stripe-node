// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Rates = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/rate_cards/{rate_card_id}/rates',
    requestSchema: {
      kind: 'object',
      fields: {
        tiers: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {up_to_decimal: {kind: 'decimal_string'}},
          },
        },
        transform_quantity: {
          kind: 'object',
          fields: {divide_by: {kind: 'int64_string'}},
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        tiers: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {up_to_decimal: {kind: 'decimal_string'}},
          },
        },
        transform_quantity: {
          kind: 'object',
          fields: {divide_by: {kind: 'int64_string'}},
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/rate_cards/{rate_card_id}/rates/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        tiers: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {up_to_decimal: {kind: 'decimal_string'}},
          },
        },
        transform_quantity: {
          kind: 'object',
          fields: {divide_by: {kind: 'int64_string'}},
        },
      },
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/rate_cards/{rate_card_id}/rates',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              tiers: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {up_to_decimal: {kind: 'decimal_string'}},
                },
              },
              transform_quantity: {
                kind: 'object',
                fields: {divide_by: {kind: 'int64_string'}},
              },
            },
          },
        },
      },
    },
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v2/billing/rate_cards/{rate_card_id}/rates/{id}',
  }),
});
