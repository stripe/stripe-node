// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Products = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/products/{product}',
    responseSchema: {
      kind: 'object',
      fields: {metric_tons_available: {kind: 'decimal_string'}},
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/products',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {metric_tons_available: {kind: 'decimal_string'}},
          },
        },
      },
    },
  }),
});
