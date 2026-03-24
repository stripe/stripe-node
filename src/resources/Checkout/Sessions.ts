// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Sessions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/checkout/sessions',
    requestSchema: {
      kind: 'object',
      fields: {
        line_items: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              price_data: {
                kind: 'object',
                fields: {unit_amount_decimal: {kind: 'decimal_string'}},
              },
            },
          },
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        currency_conversion: {
          kind: 'nullable',
          inner: {kind: 'object', fields: {fx_rate: {kind: 'decimal_string'}}},
        },
        line_items: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  price: {
                    kind: 'nullable',
                    inner: {
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
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/checkout/sessions/{session}',
    responseSchema: {
      kind: 'object',
      fields: {
        currency_conversion: {
          kind: 'nullable',
          inner: {kind: 'object', fields: {fx_rate: {kind: 'decimal_string'}}},
        },
        line_items: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  price: {
                    kind: 'nullable',
                    inner: {
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
        },
      },
    },
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/checkout/sessions/{session}',
    requestSchema: {
      kind: 'object',
      fields: {
        line_items: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              price_data: {
                kind: 'object',
                fields: {unit_amount_decimal: {kind: 'decimal_string'}},
              },
            },
          },
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        currency_conversion: {
          kind: 'nullable',
          inner: {kind: 'object', fields: {fx_rate: {kind: 'decimal_string'}}},
        },
        line_items: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  price: {
                    kind: 'nullable',
                    inner: {
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
        },
      },
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/checkout/sessions',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              currency_conversion: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {fx_rate: {kind: 'decimal_string'}},
                },
              },
              line_items: {
                kind: 'object',
                fields: {
                  data: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        price: {
                          kind: 'nullable',
                          inner: {
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
              },
            },
          },
        },
      },
    },
  }),
  expire: stripeMethod({
    method: 'POST',
    fullPath: '/v1/checkout/sessions/{session}/expire',
    responseSchema: {
      kind: 'object',
      fields: {
        currency_conversion: {
          kind: 'nullable',
          inner: {kind: 'object', fields: {fx_rate: {kind: 'decimal_string'}}},
        },
        line_items: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  price: {
                    kind: 'nullable',
                    inner: {
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
        },
      },
    },
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/checkout/sessions/{session}/line_items',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              price: {
                kind: 'nullable',
                inner: {
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
    },
  }),
});
