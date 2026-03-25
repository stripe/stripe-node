// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Alerts = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/alerts',
    requestSchema: {
      kind: 'object',
      fields: {
        credit_balance_threshold: {
          kind: 'object',
          fields: {
            lte: {
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
        spend_threshold: {
          kind: 'object',
          fields: {
            gte: {
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
        credit_balance_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              lte: {
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
        spend_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              gte: {
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
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/alerts/{id}',
    responseSchema: {
      kind: 'object',
      fields: {
        credit_balance_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              lte: {
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
        spend_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              gte: {
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
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/alerts',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              credit_balance_threshold: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    lte: {
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
              spend_threshold: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    gte: {
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
        },
      },
    },
  }),
  activate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/alerts/{id}/activate',
    responseSchema: {
      kind: 'object',
      fields: {
        credit_balance_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              lte: {
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
        spend_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              gte: {
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
  archive: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/alerts/{id}/archive',
    responseSchema: {
      kind: 'object',
      fields: {
        credit_balance_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              lte: {
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
        spend_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              gte: {
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
  deactivate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/alerts/{id}/deactivate',
    responseSchema: {
      kind: 'object',
      fields: {
        credit_balance_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              lte: {
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
        spend_threshold: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              gte: {
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
});
