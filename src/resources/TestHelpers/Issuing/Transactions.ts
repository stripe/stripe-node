// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Transactions = StripeResource.extend({
  createForceCapture: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/transactions/create_force_capture',
    requestSchema: {
      kind: 'object',
      fields: {
        purchase_details: {
          kind: 'object',
          fields: {
            fleet: {
              kind: 'object',
              fields: {
                reported_breakdown: {
                  kind: 'object',
                  fields: {
                    fuel: {
                      kind: 'object',
                      fields: {gross_amount_decimal: {kind: 'decimal_string'}},
                    },
                    non_fuel: {
                      kind: 'object',
                      fields: {gross_amount_decimal: {kind: 'decimal_string'}},
                    },
                    tax: {
                      kind: 'object',
                      fields: {
                        local_amount_decimal: {kind: 'decimal_string'},
                        national_amount_decimal: {kind: 'decimal_string'},
                      },
                    },
                  },
                },
              },
            },
            fuel: {
              kind: 'object',
              fields: {
                quantity_decimal: {kind: 'decimal_string'},
                unit_cost_decimal: {kind: 'decimal_string'},
              },
            },
            receipt: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {quantity: {kind: 'decimal_string'}},
              },
            },
          },
        },
      },
    },
    responseSchema: {
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
  }),
  createUnlinkedRefund: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/transactions/create_unlinked_refund',
    requestSchema: {
      kind: 'object',
      fields: {
        purchase_details: {
          kind: 'object',
          fields: {
            fleet: {
              kind: 'object',
              fields: {
                reported_breakdown: {
                  kind: 'object',
                  fields: {
                    fuel: {
                      kind: 'object',
                      fields: {gross_amount_decimal: {kind: 'decimal_string'}},
                    },
                    non_fuel: {
                      kind: 'object',
                      fields: {gross_amount_decimal: {kind: 'decimal_string'}},
                    },
                    tax: {
                      kind: 'object',
                      fields: {
                        local_amount_decimal: {kind: 'decimal_string'},
                        national_amount_decimal: {kind: 'decimal_string'},
                      },
                    },
                  },
                },
              },
            },
            fuel: {
              kind: 'object',
              fields: {
                quantity_decimal: {kind: 'decimal_string'},
                unit_cost_decimal: {kind: 'decimal_string'},
              },
            },
            receipt: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {quantity: {kind: 'decimal_string'}},
              },
            },
          },
        },
      },
    },
    responseSchema: {
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
  }),
  refund: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/issuing/transactions/{transaction}/refund',
    responseSchema: {
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
  }),
});
