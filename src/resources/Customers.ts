// File generated from our OpenAPI spec

import * as crypto from 'crypto';
import {StripeResource} from '../StripeResource.js';
import {DeletedDiscount, Discount} from './Discounts.js';
import {CustomerBalanceTransaction} from './CustomerBalanceTransactions.js';
import {CashBalance} from './CashBalances.js';
import {CustomerCashBalanceTransaction} from './CustomerCashBalanceTransactions.js';
import {FundingInstructions} from './FundingInstructions.js';
import {PaymentMethod} from './PaymentMethods.js';
import {CustomerSource, DeletedCustomerSource} from './CustomerSources.js';
import {BankAccount} from './BankAccounts.js';
import {DeletedTaxId, TaxId} from './TaxIds.js';
import {Subscription} from './Subscriptions.js';
import * as TestHelpers from './TestHelpers/index.js';
import {
  Emptyable,
  AddressParam,
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Address,
  Metadata,
} from '../shared.js';
import {
  RequestOptions,
  Response,
  ApiListPromise,
  ApiList,
  ApiSearchResultPromise,
} from '../lib.js';
const stripeMethod = StripeResource.method;
export class CustomerResource extends StripeResource {
  /**
   * Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.
   */
  del(
    id: string,
    params?: CustomerDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedCustomer>>;
  del(id: string, options?: RequestOptions): Promise<Response<DeletedCustomer>>;
  del(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath: '/v1/customers/{customer}',
    }).call(this, ...args);
  }

  /**
   * Retrieves a Customer object.
   */
  retrieve(
    id: string,
    params?: CustomerRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Customer | DeletedCustomer>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Customer | DeletedCustomer>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/customers/{customer}',
    }).call(this, ...args);
  }

  /**
   * Updates the specified customer by setting the values of the parameters passed. Any parameters not provided are left unchanged. For example, if you pass the source parameter, that becomes the customer's active source (such as a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the source parameter: for each of the customer's current subscriptions, if the subscription bills automatically and is in the past_due state, then the latest open invoice for the subscription with automatic collection enabled is retried. This retry doesn't count as an automatic retry, and doesn't affect the next regularly scheduled payment for the invoice. Changing the default_source for a customer doesn't trigger this behavior.
   *
   * This request accepts mostly the same arguments as the customer creation call.
   */
  update(
    id: string,
    params?: CustomerUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Customer>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
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
    }).call(this, ...args);
  }

  /**
   * Removes the currently applied discount on a customer.
   */
  deleteDiscount(
    id: string,
    params?: CustomerDeleteDiscountParams,
    options?: RequestOptions
  ): Promise<Response<DeletedDiscount>>;
  deleteDiscount(
    id: string,
    options?: RequestOptions
  ): Promise<Response<DeletedDiscount>>;
  deleteDiscount(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath: '/v1/customers/{customer}/discount',
    }).call(this, ...args);
  }

  /**
   * Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.
   */
  list(
    params?: CustomerListParams,
    options?: RequestOptions
  ): ApiListPromise<Customer>;
  list(options?: RequestOptions): ApiListPromise<Customer>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
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
    }).call(this, ...args);
  }

  /**
   * Creates a new customer object.
   */
  create(
    params?: CustomerCreateParams,
    options?: RequestOptions
  ): Promise<Response<Customer>>;
  create(options?: RequestOptions): Promise<Response<Customer>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
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
    }).call(this, ...args);
  }

  /**
   * Search for customers you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
   * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
   * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
   * to an hour behind during outages. Search functionality is not available to merchants in India.
   */
  search(
    params: CustomerSearchParams,
    options?: RequestOptions
  ): ApiSearchResultPromise<Customer>;
  search(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
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
    },
  }),
  serializeBatchUpdate(
    customer: string,
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
    item.path_params = {customer: customer};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
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
