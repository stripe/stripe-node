// File generated from our OpenAPI spec

import * as crypto from 'crypto';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Subscriptions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions',
    requestSchema: {
      kind: 'object',
      fields: {
        add_invoice_items: {
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
    responseSchema: {
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
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    responseSchema: {
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
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    requestSchema: {
      kind: 'object',
      fields: {
        add_invoice_items: {
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
    responseSchema: {
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
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions',
    methodType: 'list',
    responseSchema: {
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
  }),
  attachCadence: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/attach_cadence',
    responseSchema: {
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
  }),
  cancel: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    responseSchema: {
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
  }),
  deleteDiscount: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount',
  }),
  migrate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/migrate',
    responseSchema: {
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
  }),
  pause: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/pause',
    responseSchema: {
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
  }),
  resume: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/resume',
    responseSchema: {
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
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/search',
    methodType: 'search',
    responseSchema: {
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
  }),
  serializeBatchMigrate(
    subscription: string,
    params: Record<string, unknown> = {},
    options: {apiVersion?: string; stripeContext?: string} = {}
  ): string {
    const itemId = crypto.randomUUID();
    const stripeVersion =
      options.apiVersion || this._stripe.getApiField('version');

    const item: Record<string, unknown> = {
      id: itemId,
      params: params,
      stripe_version: stripeVersion,
    };
    item.path_params = {subscription: subscription};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
  serializeBatchUpdate(
    subscriptionExposedId: string,
    params: Record<string, unknown> = {},
    options: {apiVersion?: string; stripeContext?: string} = {}
  ): string {
    const itemId = crypto.randomUUID();
    const stripeVersion =
      options.apiVersion || this._stripe.getApiField('version');

    const item: Record<string, unknown> = {
      id: itemId,
      params: params,
      stripe_version: stripeVersion,
    };
    item.path_params = {subscription_exposed_id: subscriptionExposedId};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
});
