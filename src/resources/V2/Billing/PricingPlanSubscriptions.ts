// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PricingPlanSubscriptions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plan_subscriptions/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        pricing_plan_component_details: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              license_fee_details: {
                kind: 'object',
                fields: {
                  transform_quantity: {
                    kind: 'object',
                    fields: {divide_by: {kind: 'int64_string'}},
                  },
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
    fullPath: '/v2/billing/pricing_plan_subscriptions/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        pricing_plan_component_details: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              license_fee_details: {
                kind: 'object',
                fields: {
                  transform_quantity: {
                    kind: 'object',
                    fields: {divide_by: {kind: 'int64_string'}},
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
    fullPath: '/v2/billing/pricing_plan_subscriptions',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              pricing_plan_component_details: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    license_fee_details: {
                      kind: 'object',
                      fields: {
                        transform_quantity: {
                          kind: 'object',
                          fields: {divide_by: {kind: 'int64_string'}},
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
    },
  }),
  removeDiscounts: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/pricing_plan_subscriptions/{id}/remove_discounts',
    responseSchema: {
      kind: 'object',
      fields: {
        pricing_plan_component_details: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              license_fee_details: {
                kind: 'object',
                fields: {
                  transform_quantity: {
                    kind: 'object',
                    fields: {divide_by: {kind: 'int64_string'}},
                  },
                },
              },
            },
          },
        },
      },
    },
  }),
});
