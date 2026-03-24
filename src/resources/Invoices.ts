// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Invoices = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              lines: {
                kind: 'object',
                fields: {
                  data: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        pricing: {
                          kind: 'nullable',
                          inner: {
                            kind: 'object',
                            fields: {
                              unit_amount_decimal: {
                                kind: 'nullable',
                                inner: {kind: 'decimal_string'},
                              },
                            },
                          },
                        },
                        quantity_decimal: {
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
  del: stripeMethod({method: 'DELETE', fullPath: '/v1/invoices/{invoice}'}),
  addLines: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/add_lines',
    requestSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              price_data: {
                kind: 'object',
                fields: {unit_amount_decimal: {kind: 'decimal_string'}},
              },
              quantity_decimal: {kind: 'decimal_string'},
            },
          },
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  attachPayment: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/attach_payment',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  createPreview: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/create_preview',
    requestSchema: {
      kind: 'object',
      fields: {
        invoice_items: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              price_data: {
                kind: 'object',
                fields: {unit_amount_decimal: {kind: 'decimal_string'}},
              },
              quantity_decimal: {kind: 'decimal_string'},
              unit_amount_decimal: {kind: 'decimal_string'},
            },
          },
        },
        schedule_details: {
          kind: 'object',
          fields: {
            phases: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  add_invoice_items: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        price_data: {
                          kind: 'object',
                          fields: {
                            unit_amount_decimal: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                  },
                  items: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        price_data: {
                          kind: 'object',
                          fields: {
                            unit_amount_decimal: {kind: 'decimal_string'},
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
        subscription_details: {
          kind: 'object',
          fields: {
            items: {
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
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  finalizeInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/finalize',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}/lines',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              pricing: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    unit_amount_decimal: {
                      kind: 'nullable',
                      inner: {kind: 'decimal_string'},
                    },
                  },
                },
              },
              quantity_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
      },
    },
  }),
  markUncollectible: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/mark_uncollectible',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  pay: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/pay',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  removeLines: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/remove_lines',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/search',
    methodType: 'search',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              lines: {
                kind: 'object',
                fields: {
                  data: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {
                        pricing: {
                          kind: 'nullable',
                          inner: {
                            kind: 'object',
                            fields: {
                              unit_amount_decimal: {
                                kind: 'nullable',
                                inner: {kind: 'decimal_string'},
                              },
                            },
                          },
                        },
                        quantity_decimal: {
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
  sendInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/send',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  updateLines: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/update_lines',
    requestSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              price_data: {
                kind: 'object',
                fields: {unit_amount_decimal: {kind: 'decimal_string'}},
              },
              quantity_decimal: {kind: 'decimal_string'},
            },
          },
        },
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
  updateLineItem: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/lines/{line_item_id}',
    requestSchema: {
      kind: 'object',
      fields: {
        price_data: {
          kind: 'object',
          fields: {unit_amount_decimal: {kind: 'decimal_string'}},
        },
        quantity_decimal: {kind: 'decimal_string'},
      },
    },
    responseSchema: {
      kind: 'object',
      fields: {
        pricing: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              unit_amount_decimal: {
                kind: 'nullable',
                inner: {kind: 'decimal_string'},
              },
            },
          },
        },
        quantity_decimal: {kind: 'nullable', inner: {kind: 'decimal_string'}},
      },
    },
  }),
  voidInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/void',
    responseSchema: {
      kind: 'object',
      fields: {
        lines: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  pricing: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        unit_amount_decimal: {
                          kind: 'nullable',
                          inner: {kind: 'decimal_string'},
                        },
                      },
                    },
                  },
                  quantity_decimal: {
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
});
