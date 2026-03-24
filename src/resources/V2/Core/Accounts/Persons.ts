// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Persons = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/accounts/{account_id}/persons',
    requestSchema: {
      kind: 'object',
      fields: {
        relationship: {
          kind: 'object',
          fields: {percent_ownership: {kind: 'decimal_string'}},
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        relationship: {
          kind: 'object',
          fields: {percent_ownership: {kind: 'decimal_string'}},
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        relationship: {
          kind: 'object',
          fields: {percent_ownership: {kind: 'decimal_string'}},
        },
      },
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
    requestSchema: {
      kind: 'object',
      fields: {
        relationship: {
          kind: 'object',
          fields: {percent_ownership: {kind: 'decimal_string'}},
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        relationship: {
          kind: 'object',
          fields: {percent_ownership: {kind: 'decimal_string'}},
        },
      },
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/accounts/{account_id}/persons',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
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
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
  }),
});
