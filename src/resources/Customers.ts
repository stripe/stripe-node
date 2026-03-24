// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Customers = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers',
    responseSchema: {
      kind: 'object',
      fields: {
        subscriptions: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  items: {
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
                },
              },
            },
          },
        },
      },
    },
  }),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/customers/{customer}'}),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers/{customer}',
    responseSchema: {
      kind: 'object',
      fields: {
        subscriptions: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  items: {
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
    fullPath: '/v1/customers',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              subscriptions: {
                kind: 'object',
                fields: {
                  data: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        items: {
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
                                                    inner: {
                                                      kind: 'decimal_string',
                                                    },
                                                  },
                                                  unit_amount_decimal: {
                                                    kind: 'nullable',
                                                    inner: {
                                                      kind: 'decimal_string',
                                                    },
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
          },
        },
      },
    },
  }),
  del: stripeMethod({method: 'DELETE', fullPath: '/v1/customers/{customer}'}),
  createBalanceTransaction: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers/{customer}/balance_transactions',
  }),
  createFundingInstructions: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers/{customer}/funding_instructions',
  }),
  createSource: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers/{customer}/sources',
  }),
  createTaxId: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers/{customer}/tax_ids',
  }),
  deleteDiscount: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/customers/{customer}/discount',
  }),
  deleteSource: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/customers/{customer}/sources/{id}',
  }),
  deleteTaxId: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/customers/{customer}/tax_ids/{id}',
  }),
  listBalanceTransactions: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/balance_transactions',
    methodType: 'list',
  }),
  listCashBalanceTransactions: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/cash_balance_transactions',
    methodType: 'list',
  }),
  listPaymentMethods: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/payment_methods',
    methodType: 'list',
  }),
  listSources: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/sources',
    methodType: 'list',
  }),
  listTaxIds: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/tax_ids',
    methodType: 'list',
  }),
  retrieveBalanceTransaction: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
  }),
  retrieveCashBalance: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/cash_balance',
  }),
  retrieveCashBalanceTransaction: stripeMethod({
    method: 'GET',
    fullPath:
      '/v1/customers/{customer}/cash_balance_transactions/{transaction}',
  }),
  retrievePaymentMethod: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/payment_methods/{payment_method}',
  }),
  retrieveSource: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/sources/{id}',
  }),
  retrieveTaxId: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/{customer}/tax_ids/{id}',
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/customers/search',
    methodType: 'search',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              subscriptions: {
                kind: 'object',
                fields: {
                  data: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        items: {
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
                                                    inner: {
                                                      kind: 'decimal_string',
                                                    },
                                                  },
                                                  unit_amount_decimal: {
                                                    kind: 'nullable',
                                                    inner: {
                                                      kind: 'decimal_string',
                                                    },
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
          },
        },
      },
    },
  }),
  updateBalanceTransaction: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
  }),
  updateCashBalance: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers/{customer}/cash_balance',
  }),
  updateSource: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers/{customer}/sources/{id}',
  }),
  verifySource: stripeMethod({
    method: 'POST',
    fullPath: '/v1/customers/{customer}/sources/{id}/verify',
  }),
});
