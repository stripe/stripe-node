// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ServiceActions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/service_actions',
    requestSchema: {
      kind: 'object',
      fields: {
        credit_grant: {
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
        credit_grant_per_tenant: {
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
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        credit_grant: {
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
        credit_grant_per_tenant: {
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
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/service_actions/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        credit_grant: {
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
        credit_grant_per_tenant: {
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
      },
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/service_actions/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        credit_grant: {
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
        credit_grant_per_tenant: {
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
      },
    },
  }),
});
