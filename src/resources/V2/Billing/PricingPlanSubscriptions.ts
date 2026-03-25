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
              recurring_credit_grant_details: {
                kind: 'object',
                fields: {
                  credit_grant_details: {
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
                  credit_grant_per_tenant_details: {
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
              recurring_credit_grant_details: {
                kind: 'object',
                fields: {
                  credit_grant_details: {
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
                  credit_grant_per_tenant_details: {
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
                    recurring_credit_grant_details: {
                      kind: 'object',
                      fields: {
                        credit_grant_details: {
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
                        credit_grant_per_tenant_details: {
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
              recurring_credit_grant_details: {
                kind: 'object',
                fields: {
                  credit_grant_details: {
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
                  credit_grant_per_tenant_details: {
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
            },
          },
        },
      },
    },
  }),
});
