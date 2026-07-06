// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {MetadataParam, Decimal, Metadata} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';
import {DeletedObject} from './../../V2/DeletedObject.js';
import {PricingLineResource} from './Contracts/PricingLines.js';
import {Stripe} from '../../../stripe.core.js';
export class ContractResource extends StripeResource {
  pricingLines: PricingLineResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.pricingLines = new PricingLineResource(stripe);
  }
  /**
   * List Contract objects with pagination.
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
                                  pricing_overrides: {
                                    kind: 'object',
                                    fields: {
                                      data: {
                                        kind: 'array',
                                        element: {
                                          kind: 'object',
                                          fields: {
                                            overwrite_price: {
                                              kind: 'object',
                                              fields: {
                                                tiers: {
                                                  kind: 'array',
                                                  element: {
                                                    kind: 'object',
                                                    fields: {
                                                      up_to_decimal: {
                                                        kind: 'decimal_string',
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
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
   * Create a Contract object.
   */
  create(
    params: V2.Billing.ContractCreateParams,
    options?: RequestOptions
  ): Promise<Response<Contract>> {
    return this._makeRequest('POST', '/v2/billing/contracts', params, options, {
      requestSchema: {
        kind: 'object',
        fields: {
          pricing_lines: {
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
                        pricing_overrides: {
                          kind: 'array',
                          element: {
                            kind: 'object',
                            fields: {
                              overwrite_price: {
                                kind: 'object',
                                fields: {
                                  tiers: {
                                    kind: 'array',
                                    element: {
                                      kind: 'object',
                                      fields: {
                                        up_to_decimal: {kind: 'decimal_string'},
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        quantity_changes: {
                          kind: 'array',
                          element: {
                            kind: 'object',
                            fields: {set: {kind: 'decimal_string'}},
                          },
                        },
                      },
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
                            pricing_overrides: {
                              kind: 'object',
                              fields: {
                                data: {
                                  kind: 'array',
                                  element: {
                                    kind: 'object',
                                    fields: {
                                      overwrite_price: {
                                        kind: 'object',
                                        fields: {
                                          tiers: {
                                            kind: 'array',
                                            element: {
                                              kind: 'object',
                                              fields: {
                                                up_to_decimal: {
                                                  kind: 'decimal_string',
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
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
   * Delete a draft Contract object by ID.
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
   * Retrieve a Contract object by ID.
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
                              pricing_overrides: {
                                kind: 'object',
                                fields: {
                                  data: {
                                    kind: 'array',
                                    element: {
                                      kind: 'object',
                                      fields: {
                                        overwrite_price: {
                                          kind: 'object',
                                          fields: {
                                            tiers: {
                                              kind: 'array',
                                              element: {
                                                kind: 'object',
                                                fields: {
                                                  up_to_decimal: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
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
   * Update a Contract object by ID.
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
            pricing_line_actions: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  add: {
                    kind: 'object',
                    fields: {
                      pricing: {
                        kind: 'object',
                        fields: {
                          price_details: {
                            kind: 'object',
                            fields: {
                              pricing_overrides: {
                                kind: 'array',
                                element: {
                                  kind: 'object',
                                  fields: {
                                    overwrite_price: {
                                      kind: 'object',
                                      fields: {
                                        tiers: {
                                          kind: 'array',
                                          element: {
                                            kind: 'object',
                                            fields: {
                                              up_to_decimal: {
                                                kind: 'decimal_string',
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              quantity_changes: {
                                kind: 'array',
                                element: {
                                  kind: 'object',
                                  fields: {set: {kind: 'decimal_string'}},
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  update: {
                    kind: 'object',
                    fields: {
                      pricing: {
                        kind: 'object',
                        fields: {
                          price_details: {
                            kind: 'object',
                            fields: {
                              pricing_override_actions: {
                                kind: 'array',
                                element: {
                                  kind: 'object',
                                  fields: {
                                    add: {
                                      kind: 'object',
                                      fields: {
                                        overwrite_price: {
                                          kind: 'object',
                                          fields: {
                                            tiers: {
                                              kind: 'array',
                                              element: {
                                                kind: 'object',
                                                fields: {
                                                  up_to_decimal: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              quantity_changes: {
                                kind: 'array',
                                element: {
                                  kind: 'object',
                                  fields: {set: {kind: 'decimal_string'}},
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            pricing_override_actions: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  add: {
                    kind: 'object',
                    fields: {
                      overwrite_price: {
                        kind: 'object',
                        fields: {
                          tiers: {
                            kind: 'array',
                            element: {
                              kind: 'object',
                              fields: {up_to_decimal: {kind: 'decimal_string'}},
                            },
                          },
                        },
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
                              pricing_overrides: {
                                kind: 'object',
                                fields: {
                                  data: {
                                    kind: 'array',
                                    element: {
                                      kind: 'object',
                                      fields: {
                                        overwrite_price: {
                                          kind: 'object',
                                          fields: {
                                            tiers: {
                                              kind: 'array',
                                              element: {
                                                kind: 'object',
                                                fields: {
                                                  up_to_decimal: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
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
   * Activate a Draft Contract object by ID.
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
                              pricing_overrides: {
                                kind: 'object',
                                fields: {
                                  data: {
                                    kind: 'array',
                                    element: {
                                      kind: 'object',
                                      fields: {
                                        overwrite_price: {
                                          kind: 'object',
                                          fields: {
                                            tiers: {
                                              kind: 'array',
                                              element: {
                                                kind: 'object',
                                                fields: {
                                                  up_to_decimal: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
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
   * Cancel a Contract object by ID.
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
                              pricing_overrides: {
                                kind: 'object',
                                fields: {
                                  data: {
                                    kind: 'array',
                                    element: {
                                      kind: 'object',
                                      fields: {
                                        overwrite_price: {
                                          kind: 'object',
                                          fields: {
                                            tiers: {
                                              kind: 'array',
                                              element: {
                                                kind: 'object',
                                                fields: {
                                                  up_to_decimal: {
                                                    kind: 'decimal_string',
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
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
}
export interface Contract {
  /**
   * The ID of the contract object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.contract';

  /**
   * The billing cycle anchor for the contract.
   */
  billing_cycle_anchor?: Contract.BillingCycleAnchor;

  /**
   * The billing settings for the contract.
   */
  billing_settings?: Contract.BillingSettings;

  /**
   * A unique user-provided contract number e.g. C-2026-0001.
   */
  contract_number: string;

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * The currency of the contract.
   */
  currency: string;

  /**
   * The ID of the customer associated with the contract.
   */
  customer: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object.
   */
  metadata?: Metadata;

  /**
   * The one-time fees of the contract. Only populated when `one_time_fees` is passed in the `include` parameter.
   */
  one_time_fees?: Contract.OneTimeFees;

  /**
   * The pricing lines of the contract. Only populated when `pricing_lines` is passed in the `include` parameter.
   */
  pricing_lines?: Contract.PricingLines;

  /**
   * The pricing overrides of the contract. Only populated when `pricing_overrides` is passed in the `include` parameter.
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

  export type Status = 'active' | 'canceled' | 'draft' | 'ended';

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
       * The ID of the one-time fee.
       */
      id: string;

      /**
       * The user-provided lookup key.
       */
      lookup_key?: string;

      /**
       * The ID of the v1 Product for this fee.
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
       * Resolved timestamp when the pricing line ends.
       */
      ends_at: Data.EndsAt;

      /**
       * The ID of the pricing line.
       */
      id: string;

      /**
       * The user-provided lookup key for the pricing line.
       */
      lookup_key?: string;

      /**
       * Set of key-value pairs that you can attach to an object.
       */
      metadata?: Metadata;

      /**
       * The pricing configuration for the pricing line.
       */
      pricing: Data.Pricing;

      /**
       * Resolved timestamp when the pricing line starts.
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
        type: 'price';
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
               * Resolved timestamp when this override ends.
               */
              ends_at: Data.EndsAt;

              /**
               * The user-provided lookup key for this override.
               */
              lookup_key?: string;

              /**
               * Details for an overwrite_price override.
               */
              overwrite_price?: Data.OverwritePrice;

              /**
               * The ID of the pricing line override.
               */
              pricing_override: string;

              /**
               * Resolved timestamp when this override starts.
               */
              starts_at: Data.StartsAt;

              /**
               * The type of override.
               */
              type: 'overwrite_price';
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
                 * Defines whether the tiered price should be graduated or volume-based.
                 */
                tiering_mode?: OverwritePrice.TieringMode;

                /**
                 * Each element represents a pricing tier.
                 */
                tiers: Array<OverwritePrice.Tier>;

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

              export namespace OverwritePrice {
                export type TieringMode = 'graduated' | 'volume';

                export interface Tier {
                  /**
                   * Price for the entire tier, represented as a decimal string in minor currency units.
                   */
                  flat_amount?: string;

                  /**
                   * Per-unit price for units included in this tier, represented as a decimal string in minor currency units.
                   */
                  unit_amount?: string;

                  /**
                   * Up to and including this quantity will be contained in the tier.
                   */
                  up_to_decimal?: Decimal;

                  /**
                   * No upper bound to this tier.
                   */
                  up_to_inf?: 'inf';
                }
              }
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
      ends_at: Data.EndsAt;

      /**
       * The ID of the pricing override.
       */
      id: string;

      /**
       * The user-provided lookup key for the pricing override.
       */
      lookup_key?: string;

      /**
       * Details for a multiplier override.
       */
      multiplier?: Data.Multiplier;

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
      type: 'multiplier';
    }

    export namespace Data {
      export interface EndsAt {
        /**
         * The timestamp when the item ends.
         */
        timestamp: string;
      }

      export interface Multiplier {
        /**
         * Criteria determining which rates the multiplier applies to.
         */
        criteria: Array<Multiplier.Criterion>;

        /**
         * The multiplier factor, represented as a decimal string. e.g. "0.8" for a 20% reduction.
         */
        factor: string;
      }

      export interface StartsAt {
        /**
         * The timestamp when the item starts.
         */
        timestamp: string;
      }

      export namespace Multiplier {
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
          export type Type = 'exclude' | 'include';
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
       */
      contract_number: string;

      /**
       * Currency of the contract.
       */
      currency: string;

      /**
       * A list of pricing lines to create with the contract.
       */
      pricing_lines: Array<ContractCreateParams.PricingLine>;

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
       * A list of one-time fees to create with the contract. Each fee is billed as individual invoice items per its bill_schedule.
       */
      one_time_fees?: Array<ContractCreateParams.OneTimeFee>;

      /**
       * A list of pricing overrides to create with the contract.
       */
      pricing_overrides?: Array<ContractCreateParams.PricingOverride>;
    }

    export namespace ContractCreateParams {
      export interface PricingLine {
        /**
         * When the pricing line ends.
         */
        ends_at: PricingLine.EndsAt;

        /**
         * A user-provided lookup key to reference this pricing line.
         */
        lookup_key?: string;

        /**
         * Set of key-value pairs that you can attach to an object.
         */
        metadata?: MetadataParam;

        /**
         * The pricing configuration for the pricing line.
         */
        pricing: PricingLine.Pricing;

        /**
         * When the pricing line starts.
         */
        starts_at: PricingLine.StartsAt;
      }

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
        | 'pricing_overrides';

      export interface OneTimeFee {
        /**
         * The amount to bill.
         */
        amount: V2Amount;

        /**
         * When this fee should be billed.
         */
        bill_at: OneTimeFee.BillAt;

        /**
         * A user-provided lookup key.
         */
        lookup_key?: string;

        /**
         * The ID of the v1 Product for this fee.
         */
        product: string;
      }

      export interface PricingOverride {
        /**
         * When the pricing override ends.
         */
        ends_at: PricingOverride.EndsAt;

        /**
         * A user-provided lookup key to reference this pricing override.
         */
        lookup_key?: string;

        /**
         * Parameters for a multiplier override. Required if `type` is `multiplier`.
         */
        multiplier?: PricingOverride.Multiplier;

        /**
         * The priority of this override relative to others. The highest priority is 0 and the lowest is 100.
         */
        priority: number;

        /**
         * When the pricing override starts.
         */
        starts_at: PricingOverride.StartsAt;

        /**
         * The type of pricing override.
         */
        type: 'multiplier';
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
          export type CollectionMethod =
            | 'charge_automatically'
            | 'send_invoice';
        }
      }

      export namespace OneTimeFee {
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
          export type Type = 'now' | 'timestamp';
        }
      }

      export namespace PricingLine {
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

        export interface Pricing {
          /**
           * V1 price details. Required if `type` is `price`.
           */
          price_details?: Pricing.PriceDetails;

          /**
           * The type of pricing.
           */
          type: 'price';
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
          export type Type = 'contract_end' | 'timestamp';
        }

        export namespace Pricing {
          export interface PriceDetails {
            /**
             * The ID of the V1 price.
             */
            price: string;

            /**
             * Pricing overrides embedded directly on this pricing line.
             */
            pricing_overrides?: Array<PriceDetails.PricingOverride>;

            /**
             * Quantity changes for the pricing line. For now, at most one entry is allowed.
             * A quantity change clears all future quantity changes on this pricing line.
             */
            quantity_changes?: Array<PriceDetails.QuantityChange>;
          }

          export namespace PriceDetails {
            export interface PricingOverride {
              /**
               * When the override ends. Defaults to the pricing line's end if not specified.
               */
              ends_at?: PricingOverride.EndsAt;

              /**
               * A user-provided lookup key to reference this override.
               */
              lookup_key?: string;

              /**
               * Set of key-value pairs that you can attach to an object.
               */
              metadata?: MetadataParam;

              /**
               * Parameters for the overwrite_price override. Required if `type` is `overwrite_price`.
               */
              overwrite_price?: PricingOverride.OverwritePrice;

              /**
               * The priority of this override relative to others. 0 is highest, 100 is lowest. Defaults to 50.
               */
              priority?: number;

              /**
               * When the override starts. Defaults to the pricing line's start if not specified.
               */
              starts_at?: PricingOverride.StartsAt;

              /**
               * The type of override. Currently only `overwrite_price` is supported.
               */
              type: 'overwrite_price';
            }

            export interface QuantityChange {
              /**
               * When this quantity change takes effect.
               */
              effective_at: QuantityChange.EffectiveAt;

              /**
               * The quantity to set.
               */
              set: Decimal;
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

              export interface OverwritePrice {
                /**
                 * Defines whether the tiered price should be graduated or volume-based.
                 */
                tiering_mode?: OverwritePrice.TieringMode;

                /**
                 * Each element represents a pricing tier.
                 */
                tiers?: Array<OverwritePrice.Tier>;

                /**
                 * The per-unit amount to be charged, represented as a decimal string in minor currency units.
                 */
                unit_amount?: string;
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
                export type Type = 'contract_end' | 'timestamp';
              }

              export namespace OverwritePrice {
                export type TieringMode = 'graduated' | 'volume';

                export interface Tier {
                  /**
                   * Price for the entire tier, represented as a decimal string in minor currency units.
                   */
                  flat_amount?: string;

                  /**
                   * Per-unit price for units included in this tier, represented as a decimal string in minor currency units.
                   */
                  unit_amount?: string;

                  /**
                   * Up to and including this quantity will be contained in the tier.
                   */
                  up_to_decimal?: Decimal;

                  /**
                   * No upper bound to this tier.
                   */
                  up_to_inf?: 'inf';
                }
              }

              export namespace StartsAt {
                export type Type = 'contract_start' | 'timestamp';
              }
            }

            export namespace QuantityChange {
              export interface EffectiveAt {
                /**
                 * The timestamp for the effective at.
                 */
                timestamp?: string;

                /**
                 * The type of the effective at.
                 */
                type: 'timestamp';
              }
            }
          }
        }

        export namespace StartsAt {
          export type Type = 'contract_start' | 'timestamp';
        }
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

        export interface Multiplier {
          /**
           * Criteria determining which rates the multiplier applies to.
           */
          criteria?: Array<Multiplier.Criterion>;

          /**
           * The multiplier factor, represented as a decimal string. e.g. "0.8" for a 20% reduction.
           */
          factor: string;
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
          export type Type = 'contract_end' | 'timestamp';
        }

        export namespace Multiplier {
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
            export type Type = 'exclude' | 'include';
          }
        }

        export namespace StartsAt {
          export type Type = 'contract_start' | 'timestamp';
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
        | 'pricing_overrides';
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractUpdateParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<ContractUpdateParams.Include>;

      /**
       * Pricing line actions to apply.
       */
      pricing_line_actions?: Array<ContractUpdateParams.PricingLineAction>;

      /**
       * Pricing override actions to apply.
       */
      pricing_override_actions?: Array<
        ContractUpdateParams.PricingOverrideAction
      >;
    }

    export namespace ContractUpdateParams {
      export type Include =
        | 'billing_settings'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides';

      export interface PricingLineAction {
        /**
         * Parameters for adding a pricing line.
         */
        add?: PricingLineAction.Add;

        /**
         * Parameters for removing a pricing line.
         */
        remove?: PricingLineAction.Remove;

        /**
         * The type of pricing line action.
         */
        type: PricingLineAction.Type;

        /**
         * Parameters for updating a pricing line.
         */
        update?: PricingLineAction.Update;
      }

      export interface PricingOverrideAction {
        /**
         * Parameters for adding a pricing override.
         */
        add?: PricingOverrideAction.Add;

        /**
         * Parameters for removing a pricing override.
         */
        remove?: PricingOverrideAction.Remove;

        /**
         * The type of pricing override action.
         */
        type: PricingOverrideAction.Type;

        /**
         * Parameters for updating a pricing override.
         */
        update?: PricingOverrideAction.Update;
      }

      export namespace PricingLineAction {
        export interface Add {
          /**
           * The end time for the pricing line.
           */
          ends_at: Add.EndsAt;

          /**
           * A lookup key for the pricing line.
           */
          lookup_key?: string;

          /**
           * Metadata for the pricing line.
           */
          metadata?: MetadataParam;

          /**
           * The pricing configuration for the pricing line.
           */
          pricing: Add.Pricing;

          /**
           * The start time for the pricing line.
           */
          starts_at: Add.StartsAt;
        }

        export interface Remove {
          /**
           * The ID of the pricing line to remove.
           */
          id: string;
        }

        export type Type = 'add' | 'remove' | 'update';

        export interface Update {
          /**
           * The updated end time for the pricing line.
           */
          ends_at?: Update.EndsAt;

          /**
           * The ID of the pricing line.
           */
          id: string;

          /**
           * Pricing updates for the pricing line (quantity changes and pricing override actions).
           */
          pricing?: Update.Pricing;

          /**
           * The updated start time for the pricing line.
           */
          starts_at?: Update.StartsAt;
        }

        export namespace Add {
          export interface EndsAt {
            /**
             * The timestamp when the item ends.
             */
            timestamp?: string;

            /**
             * The type of end time to apply.
             */
            type: EndsAt.Type;
          }

          export interface Pricing {
            /**
             * V1 price details. Required if `type` is `price`.
             */
            price_details?: Pricing.PriceDetails;

            /**
             * The type of pricing.
             */
            type: 'price';
          }

          export interface StartsAt {
            /**
             * The timestamp when the item starts.
             */
            timestamp?: string;

            /**
             * The type of start time to apply.
             */
            type: StartsAt.Type;
          }

          export namespace EndsAt {
            export type Type = 'billing_period_end' | 'timestamp';
          }

          export namespace Pricing {
            export interface PriceDetails {
              /**
               * The ID of the V1 price.
               */
              price: string;

              /**
               * Pricing overrides embedded directly on this pricing line.
               */
              pricing_overrides?: Array<PriceDetails.PricingOverride>;

              /**
               * Quantity changes for the pricing line. For now, at most one entry is allowed.
               * A quantity change clears all future quantity changes on this pricing line.
               */
              quantity_changes?: Array<PriceDetails.QuantityChange>;
            }

            export namespace PriceDetails {
              export interface PricingOverride {
                /**
                 * When the override ends. Defaults to the pricing line's end if not specified.
                 */
                ends_at?: PricingOverride.EndsAt;

                /**
                 * A user-provided lookup key to reference this override.
                 */
                lookup_key?: string;

                /**
                 * Set of key-value pairs that you can attach to an object.
                 */
                metadata?: MetadataParam;

                /**
                 * Parameters for the overwrite_price override. Required if `type` is `overwrite_price`.
                 */
                overwrite_price?: PricingOverride.OverwritePrice;

                /**
                 * The priority of this override relative to others. 0 is highest, 100 is lowest. Defaults to 50.
                 */
                priority?: number;

                /**
                 * When the override starts. Defaults to the pricing line's start if not specified.
                 */
                starts_at?: PricingOverride.StartsAt;

                /**
                 * The type of override. Currently only `overwrite_price` is supported.
                 */
                type: 'overwrite_price';
              }

              export interface QuantityChange {
                /**
                 * When this quantity change takes effect.
                 */
                effective_at: QuantityChange.EffectiveAt;

                /**
                 * The quantity to set.
                 */
                set: Decimal;
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

                export interface OverwritePrice {
                  /**
                   * Defines whether the tiered price should be graduated or volume-based.
                   */
                  tiering_mode?: OverwritePrice.TieringMode;

                  /**
                   * Each element represents a pricing tier.
                   */
                  tiers?: Array<OverwritePrice.Tier>;

                  /**
                   * The per-unit amount to be charged, represented as a decimal string in minor currency units.
                   */
                  unit_amount?: string;
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
                  export type Type = 'contract_end' | 'timestamp';
                }

                export namespace OverwritePrice {
                  export type TieringMode = 'graduated' | 'volume';

                  export interface Tier {
                    /**
                     * Price for the entire tier, represented as a decimal string in minor currency units.
                     */
                    flat_amount?: string;

                    /**
                     * Per-unit price for units included in this tier, represented as a decimal string in minor currency units.
                     */
                    unit_amount?: string;

                    /**
                     * Up to and including this quantity will be contained in the tier.
                     */
                    up_to_decimal?: Decimal;

                    /**
                     * No upper bound to this tier.
                     */
                    up_to_inf?: 'inf';
                  }
                }

                export namespace StartsAt {
                  export type Type = 'contract_start' | 'timestamp';
                }
              }

              export namespace QuantityChange {
                export interface EffectiveAt {
                  /**
                   * The timestamp for the effective at.
                   */
                  timestamp?: string;

                  /**
                   * The type of the effective at.
                   */
                  type: 'timestamp';
                }
              }
            }
          }

          export namespace StartsAt {
            export type Type = 'billing_period_start' | 'timestamp';
          }
        }

        export namespace Update {
          export interface EndsAt {
            /**
             * The timestamp when the item ends.
             */
            timestamp?: string;

            /**
             * The type of end time to apply.
             */
            type: EndsAt.Type;
          }

          export interface Pricing {
            /**
             * V1 price details. Present when the pricing line type is `price`.
             */
            price_details?: Pricing.PriceDetails;
          }

          export interface StartsAt {
            /**
             * The timestamp when the item starts.
             */
            timestamp?: string;

            /**
             * The type of start time to apply.
             */
            type: StartsAt.Type;
          }

          export namespace EndsAt {
            export type Type = 'billing_period_end' | 'timestamp';
          }

          export namespace Pricing {
            export interface PriceDetails {
              /**
               * Pricing override actions to apply to the overrides embedded on this pricing line.
               */
              pricing_override_actions?: Array<
                PriceDetails.PricingOverrideAction
              >;

              /**
               * Quantity changes for the pricing line. Setting this clears all future quantity changes.
               */
              quantity_changes?: Array<PriceDetails.QuantityChange>;
            }

            export namespace PriceDetails {
              export interface PricingOverrideAction {
                /**
                 * Parameters for adding a pricing line override.
                 */
                add?: PricingOverrideAction.Add;

                /**
                 * Parameters for removing a pricing line override.
                 */
                remove?: PricingOverrideAction.Remove;

                /**
                 * The type of pricing line override action.
                 */
                type: PricingOverrideAction.Type;

                /**
                 * Parameters for updating a pricing line override.
                 */
                update?: PricingOverrideAction.Update;
              }

              export interface QuantityChange {
                /**
                 * When this quantity change takes effect.
                 */
                effective_at: QuantityChange.EffectiveAt;

                /**
                 * The quantity to set.
                 */
                set: Decimal;
              }

              export namespace PricingOverrideAction {
                export interface Add {
                  /**
                   * The end time for the override.
                   */
                  ends_at: Add.EndsAt;

                  /**
                   * A lookup key for the override.
                   */
                  lookup_key?: string;

                  /**
                   * Set of key-value pairs that you can attach to an object.
                   */
                  metadata?: MetadataParam;

                  /**
                   * Parameters for an overwrite_price override. Required if `type` is `overwrite_price`.
                   */
                  overwrite_price?: Add.OverwritePrice;

                  /**
                   * The priority of this override relative to others. 0 is highest, 100 is lowest. Defaults to 50.
                   */
                  priority?: number;

                  /**
                   * The start time for the override.
                   */
                  starts_at: Add.StartsAt;

                  /**
                   * The type of override to add.
                   */
                  type: 'overwrite_price';
                }

                export interface Remove {
                  /**
                   * The ID of the pricing line override to remove.
                   */
                  id?: string;

                  /**
                   * A lookup key for the override to remove.
                   */
                  lookup_key?: string;
                }

                export type Type = 'add' | 'remove' | 'update';

                export interface Update {
                  /**
                   * The updated end time for the override.
                   */
                  ends_at?: Update.EndsAt;

                  /**
                   * The ID of the pricing line override to update.
                   */
                  id?: string;

                  /**
                   * A lookup key for the override to update.
                   */
                  lookup_key?: string;

                  /**
                   * Set of key-value pairs that you can attach to an object.
                   */
                  metadata?: MetadataParam;

                  /**
                   * The updated start time for the override.
                   */
                  starts_at?: Update.StartsAt;
                }

                export namespace Add {
                  export interface EndsAt {
                    /**
                     * The timestamp when the item ends.
                     */
                    timestamp?: string;

                    /**
                     * The type of end time to apply.
                     */
                    type: EndsAt.Type;
                  }

                  export interface OverwritePrice {
                    /**
                     * Defines whether the tiered price should be graduated or volume-based.
                     */
                    tiering_mode?: OverwritePrice.TieringMode;

                    /**
                     * Each element represents a pricing tier.
                     */
                    tiers?: Array<OverwritePrice.Tier>;

                    /**
                     * The per-unit amount to be charged, represented as a decimal string in minor currency units.
                     */
                    unit_amount?: string;
                  }

                  export interface StartsAt {
                    /**
                     * The timestamp when the item starts.
                     */
                    timestamp?: string;

                    /**
                     * The type of start time to apply.
                     */
                    type: StartsAt.Type;
                  }

                  export namespace EndsAt {
                    export type Type = 'billing_period_end' | 'timestamp';
                  }

                  export namespace OverwritePrice {
                    export type TieringMode = 'graduated' | 'volume';

                    export interface Tier {
                      /**
                       * Price for the entire tier, represented as a decimal string in minor currency units.
                       */
                      flat_amount?: string;

                      /**
                       * Per-unit price for units included in this tier, represented as a decimal string in minor currency units.
                       */
                      unit_amount?: string;

                      /**
                       * Up to and including this quantity will be contained in the tier.
                       */
                      up_to_decimal?: Decimal;

                      /**
                       * No upper bound to this tier.
                       */
                      up_to_inf?: 'inf';
                    }
                  }

                  export namespace StartsAt {
                    export type Type = 'billing_period_start' | 'timestamp';
                  }
                }

                export namespace Update {
                  export interface EndsAt {
                    /**
                     * The timestamp when the item ends.
                     */
                    timestamp?: string;

                    /**
                     * The type of end time to apply.
                     */
                    type: EndsAt.Type;
                  }

                  export interface StartsAt {
                    /**
                     * The timestamp when the item starts.
                     */
                    timestamp?: string;

                    /**
                     * The type of start time to apply.
                     */
                    type: StartsAt.Type;
                  }

                  export namespace EndsAt {
                    export type Type = 'billing_period_end' | 'timestamp';
                  }

                  export namespace StartsAt {
                    export type Type = 'billing_period_start' | 'timestamp';
                  }
                }
              }

              export namespace QuantityChange {
                export interface EffectiveAt {
                  /**
                   * The timestamp for the effective at.
                   */
                  timestamp?: string;

                  /**
                   * The type of the effective at.
                   */
                  type: 'timestamp';
                }
              }
            }
          }

          export namespace StartsAt {
            export type Type = 'billing_period_start' | 'timestamp';
          }
        }
      }

      export namespace PricingOverrideAction {
        export interface Add {
          /**
           * The end time for the pricing override.
           */
          ends_at: Add.EndsAt;

          /**
           * A lookup key for the pricing override.
           */
          lookup_key?: string;

          /**
           * A multiplier override to add.
           */
          multiplier?: Add.Multiplier;

          /**
           * An overwrite price override to add.
           */
          overwrite_price?: Add.OverwritePrice;

          /**
           * The priority for the pricing override. The highest priority is 0 and the lowest is 100.
           */
          priority: number;

          /**
           * The start time for the pricing override.
           */
          starts_at: Add.StartsAt;

          /**
           * The type of pricing override to add.
           */
          type: 'multiplier';
        }

        export interface Remove {
          /**
           * The ID of the pricing override to remove.
           */
          id: string;
        }

        export type Type = 'add' | 'remove' | 'update';

        export interface Update {
          /**
           * The updated end time for the pricing override.
           */
          ends_at?: Update.EndsAt;

          /**
           * The ID of the pricing override.
           */
          id: string;

          /**
           * The updated start time for the pricing override.
           */
          starts_at?: Update.StartsAt;
        }

        export namespace Add {
          export interface EndsAt {
            /**
             * The timestamp when the item ends.
             */
            timestamp?: string;

            /**
             * The type of end time to apply.
             */
            type: EndsAt.Type;
          }

          export interface Multiplier {
            /**
             * Criteria determining which rates the multiplier applies to.
             */
            criteria: Array<Multiplier.Criterion>;

            /**
             * The multiplier factor, represented as a decimal string. e.g. "0.8" for a 20% reduction.
             */
            factor: string;
          }

          export interface OverwritePrice {
            /**
             * Defines whether the tiered price should be graduated or volume-based.
             */
            tiering_mode?: OverwritePrice.TieringMode;

            /**
             * Each element represents a pricing tier.
             */
            tiers: Array<OverwritePrice.Tier>;

            /**
             * The per-unit amount to be charged, represented as a decimal string in minor currency units.
             */
            unit_amount?: string;
          }

          export interface StartsAt {
            /**
             * The timestamp when the item starts.
             */
            timestamp?: string;

            /**
             * The type of start time to apply.
             */
            type: StartsAt.Type;
          }

          export namespace EndsAt {
            export type Type = 'billing_period_end' | 'timestamp';
          }

          export namespace Multiplier {
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
              export type Type = 'exclude' | 'include';
            }
          }

          export namespace OverwritePrice {
            export type TieringMode = 'graduated' | 'volume';

            export interface Tier {
              /**
               * Price for the entire tier, represented as a decimal string in minor currency units.
               */
              flat_amount?: string;

              /**
               * Per-unit price for units included in this tier, represented as a decimal string in minor currency units.
               */
              unit_amount?: string;

              /**
               * Up to and including this quantity will be contained in the tier.
               */
              up_to_decimal?: Decimal;

              /**
               * No upper bound to this tier.
               */
              up_to_inf?: 'inf';
            }
          }

          export namespace StartsAt {
            export type Type = 'billing_period_start' | 'timestamp';
          }
        }

        export namespace Update {
          export interface EndsAt {
            /**
             * The timestamp when the item ends.
             */
            timestamp?: string;

            /**
             * The type of end time to apply.
             */
            type: EndsAt.Type;
          }

          export interface StartsAt {
            /**
             * The timestamp when the item starts.
             */
            timestamp?: string;

            /**
             * The type of start time to apply.
             */
            type: StartsAt.Type;
          }

          export namespace EndsAt {
            export type Type = 'billing_period_end' | 'timestamp';
          }

          export namespace StartsAt {
            export type Type = 'billing_period_start' | 'timestamp';
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractListParams {
      /**
       * Filter by customer ID.
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
        | 'pricing_overrides';
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
        | 'pricing_overrides';
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractCancelParams {
      /**
       * Per-pricing-line proration behavior overrides. Falls back to `proration_behavior` if
       * not specified for a given line.
       */
      cancel_pricing_lines?: Array<ContractCancelParams.CancelPricingLine>;

      /**
       * Additional fields to include in the response.
       */
      include?: Array<ContractCancelParams.Include>;

      /**
       * Top-level proration behavior for the cancellation. Defaults to `prorated` if not set.
       */
      proration_behavior?: ContractCancelParams.ProrationBehavior;
    }

    export namespace ContractCancelParams {
      export interface CancelPricingLine {
        /**
         * The ID of the pricing line.
         */
        id?: string;

        /**
         * The lookup key of the pricing line.
         */
        lookup_key?: string;

        /**
         * Proration behavior scoped to this pricing line. If not provided, falls back to the
         * top-level `proration_behavior` on the cancel request. Defaults to `prorated`.
         */
        proration_behavior?: CancelPricingLine.ProrationBehavior;
      }

      export type Include =
        | 'billing_settings'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides';

      export type ProrationBehavior = 'none' | 'prorated';

      export namespace CancelPricingLine {
        export type ProrationBehavior = 'none' | 'prorated';
      }
    }
  }
}
