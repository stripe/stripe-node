// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ManualRules = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/tax/manual_rules',
    requestSchema: {
      kind: 'object',
      fields: {
        scheduled_tax_rates: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              rates: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {percentage: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        scheduled_tax_rates: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              rates: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {percentage: {kind: 'decimal_string'}},
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
    fullPath: '/v2/tax/manual_rules/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        scheduled_tax_rates: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              rates: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {percentage: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      },
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/tax/manual_rules/{id}',
    requestSchema: {
      kind: 'object',
      fields: {
        scheduled_tax_rates: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              rates: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {percentage: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        scheduled_tax_rates: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              rates: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {percentage: {kind: 'decimal_string'}},
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
    fullPath: '/v2/tax/manual_rules',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              scheduled_tax_rates: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    rates: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {percentage: {kind: 'decimal_string'}},
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
  deactivate: stripeMethod({
    method: 'POST',
    fullPath: '/v2/tax/manual_rules/{id}/deactivate',
    responseSchema: {
      kind: 'object',
      fields: {
        scheduled_tax_rates: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              rates: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {percentage: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      },
    },
  }),
});
