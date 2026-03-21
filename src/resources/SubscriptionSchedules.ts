// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SubscriptionSchedules = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules',
    requestSchema: {
      kind: 'object',
      fields: {
        phases: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              add_invoice_items: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price_data: {
                      kind: 'object',
                      fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
              items: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price_data: {
                      kind: 'object',
                      fields: {unit_amount_decimal: {kind: 'decimal_string'}},
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
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscription_schedules/{schedule}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}',
    requestSchema: {
      kind: 'object',
      fields: {
        phases: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              add_invoice_items: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price_data: {
                      kind: 'object',
                      fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
              items: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price_data: {
                      kind: 'object',
                      fields: {unit_amount_decimal: {kind: 'decimal_string'}},
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
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscription_schedules',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}/cancel',
  }),
  release: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}/release',
  }),
});
