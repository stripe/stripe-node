// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Orders = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/climate/orders',
    requestSchema: {
      kind: 'object',
      fields: {metric_tons: {kind: 'decimal_string'}},
    },
    responseSchema: {
      kind: 'object',
      fields: {metric_tons: {kind: 'decimal_string'}},
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/orders/{order}',
    responseSchema: {
      kind: 'object',
      fields: {metric_tons: {kind: 'decimal_string'}},
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/climate/orders/{order}',
    responseSchema: {
      kind: 'object',
      fields: {metric_tons: {kind: 'decimal_string'}},
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/orders',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {metric_tons: {kind: 'decimal_string'}},
          },
        },
      },
    },
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/climate/orders/{order}/cancel',
    responseSchema: {
      kind: 'object',
      fields: {metric_tons: {kind: 'decimal_string'}},
    },
  }),
});
