// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {LineItem} from './LineItems.js';
import {Discount} from './Discounts.js';
import {Application, DeletedApplication} from './Applications.js';
import {Customer, DeletedCustomer} from './Customers.js';
import {TaxRate} from './TaxRates.js';
import {Invoice, DeletedInvoice} from './Invoices.js';
import {Account} from './Accounts.js';
import {Subscription} from './Subscriptions.js';
import {SubscriptionSchedule} from './SubscriptionSchedules.js';
import * as TestHelpers from './TestHelpers/index.js';
import {
  Emptyable,
  MetadataParam,
  Decimal,
  PaginationParams,
  Metadata,
} from '../shared.js';
import {
  RequestOptions,
  ApiListPromise,
  Response,
  ApiList,
  StripeStreamResponse,
} from '../lib.js';
const stripeMethod = StripeResource.method;
export class QuoteResource extends StripeResource {
  /**
   * Returns a list of your quotes.
   */
  list(
    params?: QuoteListParams,
    options?: RequestOptions
  ): ApiListPromise<Quote>;
  list(options?: RequestOptions): ApiListPromise<Quote>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
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
    }).call(this, ...args);
  }

  /**
   * A quote models prices and services for a customer. Default options for header, description, footer, and expires_at can be set in the dashboard via the [quote template](https://dashboard.stripe.com/settings/billing/quote).
   */
  create(
    params?: QuoteCreateParams,
    options?: RequestOptions
  ): Promise<Response<Quote>>;
  create(options?: RequestOptions): Promise<Response<Quote>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
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
        },
      },
    }).call(this, ...args);
  }

  /**
   * Retrieves the quote with the given ID.
   */
  retrieve(
    id: string,
    params?: QuoteRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Quote>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Quote>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
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
