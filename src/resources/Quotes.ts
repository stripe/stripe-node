// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Quotes = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes',
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
        computed: {
          kind: 'object',
          fields: {
            upfront: {
              kind: 'object',
              fields: {
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
        status_details: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              stale: {
                kind: 'object',
                fields: {
                  last_reason: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        subscription_changed: {
                          kind: 'object',
                          fields: {
                            previous_subscription: {
                              kind: 'nullable',
                              inner: {
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
                                                  inner: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      flat_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
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
    fullPath: '/v1/quotes/{quote}',
    responseSchema: {
      kind: 'object',
      fields: {
        computed: {
          kind: 'object',
          fields: {
            upfront: {
              kind: 'object',
              fields: {
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
        status_details: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              stale: {
                kind: 'object',
                fields: {
                  last_reason: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        subscription_changed: {
                          kind: 'object',
                          fields: {
                            previous_subscription: {
                              kind: 'nullable',
                              inner: {
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
                                                  inner: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      flat_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
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
    fullPath: '/v1/quotes/{quote}',
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
        computed: {
          kind: 'object',
          fields: {
            upfront: {
              kind: 'object',
              fields: {
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
        status_details: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              stale: {
                kind: 'object',
                fields: {
                  last_reason: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        subscription_changed: {
                          kind: 'object',
                          fields: {
                            previous_subscription: {
                              kind: 'nullable',
                              inner: {
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
                                                  inner: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      flat_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
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
    fullPath: '/v1/quotes',
    methodType: 'list',
    responseSchema: {
      kind: 'object',
      fields: {
        data: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              computed: {
                kind: 'object',
                fields: {
                  upfront: {
                    kind: 'object',
                    fields: {
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
              status_details: {
                kind: 'nullable',
                inner: {
                  kind: 'object',
                  fields: {
                    stale: {
                      kind: 'object',
                      fields: {
                        last_reason: {
                          kind: 'nullable',
                          inner: {
                            kind: 'object',
                            fields: {
                              subscription_changed: {
                                kind: 'object',
                                fields: {
                                  previous_subscription: {
                                    kind: 'nullable',
                                    inner: {
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
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      tiers: {
                                                        kind: 'array',
                                                        element: {
                                                          kind: 'object',
                                                          fields: {
                                                            flat_amount_decimal: {
                                                              kind: 'nullable',
                                                              inner: {
                                                                kind:
                                                                  'decimal_string',
                                                              },
                                                            },
                                                            unit_amount_decimal: {
                                                              kind: 'nullable',
                                                              inner: {
                                                                kind:
                                                                  'decimal_string',
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
  accept: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/accept',
    responseSchema: {
      kind: 'object',
      fields: {
        computed: {
          kind: 'object',
          fields: {
            upfront: {
              kind: 'object',
              fields: {
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
        status_details: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              stale: {
                kind: 'object',
                fields: {
                  last_reason: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        subscription_changed: {
                          kind: 'object',
                          fields: {
                            previous_subscription: {
                              kind: 'nullable',
                              inner: {
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
                                                  inner: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      flat_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
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
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/cancel',
    responseSchema: {
      kind: 'object',
      fields: {
        computed: {
          kind: 'object',
          fields: {
            upfront: {
              kind: 'object',
              fields: {
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
        status_details: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              stale: {
                kind: 'object',
                fields: {
                  last_reason: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        subscription_changed: {
                          kind: 'object',
                          fields: {
                            previous_subscription: {
                              kind: 'nullable',
                              inner: {
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
                                                  inner: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      flat_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
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
  finalizeQuote: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/finalize',
    responseSchema: {
      kind: 'object',
      fields: {
        computed: {
          kind: 'object',
          fields: {
            upfront: {
              kind: 'object',
              fields: {
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
        status_details: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              stale: {
                kind: 'object',
                fields: {
                  last_reason: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        subscription_changed: {
                          kind: 'object',
                          fields: {
                            previous_subscription: {
                              kind: 'nullable',
                              inner: {
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
                                                  inner: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      flat_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
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
  listPreviewInvoiceLines: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/preview_invoices/{preview_invoice}/lines',
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
  listComputedUpfrontLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/computed_upfront_line_items',
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
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/line_items',
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
  listLines: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/lines',
    methodType: 'list',
  }),
  listPreviewInvoices: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/preview_invoices',
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
  listPreviewSubscriptionSchedules: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/preview_subscription_schedules',
    methodType: 'list',
  }),
  markDraft: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/mark_draft',
    responseSchema: {
      kind: 'object',
      fields: {
        computed: {
          kind: 'object',
          fields: {
            upfront: {
              kind: 'object',
              fields: {
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
        status_details: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              stale: {
                kind: 'object',
                fields: {
                  last_reason: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        subscription_changed: {
                          kind: 'object',
                          fields: {
                            previous_subscription: {
                              kind: 'nullable',
                              inner: {
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
                                                  inner: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      flat_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
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
  markStale: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/mark_stale',
    responseSchema: {
      kind: 'object',
      fields: {
        computed: {
          kind: 'object',
          fields: {
            upfront: {
              kind: 'object',
              fields: {
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
        status_details: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              stale: {
                kind: 'object',
                fields: {
                  last_reason: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        subscription_changed: {
                          kind: 'object',
                          fields: {
                            previous_subscription: {
                              kind: 'nullable',
                              inner: {
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
                                                  inner: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      flat_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
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
  pdf: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quotes/{quote}/pdf',
    host: 'files.stripe.com',
    streaming: true,
  }),
  reestimate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/quotes/{quote}/reestimate',
    responseSchema: {
      kind: 'object',
      fields: {
        computed: {
          kind: 'object',
          fields: {
            upfront: {
              kind: 'object',
              fields: {
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
        status_details: {
          kind: 'nullable',
          inner: {
            kind: 'object',
            fields: {
              stale: {
                kind: 'object',
                fields: {
                  last_reason: {
                    kind: 'nullable',
                    inner: {
                      kind: 'object',
                      fields: {
                        subscription_changed: {
                          kind: 'object',
                          fields: {
                            previous_subscription: {
                              kind: 'nullable',
                              inner: {
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
                                                  inner: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      flat_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
                                                        },
                                                      },
                                                      unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: {
                                                          kind:
                                                            'decimal_string',
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
