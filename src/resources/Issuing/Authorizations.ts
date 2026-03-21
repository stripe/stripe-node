// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Authorizations = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/authorizations/{authorization}',
    responseSchema: {
      kind: 'object',
      fields: {
        fleet: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              reported_breakdown: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          gross_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    non_fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          gross_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    tax: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          local_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          national_amount_decimal: {
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
          },
        },
        fuel: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              quantity_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
              unit_cost_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        transactions: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              purchase_details: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    fleet: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          reported_breakdown: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                fuel: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      gross_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                non_fuel: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      gross_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                tax: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      local_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                      national_amount_decimal: {
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
                      },
                    },
                    fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          quantity_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          unit_cost_decimal: {kind: 'decimal_string'},
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
    fullPath: '/v1/issuing/authorizations/{authorization}',
    responseSchema: {
      kind: 'object',
      fields: {
        fleet: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              reported_breakdown: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          gross_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    non_fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          gross_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    tax: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          local_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          national_amount_decimal: {
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
          },
        },
        fuel: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              quantity_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
              unit_cost_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        transactions: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              purchase_details: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    fleet: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          reported_breakdown: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                fuel: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      gross_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                non_fuel: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      gross_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                tax: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      local_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                      national_amount_decimal: {
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
                      },
                    },
                    fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          quantity_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          unit_cost_decimal: {kind: 'decimal_string'},
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
    fullPath: '/v1/issuing/authorizations',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              fleet: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    reported_breakdown: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          fuel: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                gross_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                          non_fuel: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                gross_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                          tax: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                local_amount_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                                national_amount_decimal: {
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
                },
              },
              fuel: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    quantity_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                    unit_cost_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                  },
                },
              },
              transactions: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    purchase_details: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          fleet: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                reported_breakdown: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      fuel: {
                                        kind: 'nullable',
                                        inner: {
                                          kind: 'object',
                                          fields: {
                                            gross_amount_decimal: {
                                              kind: 'nullable',
                                              inner: {kind: 'decimal_string'},
                                            },
                                          },
                                        },
                                      },
                                      non_fuel: {
                                        kind: 'nullable',
                                        inner: {
                                          kind: 'object',
                                          fields: {
                                            gross_amount_decimal: {
                                              kind: 'nullable',
                                              inner: {kind: 'decimal_string'},
                                            },
                                          },
                                        },
                                      },
                                      tax: {
                                        kind: 'nullable',
                                        inner: {
                                          kind: 'object',
                                          fields: {
                                            local_amount_decimal: {
                                              kind: 'nullable',
                                              inner: {kind: 'decimal_string'},
                                            },
                                            national_amount_decimal: {
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
                            },
                          },
                          fuel: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                quantity_decimal: {
                                  kind: 'nullable',
                                  inner: {kind: 'decimal_string'},
                                },
                                unit_cost_decimal: {kind: 'decimal_string'},
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
  approve: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/approve',
    responseSchema: {
      kind: 'object',
      fields: {
        fleet: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              reported_breakdown: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          gross_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    non_fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          gross_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    tax: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          local_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          national_amount_decimal: {
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
          },
        },
        fuel: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              quantity_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
              unit_cost_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        transactions: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              purchase_details: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    fleet: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          reported_breakdown: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                fuel: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      gross_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                non_fuel: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      gross_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                tax: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      local_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                      national_amount_decimal: {
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
                      },
                    },
                    fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          quantity_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          unit_cost_decimal: {kind: 'decimal_string'},
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
  decline: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/decline',
    responseSchema: {
      kind: 'object',
      fields: {
        fleet: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              reported_breakdown: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          gross_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    non_fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          gross_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    tax: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          local_amount_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          national_amount_decimal: {
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
          },
        },
        fuel: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              quantity_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
              unit_cost_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        transactions: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              purchase_details: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    fleet: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          reported_breakdown: {
                            kind: 'nullable',
                            inner: {
                              kind: 'object',
                              fields: {
                                fuel: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      gross_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                non_fuel: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      gross_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                                tax: {
                                  kind: 'nullable',
                                  inner: {
                                    kind: 'object',
                                    fields: {
                                      local_amount_decimal: {
                                        kind: 'nullable',
                                        inner: {kind: 'decimal_string'},
                                      },
                                      national_amount_decimal: {
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
                      },
                    },
                    fuel: {
                      kind: 'nullable',
                      inner: {
                        kind: 'object',
                        fields: {
                          quantity_decimal: {
                            kind: 'nullable',
                            inner: {kind: 'decimal_string'},
                          },
                          unit_cost_decimal: {kind: 'decimal_string'},
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
