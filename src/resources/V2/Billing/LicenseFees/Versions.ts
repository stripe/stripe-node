// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Versions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/license_fees/{license_fee_id}/versions/{id}',
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
    fullPath: '/v2/billing/license_fees/{license_fee_id}/versions',
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
});
