// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Products = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/products',
    requestSchema: {
      kind: 'object',
      fields: {
        default_price_data: {
          kind: 'object',
          fields: {
            currency_options: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  tiers: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        flat_amount_decimal: {kind: 'decimal_string'},
                        unit_amount_decimal: {kind: 'decimal_string'},
                      },
                    },
                  },
                  unit_amount_decimal: {kind: 'decimal_string'},
                },
              },
            },
            unit_amount_decimal: {kind: 'decimal_string'},
          },
        },
      },
    },
  }),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/products/{id}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/products/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/products',
    methodType: 'list',
  }),
  del: stripeMethod({method: 'DELETE', fullPath: '/v1/products/{id}'}),
  createFeature: stripeMethod({
    method: 'POST',
    fullPath: '/v1/products/{product}/features',
  }),
  deleteFeature: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/products/{product}/features/{id}',
  }),
  listFeatures: stripeMethod({
    method: 'GET',
    fullPath: '/v1/products/{product}/features',
    methodType: 'list',
  }),
  retrieveFeature: stripeMethod({
    method: 'GET',
    fullPath: '/v1/products/{product}/features/{id}',
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/products/search',
    methodType: 'search',
  }),
});
