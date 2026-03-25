// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Versions} from './LicenseFees/Versions.js';
const stripeMethod = StripeResource.method;
export const LicenseFees = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.versions = new Versions(...args);
  },
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/license_fees',
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
    fullPath: '/v2/billing/license_fees/{id}',
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
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/license_fees/{id}',
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
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/license_fees',
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
