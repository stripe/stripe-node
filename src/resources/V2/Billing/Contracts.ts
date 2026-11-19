// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {ContractTerm} from './ContractTerms.js';
import {
  MetadataParam,
  OtherString,
  Decimal,
  Metadata,
} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';
import {DeletedObject} from './../../V2/DeletedObject.js';
import {TermResource} from './Contracts/Terms.js';
import {Stripe} from '../../../stripe.core.js';
export class ContractResource extends StripeResource {
  terms: TermResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.terms = new TermResource(stripe);
  }
  /**
   * List contracts.
   */
  list(
    params?: V2.Billing.ContractListParams,
    options?: RequestOptions
  ): V2ListPromise<Contract> {
    return this._makeRequest('GET', '/v2/billing/contracts', params, options, {
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                pricing_lines: {
                  kind: 'object',
                  fields: {
                    data: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {
                          pricing: {
                            kind: 'object',
                            fields: {
                              price_details: {
                                kind: 'object',
                                fields: {
                                  current_quantity: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                terms: {
                  kind: 'object',
                  fields: {
                    data: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {
                          pricing_override: {
                            kind: 'object',
                            fields: {
                              multiply: {
                                kind: 'object',
                                fields: {factor: {kind: 'decimal_string'}},
                              },
                              overwrite: {
                                kind: 'object',
                                fields: {
                                  unit_amount_decimal: {kind: 'decimal_string'},
                                },
                              },
                            },
                          },
                          recurring_price: {
                            kind: 'object',
                            fields: {quantity: {kind: 'decimal_string'}},
                          },
                        },
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
   * Create a draft contract.
   * @throws Stripe.AlreadyExistsError
   */
  create(
    params: V2.Billing.ContractCreateParams,
    options?: RequestOptions
  ): Promise<Response<Contract>> {
    return this._makeRequest('POST', '/v2/billing/contracts', params, options, {
      requestSchema: {
        kind: 'object',
        fields: {
          terms: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                pricing_override: {
                  kind: 'object',
                  fields: {
                    multiply: {
                      kind: 'object',
                      fields: {factor: {kind: 'decimal_string'}},
                    },
                    overwrite: {
                      kind: 'object',
                      fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                    },
                  },
                },
                recurring_price: {
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
          pricing_lines: {
            kind: 'object',
            fields: {
              data: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    pricing: {
                      kind: 'object',
                      fields: {
                        price_details: {
                          kind: 'object',
                          fields: {current_quantity: {kind: 'decimal_string'}},
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          terms: {
            kind: 'object',
            fields: {
              data: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    pricing_override: {
                      kind: 'object',
                      fields: {
                        multiply: {
                          kind: 'object',
                          fields: {factor: {kind: 'decimal_string'}},
                        },
                        overwrite: {
                          kind: 'object',
                          fields: {
                            unit_amount_decimal: {kind: 'decimal_string'},
                          },
                        },
                      },
                    },
                    recurring_price: {
                      kind: 'object',
                      fields: {quantity: {kind: 'decimal_string'}},
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
   * Delete a draft contract.
   * @throws Stripe.RateLimitError
   */
  del(
    id: string,
    params?: V2.Billing.ContractDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedObject>> {
    return this._makeRequest(
      'DELETE',
      `/v2/billing/contracts/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a contract.
   */
  retrieve(
    id: string,
    params?: V2.Billing.ContractRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Contract>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/contracts/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            pricing_lines: {
              kind: 'object',
              fields: {
                data: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      pricing: {
                        kind: 'object',
                        fields: {
                          price_details: {
                            kind: 'object',
                            fields: {
                              current_quantity: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            terms: {
              kind: 'object',
              fields: {
                data: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      pricing_override: {
                        kind: 'object',
                        fields: {
                          multiply: {
                            kind: 'object',
                            fields: {factor: {kind: 'decimal_string'}},
                          },
                          overwrite: {
                            kind: 'object',
                            fields: {
                              unit_amount_decimal: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                      recurring_price: {
                        kind: 'object',
                        fields: {quantity: {kind: 'decimal_string'}},
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
   * Update a draft or active contract.
   * @throws Stripe.RateLimitError
   * @throws Stripe.AlreadyExistsError
   * @throws Stripe.CannotProceedError
   */
  update(
    id: string,
    params?: V2.Billing.ContractUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Contract>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/contracts/${encodeURIComponent(id)}`,
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            actions: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  add_term: {
                    kind: 'object',
                    fields: {
                      pricing_override: {
                        kind: 'object',
                        fields: {
                          multiply: {
                            kind: 'object',
                            fields: {factor: {kind: 'decimal_string'}},
                          },
                          overwrite: {
                            kind: 'object',
                            fields: {
                              unit_amount_decimal: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                      recurring_price: {
                        kind: 'object',
                        fields: {quantity: {kind: 'decimal_string'}},
                      },
                    },
                  },
                  update_term: {
                    kind: 'object',
                    fields: {
                      recurring_price: {
                        kind: 'object',
                        fields: {quantity: {kind: 'decimal_string'}},
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
            pricing_lines: {
              kind: 'object',
              fields: {
                data: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      pricing: {
                        kind: 'object',
                        fields: {
                          price_details: {
                            kind: 'object',
                            fields: {
                              current_quantity: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            terms: {
              kind: 'object',
              fields: {
                data: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      pricing_override: {
                        kind: 'object',
                        fields: {
                          multiply: {
                            kind: 'object',
                            fields: {factor: {kind: 'decimal_string'}},
                          },
                          overwrite: {
                            kind: 'object',
                            fields: {
                              unit_amount_decimal: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                      recurring_price: {
                        kind: 'object',
                        fields: {quantity: {kind: 'decimal_string'}},
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
   * Activate a draft contract.
   * @throws Stripe.RateLimitError
   */
  activate(
    id: string,
    params?: V2.Billing.ContractActivateParams,
    options?: RequestOptions
  ): Promise<Response<Contract>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/contracts/${encodeURIComponent(id)}/activate`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            pricing_lines: {
              kind: 'object',
              fields: {
                data: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      pricing: {
                        kind: 'object',
                        fields: {
                          price_details: {
                            kind: 'object',
                            fields: {
                              current_quantity: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            terms: {
              kind: 'object',
              fields: {
                data: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      pricing_override: {
                        kind: 'object',
                        fields: {
                          multiply: {
                            kind: 'object',
                            fields: {factor: {kind: 'decimal_string'}},
                          },
                          overwrite: {
                            kind: 'object',
                            fields: {
                              unit_amount_decimal: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                      recurring_price: {
                        kind: 'object',
                        fields: {quantity: {kind: 'decimal_string'}},
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
   * Cancel an active contract.
   * @throws Stripe.RateLimitError
   */
  cancel(
    id: string,
    params?: V2.Billing.ContractCancelParams,
    options?: RequestOptions
  ): Promise<Response<Contract>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/contracts/${encodeURIComponent(id)}/cancel`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            pricing_lines: {
              kind: 'object',
              fields: {
                data: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      pricing: {
                        kind: 'object',
                        fields: {
                          price_details: {
                            kind: 'object',
                            fields: {
                              current_quantity: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            terms: {
              kind: 'object',
              fields: {
                data: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      pricing_override: {
                        kind: 'object',
                        fields: {
                          multiply: {
                            kind: 'object',
                            fields: {factor: {kind: 'decimal_string'}},
                          },
                          overwrite: {
                            kind: 'object',
                            fields: {
                              unit_amount_decimal: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                      recurring_price: {
                        kind: 'object',
                        fields: {quantity: {kind: 'decimal_string'}},
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
}
export interface Contract {
  /**
   * The contract id.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.contract';

  /**
   * The billing cycle anchor.
   */
  billing_cycle_anchor?: Contract.BillingCycleAnchor;

  /**
   * The billing settings.
   */
  billing_settings?: Contract.BillingSettings;

  /**
   * The collection status of the contract that indicates whether there are any outstanding invoices for the contract.
   */
  collection_status: Contract.CollectionStatus;

  /**
   * Historical timestamps of when the contract's collection status transitioned into each status.
   */
  collection_status_transitions: Contract.CollectionStatusTransitions;

  /**
   * A unique user-provided contract number e.g. C-2026-0001.
   */
  contract_number: string;

  /**
   * Timestamp of when the contract was created.
   */
  created: string;

  /**
   * The currency.
   */
  currency: string;

  /**
   * The customer id.
   */
  customer: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs.
   */
  metadata?: Metadata;

  /**
   * The one-time fees. Only populated when `one_time_fees` is passed in the `include` parameter.
   */
  one_time_fees?: Contract.OneTimeFees;

  /**
   * The pricing lines. Only populated when `pricing_lines` is passed in the `include` parameter.
   */
  pricing_lines?: Contract.PricingLines;

  /**
   * The pricing overrides. Only populated when `pricing_overrides` is passed in the `include` parameter.
   */
  pricing_overrides?: Contract.PricingOverrides;

  /**
   * The current status of the contract.
   */
  status: Contract.Status;

  /**
   * Historical timestamps of when the contract transitioned into each status.
   */
  status_transitions?: Contract.StatusTransitions;

  /**
   * All terms in display order. Only populated when `terms` is included.
   */
  terms?: Contract.Terms;
}
export namespace Contract {
  export interface BillingCycleAnchor {
    /**
     * The billing cycle anchor as a UTC timestamp.
     */
    timestamp: string;
  }

  export interface BillingSettings {
    /**
     * The bill settings details configures invoice and tax settings for the contract.
     */
    bill_settings_details?: BillingSettings.BillSettingsDetails;

    /**
     * The billing profile details configures who is charged for the contract.
     */
    billing_profile_details: BillingSettings.BillingProfileDetails;

    /**
     * The collection settings details configures how payments are collected on the contract.
     */
    collection_settings_details: BillingSettings.CollectionSettingsDetails;
  }

  export type CollectionStatus =
    | 'blocked'
    | 'current'
    | 'past_due'
    | 'unpaid'
    | OtherString;

  export interface CollectionStatusTransitions {
    /**
     * The timestamp when the contract's collection status transitioned to blocked.
     */
    blocked_at?: string;

    /**
     * The timestamp when the contract's collection status transitioned to current.
     */
    current_at?: string;

    /**
     * The timestamp when the contract's collection status transitioned to past due.
     */
    past_due_at?: string;

    /**
     * The timestamp when the contract's collection status transitioned to unpaid.
     */
    unpaid_at?: string;
  }

  export interface OneTimeFees {
    /**
     * The one-time fees for this page.
     */
    data: Array<OneTimeFees.Data>;
  }

  export interface PricingLines {
    /**
     * The pricing lines for this page.
     */
    data: Array<PricingLines.Data>;
  }

  export interface PricingOverrides {
    /**
     * The pricing overrides for this page.
     */
    data: Array<PricingOverrides.Data>;
  }

  export type Status = 'active' | 'canceled' | 'draft' | 'ended' | OtherString;

  export interface StatusTransitions {
    /**
     * The timestamp when the contract was activated.
     */
    activated_at?: string;

    /**
     * The timestamp when the contract was canceled.
     */
    canceled_at?: string;

    /**
     * The timestamp when the contract ended.
     */
    ended_at?: string;
  }

  export interface Terms {
    /**
     * All terms in display order.
     */
    data: Array<ContractTerm>;
  }

  export namespace BillingSettings {
    export interface BillSettingsDetails {
      /**
       * Calculation settings.
       */
      calculation?: BillSettingsDetails.Calculation;

      /**
       * Invoice settings.
       */
      invoice?: BillSettingsDetails.Invoice;
    }

    export interface BillingProfileDetails {
      /**
       * The customer who pays for the contract invoice.
       */
      customer: string;

      /**
       * The default payment method for the contract.
       */
      default_payment_method?: string;
    }

    export interface CollectionSettingsDetails {
      /**
       * The collection method.
       */
      collection_method: CollectionSettingsDetails.CollectionMethod;

      /**
       * The payment method configuration.
       */
      payment_method_configuration?: string;
    }

    export namespace BillSettingsDetails {
      export interface Calculation {
        /**
         * Tax calculation settings.
         */
        tax?: Calculation.Tax;
      }

      export interface Invoice {
        /**
         * The number of time units before the invoice is past due.
         */
        time_until_due?: Invoice.TimeUntilDue;
      }

      export namespace Calculation {
        export interface Tax {
          /**
           * The type of tax calculation.
           */
          type: Tax.Type;
        }

        export namespace Tax {
          export type Type = 'automatic' | 'manual';
        }
      }

      export namespace Invoice {
        export interface TimeUntilDue {
          /**
           * The interval unit.
           */
          interval: TimeUntilDue.Interval;

          /**
           * The number of intervals.
           */
          interval_count: number;
        }

        export namespace TimeUntilDue {
          export type Interval = 'day' | 'month' | 'week' | 'year';
        }
      }
    }

    export namespace CollectionSettingsDetails {
      export type CollectionMethod = 'charge_automatically' | 'send_invoice';
    }
  }

  export namespace OneTimeFees {
    export interface Data {
      /**
       * The amount billed for this fee.
       */
      amount: V2Amount;

      /**
       * When this fee will be billed. Always contains a concrete timestamp.
       */
      bill_at: Data.BillAt;

      /**
       * The id of the one-time fee.
       */
      id: string;

      /**
       * The user-provided lookup key.
       */
      lookup_key?: string;

      /**
       * Set of key-value pairs.
       */
      metadata?: Metadata;

      /**
       * The id of the product for this fee.
       */
      product: string;
    }

    export namespace Data {
      export interface BillAt {
        /**
         * The timestamp at which the fee will be billed.
         */
        timestamp: string;
      }
    }
  }

  export namespace PricingLines {
    export interface Data {
      /**
       * Timestamp when the pricing line ends.
       */
      ends_at?: Data.EndsAt;

      /**
       * The id of the pricing line.
       */
      id: string;

      /**
       * The user-provided lookup key for the pricing line.
       */
      lookup_key?: string;

      /**
       * Set of key-value pairs.
       */
      metadata?: Metadata;

      /**
       * The pricing configuration for the pricing line.
       */
      pricing: Data.Pricing;

      /**
       * Timestamp when the pricing line starts.
       */
      starts_at: Data.StartsAt;
    }

    export namespace Data {
      export interface EndsAt {
        /**
         * The timestamp when the item ends.
         */
        timestamp: string;
      }

      export interface Pricing {
        /**
         * V1 price details. Present when `type` is `price`.
         */
        price_details?: Pricing.PriceDetails;

        /**
         * The type of pricing.
         */
        type: Pricing.Type;
      }

      export interface StartsAt {
        /**
         * The timestamp when the item starts.
         */
        timestamp: string;
      }

      export namespace Pricing {
        export interface PriceDetails {
          /**
           * The current quantity on this pricing line.
           */
          current_quantity: Decimal;

          /**
           * The ID of the V1 price.
           */
          price: string;

          /**
           * The overwrite_price overrides embedded directly on this pricing line.
           */
          pricing_overrides?: PriceDetails.PricingOverrides;
        }

        export type Type = 'price' | OtherString;

        export namespace PriceDetails {
          export interface PricingOverrides {
            /**
             * The pricing line overrides.
             */
            data: Array<PricingOverrides.Data>;
          }

          export namespace PricingOverrides {
            export interface Data {
              /**
               * Timestamp when this override ends.
               */
              ends_at?: Data.EndsAt;

              /**
               * The ID of the pricing override.
               */
              id: string;

              /**
               * The user-provided lookup key for this override.
               */
              lookup_key?: string;

              /**
               * Set of key-value pairs.
               */
              metadata?: Metadata;

              /**
               * Details for an overwrite_price override.
               */
              overwrite_price?: Data.OverwritePrice;

              /**
               * The priority of this override relative to others. Lower number = higher priority.
               */
              priority: number;

              /**
               * Timestamp when this override starts.
               */
              starts_at: Data.StartsAt;

              /**
               * The type of override.
               */
              type: Data.Type;
            }

            export namespace Data {
              export interface EndsAt {
                /**
                 * The timestamp when the item ends.
                 */
                timestamp: string;
              }

              export interface OverwritePrice {
                /**
                 * The per-unit amount to be charged, represented as a decimal string in minor currency units.
                 */
                unit_amount?: string;
              }

              export interface StartsAt {
                /**
                 * The timestamp when the item starts.
                 */
                timestamp: string;
              }

              export type Type = 'overwrite_price' | OtherString;
            }
          }
        }
      }
    }
  }

  export namespace PricingOverrides {
    export interface Data {
      /**
       * Resolved timestamp when the pricing override ends.
       */
      ends_at?: Data.EndsAt;

      /**
       * The ID of the pricing override.
       */
      id: string;

      /**
       * The user-provided lookup key for the pricing override.
       */
      lookup_key?: string;

      /**
       * Set of key-value pairs.
       */
      metadata?: Metadata;

      /**
       * Details for a multiply_pricing override.
       */
      multiply_pricing?: Data.MultiplyPricing;

      /**
       * The priority of this override relative to others. Lower number = higher priority.
       */
      priority: number;

      /**
       * Resolved timestamp when the pricing override starts.
       */
      starts_at: Data.StartsAt;

      /**
       * The type of pricing override.
       */
      type: Data.Type;
    }

    export namespace Data {
      export interface EndsAt {
        /**
         * The timestamp when the item ends.
         */
        timestamp: string;
      }

      export interface MultiplyPricing {
        /**
         * Criteria determining which rates the multiply_pricing override applies to.
         */
        criteria: Array<MultiplyPricing.Criterion>;

        /**
         * The multiply_pricing factor, represented as a decimal string. e.g. "0.8" for a 20% reduction.
         */
        factor: string;
      }

      export interface StartsAt {
        /**
         * The timestamp when the item starts.
         */
        timestamp: string;
      }

      export type Type = 'multiply_pricing' | OtherString;

      export namespace MultiplyPricing {
        export interface Criterion {
          /**
           * Filter by pricing line IDs.
           */
          pricing_line_ids?: Array<string>;

          /**
           * Filter by pricing line lookup keys.
           */
          pricing_line_lookup_keys?: Array<string>;

          /**
           * Whether to include or exclude items matching these criteria.
           */
          type: Criterion.Type;
        }

        export namespace Criterion {
          export type Type = 'exclude' | 'include' | OtherString;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractCreateParams {
      /**
       * A unique user-provided contract number e.g. C-2026-0001.
       * Maximum length of 200 characters.
       */
      contract_number: string;

      /**
       * Currency of the contract.
       */
      currency: string;

      /**
       * The billing cycle anchor for the contract. If not provided, defaults to the pricing line start time.
       * It is only at the top-level of the contract with no option to override at the pricing line level.
       */
      billing_cycle_anchor?: ContractCreateParams.BillingCycleAnchor;

      /**
       * The billing settings for the contract.
       */
      billing_settings?: ContractCreateParams.BillingSettings;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<ContractCreateParams.Include>;

      /**
       * Set of key-value pairs that you can attach to an object.
       */
      metadata?: MetadataParam;

      /**
       * Terms to create with the contract.
       */
      terms?: Array<ContractCreateParams.Term>;
    }

    export namespace ContractCreateParams {
      export interface BillingCycleAnchor {
        /**
         * Configuration for determining the billing cycle anchor by calendar fields.
         */
        config?: BillingCycleAnchor.Config;

        /**
         * A specific timestamp to use as the billing cycle anchor.
         */
        timestamp?: string;

        /**
         * The type of billing cycle anchor.
         */
        type: BillingCycleAnchor.Type;
      }

      export interface BillingSettings {
        /**
         * The bill settings details configures invoice and tax settings for the contract.
         */
        bill_settings_details?: BillingSettings.BillSettingsDetails;

        /**
         * The billing profile details configures who is charged for the contract.
         */
        billing_profile_details: BillingSettings.BillingProfileDetails;

        /**
         * The collection settings details configures how payments are collected on the contract.
         */
        collection_settings_details: BillingSettings.CollectionSettingsDetails;
      }

      export type Include =
        | 'billing_settings'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides'
        | 'terms'
        | OtherString;

      export interface Term {
        /**
         * Lookup key unique across all term types on the contract.
         */
        lookup_key?: string;

        /**
         * Set of key-value pairs attached to the term.
         */
        metadata?: MetadataParam;

        /**
         * Required when type is pricing_override.
         */
        pricing_override?: Term.PricingOverride;

        /**
         * Required when type is recurring_price.
         */
        recurring_price?: Term.RecurringPrice;

        /**
         * Required when type is scheduled_fee.
         */
        scheduled_fee?: Term.ScheduledFee;

        /**
         * The term type. Production types require exactly one matching payload.
         */
        type: Term.Type;
      }

      export namespace BillingCycleAnchor {
        export interface Config {
          /**
           * Day of month (1-31).
           */
          day_of_month: number;

          /**
           * Hour of day in UTC (0-23).
           */
          hour?: number;

          /**
           * Minute of hour (0-59).
           */
          minute?: number;

          /**
           * Month of year (1-12).
           */
          month_of_year?: number;

          /**
           * Second of minute (0-59).
           */
          second?: number;
        }

        export type Type = 'config' | 'timestamp';
      }

      export namespace BillingSettings {
        export interface BillSettingsDetails {
          /**
           * Calculation settings.
           */
          calculation?: BillSettingsDetails.Calculation;

          /**
           * Invoice settings.
           */
          invoice?: BillSettingsDetails.Invoice;
        }

        export interface BillingProfileDetails {
          /**
           * The customer who pays for the contract invoice.
           */
          customer: string;

          /**
           * The default payment method for the contract.
           */
          default_payment_method?: string;
        }

        export interface CollectionSettingsDetails {
          /**
           * How payment is collected for the contract.
           */
          collection_method: CollectionSettingsDetails.CollectionMethod;

          /**
           * The payment method configuration.
           */
          payment_method_configuration?: string;
        }

        export namespace BillSettingsDetails {
          export interface Calculation {
            /**
             * Tax calculation settings.
             */
            tax?: Calculation.Tax;
          }

          export interface Invoice {
            /**
             * How long the customer has to pay the invoice before it's past due.
             */
            time_until_due?: Invoice.TimeUntilDue;
          }

          export namespace Calculation {
            export interface Tax {
              /**
               * The type of tax calculation.
               */
              type: Tax.Type;
            }

            export namespace Tax {
              export type Type = 'automatic' | 'manual';
            }
          }

          export namespace Invoice {
            export interface TimeUntilDue {
              /**
               * The interval unit.
               */
              interval: TimeUntilDue.Interval;

              /**
               * The number of intervals.
               */
              interval_count: number;
            }

            export namespace TimeUntilDue {
              export type Interval = 'day' | 'month' | 'week' | 'year';
            }
          }
        }

        export namespace CollectionSettingsDetails {
          export type CollectionMethod =
            | 'charge_automatically'
            | 'send_invoice';
        }
      }

      export namespace Term {
        export interface PricingOverride {
          /**
           * Optional criteria selecting recurring or scheduled_fee terms. If omitted, the override applies to all recurring and scheduled_fee terms.
           */
          criteria?: Array<PricingOverride.Criterion>;

          /**
           * The exclusive end. Omitted means open-ended.
           */
          ends_at?: PricingOverride.EndsAt;

          /**
           * Required when type is multiply.
           */
          multiply?: PricingOverride.Multiply;

          /**
           * Required when type is overwrite.
           */
          overwrite?: PricingOverride.Overwrite;

          /**
           * Lower numbers win; defaults to 50.
           */
          priority?: number;

          /**
           * The inclusive start of the validity window.
           */
          starts_at: PricingOverride.StartsAt;

          /**
           * The pricing operation. Exactly one matching pricing payload is required.
           */
          type: PricingOverride.Type;
        }

        export interface RecurringPrice {
          /**
           * The exclusive end. Omitted means open-ended.
           */
          ends_at?: RecurringPrice.EndsAt;

          /**
           * The V1 recurring Price.
           */
          price: string;

          /**
           * Initial licensed quantity. Defaults to 1; must be omitted for metered Prices.
           */
          quantity?: Decimal;

          /**
           * The inclusive start of the term.
           */
          starts_at: RecurringPrice.StartsAt;
        }

        export interface ScheduledFee {
          /**
           * Explicit bill dates and amounts.
           */
          bill_schedule: ScheduledFee.BillSchedule;

          /**
           * The V1 Product being billed.
           */
          product: string;

          /**
           * Informational service period, independent of bill dates.
           */
          service_period?: ScheduledFee.ServicePeriod;
        }

        export type Type =
          | 'pricing_override'
          | 'recurring_price'
          | 'scheduled_fee'
          | OtherString;

        export namespace PricingOverride {
          export interface Criterion {
            /**
             * Term selectors. Each ID or lookup key resolves to one fixed term ID.
             * Omitted or empty selects all charge-bearing terms. Override terms cannot be targets.
             */
            terms?: Array<Criterion.Term>;

            /**
             * Whether to include or exclude the selected recurring or scheduled_fee terms.
             */
            type: Criterion.Type;
          }

          export interface EndsAt {
            /**
             * The timestamp when the item ends. Required if `type` is `timestamp`.
             */
            timestamp?: string;

            /**
             * The type of the ends_at.
             */
            type: EndsAt.Type;
          }

          export interface Multiply {
            /**
             * The multiplier, for example 0.85 for a 15% discount.
             */
            factor: Decimal;
          }

          export interface Overwrite {
            /**
             * The replacement per-unit amount in minor currency units.
             */
            unit_amount_decimal?: Decimal;
          }

          export interface StartsAt {
            /**
             * The timestamp when the item starts. Required if `type` is `timestamp`.
             */
            timestamp?: string;

            /**
             * The type of the starts_at.
             */
            type: StartsAt.Type;
          }

          export type Type = 'multiply' | 'overwrite' | OtherString;

          export namespace Criterion {
            export interface Term {
              /**
               * Select this term by its stable ID.
               */
              id?: string;

              /**
               * Select this term by its unique lookup key.
               */
              lookup_key?: string;

              /**
               * Whether the selector uses a term ID or lookup key.
               */
              type: Term.Type;
            }

            export type Type = 'exclude' | 'include' | OtherString;

            export namespace Term {
              export type Type = 'id' | 'lookup_key';
            }
          }

          export namespace EndsAt {
            export type Type = 'never' | 'now' | 'timestamp' | OtherString;
          }

          export namespace StartsAt {
            export type Type = 'now' | 'timestamp' | OtherString;
          }
        }

        export namespace RecurringPrice {
          export interface EndsAt {
            /**
             * The timestamp when the item ends. Required if `type` is `timestamp`.
             */
            timestamp?: string;

            /**
             * The type of the ends_at.
             */
            type: EndsAt.Type;
          }

          export interface StartsAt {
            /**
             * The timestamp when the item starts. Required if `type` is `timestamp`.
             */
            timestamp?: string;

            /**
             * The type of the starts_at.
             */
            type: StartsAt.Type;
          }

          export namespace EndsAt {
            export type Type = 'never' | 'now' | 'timestamp' | OtherString;
          }

          export namespace StartsAt {
            export type Type = 'now' | 'timestamp' | OtherString;
          }
        }

        export namespace ScheduledFee {
          export interface BillSchedule {
            /**
             * Between one and ten installments. Empty schedules are allowed only on update.
             */
            custom?: Array<BillSchedule.Custom>;

            /**
             * The type of schedule.
             */
            type: BillSchedule.Type;
          }

          export interface ServicePeriod {
            /**
             * The finite exclusive end; must be after starts_at. Never is not supported.
             */
            ends_at: ServicePeriod.EndsAt;

            /**
             * The finite inclusive start of the service period.
             */
            starts_at: ServicePeriod.StartsAt;
          }

          export namespace BillSchedule {
            export interface Custom {
              /**
               * Non-negative amount with an explicit currency that must match the contract's currency.
               */
              amount: V2Amount;

              /**
               * A finite bill date. Resolved once per request, including on idempotent retries.
               */
              bill_at: Custom.BillAt;
            }

            export type Type = 'custom' | OtherString;

            export namespace Custom {
              export interface BillAt {
                /**
                 * The timestamp at which the entry should be billed. Required if `type` is `timestamp`.
                 */
                timestamp?: string;

                /**
                 * The type of the bill_at.
                 */
                type: BillAt.Type;
              }

              export namespace BillAt {
                export type Type = 'now' | 'timestamp' | OtherString;
              }
            }
          }

          export namespace ServicePeriod {
            export interface EndsAt {
              /**
               * The timestamp when the item starts. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the starts_at.
               */
              type: EndsAt.Type;
            }

            export interface StartsAt {
              /**
               * The timestamp when the item starts. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the starts_at.
               */
              type: StartsAt.Type;
            }

            export namespace EndsAt {
              export type Type = 'now' | 'timestamp' | OtherString;
            }

            export namespace StartsAt {
              export type Type = 'now' | 'timestamp' | OtherString;
            }
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<ContractRetrieveParams.Include>;
    }

    export namespace ContractRetrieveParams {
      export type Include =
        | 'billing_settings'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides'
        | 'terms'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractUpdateParams {
      /**
       * Apply all term actions atomically.
       */
      actions?: Array<ContractUpdateParams.Action>;

      /**
       * The billing settings to update on the contract.
       */
      billing_settings?: ContractUpdateParams.BillingSettings;

      /**
       * The unique user-provided contract number. This can only be changed while the contract is in draft.
       */
      contract_number?: string;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<ContractUpdateParams.Include>;

      /**
       * Set of key-value pairs.
       */
      metadata?: MetadataParam;
    }

    export namespace ContractUpdateParams {
      export interface Action {
        /**
         * Prepend a term, preserving relative order among additions in this request.
         */
        add_term?: Action.AddTerm;

        /**
         * Remove a term that has not started.
         */
        remove_term?: Action.RemoveTerm;

        /**
         * The action type. Exactly one matching payload is required.
         */
        type: Action.Type;

        /**
         * Edit a term without changing its display position.
         */
        update_term?: Action.UpdateTerm;
      }

      export interface BillingSettings {
        /**
         * The bill settings to update (tax calculation type and/or invoice time until due).
         */
        bill_settings_details?: BillingSettings.BillSettingsDetails;

        /**
         * The billing profile details to update.
         */
        billing_profile_details?: BillingSettings.BillingProfileDetails;

        /**
         * The collection settings details to update on the contract.
         */
        collection_settings_details?: BillingSettings.CollectionSettingsDetails;
      }

      export type Include =
        | 'billing_settings'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides'
        | 'terms'
        | OtherString;

      export namespace Action {
        export interface AddTerm {
          /**
           * Lookup key unique across all term types on the contract.
           */
          lookup_key?: string;

          /**
           * Set of key-value pairs attached to the term.
           */
          metadata?: MetadataParam;

          /**
           * Required when type is pricing_override.
           */
          pricing_override?: AddTerm.PricingOverride;

          /**
           * Required when type is recurring_price.
           */
          recurring_price?: AddTerm.RecurringPrice;

          /**
           * Required when type is scheduled_fee.
           */
          scheduled_fee?: AddTerm.ScheduledFee;

          /**
           * The term type. Production types require exactly one matching payload.
           */
          type: AddTerm.Type;
        }

        export interface RemoveTerm {
          /**
           * Select a term by ID or its unique lookup key.
           */
          term: RemoveTerm.Term;
        }

        export type Type =
          | 'add_term'
          | 'remove_term'
          | 'update_term'
          | OtherString;

        export interface UpdateTerm {
          /**
           * Metadata changes to apply immediately.
           */
          metadata?: MetadataParam;

          /**
           * Only validity dates can change; pricing, criteria, and priority are immutable.
           */
          pricing_override?: UpdateTerm.PricingOverride;

          /**
           * Must match the existing term's type.
           */
          recurring_price?: UpdateTerm.RecurringPrice;

          /**
           * Must match the existing term's type.
           */
          scheduled_fee?: UpdateTerm.ScheduledFee;

          /**
           * Select a term by ID or its unique lookup key.
           */
          term: UpdateTerm.Term;
        }

        export namespace AddTerm {
          export interface PricingOverride {
            /**
             * Optional criteria selecting recurring or scheduled_fee terms. If omitted, the override applies to all recurring and scheduled_fee terms.
             */
            criteria?: Array<PricingOverride.Criterion>;

            /**
             * The exclusive end. Omitted means open-ended.
             */
            ends_at?: PricingOverride.EndsAt;

            /**
             * Required when type is multiply.
             */
            multiply?: PricingOverride.Multiply;

            /**
             * Required when type is overwrite.
             */
            overwrite?: PricingOverride.Overwrite;

            /**
             * Lower numbers win; defaults to 50.
             */
            priority?: number;

            /**
             * The inclusive start of the validity window.
             */
            starts_at: PricingOverride.StartsAt;

            /**
             * The pricing operation. Exactly one matching pricing payload is required.
             */
            type: PricingOverride.Type;
          }

          export interface RecurringPrice {
            /**
             * The exclusive end. Omitted means open-ended.
             */
            ends_at?: RecurringPrice.EndsAt;

            /**
             * The V1 recurring Price.
             */
            price: string;

            /**
             * Initial licensed quantity. Defaults to 1; must be omitted for metered Prices.
             */
            quantity?: Decimal;

            /**
             * The inclusive start of the term.
             */
            starts_at: RecurringPrice.StartsAt;
          }

          export interface ScheduledFee {
            /**
             * Explicit bill dates and amounts.
             */
            bill_schedule: ScheduledFee.BillSchedule;

            /**
             * The V1 Product being billed.
             */
            product: string;

            /**
             * Informational service period, independent of bill dates.
             */
            service_period?: ScheduledFee.ServicePeriod;
          }

          export type Type =
            | 'pricing_override'
            | 'recurring_price'
            | 'scheduled_fee'
            | OtherString;

          export namespace PricingOverride {
            export interface Criterion {
              /**
               * Term selectors. Each ID or lookup key resolves to one fixed term ID.
               * Omitted or empty selects all charge-bearing terms. Override terms cannot be targets.
               */
              terms?: Array<Criterion.Term>;

              /**
               * Whether to include or exclude the selected recurring or scheduled_fee terms.
               */
              type: Criterion.Type;
            }

            export interface EndsAt {
              /**
               * The timestamp when the item ends. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the ends_at.
               */
              type: EndsAt.Type;
            }

            export interface Multiply {
              /**
               * The multiplier, for example 0.85 for a 15% discount.
               */
              factor: Decimal;
            }

            export interface Overwrite {
              /**
               * The replacement per-unit amount in minor currency units.
               */
              unit_amount_decimal?: Decimal;
            }

            export interface StartsAt {
              /**
               * The timestamp when the item starts. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the starts_at.
               */
              type: StartsAt.Type;
            }

            export type Type = 'multiply' | 'overwrite' | OtherString;

            export namespace Criterion {
              export interface Term {
                /**
                 * Select this term by its stable ID.
                 */
                id?: string;

                /**
                 * Select this term by its unique lookup key.
                 */
                lookup_key?: string;

                /**
                 * Whether the selector uses a term ID or lookup key.
                 */
                type: Term.Type;
              }

              export type Type = 'exclude' | 'include' | OtherString;

              export namespace Term {
                export type Type = 'id' | 'lookup_key';
              }
            }

            export namespace EndsAt {
              export type Type = 'never' | 'now' | 'timestamp' | OtherString;
            }

            export namespace StartsAt {
              export type Type = 'now' | 'timestamp' | OtherString;
            }
          }

          export namespace RecurringPrice {
            export interface EndsAt {
              /**
               * The timestamp when the item ends. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the ends_at.
               */
              type: EndsAt.Type;
            }

            export interface StartsAt {
              /**
               * The timestamp when the item starts. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the starts_at.
               */
              type: StartsAt.Type;
            }

            export namespace EndsAt {
              export type Type = 'never' | 'now' | 'timestamp' | OtherString;
            }

            export namespace StartsAt {
              export type Type = 'now' | 'timestamp' | OtherString;
            }
          }

          export namespace ScheduledFee {
            export interface BillSchedule {
              /**
               * Between one and ten installments. Empty schedules are allowed only on update.
               */
              custom?: Array<BillSchedule.Custom>;

              /**
               * The type of schedule.
               */
              type: BillSchedule.Type;
            }

            export interface ServicePeriod {
              /**
               * The finite exclusive end; must be after starts_at. Never is not supported.
               */
              ends_at: ServicePeriod.EndsAt;

              /**
               * The finite inclusive start of the service period.
               */
              starts_at: ServicePeriod.StartsAt;
            }

            export namespace BillSchedule {
              export interface Custom {
                /**
                 * Non-negative amount with an explicit currency that must match the contract's currency.
                 */
                amount: V2Amount;

                /**
                 * A finite bill date. Resolved once per request, including on idempotent retries.
                 */
                bill_at: Custom.BillAt;
              }

              export type Type = 'custom' | OtherString;

              export namespace Custom {
                export interface BillAt {
                  /**
                   * The timestamp at which the entry should be billed. Required if `type` is `timestamp`.
                   */
                  timestamp?: string;

                  /**
                   * The type of the bill_at.
                   */
                  type: BillAt.Type;
                }

                export namespace BillAt {
                  export type Type = 'now' | 'timestamp' | OtherString;
                }
              }
            }

            export namespace ServicePeriod {
              export interface EndsAt {
                /**
                 * The timestamp when the item starts. Required if `type` is `timestamp`.
                 */
                timestamp?: string;

                /**
                 * The type of the starts_at.
                 */
                type: EndsAt.Type;
              }

              export interface StartsAt {
                /**
                 * The timestamp when the item starts. Required if `type` is `timestamp`.
                 */
                timestamp?: string;

                /**
                 * The type of the starts_at.
                 */
                type: StartsAt.Type;
              }

              export namespace EndsAt {
                export type Type = 'now' | 'timestamp' | OtherString;
              }

              export namespace StartsAt {
                export type Type = 'now' | 'timestamp' | OtherString;
              }
            }
          }
        }

        export namespace RemoveTerm {
          export interface Term {
            /**
             * Select this term by its stable ID.
             */
            id?: string;

            /**
             * Select this term by its unique lookup key.
             */
            lookup_key?: string;

            /**
             * Whether the selector uses a term ID or lookup key.
             */
            type: Term.Type;
          }

          export namespace Term {
            export type Type = 'id' | 'lookup_key';
          }
        }

        export namespace UpdateTerm {
          export interface PricingOverride {
            /**
             * Omission leaves the end unchanged; never requests an open end.
             */
            ends_at?: PricingOverride.EndsAt;

            /**
             * Can change only before the override starts. Accepts timestamp or now.
             */
            starts_at?: PricingOverride.StartsAt;
          }

          export interface RecurringPrice {
            /**
             * Omission leaves the end unchanged; never requests an open end.
             */
            ends_at?: RecurringPrice.EndsAt;

            /**
             * Update an active term's licensed quantity at the contract's current clock time,
             * or an unstarted term's initial quantity, preserving its ID. Ended terms cannot change quantity.
             */
            quantity?: Decimal;

            /**
             * Reschedule an unstarted term in place.
             */
            starts_at?: RecurringPrice.StartsAt;
          }

          export interface ScheduledFee {
            /**
             * Replace remaining unbilled installments. Billed entries remain immutable.
             */
            bill_schedule?: ScheduledFee.BillSchedule;

            /**
             * Informational service period; cannot change historical billing.
             */
            service_period?: ScheduledFee.ServicePeriod;
          }

          export interface Term {
            /**
             * Select this term by its stable ID.
             */
            id?: string;

            /**
             * Select this term by its unique lookup key.
             */
            lookup_key?: string;

            /**
             * Whether the selector uses a term ID or lookup key.
             */
            type: Term.Type;
          }

          export namespace PricingOverride {
            export interface EndsAt {
              /**
               * The timestamp when the item ends. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the ends_at.
               */
              type: EndsAt.Type;
            }

            export interface StartsAt {
              /**
               * The timestamp when the item starts. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the starts_at.
               */
              type: StartsAt.Type;
            }

            export namespace EndsAt {
              export type Type = 'never' | 'now' | 'timestamp' | OtherString;
            }

            export namespace StartsAt {
              export type Type = 'now' | 'timestamp' | OtherString;
            }
          }

          export namespace RecurringPrice {
            export interface EndsAt {
              /**
               * The timestamp when the item ends. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the ends_at.
               */
              type: EndsAt.Type;
            }

            export interface StartsAt {
              /**
               * The timestamp when the item starts. Required if `type` is `timestamp`.
               */
              timestamp?: string;

              /**
               * The type of the starts_at.
               */
              type: StartsAt.Type;
            }

            export namespace EndsAt {
              export type Type = 'never' | 'now' | 'timestamp' | OtherString;
            }

            export namespace StartsAt {
              export type Type = 'now' | 'timestamp' | OtherString;
            }
          }

          export namespace ScheduledFee {
            export interface BillSchedule {
              /**
               * Full replacement of up to ten unbilled installments. An explicit empty array cancels all of them.
               */
              custom?: Array<BillSchedule.Custom>;

              /**
               * The type of schedule.
               */
              type: BillSchedule.Type;
            }

            export interface ServicePeriod {
              /**
               * The finite exclusive end; must be after starts_at. Never is not supported.
               */
              ends_at: ServicePeriod.EndsAt;

              /**
               * The finite inclusive start of the service period.
               */
              starts_at: ServicePeriod.StartsAt;
            }

            export namespace BillSchedule {
              export interface Custom {
                /**
                 * Non-negative amount with an explicit currency that must match the contract's currency.
                 */
                amount: V2Amount;

                /**
                 * A finite bill date. Resolved once per request, including on idempotent retries.
                 */
                bill_at: Custom.BillAt;
              }

              export type Type = 'custom' | OtherString;

              export namespace Custom {
                export interface BillAt {
                  /**
                   * The timestamp at which the entry should be billed. Required if `type` is `timestamp`.
                   */
                  timestamp?: string;

                  /**
                   * The type of the bill_at.
                   */
                  type: BillAt.Type;
                }

                export namespace BillAt {
                  export type Type = 'now' | 'timestamp' | OtherString;
                }
              }
            }

            export namespace ServicePeriod {
              export interface EndsAt {
                /**
                 * The timestamp when the item starts. Required if `type` is `timestamp`.
                 */
                timestamp?: string;

                /**
                 * The type of the starts_at.
                 */
                type: EndsAt.Type;
              }

              export interface StartsAt {
                /**
                 * The timestamp when the item starts. Required if `type` is `timestamp`.
                 */
                timestamp?: string;

                /**
                 * The type of the starts_at.
                 */
                type: StartsAt.Type;
              }

              export namespace EndsAt {
                export type Type = 'now' | 'timestamp' | OtherString;
              }

              export namespace StartsAt {
                export type Type = 'now' | 'timestamp' | OtherString;
              }
            }
          }

          export namespace Term {
            export type Type = 'id' | 'lookup_key';
          }
        }
      }

      export namespace BillingSettings {
        export interface BillSettingsDetails {
          /**
           * The tax calculation settings to update.
           */
          calculation?: BillSettingsDetails.Calculation;

          /**
           * The invoice settings to update.
           */
          invoice?: BillSettingsDetails.Invoice;
        }

        export interface BillingProfileDetails {
          /**
           * The default payment method to charge for the contract.
           */
          default_payment_method?: string;
        }

        export interface CollectionSettingsDetails {
          /**
           * How payment is collected for the contract. An omitted value leaves the
           * collection method unchanged.
           */
          collection_method?: CollectionSettingsDetails.CollectionMethod;

          /**
           * The payment method configuration.
           */
          payment_method_configuration?: string;
        }

        export namespace BillSettingsDetails {
          export interface Calculation {
            /**
             * Tax calculation settings.
             */
            tax?: Calculation.Tax;
          }

          export interface Invoice {
            /**
             * How long the customer has to pay the invoice before it's past due.
             */
            time_until_due?: Invoice.TimeUntilDue;
          }

          export namespace Calculation {
            export interface Tax {
              /**
               * The type of tax calculation.
               */
              type: Tax.Type;
            }

            export namespace Tax {
              export type Type = 'automatic' | 'manual';
            }
          }

          export namespace Invoice {
            export interface TimeUntilDue {
              /**
               * The interval unit.
               */
              interval: TimeUntilDue.Interval;

              /**
               * The number of intervals.
               */
              interval_count: number;
            }

            export namespace TimeUntilDue {
              export type Interval = 'day' | 'month' | 'week' | 'year';
            }
          }
        }

        export namespace CollectionSettingsDetails {
          export type CollectionMethod =
            | 'charge_automatically'
            | 'send_invoice';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractListParams {
      /**
       * Filter by customer id.
       */
      customer?: string;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<ContractListParams.Include>;

      /**
       * The limit for the number of results per page.
       */
      limit?: number;
    }

    export namespace ContractListParams {
      export type Include =
        | 'billing_settings'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides'
        | 'terms'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractDeleteParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractActivateParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<ContractActivateParams.Include>;
    }

    export namespace ContractActivateParams {
      export type Include =
        | 'billing_settings'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides'
        | 'terms'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractCancelParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<ContractCancelParams.Include>;

      /**
       * Top-level proration behavior for the cancellation. Defaults to `prorated` if not set.
       */
      proration_behavior?: ContractCancelParams.ProrationBehavior;

      /**
       * Per-term proration overrides.
       */
      terms?: Array<ContractCancelParams.Term>;
    }

    export namespace ContractCancelParams {
      export type Include =
        | 'billing_settings'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides'
        | 'terms'
        | OtherString;

      export type ProrationBehavior = 'none' | 'prorated' | OtherString;

      export interface Term {
        /**
         * Falls back to the contract cancellation's top-level proration behavior.
         */
        proration_behavior?: Term.ProrationBehavior;

        /**
         * Select a term by ID or its unique lookup key.
         */
        term: Term.Term;
      }

      export namespace Term {
        export type ProrationBehavior = 'none' | 'prorated' | OtherString;

        export interface Term {
          /**
           * Select this term by its stable ID.
           */
          id?: string;

          /**
           * Select this term by its unique lookup key.
           */
          lookup_key?: string;

          /**
           * Whether the selector uses a term ID or lookup key.
           */
          type: Term.Type;
        }

        export namespace Term {
          export type Type = 'id' | 'lookup_key';
        }
      }
    }
  }
}
