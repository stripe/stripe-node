// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SubscriptionItems = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_items',
    requestSchema: {
      kind: 'object',
      fields: {
        price_data: {
          kind: 'object',
          fields: {unit_amount_decimal: {kind: 'decimal_string'}},
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        plan: {
          kind: 'object',
          fields: {
            amount_decimal: {kind: 'nullable', inner: {kind: 'decimal_string'}},
            tiers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  flat_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
          },
        },
        price: {
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
                        flat_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
            tiers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  flat_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
            unit_amount_decimal: {
              kind: 'nullable',
              inner: {kind: 'decimal_string'},
            },
          },
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscription_items/{item}',
    responseSchema: {
      kind: 'object',
      fields: {
        plan: {
          kind: 'object',
          fields: {
            amount_decimal: {kind: 'nullable', inner: {kind: 'decimal_string'}},
            tiers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  flat_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
          },
        },
        price: {
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
                        flat_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
            tiers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  flat_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
            unit_amount_decimal: {
              kind: 'nullable',
              inner: {kind: 'decimal_string'},
            },
          },
        },
      },
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_items/{item}',
    requestSchema: {
      kind: 'object',
      fields: {
        price_data: {
          kind: 'object',
          fields: {unit_amount_decimal: {kind: 'decimal_string'}},
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        plan: {
          kind: 'object',
          fields: {
            amount_decimal: {kind: 'nullable', inner: {kind: 'decimal_string'}},
            tiers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  flat_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
          },
        },
        price: {
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
                        flat_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
            tiers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  flat_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
            unit_amount_decimal: {
              kind: 'nullable',
              inner: {kind: 'decimal_string'},
            },
          },
        },
      },
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscription_items',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              plan: {
                kind: 'object',
                fields: {
                  amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                  tiers: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        flat_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                },
              },
              price: {
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
                              flat_amount_decimal: {
                                kind: 'nullable',
                                inner: {kind: 'decimal_string'},
                              },
                              unit_amount_decimal: {
                                kind: 'nullable',
                                inner: {kind: 'decimal_string'},
                              },
                            },
                          },
                        },
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  tiers: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        flat_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  unit_amount_decimal: {
                    kind: 'nullable',
                    inner: {kind: 'decimal_string'},
                  },
                },
              },
            },
          },
        },
      },
    },
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscription_items/{item}',
  }),
});
