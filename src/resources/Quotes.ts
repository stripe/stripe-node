// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {InvoiceLineItem} from './InvoiceLineItems.js';
import {LineItem} from './LineItems.js';
import {QuoteLine} from './QuoteLines.js';
import {QuotePreviewInvoice} from './QuotePreviewInvoices.js';
import {QuotePreviewSubscriptionSchedule} from './QuotePreviewSubscriptionSchedules.js';
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

export class QuoteResource extends StripeResource {
  /**
   * Returns a list of your quotes.
   */
  list(
    params?: QuoteListParams,
    options?: RequestOptions
  ): ApiListPromise<Quote> {
    return this._makeRequest('GET', '/v1/quotes', params, options, {
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
                                                                kind:
                                                                  'nullable',
                                                                inner: {
                                                                  kind:
                                                                    'decimal_string',
                                                                },
                                                              },
                                                              unit_amount_decimal: {
                                                                kind:
                                                                  'nullable',
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
    }) as any;
  }
  /**
   * A quote models prices and services for a customer. Default options for header, description, footer, and expires_at can be set in the dashboard via the [quote template](https://dashboard.stripe.com/settings/billing/quote).
   */
  create(
    params?: QuoteCreateParams,
    options?: RequestOptions
  ): Promise<Response<Quote>> {
    return this._makeRequest('POST', '/v1/quotes', params, options, {
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
    }) as any;
  }
  /**
   * Retrieves the quote with the given ID.
   */
  retrieve(
    id: string,
    params?: QuoteRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Quote>> {
    return this._makeRequest('GET', `/v1/quotes/${id}`, params, options, {
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
    }) as any;
  }
  /**
   * A quote models prices and services for a customer.
   */
  update(
    id: string,
    params?: QuoteUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Quote>> {
    return this._makeRequest('POST', `/v1/quotes/${id}`, params, options, {
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
    }) as any;
  }
  /**
   * Accepts the specified quote.
   */
  accept(
    id: string,
    params?: QuoteAcceptParams,
    options?: RequestOptions
  ): Promise<Response<Quote>> {
    return this._makeRequest(
      'POST',
      `/v1/quotes/${id}/accept`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Cancels the quote.
   */
  cancel(
    id: string,
    params?: QuoteCancelParams,
    options?: RequestOptions
  ): Promise<Response<Quote>> {
    return this._makeRequest(
      'POST',
      `/v1/quotes/${id}/cancel`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Finalizes the quote.
   */
  finalizeQuote(
    id: string,
    params?: QuoteFinalizeQuoteParams,
    options?: RequestOptions
  ): Promise<Response<Quote>> {
    return this._makeRequest(
      'POST',
      `/v1/quotes/${id}/finalize`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Converts a stale quote to draft.
   */
  markDraft(
    id: string,
    params?: QuoteMarkDraftParams,
    options?: RequestOptions
  ): Promise<Response<Quote>> {
    return this._makeRequest(
      'POST',
      `/v1/quotes/${id}/mark_draft`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Converts a draft or open quote to stale.
   */
  markStale(
    id: string,
    params?: QuoteMarkStaleParams,
    options?: RequestOptions
  ): Promise<Response<Quote>> {
    return this._makeRequest(
      'POST',
      `/v1/quotes/${id}/mark_stale`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Recompute the upcoming invoice estimate for the quote.
   */
  reestimate(
    id: string,
    params?: QuoteReestimateParams,
    options?: RequestOptions
  ): Promise<Response<Quote>> {
    return this._makeRequest(
      'POST',
      `/v1/quotes/${id}/reestimate`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Download the PDF for a finalized quote. Explanation for special handling can be found [here](https://docs.stripe.com/quotes/overview#quote_pdf)
   */
  pdf(
    id: string,
    params?: QuotePdfParams,
    options?: RequestOptions
  ): Promise<StripeStreamResponse> {
    return this._makeRequest('GET', `/v1/quotes/${id}/pdf`, params, options, {
      apiBase: 'files',
      streaming: true,
    }) as any;
  }
  /**
   * Preview the invoice line items that would be generated by accepting the quote.
   */
  listPreviewInvoiceLines(
    quoteId: string,
    id: string,
    params?: QuoteListPreviewInvoiceLinesParams,
    options?: RequestOptions
  ): ApiListPromise<InvoiceLineItem> {
    return this._makeRequest(
      'GET',
      `/v1/quotes/${quoteId}/preview_invoices/${id}/lines`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * When retrieving a quote, there is an includable [computed.upfront.line_items](https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items) property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.
   */
  listComputedUpfrontLineItems(
    id: string,
    params?: QuoteListComputedUpfrontLineItemsParams,
    options?: RequestOptions
  ): ApiListPromise<LineItem> {
    return this._makeRequest(
      'GET',
      `/v1/quotes/${id}/computed_upfront_line_items`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Retrieves a paginated list of lines for a quote. These lines describe changes that will be used to create new subscription schedules or update existing subscription schedules when the quote is accepted.
   */
  listLines(
    id: string,
    params?: QuoteListLinesParams,
    options?: RequestOptions
  ): ApiListPromise<QuoteLine> {
    return this._makeRequest('GET', `/v1/quotes/${id}/lines`, params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * When retrieving a quote, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
   */
  listLineItems(
    id: string,
    params?: QuoteListLineItemsParams,
    options?: RequestOptions
  ): ApiListPromise<LineItem> {
    return this._makeRequest(
      'GET',
      `/v1/quotes/${id}/line_items`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Preview the invoices that would be generated by accepting the quote.
   */
  listPreviewInvoices(
    id: string,
    params?: QuoteListPreviewInvoicesParams,
    options?: RequestOptions
  ): ApiListPromise<QuotePreviewInvoice> {
    return this._makeRequest(
      'GET',
      `/v1/quotes/${id}/preview_invoices`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Preview the schedules that would be generated by accepting the quote
   */
  listPreviewSubscriptionSchedules(
    id: string,
    params?: QuoteListPreviewSubscriptionSchedulesParams,
    options?: RequestOptions
  ): ApiListPromise<QuotePreviewSubscriptionSchedule> {
    return this._makeRequest(
      'GET',
      `/v1/quotes/${id}/preview_subscription_schedules`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
}
export interface Quote {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'quote';

  /**
   * Allow quote lines to have `starts_at` in the past if collection is paused between `starts_at` and now.
   */
  allow_backdated_lines?: boolean | null;

  /**
   * Total before any discounts or taxes are applied.
   */
  amount_subtotal: number;

  /**
   * Total after discounts and taxes are applied.
   */
  amount_total: number;

  /**
   * ID of the Connect Application that created the quote.
   */
  application: string | Application | DeletedApplication | null;

  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Only applicable if there are no line items with recurring prices on the quote.
   */
  application_fee_amount: number | null;

  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. Only applicable if there are line items with recurring prices on the quote.
   */
  application_fee_percent: number | null;

  automatic_tax: Quote.AutomaticTax;

  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collection_method: Quote.CollectionMethod;

  computed: Quote.Computed;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string | null;

  /**
   * The customer who received this quote. A customer is required to finalize the quote. Once specified, you can't change it.
   */
  customer: string | Customer | DeletedCustomer | null;

  /**
   * The account representing the customer who received this quote. A customer or account is required to finalize the quote. Once specified, you can't change it.
   */
  customer_account: string | null;

  /**
   * The tax rates applied to this quote.
   */
  default_tax_rates?: Array<string | TaxRate>;

  /**
   * A description that will be displayed on the quote PDF.
   */
  description: string | null;

  /**
   * The discounts applied to this quote.
   */
  discounts: Array<string | Discount>;

  /**
   * The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expires_at: number;

  /**
   * A footer that will be displayed on the quote PDF.
   */
  footer: string | null;

  /**
   * Details of the quote that was cloned. See the [cloning documentation](https://docs.stripe.com/quotes/clone) for more details.
   */
  from_quote: Quote.FromQuote | null;

  /**
   * A header that will be displayed on the quote PDF.
   */
  header: string | null;

  /**
   * The invoice that was created from this quote.
   */
  invoice: string | Invoice | DeletedInvoice | null;

  invoice_settings: Quote.InvoiceSettings;

  /**
   * A list of items the customer is being quoted for.
   */
  line_items?: ApiList<LineItem>;

  /**
   * A list of [quote lines](https://docs.stripe.com/api/quote_lines) on the quote. These lines describe changes, in the order provided, that will be used to create new subscription schedules or update existing subscription schedules when the quote is accepted.
   */
  lines?: Array<string> | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://docs.stripe.com/quotes/overview#finalize).
   */
  number: string | null;

  /**
   * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
   */
  on_behalf_of: string | Account | null;

  /**
   * The status of the quote.
   */
  status: Quote.Status;

  /**
   * Details on when and why a quote has been marked as stale or canceled.
   */
  status_details?: Quote.StatusDetails | null;

  status_transitions: Quote.StatusTransitions;

  /**
   * The subscription that was created or updated from this quote.
   */
  subscription: string | Subscription | null;

  subscription_data: Quote.SubscriptionData;

  /**
   * List representing overrides for `subscription_data` configurations for specific subscription schedules.
   */
  subscription_data_overrides?: Array<Quote.SubscriptionDataOverride> | null;

  /**
   * The subscription schedule that was created or updated from this quote.
   */
  subscription_schedule: string | SubscriptionSchedule | null;

  /**
   * The subscription schedules that were created or updated from this quote.
   */
  subscription_schedules?: Array<Quote.SubscriptionSchedule> | null;

  /**
   * ID of the test clock this quote belongs to.
   */
  test_clock: string | TestHelpers.TestClock | null;

  total_details: Quote.TotalDetails;

  /**
   * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices.
   */
  transfer_data: Quote.TransferData | null;
}
export namespace Quote {
  export interface AutomaticTax {
    /**
     * Automatically calculate taxes
     */
    enabled: boolean;

    /**
     * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
     */
    liability: AutomaticTax.Liability | null;

    /**
     * The tax provider powering automatic tax.
     */
    provider: string | null;

    /**
     * The status of the most recent automated tax calculation for this quote.
     */
    status: AutomaticTax.Status | null;
  }

  export type CollectionMethod = 'charge_automatically' | 'send_invoice';

  export interface Computed {
    /**
     * Details of the most recent reestimate of the quote's preview schedules and upcoming invoices, including the status of Stripe's calculation.
     */
    last_reestimation_details?: Computed.LastReestimationDetails | null;

    /**
     * The definitive totals and line items the customer will be charged on a recurring basis. Takes into account the line items with recurring prices and discounts with `duration=forever` coupons only. Defaults to `null` if no inputted line items with recurring prices.
     */
    recurring: Computed.Recurring | null;

    /**
     * The time at which the quote's estimated schedules and upcoming invoices were generated.
     */
    updated_at?: number | null;

    upfront: Computed.Upfront;
  }

  export interface FromQuote {
    /**
     * Whether this quote is a revision of a different quote.
     */
    is_revision: boolean;

    /**
     * The quote that was cloned.
     */
    quote: string | Quote;
  }

  export interface InvoiceSettings {
    /**
     * Number of days within which a customer must pay invoices generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
     */
    days_until_due: number | null;

    issuer: InvoiceSettings.Issuer;
  }

  export type Status =
    | 'accepted'
    | 'accepting'
    | 'canceled'
    | 'draft'
    | 'open'
    | 'stale';

  export interface StatusDetails {
    canceled?: StatusDetails.Canceled;

    stale?: StatusDetails.Stale;
  }

  export interface StatusTransitions {
    /**
     * The time that the quote was accepted. Measured in seconds since Unix epoch.
     */
    accepted_at: number | null;

    /**
     * The time that the quote was canceled. Measured in seconds since Unix epoch.
     */
    canceled_at: number | null;

    /**
     * The time that the quote was finalized. Measured in seconds since Unix epoch.
     */
    finalized_at: number | null;
  }

  export interface SubscriptionData {
    /**
     * Describes the period to bill for upon accepting the quote.
     */
    bill_on_acceptance?: SubscriptionData.BillOnAcceptance | null;

    /**
     * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
     */
    billing_behavior?: SubscriptionData.BillingBehavior;

    /**
     * Whether the subscription will always start a new billing period when the quote is accepted.
     */
    billing_cycle_anchor?: 'reset' | null;

    /**
     * The billing mode of the quote.
     */
    billing_mode: SubscriptionData.BillingMode;

    /**
     * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description: string | null;

    /**
     * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. This date is ignored if it is in the past when the quote is accepted. Measured in seconds since the Unix epoch.
     */
    effective_date: number | null;

    /**
     * Behavior of the subscription schedule and underlying subscription when it ends.
     */
    end_behavior?: SubscriptionData.EndBehavior | null;

    /**
     * The id of the subscription that will be updated when the quote is accepted.
     */
    from_subscription?: string | Subscription | null;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
     */
    metadata: Metadata | null;

    /**
     * If specified, the invoicing for the given billing cycle iterations will be processed when the quote is accepted. Cannot be used with `effective_date`.
     */
    prebilling?: SubscriptionData.Prebilling | null;

    /**
     * Determines how to handle [prorations](https://docs.stripe.com/subscriptions/billing-cycle#prorations) when the quote is accepted.
     */
    proration_behavior?: SubscriptionData.ProrationBehavior;

    /**
     * Integer representing the number of trial period days before the customer is charged for the first time.
     */
    trial_period_days: number | null;
  }

  export interface SubscriptionDataOverride {
    applies_to: SubscriptionDataOverride.AppliesTo;

    /**
     * Describes the period to bill for upon accepting the quote.
     */
    bill_on_acceptance?: SubscriptionDataOverride.BillOnAcceptance | null;

    /**
     * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
     */
    billing_behavior?: SubscriptionDataOverride.BillingBehavior;

    /**
     * The customer who received this quote. A customer is required to finalize the quote. Once specified, you can't change it.
     */
    customer: string | null;

    /**
     * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description: string | null;

    /**
     * Behavior of the subscription schedule and underlying subscription when it ends.
     */
    end_behavior?: SubscriptionDataOverride.EndBehavior | null;

    /**
     * Determines how to handle [prorations](https://docs.stripe.com/subscriptions/billing-cycle#prorations) when the quote is accepted.
     */
    proration_behavior?: SubscriptionDataOverride.ProrationBehavior | null;
  }

  export interface SubscriptionSchedule {
    applies_to: SubscriptionSchedule.AppliesTo;

    /**
     * The subscription schedule that was created or updated from this quote.
     */
    subscription_schedule: string;
  }

  export interface TotalDetails {
    /**
     * This is the sum of all the discounts.
     */
    amount_discount: number;

    /**
     * This is the sum of all the shipping amounts.
     */
    amount_shipping: number | null;

    /**
     * This is the sum of all the tax amounts.
     */
    amount_tax: number;

    breakdown?: TotalDetails.Breakdown;
  }

  export interface TransferData {
    /**
     * The amount in cents (or local equivalent) that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination.
     */
    amount: number | null;

    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount will be transferred to the destination.
     */
    amount_percent: number | null;

    /**
     * The account where funds from the payment will be transferred to upon payment success.
     */
    destination: string | Account;
  }

  export namespace AutomaticTax {
    export interface Liability {
      /**
       * The connected account being referenced when `type` is `account`.
       */
      account?: string | Account;

      /**
       * Type of the account referenced.
       */
      type: Liability.Type;
    }

    export type Status = 'complete' | 'failed' | 'requires_location_inputs';

    export namespace Liability {
      export type Type = 'account' | 'self';
    }
  }

  export namespace Computed {
    export interface LastReestimationDetails {
      /**
       * When `status` is `failed`, provides details about the quote reestimation failure.
       */
      failed: LastReestimationDetails.Failed | null;

      /**
       * Latest status of the reestimation.
       */
      status: LastReestimationDetails.Status;
    }

    export interface Recurring {
      /**
       * Total before any discounts or taxes are applied.
       */
      amount_subtotal: number;

      /**
       * Total after discounts and taxes are applied.
       */
      amount_total: number;

      /**
       * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
       */
      interval: Recurring.Interval;

      /**
       * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
       */
      interval_count: number;

      total_details: Recurring.TotalDetails;
    }

    export interface Upfront {
      /**
       * Total before any discounts or taxes are applied.
       */
      amount_subtotal: number;

      /**
       * Total after discounts and taxes are applied.
       */
      amount_total: number;

      /**
       * The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice.
       */
      line_items?: ApiList<LineItem>;

      total_details: Upfront.TotalDetails;
    }

    export namespace LastReestimationDetails {
      export interface Failed {
        /**
         * The failure `code` is more granular than the `reason` provided and may correspond to a Stripe error code. For automation errors, this field is one of: `reverse_api_failure`, `reverse_api_deadline_exceeeded`, or `reverse_api_response_validation_error`, which are Stripe error codes and map to the error `message` field.
         */
        failure_code: string | null;

        /**
         * Information derived from the `failure_code` or a freeform message that explains the error as a human-readable English string. For example, "margin ID is not a valid ID".
         */
        message: string | null;

        /**
         * The reason the reestimation failed.
         */
        reason: Failed.Reason;
      }

      export type Status = 'failed' | 'in_progress' | 'succeeded';

      export namespace Failed {
        export type Reason = 'automation_failure' | 'internal_error';
      }
    }

    export namespace Recurring {
      export type Interval = 'day' | 'month' | 'week' | 'year';

      export interface TotalDetails {
        /**
         * This is the sum of all the discounts.
         */
        amount_discount: number;

        /**
         * This is the sum of all the shipping amounts.
         */
        amount_shipping: number | null;

        /**
         * This is the sum of all the tax amounts.
         */
        amount_tax: number;

        breakdown?: TotalDetails.Breakdown;
      }

      export namespace TotalDetails {
        export interface Breakdown {
          /**
           * The aggregated discounts.
           */
          discounts: Array<Breakdown.Discount>;

          /**
           * The aggregated tax amounts by rate.
           */
          taxes: Array<Breakdown.Tax>;
        }

        export namespace Breakdown {
          export interface Discount {
            /**
             * The amount discounted.
             */
            amount: number;

            /**
             * A discount represents the actual application of a [coupon](https://api.stripe.com#coupons) or [promotion code](https://api.stripe.com#promotion_codes).
             * It contains information about when the discount began, when it will end, and what it is applied to.
             *
             * Related guide: [Applying discounts to subscriptions](https://docs.stripe.com/billing/subscriptions/discounts)
             */
            discount: Discount;
          }

          export interface Tax {
            /**
             * Amount of tax applied for this rate.
             */
            amount: number;

            /**
             * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
             *
             * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
             */
            rate: TaxRate;

            /**
             * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
             */
            taxability_reason: Tax.TaxabilityReason | null;

            /**
             * The amount on which tax is calculated, in cents (or local equivalent).
             */
            taxable_amount: number | null;
          }

          export namespace Tax {
            export type TaxabilityReason =
              | 'customer_exempt'
              | 'not_collecting'
              | 'not_subject_to_tax'
              | 'not_supported'
              | 'portion_product_exempt'
              | 'portion_reduced_rated'
              | 'portion_standard_rated'
              | 'product_exempt'
              | 'product_exempt_holiday'
              | 'proportionally_rated'
              | 'reduced_rated'
              | 'reverse_charge'
              | 'standard_rated'
              | 'taxable_basis_reduced'
              | 'zero_rated';
          }
        }
      }
    }

    export namespace Upfront {
      export interface TotalDetails {
        /**
         * This is the sum of all the discounts.
         */
        amount_discount: number;

        /**
         * This is the sum of all the shipping amounts.
         */
        amount_shipping: number | null;

        /**
         * This is the sum of all the tax amounts.
         */
        amount_tax: number;

        breakdown?: TotalDetails.Breakdown;
      }

      export namespace TotalDetails {
        export interface Breakdown {
          /**
           * The aggregated discounts.
           */
          discounts: Array<Breakdown.Discount>;

          /**
           * The aggregated tax amounts by rate.
           */
          taxes: Array<Breakdown.Tax>;
        }

        export namespace Breakdown {
          export interface Discount {
            /**
             * The amount discounted.
             */
            amount: number;

            /**
             * A discount represents the actual application of a [coupon](https://api.stripe.com#coupons) or [promotion code](https://api.stripe.com#promotion_codes).
             * It contains information about when the discount began, when it will end, and what it is applied to.
             *
             * Related guide: [Applying discounts to subscriptions](https://docs.stripe.com/billing/subscriptions/discounts)
             */
            discount: Discount;
          }

          export interface Tax {
            /**
             * Amount of tax applied for this rate.
             */
            amount: number;

            /**
             * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
             *
             * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
             */
            rate: TaxRate;

            /**
             * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
             */
            taxability_reason: Tax.TaxabilityReason | null;

            /**
             * The amount on which tax is calculated, in cents (or local equivalent).
             */
            taxable_amount: number | null;
          }

          export namespace Tax {
            export type TaxabilityReason =
              | 'customer_exempt'
              | 'not_collecting'
              | 'not_subject_to_tax'
              | 'not_supported'
              | 'portion_product_exempt'
              | 'portion_reduced_rated'
              | 'portion_standard_rated'
              | 'product_exempt'
              | 'product_exempt_holiday'
              | 'proportionally_rated'
              | 'reduced_rated'
              | 'reverse_charge'
              | 'standard_rated'
              | 'taxable_basis_reduced'
              | 'zero_rated';
          }
        }
      }
    }
  }

  export namespace InvoiceSettings {
    export interface Issuer {
      /**
       * The connected account being referenced when `type` is `account`.
       */
      account?: string | Account;

      /**
       * Type of the account referenced.
       */
      type: Issuer.Type;
    }

    export namespace Issuer {
      export type Type = 'account' | 'self';
    }
  }

  export namespace StatusDetails {
    export interface Canceled {
      /**
       * The reason this quote was marked as canceled.
       */
      reason: Canceled.Reason | null;

      /**
       * Time at which the quote was marked as canceled. Measured in seconds since the Unix epoch.
       */
      transitioned_at: number | null;
    }

    export interface Stale {
      /**
       * Time at which the quote expires. Measured in seconds since the Unix epoch.
       */
      expires_at: number | null;

      /**
       * The most recent reason this quote was marked as stale.
       */
      last_reason: Stale.LastReason | null;

      /**
       * Time at which the stale reason was updated. Measured in seconds since the Unix epoch.
       */
      last_updated_at: number | null;

      /**
       * Time at which the quote was marked as stale. Measured in seconds since the Unix epoch.
       */
      transitioned_at: number | null;
    }

    export namespace Canceled {
      export type Reason =
        | 'canceled'
        | 'quote_accepted'
        | 'quote_expired'
        | 'quote_superseded'
        | 'subscription_canceled';
    }

    export namespace Stale {
      export interface LastReason {
        /**
         * The ID of the line that is invalid if the stale reason type is `line_invalid`.
         */
        line_invalid?: string;

        /**
         * The IDs of the lines that are invalid if the stale reason type is `lines_invalid`.
         */
        lines_invalid?: Array<LastReason.LinesInvalid>;

        /**
         * The user supplied mark stale reason.
         */
        marked_stale?: string | null;

        /**
         * The ID of the subscription that was canceled.
         */
        subscription_canceled?: string;

        subscription_changed?: LastReason.SubscriptionChanged;

        /**
         * The ID of the subscription that was expired.
         */
        subscription_expired?: string;

        /**
         * The ID of the subscription schedule that was canceled.
         */
        subscription_schedule_canceled?: string;

        subscription_schedule_changed?: LastReason.SubscriptionScheduleChanged;

        /**
         * The ID of the subscription schedule that was released.
         */
        subscription_schedule_released?: string;

        /**
         * The reason the quote was marked as stale.
         */
        type: LastReason.Type | null;
      }

      export namespace LastReason {
        export interface LinesInvalid {
          /**
           * The timestamp at which the lines were marked as invalid.
           */
          invalid_at: number;

          /**
           * The list of lines that became invalid at the given timestamp.
           */
          lines: Array<string>;
        }

        export interface SubscriptionChanged {
          /**
           * The subscription's state before the quote was marked as stale.
           */
          previous_subscription: Subscription | null;
        }

        export interface SubscriptionScheduleChanged {
          /**
           * The subscription schedule's state before the quote was marked as stale.
           */
          previous_subscription_schedule: SubscriptionSchedule | null;
        }

        export type Type =
          | 'accept_failed_validations'
          | 'bill_on_acceptance_invalid'
          | 'line_invalid'
          | 'lines_invalid'
          | 'marked_stale'
          | 'subscription_canceled'
          | 'subscription_changed'
          | 'subscription_expired'
          | 'subscription_schedule_canceled'
          | 'subscription_schedule_changed'
          | 'subscription_schedule_released';
      }
    }
  }

  export namespace SubscriptionData {
    export interface BillOnAcceptance {
      /**
       * The start of the period to bill from when the Quote is accepted.
       */
      bill_from: BillOnAcceptance.BillFrom | null;

      /**
       * The end of the period to bill until when the Quote is accepted.
       */
      bill_until: BillOnAcceptance.BillUntil | null;
    }

    export type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

    export interface BillingMode {
      flexible?: BillingMode.Flexible;

      /**
       * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
       */
      type: BillingMode.Type;
    }

    export type EndBehavior = 'cancel' | 'release';

    export interface Prebilling {
      iterations: number;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export namespace BillingMode {
      export interface Flexible {
        /**
         * Controls how invoices and invoice items display proration amounts and discount amounts.
         */
        proration_discounts?: Flexible.ProrationDiscounts;
      }

      export type Type = 'classic' | 'flexible';

      export namespace Flexible {
        export type ProrationDiscounts = 'included' | 'itemized';
      }
    }

    export namespace BillOnAcceptance {
      export interface BillFrom {
        /**
         * The materialized time.
         */
        computed: number | null;

        /**
         * The timestamp the given line starts at.
         */
        line_starts_at: BillFrom.LineStartsAt | null;

        /**
         * A precise Unix timestamp.
         */
        timestamp: number | null;

        /**
         * The type of method to specify the `bill_from` time.
         */
        type: BillFrom.Type;
      }

      export interface BillUntil {
        /**
         * The materialized time.
         */
        computed: number | null;

        /**
         * Time span for the quote line starting from the `starts_at` date.
         */
        duration: BillUntil.Duration | null;

        /**
         * The timestamp the given line ends at.
         */
        line_ends_at: BillUntil.LineEndsAt | null;

        /**
         * A precise Unix timestamp.
         */
        timestamp: number | null;

        /**
         * The type of method to specify the `bill_until` time.
         */
        type: BillUntil.Type;
      }

      export namespace BillFrom {
        export interface LineStartsAt {
          /**
           * Unique identifier for the object.
           */
          id: string;
        }

        export type Type =
          | 'line_starts_at'
          | 'now'
          | 'pause_collection_start'
          | 'quote_acceptance_date'
          | 'timestamp';
      }

      export namespace BillUntil {
        export interface Duration {
          /**
           * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
           */
          interval: Duration.Interval;

          /**
           * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
           */
          interval_count: number;
        }

        export interface LineEndsAt {
          /**
           * Unique identifier for the object.
           */
          id: string;
        }

        export type Type =
          | 'duration'
          | 'line_ends_at'
          | 'schedule_end'
          | 'timestamp'
          | 'upcoming_invoice';

        export namespace Duration {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }
  }

  export namespace SubscriptionDataOverride {
    export interface AppliesTo {
      /**
       * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
       */
      new_reference: string | null;

      /**
       * The ID of the schedule the line applies to.
       */
      subscription_schedule: string | null;

      /**
       * Describes whether the quote line is affecting a new schedule or an existing schedule.
       */
      type: AppliesTo.Type;
    }

    export interface BillOnAcceptance {
      /**
       * The start of the period to bill from when the Quote is accepted.
       */
      bill_from: BillOnAcceptance.BillFrom | null;

      /**
       * The end of the period to bill until when the Quote is accepted.
       */
      bill_until: BillOnAcceptance.BillUntil | null;
    }

    export type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

    export type EndBehavior = 'cancel' | 'release';

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export namespace AppliesTo {
      export type Type = 'new_reference' | 'subscription_schedule';
    }

    export namespace BillOnAcceptance {
      export interface BillFrom {
        /**
         * The materialized time.
         */
        computed: number | null;

        /**
         * The timestamp the given line starts at.
         */
        line_starts_at: BillFrom.LineStartsAt | null;

        /**
         * A precise Unix timestamp.
         */
        timestamp: number | null;

        /**
         * The type of method to specify the `bill_from` time.
         */
        type: BillFrom.Type;
      }

      export interface BillUntil {
        /**
         * The materialized time.
         */
        computed: number | null;

        /**
         * Time span for the quote line starting from the `starts_at` date.
         */
        duration: BillUntil.Duration | null;

        /**
         * The timestamp the given line ends at.
         */
        line_ends_at: BillUntil.LineEndsAt | null;

        /**
         * A precise Unix timestamp.
         */
        timestamp: number | null;

        /**
         * The type of method to specify the `bill_until` time.
         */
        type: BillUntil.Type;
      }

      export namespace BillFrom {
        export interface LineStartsAt {
          /**
           * Unique identifier for the object.
           */
          id: string;
        }

        export type Type =
          | 'line_starts_at'
          | 'now'
          | 'pause_collection_start'
          | 'quote_acceptance_date'
          | 'timestamp';
      }

      export namespace BillUntil {
        export interface Duration {
          /**
           * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
           */
          interval: Duration.Interval;

          /**
           * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
           */
          interval_count: number;
        }

        export interface LineEndsAt {
          /**
           * Unique identifier for the object.
           */
          id: string;
        }

        export type Type =
          | 'duration'
          | 'line_ends_at'
          | 'schedule_end'
          | 'timestamp'
          | 'upcoming_invoice';

        export namespace Duration {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }
  }

  export namespace SubscriptionSchedule {
    export interface AppliesTo {
      /**
       * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
       */
      new_reference: string | null;

      /**
       * The ID of the schedule the line applies to.
       */
      subscription_schedule: string | null;

      /**
       * Describes whether the quote line is affecting a new schedule or an existing schedule.
       */
      type: AppliesTo.Type;
    }

    export namespace AppliesTo {
      export type Type = 'new_reference' | 'subscription_schedule';
    }
  }

  export namespace TotalDetails {
    export interface Breakdown {
      /**
       * The aggregated discounts.
       */
      discounts: Array<Breakdown.Discount>;

      /**
       * The aggregated tax amounts by rate.
       */
      taxes: Array<Breakdown.Tax>;
    }

    export namespace Breakdown {
      export interface Discount {
        /**
         * The amount discounted.
         */
        amount: number;

        /**
         * A discount represents the actual application of a [coupon](https://api.stripe.com#coupons) or [promotion code](https://api.stripe.com#promotion_codes).
         * It contains information about when the discount began, when it will end, and what it is applied to.
         *
         * Related guide: [Applying discounts to subscriptions](https://docs.stripe.com/billing/subscriptions/discounts)
         */
        discount: Discount;
      }

      export interface Tax {
        /**
         * Amount of tax applied for this rate.
         */
        amount: number;

        /**
         * Tax rates can be applied to [invoices](https://docs.stripe.com/invoicing/taxes/tax-rates), [subscriptions](https://docs.stripe.com/billing/taxes/tax-rates) and [Checkout Sessions](https://docs.stripe.com/payments/checkout/use-manual-tax-rates) to collect tax.
         *
         * Related guide: [Tax rates](https://docs.stripe.com/billing/taxes/tax-rates)
         */
        rate: TaxRate;

        /**
         * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
         */
        taxability_reason: Tax.TaxabilityReason | null;

        /**
         * The amount on which tax is calculated, in cents (or local equivalent).
         */
        taxable_amount: number | null;
      }

      export namespace Tax {
        export type TaxabilityReason =
          | 'customer_exempt'
          | 'not_collecting'
          | 'not_subject_to_tax'
          | 'not_supported'
          | 'portion_product_exempt'
          | 'portion_reduced_rated'
          | 'portion_standard_rated'
          | 'product_exempt'
          | 'product_exempt_holiday'
          | 'proportionally_rated'
          | 'reduced_rated'
          | 'reverse_charge'
          | 'standard_rated'
          | 'taxable_basis_reduced'
          | 'zero_rated';
      }
    }
  }
}
export interface QuoteCreateParams {
  /**
   * Set to true to allow quote lines to have `starts_at` in the past if collection is paused between `starts_at` and now.
   */
  allow_backdated_lines?: boolean;

  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
   */
  application_fee_amount?: Emptyable<number>;

  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
   */
  application_fee_percent?: Emptyable<number>;

  /**
   * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
   */
  automatic_tax?: QuoteCreateParams.AutomaticTax;

  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collection_method?: QuoteCreateParams.CollectionMethod;

  /**
   * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer?: string;

  /**
   * The account for which this quote belongs to. A customer or account is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer_account?: string;

  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set.
   */
  default_tax_rates?: Emptyable<Array<string>>;

  /**
   * A description that will be displayed on the quote PDF. If no value is passed, the default description configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  description?: Emptyable<string>;

  /**
   * The discounts applied to the quote.
   */
  discounts?: Emptyable<Array<QuoteCreateParams.Discount>>;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch. If no value is passed, the default expiration date configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  expires_at?: number;

  /**
   * A footer that will be displayed on the quote PDF. If no value is passed, the default footer configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  footer?: Emptyable<string>;

  /**
   * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
   */
  from_quote?: QuoteCreateParams.FromQuote;

  /**
   * A header that will be displayed on the quote PDF. If no value is passed, the default header configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  header?: Emptyable<string>;

  /**
   * All invoices will be billed using the specified settings.
   */
  invoice_settings?: QuoteCreateParams.InvoiceSettings;

  /**
   * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
   */
  line_items?: Array<QuoteCreateParams.LineItem>;

  /**
   * A list of [quote lines](https://docs.stripe.com/api/quote_lines) on the quote. These lines describe changes, in the order provided, that will be used to create new subscription schedules or update existing subscription schedules when the quote is accepted.
   */
  lines?: Array<QuoteCreateParams.Line>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * The account on behalf of which to charge.
   */
  on_behalf_of?: Emptyable<string>;

  /**
   * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
   */
  subscription_data?: QuoteCreateParams.SubscriptionData;

  /**
   * List representing overrides for `subscription_data` configurations for specific subscription schedules.
   */
  subscription_data_overrides?: Array<
    QuoteCreateParams.SubscriptionDataOverride
  >;

  /**
   * ID of the test clock to attach to the quote.
   */
  test_clock?: string;

  /**
   * The data with which to automatically create a Transfer for each of the invoices.
   */
  transfer_data?: Emptyable<QuoteCreateParams.TransferData>;
}
export namespace QuoteCreateParams {
  export interface AutomaticTax {
    /**
     * Controls whether Stripe will automatically compute tax on the resulting invoices or subscriptions as well as the quote itself.
     */
    enabled: boolean;

    /**
     * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
     */
    liability?: AutomaticTax.Liability;
  }

  export type CollectionMethod = 'charge_automatically' | 'send_invoice';

  export interface Discount {
    /**
     * ID of the coupon to create a new discount for.
     */
    coupon?: string;

    /**
     * ID of an existing discount on the object (or one of its ancestors) to reuse.
     */
    discount?: string;

    /**
     * Details to determine how long the discount should be applied for.
     */
    discount_end?: Discount.DiscountEnd;

    /**
     * ID of the promotion code to create a new discount for.
     */
    promotion_code?: string;
  }

  export interface FromQuote {
    /**
     * Whether this quote is a revision of the previous quote.
     */
    is_revision?: boolean;

    /**
     * The `id` of the quote that will be cloned.
     */
    quote: string;
  }

  export interface InvoiceSettings {
    /**
     * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
     */
    days_until_due?: number;

    /**
     * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
     */
    issuer?: InvoiceSettings.Issuer;
  }

  export interface LineItem {
    /**
     * The discounts applied to this line item.
     */
    discounts?: Emptyable<Array<LineItem.Discount>>;

    /**
     * The ID of the price object. One of `price` or `price_data` is required.
     */
    price?: string;

    /**
     * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. One of `price` or `price_data` is required.
     */
    price_data?: LineItem.PriceData;

    /**
     * The quantity of the line item.
     */
    quantity?: number;

    /**
     * The tax rates which apply to the line item. When set, the `default_tax_rates` on the quote do not apply to this line item.
     */
    tax_rates?: Emptyable<Array<string>>;
  }

  export interface Line {
    /**
     * An array of operations the quote line performs.
     */
    actions?: Array<Line.Action>;

    /**
     * Details to identify the subscription schedule the quote line applies to.
     */
    applies_to?: Line.AppliesTo;

    /**
     * For point-in-time quote lines (having no `ends_at` timestamp), this attribute lets you set or remove whether the subscription's billing cycle anchor is reset at the Quote Line `starts_at` timestamp.For time-span based quote lines (having both `starts_at` and `ends_at`), the only valid value is `automatic`, which removes any previously configured billing cycle anchor resets during the window of time spanning the quote line.
     */
    billing_cycle_anchor?: Line.BillingCycleAnchor;

    /**
     * A point-in-time operation that cancels an existing subscription schedule at the line's starts_at timestamp. Currently only compatible with `quote_acceptance_date` for `starts_at`. When using cancel_subscription_schedule, the subscription schedule on the quote remains unalterable, except for modifications to the metadata, collection_method or invoice_settings.
     */
    cancel_subscription_schedule?: Line.CancelSubscriptionSchedule;

    /**
     * Details to identify the end of the time range modified by the proposed change. If not supplied, the quote line is considered a point-in-time operation that only affects the exact timestamp at `starts_at`, and a restricted set of attributes is supported on the quote line.
     */
    ends_at?: Line.EndsAt;

    /**
     * Changes to how Stripe handles prorations during the quote line's time span. Affects if and how prorations are created when a future phase starts.
     */
    proration_behavior?: Line.ProrationBehavior;

    /**
     * Defines how to pause collection for the underlying subscription throughout the duration of the amendment.
     */
    set_pause_collection?: Line.SetPauseCollection;

    /**
     * Timestamp helper to end the underlying schedule early, based on the acompanying line's start or end date.
     */
    set_schedule_end?: Line.SetScheduleEnd;

    /**
     * Details to identify the earliest timestamp where the proposed change should take effect.
     */
    starts_at?: Line.StartsAt;

    /**
     * Settings related to subscription trials.
     */
    trial_settings?: Line.TrialSettings;
  }

  export interface SubscriptionData {
    /**
     * Describes the period to bill for upon accepting the quote.
     */
    bill_on_acceptance?: SubscriptionData.BillOnAcceptance;

    /**
     * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
     */
    billing_behavior?: SubscriptionData.BillingBehavior;

    /**
     * When specified as `reset`, the subscription will always start a new billing period when the quote is accepted.
     */
    billing_cycle_anchor?: Emptyable<'reset'>;

    /**
     * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
     */
    billing_mode?: SubscriptionData.BillingMode;

    /**
     * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: string;

    /**
     * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. When updating a subscription, the date of which the subscription will be updated using a subscription schedule. The special value `current_period_end` can be provided to update a subscription at the end of its current period. The `effective_date` is ignored if it is in the past when the quote is accepted.
     */
    effective_date?: Emptyable<'current_period_end' | number>;

    /**
     * Behavior of the subscription schedule and underlying subscription when it ends.
     */
    end_behavior?: SubscriptionData.EndBehavior;

    /**
     * The id of a subscription that the quote will update. By default, the quote will contain the state of the subscription (such as line items, collection method and billing thresholds) unless overridden.
     */
    from_subscription?: string;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
     */
    metadata?: MetadataParam;

    /**
     * If specified, the invoicing for the given billing cycle iterations will be processed when the quote is accepted. Cannot be used with `effective_date`.
     */
    prebilling?: Emptyable<SubscriptionData.Prebilling>;

    /**
     * Determines how to handle [prorations](https://docs.stripe.com/subscriptions/billing-cycle#prorations). When creating a subscription, valid values are `create_prorations` or `none`.
     *
     * When updating a subscription, valid values are `create_prorations`, `none`, or `always_invoice`.
     *
     * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://docs.stripe.com/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
     *
     * Prorations can be disabled by passing `none`.
     */
    proration_behavior?: SubscriptionData.ProrationBehavior;

    /**
     * Integer representing the number of trial period days before the customer is charged for the first time.
     */
    trial_period_days?: Emptyable<number>;
  }

  export interface SubscriptionDataOverride {
    /**
     * Whether the override applies to an existing Subscription Schedule or a new Subscription Schedule.
     */
    applies_to: SubscriptionDataOverride.AppliesTo;

    /**
     * Describes the period to bill for upon accepting the quote.
     */
    bill_on_acceptance?: SubscriptionDataOverride.BillOnAcceptance;

    /**
     * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
     */
    billing_behavior?: SubscriptionDataOverride.BillingBehavior;

    /**
     * The customer the Subscription Data override applies to. This is only relevant when `applies_to.type=new_reference`.
     */
    customer?: string;

    /**
     * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: string;

    /**
     * Behavior of the subscription schedule and underlying subscription when it ends.
     */
    end_behavior?: SubscriptionDataOverride.EndBehavior;

    /**
     * Determines how to handle [prorations](https://docs.stripe.com/subscriptions/billing-cycle#prorations). When creating a subscription, valid values are `create_prorations` or `none`.
     *
     * When updating a subscription, valid values are `create_prorations`, `none`, or `always_invoice`.
     *
     * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://docs.stripe.com/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
     *
     * Prorations can be disabled by passing `none`.
     */
    proration_behavior?: SubscriptionDataOverride.ProrationBehavior;
  }

  export interface TransferData {
    /**
     * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
     */
    amount?: number;

    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
     */
    amount_percent?: number;

    /**
     * ID of an existing, connected Stripe account.
     */
    destination: string;
  }

  export namespace AutomaticTax {
    export interface Liability {
      /**
       * The connected account being referenced when `type` is `account`.
       */
      account?: string;

      /**
       * Type of the account referenced in the request.
       */
      type: Liability.Type;
    }

    export namespace Liability {
      export type Type = 'account' | 'self';
    }
  }

  export namespace Discount {
    export interface DiscountEnd {
      /**
       * Time span for the redeemed discount.
       */
      duration?: DiscountEnd.Duration;

      /**
       * A precise Unix timestamp for the discount to end. Must be in the future.
       */
      timestamp?: number;

      /**
       * The type of calculation made to determine when the discount ends.
       */
      type: DiscountEnd.Type;
    }

    export namespace DiscountEnd {
      export interface Duration {
        /**
         * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
         */
        interval: Duration.Interval;

        /**
         * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
         */
        interval_count: number;
      }

      export type Type = 'duration' | 'timestamp';

      export namespace Duration {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }

  export namespace InvoiceSettings {
    export interface Issuer {
      /**
       * The connected account being referenced when `type` is `account`.
       */
      account?: string;

      /**
       * Type of the account referenced in the request.
       */
      type: Issuer.Type;
    }

    export namespace Issuer {
      export type Type = 'account' | 'self';
    }
  }

  export namespace Line {
    export interface Action {
      /**
       * Details for the `add_discount` type.
       */
      add_discount?: Action.AddDiscount;

      /**
       * Details for the `add_item` type.
       */
      add_item?: Action.AddItem;

      /**
       * Details for the `add_metadata` type: specify a hash of key-value pairs.
       */
      add_metadata?: {
        [key: string]: string;
      };

      /**
       * Details for the `remove_discount` type.
       */
      remove_discount?: Action.RemoveDiscount;

      /**
       * Details for the `remove_item` type.
       */
      remove_item?: Action.RemoveItem;

      /**
       * Details for the `remove_metadata` type: specify an array of metadata keys.
       */
      remove_metadata?: Array<string>;

      /**
       * Details for the `set_discounts` type.
       */
      set_discounts?: Array<Action.SetDiscount>;

      /**
       * Details for the `set_items` type.
       */
      set_items?: Array<Action.SetItem>;

      /**
       * Details for the `set_metadata` type: specify an array of key-value pairs.
       */
      set_metadata?: Emptyable<{
        [key: string]: string;
      }>;

      /**
       * The type of action the quote line performs.
       */
      type: Action.Type;
    }

    export interface AppliesTo {
      /**
       * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
       */
      new_reference?: string;

      /**
       * The ID of the schedule the line applies to.
       */
      subscription_schedule?: string;

      /**
       * Describes whether the quote line is affecting a new schedule or an existing schedule.
       */
      type: AppliesTo.Type;
    }

    export type BillingCycleAnchor = 'automatic' | 'line_starts_at';

    export interface CancelSubscriptionSchedule {
      /**
       * Timestamp helper to cancel the underlying schedule on the accompanying line's start date. Must be set to `line_starts_at`.
       */
      cancel_at: 'line_starts_at';

      /**
       * If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Boolean that defaults to `true`.
       */
      invoice_now?: boolean;

      /**
       * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Boolean that defaults to `true`.
       */
      prorate?: boolean;
    }

    export interface EndsAt {
      /**
       * Use the `end` time of a given discount.
       */
      discount_end?: EndsAt.DiscountEnd;

      /**
       * Time span for the quote line starting from the `starts_at` date.
       */
      duration?: EndsAt.Duration;

      /**
       * A precise Unix timestamp.
       */
      timestamp?: number;

      /**
       * Select a way to pass in `ends_at`.
       */
      type: EndsAt.Type;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export interface SetPauseCollection {
      /**
       * Details of the pause_collection behavior to apply to the amendment.
       */
      set?: SetPauseCollection.Set;

      /**
       * Determines the type of the pause_collection amendment.
       */
      type: SetPauseCollection.Type;
    }

    export type SetScheduleEnd = 'line_ends_at' | 'line_starts_at';

    export interface StartsAt {
      /**
       * Use the `end` time of a given discount.
       */
      discount_end?: StartsAt.DiscountEnd;

      /**
       * The timestamp the given line ends at.
       */
      line_ends_at?: StartsAt.LineEndsAt;

      /**
       * A precise Unix timestamp.
       */
      timestamp?: number;

      /**
       * Select a way to pass in `starts_at`.
       */
      type: StartsAt.Type;
    }

    export interface TrialSettings {
      /**
       * Defines how the subscription should behave when a trial ends.
       */
      end_behavior?: TrialSettings.EndBehavior;
    }

    export namespace Action {
      export interface AddDiscount {
        /**
         * The coupon code to redeem.
         */
        coupon?: string;

        /**
         * An ID of an existing discount for a coupon that was already redeemed.
         */
        discount?: string;

        /**
         * Details to determine how long the discount should be applied for.
         */
        discount_end?: AddDiscount.DiscountEnd;

        /**
         * The index, starting at 0, at which to position the new discount. When not supplied, Stripe defaults to appending the discount to the end of the `discounts` array.
         */
        index?: number;

        /**
         * The promotion code to redeem.
         */
        promotion_code?: string;
      }

      export interface AddItem {
        /**
         * The discounts applied to the item. Subscription item discounts are applied before subscription discounts.
         */
        discounts?: Array<AddItem.Discount>;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * The ID of the price object.
         */
        price: string;

        /**
         * Quantity for this item.
         */
        quantity?: number;

        /**
         * The tax rates that apply to this subscription item. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
         */
        tax_rates?: Array<string>;

        /**
         * Options that configure the trial on the subscription item.
         */
        trial?: AddItem.Trial;

        /**
         * The ID of the trial offer to apply to the configuration item.
         */
        trial_offer?: string;
      }

      export interface RemoveDiscount {
        /**
         * The coupon code to remove from the `discounts` array.
         */
        coupon?: string;

        /**
         * The ID of a discount to remove from the `discounts` array.
         */
        discount?: string;

        /**
         * The ID of a promotion code to remove from the `discounts` array.
         */
        promotion_code?: string;
      }

      export interface RemoveItem {
        /**
         * ID of a price to remove.
         */
        price: string;
      }

      export interface SetDiscount {
        /**
         * The coupon code to replace the `discounts` array with.
         */
        coupon?: string;

        /**
         * An ID of an existing discount to replace the `discounts` array with.
         */
        discount?: string;

        /**
         * An ID of an existing promotion code to replace the `discounts` array with.
         */
        promotion_code?: string;
      }

      export interface SetItem {
        /**
         * If an item with the `price` already exists, passing this will override the `discounts` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `discounts`.
         */
        discounts?: Array<SetItem.Discount>;

        /**
         * If an item with the `price` already exists, passing this will override the `metadata` on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * The ID of the price object.
         */
        price: string;

        /**
         * If an item with the `price` already exists, passing this will override the quantity on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `quantity`.
         */
        quantity?: number;

        /**
         * If an item with the `price` already exists, passing this will override the `tax_rates` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `tax_rates`.
         */
        tax_rates?: Array<string>;

        /**
         * If an item with the `price` already exists, passing this will override the `trial` configuration on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `trial`.
         */
        trial?: SetItem.Trial;

        /**
         * The ID of the trial offer to apply to the configuration item.
         */
        trial_offer?: string;
      }

      export type Type =
        | 'add_discount'
        | 'add_item'
        | 'add_metadata'
        | 'clear_discounts'
        | 'clear_metadata'
        | 'remove_discount'
        | 'remove_item'
        | 'remove_metadata'
        | 'set_discounts'
        | 'set_items'
        | 'set_metadata';

      export namespace AddDiscount {
        export interface DiscountEnd {
          /**
           * The type of calculation made to determine when the discount ends.
           */
          type: 'line_ends_at';
        }
      }

      export namespace AddItem {
        export interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: Discount.DiscountEnd;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code?: string;
        }

        export interface Trial {
          /**
           * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial. Currently only supports at most 1 price ID.
           */
          converts_to?: Array<string>;

          /**
           * Determines the type of trial for this item.
           */
          type: Trial.Type;
        }

        export namespace Discount {
          export interface DiscountEnd {
            /**
             * Time span for the redeemed discount.
             */
            duration?: DiscountEnd.Duration;

            /**
             * A precise Unix timestamp for the discount to end. Must be in the future.
             */
            timestamp?: number;

            /**
             * The type of calculation made to determine when the discount ends.
             */
            type: DiscountEnd.Type;
          }

          export namespace DiscountEnd {
            export interface Duration {
              /**
               * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
               */
              interval: Duration.Interval;

              /**
               * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
               */
              interval_count: number;
            }

            export type Type = 'duration' | 'timestamp';

            export namespace Duration {
              export type Interval = 'day' | 'month' | 'week' | 'year';
            }
          }
        }

        export namespace Trial {
          export type Type = 'free' | 'paid';
        }
      }

      export namespace SetItem {
        export interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: Discount.DiscountEnd;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code?: string;
        }

        export interface Trial {
          /**
           * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial. Currently only supports at most 1 price ID.
           */
          converts_to?: Array<string>;

          /**
           * Determines the type of trial for this item.
           */
          type: Trial.Type;
        }

        export namespace Discount {
          export interface DiscountEnd {
            /**
             * Time span for the redeemed discount.
             */
            duration?: DiscountEnd.Duration;

            /**
             * A precise Unix timestamp for the discount to end. Must be in the future.
             */
            timestamp?: number;

            /**
             * The type of calculation made to determine when the discount ends.
             */
            type: DiscountEnd.Type;
          }

          export namespace DiscountEnd {
            export interface Duration {
              /**
               * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
               */
              interval: Duration.Interval;

              /**
               * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
               */
              interval_count: number;
            }

            export type Type = 'duration' | 'timestamp';

            export namespace Duration {
              export type Interval = 'day' | 'month' | 'week' | 'year';
            }
          }
        }

        export namespace Trial {
          export type Type = 'free' | 'paid';
        }
      }
    }

    export namespace AppliesTo {
      export type Type = 'new_reference' | 'subscription_schedule';
    }

    export namespace EndsAt {
      export interface DiscountEnd {
        /**
         * The ID of a specific discount.
         */
        discount: string;
      }

      export interface Duration {
        /**
         * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
         */
        interval: Duration.Interval;

        /**
         * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
         */
        interval_count: number;
      }

      export type Type =
        | 'billing_period_end'
        | 'discount_end'
        | 'duration'
        | 'quote_acceptance_date'
        | 'schedule_end'
        | 'timestamp'
        | 'upcoming_invoice';

      export namespace Duration {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }

    export namespace SetPauseCollection {
      export interface Set {
        /**
         * The payment collection behavior for this subscription while paused.
         */
        behavior: Set.Behavior;
      }

      export type Type = 'remove' | 'set';

      export namespace Set {
        export type Behavior = 'keep_as_draft' | 'mark_uncollectible' | 'void';
      }
    }

    export namespace StartsAt {
      export interface DiscountEnd {
        /**
         * The ID of a specific discount.
         */
        discount: string;
      }

      export interface LineEndsAt {
        /**
         * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
         */
        index?: number;
      }

      export type Type =
        | 'discount_end'
        | 'line_ends_at'
        | 'now'
        | 'quote_acceptance_date'
        | 'schedule_end'
        | 'timestamp'
        | 'upcoming_invoice';
    }

    export namespace TrialSettings {
      export interface EndBehavior {
        /**
         * Configure how an opt-in following a paid trial is billed when using `billing_behavior: prorate_up_front`.
         */
        prorate_up_front?: EndBehavior.ProrateUpFront;
      }

      export namespace EndBehavior {
        export type ProrateUpFront = 'defer' | 'include';
      }
    }
  }

  export namespace LineItem {
    export interface Discount {
      /**
       * ID of the coupon to create a new discount for.
       */
      coupon?: string;

      /**
       * ID of an existing discount on the object (or one of its ancestors) to reuse.
       */
      discount?: string;

      /**
       * Details to determine how long the discount should be applied for.
       */
      discount_end?: Discount.DiscountEnd;

      /**
       * ID of the promotion code to create a new discount for.
       */
      promotion_code?: string;
    }

    export interface PriceData {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
       */
      product: string;

      /**
       * The recurring components of a price such as `interval` and `interval_count`.
       */
      recurring?: PriceData.Recurring;

      /**
       * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: PriceData.TaxBehavior;

      /**
       * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: Decimal;
    }

    export namespace Discount {
      export interface DiscountEnd {
        /**
         * Time span for the redeemed discount.
         */
        duration?: DiscountEnd.Duration;

        /**
         * A precise Unix timestamp for the discount to end. Must be in the future.
         */
        timestamp?: number;

        /**
         * The type of calculation made to determine when the discount ends.
         */
        type: DiscountEnd.Type;
      }

      export namespace DiscountEnd {
        export interface Duration {
          /**
           * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
           */
          interval: Duration.Interval;

          /**
           * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
           */
          interval_count: number;
        }

        export type Type = 'duration' | 'timestamp';

        export namespace Duration {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }

    export namespace PriceData {
      export interface Recurring {
        /**
         * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval: Recurring.Interval;

        /**
         * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
         */
        interval_count?: number;
      }

      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

      export namespace Recurring {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }

  export namespace SubscriptionData {
    export interface BillOnAcceptance {
      /**
       * The start of the period to bill from when the Quote is accepted.
       */
      bill_from?: BillOnAcceptance.BillFrom;

      /**
       * The end of the period to bill until when the Quote is accepted.
       */
      bill_until?: BillOnAcceptance.BillUntil;
    }

    export type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

    export interface BillingMode {
      /**
       * Configure behavior for flexible billing mode.
       */
      flexible?: BillingMode.Flexible;

      /**
       * Controls the calculation and orchestration of prorations and invoices for subscriptions. If no value is passed, the default is `flexible`.
       */
      type: BillingMode.Type;
    }

    export type EndBehavior = 'cancel' | 'release';

    export interface Prebilling {
      /**
       * This is used to determine the number of billing cycles to prebill.
       */
      iterations: number;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export namespace BillingMode {
      export interface Flexible {
        /**
         * Controls how invoices and invoice items display proration amounts and discount amounts.
         */
        proration_discounts?: Flexible.ProrationDiscounts;
      }

      export type Type = 'classic' | 'flexible';

      export namespace Flexible {
        export type ProrationDiscounts = 'included' | 'itemized';
      }
    }

    export namespace BillOnAcceptance {
      export interface BillFrom {
        /**
         * Details of a Quote line to start the bill period from.
         */
        line_starts_at?: BillFrom.LineStartsAt;

        /**
         * A precise Unix timestamp.
         */
        timestamp?: number;

        /**
         * The type of method to specify the `bill_from` time.
         */
        type: BillFrom.Type;
      }

      export interface BillUntil {
        /**
         * Details of the duration over which to bill.
         */
        duration?: BillUntil.Duration;

        /**
         * Details of a Quote line item from which to bill until.
         */
        line_ends_at?: BillUntil.LineEndsAt;

        /**
         * A precise Unix timestamp.
         */
        timestamp?: number;

        /**
         * The type of method to specify the `bill_until` time.
         */
        type: BillUntil.Type;
      }

      export namespace BillFrom {
        export interface LineStartsAt {
          /**
           * The ID of a quote line.
           */
          id?: string;

          /**
           * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
           */
          index?: number;
        }

        export type Type =
          | 'line_starts_at'
          | 'now'
          | 'pause_collection_start'
          | 'quote_acceptance_date'
          | 'timestamp';
      }

      export namespace BillUntil {
        export interface Duration {
          /**
           * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
           */
          interval: Duration.Interval;

          /**
           * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
           */
          interval_count: number;
        }

        export interface LineEndsAt {
          /**
           * The ID of a quote line.
           */
          id?: string;

          /**
           * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
           */
          index?: number;
        }

        export type Type =
          | 'duration'
          | 'line_ends_at'
          | 'schedule_end'
          | 'timestamp'
          | 'upcoming_invoice';

        export namespace Duration {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }
  }

  export namespace SubscriptionDataOverride {
    export interface AppliesTo {
      /**
       * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
       */
      new_reference?: string;

      /**
       * The ID of the schedule the line applies to.
       */
      subscription_schedule?: string;

      /**
       * Describes whether the quote line is affecting a new schedule or an existing schedule.
       */
      type: AppliesTo.Type;
    }

    export interface BillOnAcceptance {
      /**
       * The start of the period to bill from when the Quote is accepted.
       */
      bill_from?: BillOnAcceptance.BillFrom;

      /**
       * The end of the period to bill until when the Quote is accepted.
       */
      bill_until?: BillOnAcceptance.BillUntil;
    }

    export type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

    export type EndBehavior = 'cancel' | 'release';

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export namespace AppliesTo {
      export type Type = 'new_reference' | 'subscription_schedule';
    }

    export namespace BillOnAcceptance {
      export interface BillFrom {
        /**
         * Details of a Quote line to start the bill period from.
         */
        line_starts_at?: BillFrom.LineStartsAt;

        /**
         * A precise Unix timestamp.
         */
        timestamp?: number;

        /**
         * The type of method to specify the `bill_from` time.
         */
        type: BillFrom.Type;
      }

      export interface BillUntil {
        /**
         * Details of the duration over which to bill.
         */
        duration?: BillUntil.Duration;

        /**
         * Details of a Quote line item from which to bill until.
         */
        line_ends_at?: BillUntil.LineEndsAt;

        /**
         * A precise Unix timestamp.
         */
        timestamp?: number;

        /**
         * The type of method to specify the `bill_until` time.
         */
        type: BillUntil.Type;
      }

      export namespace BillFrom {
        export interface LineStartsAt {
          /**
           * The ID of a quote line.
           */
          id?: string;

          /**
           * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
           */
          index?: number;
        }

        export type Type =
          | 'line_starts_at'
          | 'now'
          | 'pause_collection_start'
          | 'quote_acceptance_date'
          | 'timestamp';
      }

      export namespace BillUntil {
        export interface Duration {
          /**
           * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
           */
          interval: Duration.Interval;

          /**
           * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
           */
          interval_count: number;
        }

        export interface LineEndsAt {
          /**
           * The ID of a quote line.
           */
          id?: string;

          /**
           * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
           */
          index?: number;
        }

        export type Type =
          | 'duration'
          | 'line_ends_at'
          | 'schedule_end'
          | 'timestamp'
          | 'upcoming_invoice';

        export namespace Duration {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }
  }
}
export interface QuoteRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteUpdateParams {
  /**
   * Set to true to allow quote lines to have `starts_at` in the past if collection is paused between `starts_at` and now.
   */
  allow_backdated_lines?: boolean;

  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
   */
  application_fee_amount?: Emptyable<number>;

  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
   */
  application_fee_percent?: Emptyable<number>;

  /**
   * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
   */
  automatic_tax?: QuoteUpdateParams.AutomaticTax;

  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collection_method?: QuoteUpdateParams.CollectionMethod;

  /**
   * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer?: string;

  /**
   * The account for which this quote belongs to. A customer or account is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer_account?: string;

  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set.
   */
  default_tax_rates?: Emptyable<Array<string>>;

  /**
   * A description that will be displayed on the quote PDF.
   */
  description?: Emptyable<string>;

  /**
   * The discounts applied to the quote.
   */
  discounts?: Emptyable<Array<QuoteUpdateParams.Discount>>;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expires_at?: number;

  /**
   * A footer that will be displayed on the quote PDF.
   */
  footer?: Emptyable<string>;

  /**
   * A header that will be displayed on the quote PDF.
   */
  header?: Emptyable<string>;

  /**
   * All invoices will be billed using the specified settings.
   */
  invoice_settings?: QuoteUpdateParams.InvoiceSettings;

  /**
   * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
   */
  line_items?: Array<QuoteUpdateParams.LineItem>;

  /**
   * A list of [quote lines](https://docs.stripe.com/api/quote_lines) on the quote. These lines describe changes, in the order provided, that will be used to create new subscription schedules or update existing subscription schedules when the quote is accepted.
   */
  lines?: Array<QuoteUpdateParams.Line>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * The account on behalf of which to charge.
   */
  on_behalf_of?: Emptyable<string>;

  /**
   * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
   */
  subscription_data?: QuoteUpdateParams.SubscriptionData;

  /**
   * List representing overrides for `subscription_data` configurations for specific subscription schedules.
   */
  subscription_data_overrides?: Emptyable<
    Array<QuoteUpdateParams.SubscriptionDataOverride>
  >;

  /**
   * The data with which to automatically create a Transfer for each of the invoices.
   */
  transfer_data?: Emptyable<QuoteUpdateParams.TransferData>;
}
export namespace QuoteUpdateParams {
  export interface AutomaticTax {
    /**
     * Controls whether Stripe will automatically compute tax on the resulting invoices or subscriptions as well as the quote itself.
     */
    enabled: boolean;

    /**
     * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
     */
    liability?: AutomaticTax.Liability;
  }

  export type CollectionMethod = 'charge_automatically' | 'send_invoice';

  export interface Discount {
    /**
     * ID of the coupon to create a new discount for.
     */
    coupon?: string;

    /**
     * ID of an existing discount on the object (or one of its ancestors) to reuse.
     */
    discount?: string;

    /**
     * Details to determine how long the discount should be applied for.
     */
    discount_end?: Discount.DiscountEnd;

    /**
     * ID of the promotion code to create a new discount for.
     */
    promotion_code?: string;
  }

  export interface InvoiceSettings {
    /**
     * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
     */
    days_until_due?: number;

    /**
     * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
     */
    issuer?: InvoiceSettings.Issuer;
  }

  export interface LineItem {
    /**
     * The discounts applied to this line item.
     */
    discounts?: Emptyable<Array<LineItem.Discount>>;

    /**
     * The ID of an existing line item on the quote.
     */
    id?: string;

    /**
     * The ID of the price object. One of `price` or `price_data` is required.
     */
    price?: string;

    /**
     * Data used to generate a new [Price](https://docs.stripe.com/api/prices) object inline. One of `price` or `price_data` is required.
     */
    price_data?: LineItem.PriceData;

    /**
     * The quantity of the line item.
     */
    quantity?: number;

    /**
     * The tax rates which apply to the line item. When set, the `default_tax_rates` on the quote do not apply to this line item.
     */
    tax_rates?: Emptyable<Array<string>>;
  }

  export interface Line {
    /**
     * An array of operations the quote line performs.
     */
    actions?: Array<Line.Action>;

    /**
     * Details to identify the subscription schedule the quote line applies to.
     */
    applies_to?: Line.AppliesTo;

    /**
     * For point-in-time quote lines (having no `ends_at` timestamp), this attribute lets you set or remove whether the subscription's billing cycle anchor is reset at the Quote Line `starts_at` timestamp.For time-span based quote lines (having both `starts_at` and `ends_at`), the only valid value is `automatic`, which removes any previously configured billing cycle anchor resets during the window of time spanning the quote line.
     */
    billing_cycle_anchor?: Line.BillingCycleAnchor;

    /**
     * A point-in-time operation that cancels an existing subscription schedule at the line's starts_at timestamp. Currently only compatible with `quote_acceptance_date` for `starts_at`. When using cancel_subscription_schedule, the subscription schedule on the quote remains unalterable, except for modifications to the metadata, collection_method or invoice_settings.
     */
    cancel_subscription_schedule?: Line.CancelSubscriptionSchedule;

    /**
     * Details to identify the end of the time range modified by the proposed change. If not supplied, the quote line is considered a point-in-time operation that only affects the exact timestamp at `starts_at`, and a restricted set of attributes is supported on the quote line.
     */
    ends_at?: Line.EndsAt;

    /**
     * The ID of an existing line on the quote.
     */
    id?: string;

    /**
     * Changes to how Stripe handles prorations during the quote line's time span. Affects if and how prorations are created when a future phase starts.
     */
    proration_behavior?: Line.ProrationBehavior;

    /**
     * Defines how to pause collection for the underlying subscription throughout the duration of the amendment.
     */
    set_pause_collection?: Line.SetPauseCollection;

    /**
     * Timestamp helper to end the underlying schedule early, based on the acompanying line's start or end date.
     */
    set_schedule_end?: Line.SetScheduleEnd;

    /**
     * Details to identify the earliest timestamp where the proposed change should take effect.
     */
    starts_at?: Line.StartsAt;

    /**
     * Settings related to subscription trials.
     */
    trial_settings?: Line.TrialSettings;
  }

  export interface SubscriptionData {
    /**
     * Describes the period to bill for upon accepting the quote.
     */
    bill_on_acceptance?: Emptyable<SubscriptionData.BillOnAcceptance>;

    /**
     * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
     */
    billing_behavior?: SubscriptionData.BillingBehavior;

    /**
     * When specified as `reset`, the subscription will always start a new billing period when the quote is accepted.
     */
    billing_cycle_anchor?: Emptyable<'reset'>;

    /**
     * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: Emptyable<string>;

    /**
     * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. When updating a subscription, the date of which the subscription will be updated using a subscription schedule. The special value `current_period_end` can be provided to update a subscription at the end of its current period. The `effective_date` is ignored if it is in the past when the quote is accepted.
     */
    effective_date?: Emptyable<'current_period_end' | number>;

    /**
     * Behavior of the subscription schedule and underlying subscription when it ends.
     */
    end_behavior?: SubscriptionData.EndBehavior;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
     */
    metadata?: MetadataParam;

    /**
     * If specified, the invoicing for the given billing cycle iterations will be processed when the quote is accepted. Cannot be used with `effective_date`.
     */
    prebilling?: Emptyable<SubscriptionData.Prebilling>;

    /**
     * Determines how to handle [prorations](https://docs.stripe.com/subscriptions/billing-cycle#prorations). When creating a subscription, valid values are `create_prorations` or `none`.
     *
     * When updating a subscription, valid values are `create_prorations`, `none`, or `always_invoice`.
     *
     * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://docs.stripe.com/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
     *
     * Prorations can be disabled by passing `none`.
     */
    proration_behavior?: SubscriptionData.ProrationBehavior;

    /**
     * Integer representing the number of trial period days before the customer is charged for the first time.
     */
    trial_period_days?: Emptyable<number>;
  }

  export interface SubscriptionDataOverride {
    /**
     * Whether the override applies to an existing Subscription Schedule or a new Subscription Schedule.
     */
    applies_to: SubscriptionDataOverride.AppliesTo;

    /**
     * Describes the period to bill for upon accepting the quote.
     */
    bill_on_acceptance?: Emptyable<SubscriptionDataOverride.BillOnAcceptance>;

    /**
     * Configures when the subscription schedule generates prorations for phase transitions. Possible values are `prorate_on_next_phase` or `prorate_up_front` with the default being `prorate_on_next_phase`. `prorate_on_next_phase` will apply phase changes and generate prorations at transition time. `prorate_up_front` will bill for all phases within the current billing cycle up front.
     */
    billing_behavior?: SubscriptionDataOverride.BillingBehavior;

    /**
     * The customer the Subscription Data override applies to.
     */
    customer?: string;

    /**
     * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
     */
    description?: Emptyable<string>;

    /**
     * Behavior of the subscription schedule and underlying subscription when it ends.
     */
    end_behavior?: SubscriptionDataOverride.EndBehavior;

    /**
     * Determines how to handle [prorations](https://docs.stripe.com/subscriptions/billing-cycle#prorations). When creating a subscription, valid values are `create_prorations` or `none`.
     *
     * When updating a subscription, valid values are `create_prorations`, `none`, or `always_invoice`.
     *
     * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://docs.stripe.com/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
     *
     * Prorations can be disabled by passing `none`.
     */
    proration_behavior?: SubscriptionDataOverride.ProrationBehavior;
  }

  export interface TransferData {
    /**
     * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
     */
    amount?: number;

    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
     */
    amount_percent?: number;

    /**
     * ID of an existing, connected Stripe account.
     */
    destination: string;
  }

  export namespace AutomaticTax {
    export interface Liability {
      /**
       * The connected account being referenced when `type` is `account`.
       */
      account?: string;

      /**
       * Type of the account referenced in the request.
       */
      type: Liability.Type;
    }

    export namespace Liability {
      export type Type = 'account' | 'self';
    }
  }

  export namespace Discount {
    export interface DiscountEnd {
      /**
       * Time span for the redeemed discount.
       */
      duration?: DiscountEnd.Duration;

      /**
       * A precise Unix timestamp for the discount to end. Must be in the future.
       */
      timestamp?: number;

      /**
       * The type of calculation made to determine when the discount ends.
       */
      type: DiscountEnd.Type;
    }

    export namespace DiscountEnd {
      export interface Duration {
        /**
         * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
         */
        interval: Duration.Interval;

        /**
         * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
         */
        interval_count: number;
      }

      export type Type = 'duration' | 'timestamp';

      export namespace Duration {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }

  export namespace InvoiceSettings {
    export interface Issuer {
      /**
       * The connected account being referenced when `type` is `account`.
       */
      account?: string;

      /**
       * Type of the account referenced in the request.
       */
      type: Issuer.Type;
    }

    export namespace Issuer {
      export type Type = 'account' | 'self';
    }
  }

  export namespace Line {
    export interface Action {
      /**
       * Details for the `add_discount` type.
       */
      add_discount?: Action.AddDiscount;

      /**
       * Details for the `add_item` type.
       */
      add_item?: Action.AddItem;

      /**
       * Details for the `add_metadata` type: specify a hash of key-value pairs.
       */
      add_metadata?: {
        [key: string]: string;
      };

      /**
       * Details for the `remove_discount` type.
       */
      remove_discount?: Action.RemoveDiscount;

      /**
       * Details for the `remove_item` type.
       */
      remove_item?: Action.RemoveItem;

      /**
       * Details for the `remove_metadata` type: specify an array of metadata keys.
       */
      remove_metadata?: Array<string>;

      /**
       * Details for the `set_discounts` type.
       */
      set_discounts?: Array<Action.SetDiscount>;

      /**
       * Details for the `set_items` type.
       */
      set_items?: Array<Action.SetItem>;

      /**
       * Details for the `set_metadata` type: specify an array of key-value pairs.
       */
      set_metadata?: Emptyable<{
        [key: string]: string;
      }>;

      /**
       * The type of action the quote line performs.
       */
      type: Action.Type;
    }

    export interface AppliesTo {
      /**
       * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
       */
      new_reference?: string;

      /**
       * The ID of the schedule the line applies to.
       */
      subscription_schedule?: string;

      /**
       * Describes whether the quote line is affecting a new schedule or an existing schedule.
       */
      type: AppliesTo.Type;
    }

    export type BillingCycleAnchor = 'automatic' | 'line_starts_at';

    export interface CancelSubscriptionSchedule {
      /**
       * Timestamp helper to cancel the underlying schedule on the accompanying line's start date. Must be set to `line_starts_at`.
       */
      cancel_at: 'line_starts_at';

      /**
       * If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Boolean that defaults to `true`.
       */
      invoice_now?: boolean;

      /**
       * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Boolean that defaults to `true`.
       */
      prorate?: boolean;
    }

    export interface EndsAt {
      /**
       * Use the `end` time of a given discount.
       */
      discount_end?: EndsAt.DiscountEnd;

      /**
       * Time span for the quote line starting from the `starts_at` date.
       */
      duration?: EndsAt.Duration;

      /**
       * A precise Unix timestamp.
       */
      timestamp?: number;

      /**
       * Select a way to pass in `ends_at`.
       */
      type: EndsAt.Type;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export interface SetPauseCollection {
      /**
       * Details of the pause_collection behavior to apply to the amendment.
       */
      set?: SetPauseCollection.Set;

      /**
       * Determines the type of the pause_collection amendment.
       */
      type: SetPauseCollection.Type;
    }

    export type SetScheduleEnd = 'line_ends_at' | 'line_starts_at';

    export interface StartsAt {
      /**
       * Use the `end` time of a given discount.
       */
      discount_end?: StartsAt.DiscountEnd;

      /**
       * The timestamp the given line ends at.
       */
      line_ends_at?: StartsAt.LineEndsAt;

      /**
       * A precise Unix timestamp.
       */
      timestamp?: number;

      /**
       * Select a way to pass in `starts_at`.
       */
      type: StartsAt.Type;
    }

    export interface TrialSettings {
      /**
       * Defines how the subscription should behave when a trial ends.
       */
      end_behavior?: TrialSettings.EndBehavior;
    }

    export namespace Action {
      export interface AddDiscount {
        /**
         * The coupon code to redeem.
         */
        coupon?: string;

        /**
         * An ID of an existing discount for a coupon that was already redeemed.
         */
        discount?: string;

        /**
         * Details to determine how long the discount should be applied for.
         */
        discount_end?: AddDiscount.DiscountEnd;

        /**
         * The index, starting at 0, at which to position the new discount. When not supplied, Stripe defaults to appending the discount to the end of the `discounts` array.
         */
        index?: number;

        /**
         * The promotion code to redeem.
         */
        promotion_code?: string;
      }

      export interface AddItem {
        /**
         * The discounts applied to the item. Subscription item discounts are applied before subscription discounts.
         */
        discounts?: Array<AddItem.Discount>;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * The ID of the price object.
         */
        price: string;

        /**
         * Quantity for this item.
         */
        quantity?: number;

        /**
         * The tax rates that apply to this subscription item. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
         */
        tax_rates?: Array<string>;

        /**
         * Options that configure the trial on the subscription item.
         */
        trial?: AddItem.Trial;

        /**
         * The ID of the trial offer to apply to the configuration item.
         */
        trial_offer?: string;
      }

      export interface RemoveDiscount {
        /**
         * The coupon code to remove from the `discounts` array.
         */
        coupon?: string;

        /**
         * The ID of a discount to remove from the `discounts` array.
         */
        discount?: string;

        /**
         * The ID of a promotion code to remove from the `discounts` array.
         */
        promotion_code?: string;
      }

      export interface RemoveItem {
        /**
         * ID of a price to remove.
         */
        price: string;
      }

      export interface SetDiscount {
        /**
         * The coupon code to replace the `discounts` array with.
         */
        coupon?: string;

        /**
         * An ID of an existing discount to replace the `discounts` array with.
         */
        discount?: string;

        /**
         * An ID of an existing promotion code to replace the `discounts` array with.
         */
        promotion_code?: string;
      }

      export interface SetItem {
        /**
         * If an item with the `price` already exists, passing this will override the `discounts` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `discounts`.
         */
        discounts?: Array<SetItem.Discount>;

        /**
         * If an item with the `price` already exists, passing this will override the `metadata` on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * The ID of the price object.
         */
        price: string;

        /**
         * If an item with the `price` already exists, passing this will override the quantity on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `quantity`.
         */
        quantity?: number;

        /**
         * If an item with the `price` already exists, passing this will override the `tax_rates` array on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `tax_rates`.
         */
        tax_rates?: Array<string>;

        /**
         * If an item with the `price` already exists, passing this will override the `trial` configuration on the subscription item that matches that price. Otherwise, the `items` array is cleared and a single new item is added with the supplied `trial`.
         */
        trial?: SetItem.Trial;

        /**
         * The ID of the trial offer to apply to the configuration item.
         */
        trial_offer?: string;
      }

      export type Type =
        | 'add_discount'
        | 'add_item'
        | 'add_metadata'
        | 'clear_discounts'
        | 'clear_metadata'
        | 'remove_discount'
        | 'remove_item'
        | 'remove_metadata'
        | 'set_discounts'
        | 'set_items'
        | 'set_metadata';

      export namespace AddDiscount {
        export interface DiscountEnd {
          /**
           * The type of calculation made to determine when the discount ends.
           */
          type: 'line_ends_at';
        }
      }

      export namespace AddItem {
        export interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: Discount.DiscountEnd;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code?: string;
        }

        export interface Trial {
          /**
           * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial. Currently only supports at most 1 price ID.
           */
          converts_to?: Array<string>;

          /**
           * Determines the type of trial for this item.
           */
          type: Trial.Type;
        }

        export namespace Discount {
          export interface DiscountEnd {
            /**
             * Time span for the redeemed discount.
             */
            duration?: DiscountEnd.Duration;

            /**
             * A precise Unix timestamp for the discount to end. Must be in the future.
             */
            timestamp?: number;

            /**
             * The type of calculation made to determine when the discount ends.
             */
            type: DiscountEnd.Type;
          }

          export namespace DiscountEnd {
            export interface Duration {
              /**
               * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
               */
              interval: Duration.Interval;

              /**
               * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
               */
              interval_count: number;
            }

            export type Type = 'duration' | 'timestamp';

            export namespace Duration {
              export type Interval = 'day' | 'month' | 'week' | 'year';
            }
          }
        }

        export namespace Trial {
          export type Type = 'free' | 'paid';
        }
      }

      export namespace SetItem {
        export interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;

          /**
           * Details to determine how long the discount should be applied for.
           */
          discount_end?: Discount.DiscountEnd;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code?: string;
        }

        export interface Trial {
          /**
           * List of price IDs which, if present on the subscription following a paid trial, constitute opting-in to the paid trial. Currently only supports at most 1 price ID.
           */
          converts_to?: Array<string>;

          /**
           * Determines the type of trial for this item.
           */
          type: Trial.Type;
        }

        export namespace Discount {
          export interface DiscountEnd {
            /**
             * Time span for the redeemed discount.
             */
            duration?: DiscountEnd.Duration;

            /**
             * A precise Unix timestamp for the discount to end. Must be in the future.
             */
            timestamp?: number;

            /**
             * The type of calculation made to determine when the discount ends.
             */
            type: DiscountEnd.Type;
          }

          export namespace DiscountEnd {
            export interface Duration {
              /**
               * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
               */
              interval: Duration.Interval;

              /**
               * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
               */
              interval_count: number;
            }

            export type Type = 'duration' | 'timestamp';

            export namespace Duration {
              export type Interval = 'day' | 'month' | 'week' | 'year';
            }
          }
        }

        export namespace Trial {
          export type Type = 'free' | 'paid';
        }
      }
    }

    export namespace AppliesTo {
      export type Type = 'new_reference' | 'subscription_schedule';
    }

    export namespace EndsAt {
      export interface DiscountEnd {
        /**
         * The ID of a specific discount.
         */
        discount: string;
      }

      export interface Duration {
        /**
         * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
         */
        interval: Duration.Interval;

        /**
         * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
         */
        interval_count: number;
      }

      export type Type =
        | 'billing_period_end'
        | 'discount_end'
        | 'duration'
        | 'quote_acceptance_date'
        | 'schedule_end'
        | 'timestamp'
        | 'upcoming_invoice';

      export namespace Duration {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }

    export namespace SetPauseCollection {
      export interface Set {
        /**
         * The payment collection behavior for this subscription while paused.
         */
        behavior: Set.Behavior;
      }

      export type Type = 'remove' | 'set';

      export namespace Set {
        export type Behavior = 'keep_as_draft' | 'mark_uncollectible' | 'void';
      }
    }

    export namespace StartsAt {
      export interface DiscountEnd {
        /**
         * The ID of a specific discount.
         */
        discount: string;
      }

      export interface LineEndsAt {
        /**
         * The ID of a quote line.
         */
        id?: string;

        /**
         * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
         */
        index?: number;
      }

      export type Type =
        | 'discount_end'
        | 'line_ends_at'
        | 'now'
        | 'quote_acceptance_date'
        | 'schedule_end'
        | 'timestamp'
        | 'upcoming_invoice';
    }

    export namespace TrialSettings {
      export interface EndBehavior {
        /**
         * Configure how an opt-in following a paid trial is billed when using `billing_behavior: prorate_up_front`.
         */
        prorate_up_front?: EndBehavior.ProrateUpFront;
      }

      export namespace EndBehavior {
        export type ProrateUpFront = 'defer' | 'include';
      }
    }
  }

  export namespace LineItem {
    export interface Discount {
      /**
       * ID of the coupon to create a new discount for.
       */
      coupon?: string;

      /**
       * ID of an existing discount on the object (or one of its ancestors) to reuse.
       */
      discount?: string;

      /**
       * Details to determine how long the discount should be applied for.
       */
      discount_end?: Discount.DiscountEnd;

      /**
       * ID of the promotion code to create a new discount for.
       */
      promotion_code?: string;
    }

    export interface PriceData {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
       */
      product: string;

      /**
       * The recurring components of a price such as `interval` and `interval_count`.
       */
      recurring?: PriceData.Recurring;

      /**
       * Only required if a [default tax behavior](https://docs.stripe.com/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: PriceData.TaxBehavior;

      /**
       * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: Decimal;
    }

    export namespace Discount {
      export interface DiscountEnd {
        /**
         * Time span for the redeemed discount.
         */
        duration?: DiscountEnd.Duration;

        /**
         * A precise Unix timestamp for the discount to end. Must be in the future.
         */
        timestamp?: number;

        /**
         * The type of calculation made to determine when the discount ends.
         */
        type: DiscountEnd.Type;
      }

      export namespace DiscountEnd {
        export interface Duration {
          /**
           * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
           */
          interval: Duration.Interval;

          /**
           * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
           */
          interval_count: number;
        }

        export type Type = 'duration' | 'timestamp';

        export namespace Duration {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }

    export namespace PriceData {
      export interface Recurring {
        /**
         * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval: Recurring.Interval;

        /**
         * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
         */
        interval_count?: number;
      }

      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

      export namespace Recurring {
        export type Interval = 'day' | 'month' | 'week' | 'year';
      }
    }
  }

  export namespace SubscriptionData {
    export interface BillOnAcceptance {
      /**
       * The start of the period to bill from when the Quote is accepted.
       */
      bill_from?: BillOnAcceptance.BillFrom;

      /**
       * The end of the period to bill until when the Quote is accepted.
       */
      bill_until?: BillOnAcceptance.BillUntil;
    }

    export type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

    export type EndBehavior = 'cancel' | 'release';

    export interface Prebilling {
      /**
       * This is used to determine the number of billing cycles to prebill.
       */
      iterations: number;
    }

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export namespace BillOnAcceptance {
      export interface BillFrom {
        /**
         * Details of a Quote line to start the bill period from.
         */
        line_starts_at?: BillFrom.LineStartsAt;

        /**
         * A precise Unix timestamp.
         */
        timestamp?: number;

        /**
         * The type of method to specify the `bill_from` time.
         */
        type: BillFrom.Type;
      }

      export interface BillUntil {
        /**
         * Details of the duration over which to bill.
         */
        duration?: BillUntil.Duration;

        /**
         * Details of a Quote line item from which to bill until.
         */
        line_ends_at?: BillUntil.LineEndsAt;

        /**
         * A precise Unix timestamp.
         */
        timestamp?: number;

        /**
         * The type of method to specify the `bill_until` time.
         */
        type: BillUntil.Type;
      }

      export namespace BillFrom {
        export interface LineStartsAt {
          /**
           * The ID of a quote line.
           */
          id?: string;

          /**
           * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
           */
          index?: number;
        }

        export type Type =
          | 'line_starts_at'
          | 'now'
          | 'pause_collection_start'
          | 'quote_acceptance_date'
          | 'timestamp';
      }

      export namespace BillUntil {
        export interface Duration {
          /**
           * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
           */
          interval: Duration.Interval;

          /**
           * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
           */
          interval_count: number;
        }

        export interface LineEndsAt {
          /**
           * The ID of a quote line.
           */
          id?: string;

          /**
           * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
           */
          index?: number;
        }

        export type Type =
          | 'duration'
          | 'line_ends_at'
          | 'schedule_end'
          | 'timestamp'
          | 'upcoming_invoice';

        export namespace Duration {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }
  }

  export namespace SubscriptionDataOverride {
    export interface AppliesTo {
      /**
       * A custom string that identifies a new subscription schedule being created upon quote acceptance. All quote lines with the same `new_reference` field will be applied to the creation of a new subscription schedule.
       */
      new_reference?: string;

      /**
       * The ID of the schedule the line applies to.
       */
      subscription_schedule?: string;

      /**
       * Describes whether the quote line is affecting a new schedule or an existing schedule.
       */
      type: AppliesTo.Type;
    }

    export interface BillOnAcceptance {
      /**
       * The start of the period to bill from when the Quote is accepted.
       */
      bill_from?: BillOnAcceptance.BillFrom;

      /**
       * The end of the period to bill until when the Quote is accepted.
       */
      bill_until?: BillOnAcceptance.BillUntil;
    }

    export type BillingBehavior = 'prorate_on_next_phase' | 'prorate_up_front';

    export type EndBehavior = 'cancel' | 'release';

    export type ProrationBehavior =
      | 'always_invoice'
      | 'create_prorations'
      | 'none';

    export namespace AppliesTo {
      export type Type = 'new_reference' | 'subscription_schedule';
    }

    export namespace BillOnAcceptance {
      export interface BillFrom {
        /**
         * Details of a Quote line to start the bill period from.
         */
        line_starts_at?: BillFrom.LineStartsAt;

        /**
         * A precise Unix timestamp.
         */
        timestamp?: number;

        /**
         * The type of method to specify the `bill_from` time.
         */
        type: BillFrom.Type;
      }

      export interface BillUntil {
        /**
         * Details of the duration over which to bill.
         */
        duration?: BillUntil.Duration;

        /**
         * Details of a Quote line item from which to bill until.
         */
        line_ends_at?: BillUntil.LineEndsAt;

        /**
         * A precise Unix timestamp.
         */
        timestamp?: number;

        /**
         * The type of method to specify the `bill_until` time.
         */
        type: BillUntil.Type;
      }

      export namespace BillFrom {
        export interface LineStartsAt {
          /**
           * The ID of a quote line.
           */
          id?: string;

          /**
           * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
           */
          index?: number;
        }

        export type Type =
          | 'line_starts_at'
          | 'now'
          | 'pause_collection_start'
          | 'quote_acceptance_date'
          | 'timestamp';
      }

      export namespace BillUntil {
        export interface Duration {
          /**
           * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
           */
          interval: Duration.Interval;

          /**
           * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
           */
          interval_count: number;
        }

        export interface LineEndsAt {
          /**
           * The ID of a quote line.
           */
          id?: string;

          /**
           * The position of the previous quote line in the `lines` array after which this line should begin. Indexes start from 0 and must be less than the index of the current line in the array.
           */
          index?: number;
        }

        export type Type =
          | 'duration'
          | 'line_ends_at'
          | 'schedule_end'
          | 'timestamp'
          | 'upcoming_invoice';

        export namespace Duration {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }
  }
}
export interface QuoteListParams extends PaginationParams {
  /**
   * The ID of the customer whose quotes you're retrieving.
   */
  customer?: string;

  /**
   * The ID of the account representing the customer whose quotes you're retrieving.
   */
  customer_account?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The subscription which the quote updates.
   */
  from_subscription?: string;

  /**
   * The status of the quote.
   */
  status?: QuoteListParams.Status;

  /**
   * Provides a list of quotes that are associated with the specified test clock. The response will not include quotes with test clocks if this and the customer parameter is not set.
   */
  test_clock?: string;
}
export namespace QuoteListParams {
  export type Status =
    | 'accepted'
    | 'accepting'
    | 'canceled'
    | 'draft'
    | 'open'
    | 'stale';
}
export interface QuoteAcceptParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteCancelParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteFinalizeQuoteParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expires_at?: number;
}
export interface QuoteListPreviewInvoiceLinesParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteListComputedUpfrontLineItemsParams
  extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteListLineItemsParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteListLinesParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteListPreviewInvoicesParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteListPreviewSubscriptionSchedulesParams
  extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteMarkDraftParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteMarkStaleParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Reason the Quote is being marked stale.
   */
  reason?: string;
}
export interface QuotePdfParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface QuoteReestimateParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
