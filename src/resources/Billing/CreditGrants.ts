// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Customer, DeletedCustomer} from './../Customers.js';
import * as TestHelpers from './../TestHelpers/index.js';
import {
  MetadataParam,
  Emptyable,
  PaginationParams,
  Metadata,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export const CreditGrants = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants',
    requestSchema: {
      kind: 'object',
      fields: {
        amount: {
          kind: 'object',
          fields: {
            custom_pricing_unit: {
              kind: 'object',
              fields: {value: {kind: 'decimal_string'}},
            },
          },
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        amount: {
          kind: 'object',
          fields: {
            custom_pricing_unit: {
              kind: 'nullable',
              inner: {
                kind: 'object',
                fields: {value: {kind: 'decimal_string'}},
              },
            },
          },
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_grants/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        amount: {
          kind: 'object',
          fields: {
            custom_pricing_unit: {
              kind: 'nullable',
              inner: {
                kind: 'object',
                fields: {value: {kind: 'decimal_string'}},
              },
            },
          },
        },
      },
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        amount: {
          kind: 'object',
          fields: {
            custom_pricing_unit: {
              kind: 'nullable',
              inner: {
                kind: 'object',
                fields: {value: {kind: 'decimal_string'}},
              },
            },
          },
        },
      },
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_grants',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              amount: {
                kind: 'object',
                fields: {
                  custom_pricing_unit: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
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
  expire: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants/{id}/expire',
    responseSchema: {
      kind: 'object',
      fields: {
        amount: {
          kind: 'object',
          fields: {
            custom_pricing_unit: {
              kind: 'nullable',
              inner: {
                kind: 'object',
                fields: {value: {kind: 'decimal_string'}},
              },
            },
          },
        },
      },
    },
  }),
  voidGrant: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants/{id}/void',
    responseSchema: {
      kind: 'object',
      fields: {
        amount: {
          kind: 'object',
          fields: {
            custom_pricing_unit: {
              kind: 'nullable',
              inner: {
                kind: 'object',
                fields: {value: {kind: 'decimal_string'}},
              },
            },
          },
        },
      },
    },
  }),
});
