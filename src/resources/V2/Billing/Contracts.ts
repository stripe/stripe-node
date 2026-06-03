// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {MetadataParam, Decimal, Metadata} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';
import {LicensePricingResource} from './Contracts/LicensePricing.js';
import {Stripe} from '../../../stripe.core.js';
export class ContractResource extends StripeResource {
  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.licensePricing = new LicensePricingResource(stripe);
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
                one_time_fees: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      bill_schedule: {
                        kind: 'array',
                        element: {
                          kind: 'object',
                          fields: {value: {kind: 'int64_string'}},
                        },
                      },
                    },
                  },
                },
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
          one_time_fees: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                bill_schedule: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {value: {kind: 'int64_string'}},
                  },
                },
              },
            },
          },
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
      responseSchema: {
        kind: 'object',
        fields: {
          one_time_fees: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                bill_schedule: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {value: {kind: 'int64_string'}},
                  },
                },
              },
            },
          },
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
    }) as any;
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
      `/v2/billing/contracts/${id}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            one_time_fees: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  bill_schedule: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {value: {kind: 'int64_string'}},
                    },
                  },
                },
              },
            },
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
      `/v2/billing/contracts/${id}`,
      params,
      options,
      {
        requestSchema: {
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
            one_time_fees: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  bill_schedule: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {value: {kind: 'int64_string'}},
                    },
                  },
                },
              },
            },
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
      `/v2/billing/contracts/${id}/activate`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            one_time_fees: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  bill_schedule: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {value: {kind: 'int64_string'}},
                    },
                  },
                },
              },
            },
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
      `/v2/billing/contracts/${id}/cancel`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            one_time_fees: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  bill_schedule: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {value: {kind: 'int64_string'}},
                    },
                  },
                },
              },
            },
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
   * The billing settings for the contract.
   */
  billing_settings?: V2.Billing.Contract.BillingSettings;

  /**
   * The contract line details of the contract. Only populated when `contract_line_details` is passed in the `include` parameter.
   */
  contract_line_details: Array<V2.Billing.Contract.ContractLineDetail>;

  /**
   * A unique user-provided contract number e.g. C-2026-0001.
   */
  contract_number: string;

  /**
   * The computed total value of all contract lines.
   */
  contract_value_details: V2.Billing.Contract.ContractValueDetails;

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
   * The license quantities of the contract. Only populated when `license_quantities` is passed in the `include` parameter.
   */
  license_quantities: Array<V2.Billing.Contract.LicenseQuantity>;

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
  one_time_fees?: Array<V2.Billing.Contract.OneTimeFee>;

  /**
   * The pricing lines of the contract. Only populated when `pricing_lines` is passed in the `include` parameter.
   */
  pricing_lines: Array<V2.Billing.Contract.PricingLine>;

  /**
   * The pricing overrides of the contract. Only populated when `pricing_overrides` is passed in the `include` parameter.
   */
  pricing_overrides: Array<V2.Billing.Contract.PricingOverride>;

  /**
   * The current status of the contract.
   */
  status: V2.Billing.Contract.Status;

  /**
   * Information about the contract status transitions.
   */
  status_details: V2.Billing.Contract.StatusDetails;
}
export namespace V2 {
  export namespace Billing {
    export namespace Contract {
      export interface BillingSettings {
        /**
         * Billing settings details for the contract.
         */
        contract_billing_details?: BillingSettings.ContractBillingDetails;
      }

      export interface ContractLineDetail {
        /**
         * The ID of the contract line.
         */
        contract_line: string;

        /**
         * The computed value details for the contract line.
         */
        contract_line_value_details: ContractLineDetail.ContractLineValueDetails;

        /**
         * Timestamp of when the object was created.
         */
        created: string;

        /**
         * Timestamp to indicate when the contract line ends.
         */
        ends_at: ContractLineDetail.EndsAt;

        /**
         * Set of key-value pairs that you can attach to an object.
         */
        metadata?: Metadata;

        /**
         * List of overrides applied to the contract line.
         */
        overrides: Array<ContractLineDetail.Override>;

        /**
         * The pricing configuration for the contract line.
         */
        pricing: ContractLineDetail.Pricing;

        /**
         * Timestamp to indicate when the contract line starts.
         */
        starts_at: ContractLineDetail.StartsAt;
      }

      export interface ContractValueDetails {
        /**
         * The total value represented as a decimal string in minor currency units.
         */
        total: string;
      }

      export interface LicenseQuantity {
        /**
         * The ID of the license pricing.
         */
        license_pricing_id: string;

        /**
         * The type of the license pricing.
         */
        license_pricing_type: LicenseQuantity.LicensePricingType;

        /**
         * The ID of the pricing line associated with this license quantity.
         */
        pricing_line: string;

        /**
         * The current quantity of the license.
         */
        quantity: number;
      }

      export interface OneTimeFee {
        /**
         * The resolved bill schedule for the fee.
         */
        bill_schedule: Array<OneTimeFee.BillSchedule>;

        /**
         * The type of billable item that this fee references.
         */
        billable_item_type: 'product';

        /**
         * Details for a product billable target. Set when `billable_item_type` is `product`.
         */
        product_details?: OneTimeFee.ProductDetails;
      }

      export interface PricingLine {
        /**
         * Resolved timestamp when the pricing line ends.
         */
        ends_at: PricingLine.EndsAt;

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
        pricing: PricingLine.Pricing;

        /**
         * The ID of the pricing line.
         */
        pricing_line: string;

        /**
         * Resolved timestamp when the pricing line starts.
         */
        starts_at: PricingLine.StartsAt;
      }

      export interface PricingOverride {
        /**
         * Resolved timestamp when the pricing override ends.
         */
        ends_at: PricingOverride.EndsAt;

        /**
         * The user-provided lookup key for the pricing override.
         */
        lookup_key?: string;

        /**
         * Details for a multiplier override.
         */
        multiplier?: PricingOverride.Multiplier;

        /**
         * Details for an overwrite_price override.
         */
        overwrite_price?: PricingOverride.OverwritePrice;

        /**
         * The ID of the pricing override.
         */
        pricing_override: string;

        /**
         * The priority of this override relative to others. Lower number = higher priority.
         */
        priority: number;

        /**
         * Resolved timestamp when the pricing override starts.
         */
        starts_at: PricingOverride.StartsAt;

        /**
         * The type of pricing override.
         */
        type: PricingOverride.Type;
      }

      export type Status = 'active' | 'canceled' | 'draft' | 'ended';

      export interface StatusDetails {
        /**
         * Details of the active contract status.
         */
        active?: StatusDetails.Active;

        /**
         * Details of the canceled contract status.
         */
        canceled?: StatusDetails.Canceled;
      }

      export namespace BillingSettings {
        export interface ContractBillingDetails {
          /**
           * The bill settings details.
           */
          bill_settings_details?: ContractBillingDetails.BillSettingsDetails;

          /**
           * The billing profile details.
           */
          billing_profile_details: ContractBillingDetails.BillingProfileDetails;

          /**
           * The collection settings details.
           */
          collection_settings_details: ContractBillingDetails.CollectionSettingsDetails;
        }

        export namespace ContractBillingDetails {
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
      }

      export namespace ContractLineDetail {
        export interface ContractLineValueDetails {
          /**
           * Computed sum of all licensed fees. Represented as a decimal string in minor currency units.
           */
          total: string;
        }

        export interface EndsAt {
          /**
           * The timestamp when the item ends.
           */
          timestamp: string;
        }

        export interface Override {
          /**
           * Timestamp to indicate when the override ends.
           */
          ends_at: Override.EndsAt;

          /**
           * Service action override details.
           */
          service_action?: Override.ServiceAction;

          /**
           * Timestamp to indicate when the override starts.
           */
          starts_at: Override.StartsAt;

          /**
           * The type of the override.
           */
          type: 'service_action';
        }

        export interface Pricing {}

        export interface StartsAt {
          /**
           * The timestamp when the item starts.
           */
          timestamp: string;
        }

        export namespace Override {
          export interface EndsAt {
            /**
             * The timestamp when the item ends.
             */
            timestamp: string;
          }

          export interface ServiceAction {
            /**
             * Parameters for adding a new service action.
             */
            add?: ServiceAction.Add;

            /**
             * Parameters for replacing an existing service action.
             */
            replace?: ServiceAction.Replace;

            /**
             * The type of service action override.
             */
            type: ServiceAction.Type;
          }

          export interface StartsAt {
            /**
             * The timestamp when the item starts.
             */
            timestamp: string;
          }

          export namespace ServiceAction {
            export interface Add {
              /**
               * Details for the credit grant. Required if `type` is `credit_grant`.
               */
              credit_grant?: Add.CreditGrant;

              /**
               * The interval for assessing service.
               */
              service_interval: Add.ServiceInterval;

              /**
               * The length of the interval for assessing service.
               */
              service_interval_count: number;

              /**
               * The type of the service action.
               */
              type: 'credit_grant';
            }

            export interface Replace {
              /**
               * Details for the credit grant. Required if `type` is `credit_grant`.
               */
              credit_grant?: Replace.CreditGrant;

              /**
               * The ID of the service action to replace.
               */
              id?: string;

              /**
               * The lookup key for the service action to replace.
               */
              lookup_key?: string;

              /**
               * The interval for assessing service.
               */
              service_interval: Replace.ServiceInterval;

              /**
               * The length of the interval for assessing service.
               */
              service_interval_count: number;

              /**
               * The type of the service action.
               */
              type: 'credit_grant';
            }

            export type Type = 'add' | 'replace';

            export namespace Add {
              export interface CreditGrant {
                /**
                 * The amount of the credit grant.
                 */
                amount: CreditGrant.Amount;

                /**
                 * Defines the scope where the credit grant is applicable.
                 */
                applicability_config: CreditGrant.ApplicabilityConfig;

                /**
                 * The category of the credit grant.
                 */
                category?: CreditGrant.Category;

                /**
                 * The expiry configuration for the credit grant.
                 */
                expiry_config: CreditGrant.ExpiryConfig;

                /**
                 * A descriptive name.
                 */
                name: string;

                /**
                 * The desired priority for applying this credit grant. The highest priority is 0 and the lowest is 100.
                 */
                priority?: number;
              }

              export type ServiceInterval = 'day' | 'month' | 'week' | 'year';

              export namespace CreditGrant {
                export interface Amount {
                  /**
                   * The monetary amount of the credit grant. Required if `type` is `monetary`.
                   */
                  monetary?: V2Amount;

                  /**
                   * The type of the credit grant amount.
                   */
                  type: 'monetary';
                }

                export interface ApplicabilityConfig {
                  /**
                   * The applicability scope of the credit grant.
                   */
                  scope: ApplicabilityConfig.Scope;
                }

                export type Category = 'paid' | 'promotional';

                export interface ExpiryConfig {
                  /**
                   * The type of the expiry configuration.
                   */
                  type: 'end_of_service_period';
                }

                export namespace ApplicabilityConfig {
                  export interface Scope {
                    /**
                     * The billable items to apply the credit grant to.
                     */
                    billable_items?: Array<string>;

                    /**
                     * The price type that credit grants can apply to.
                     */
                    price_type?: 'metered';
                  }
                }
              }
            }

            export namespace Replace {
              export interface CreditGrant {
                /**
                 * The amount of the credit grant.
                 */
                amount: CreditGrant.Amount;

                /**
                 * Defines the scope where the credit grant is applicable.
                 */
                applicability_config: CreditGrant.ApplicabilityConfig;

                /**
                 * The category of the credit grant.
                 */
                category?: CreditGrant.Category;

                /**
                 * The expiry configuration for the credit grant.
                 */
                expiry_config: CreditGrant.ExpiryConfig;

                /**
                 * A descriptive name.
                 */
                name: string;

                /**
                 * The desired priority for applying this credit grant. The highest priority is 0 and the lowest is 100.
                 */
                priority?: number;
              }

              export type ServiceInterval = 'day' | 'month' | 'week' | 'year';

              export namespace CreditGrant {
                export interface Amount {
                  /**
                   * The monetary amount of the credit grant. Required if `type` is `monetary`.
                   */
                  monetary?: V2Amount;

                  /**
                   * The type of the credit grant amount.
                   */
                  type: 'monetary';
                }

                export interface ApplicabilityConfig {
                  /**
                   * The applicability scope of the credit grant.
                   */
                  scope: ApplicabilityConfig.Scope;
                }

                export type Category = 'paid' | 'promotional';

                export interface ExpiryConfig {
                  /**
                   * The type of the expiry configuration.
                   */
                  type: 'end_of_service_period';
                }

                export namespace ApplicabilityConfig {
                  export interface Scope {
                    /**
                     * The billable items to apply the credit grant to.
                     */
                    billable_items?: Array<string>;

                    /**
                     * The price type that credit grants can apply to.
                     */
                    price_type?: 'metered';
                  }
                }
              }
            }
          }
        }
      }

      export namespace LicenseQuantity {
        export type LicensePricingType = 'license_fee' | 'price';
      }

      export namespace OneTimeFee {
        export interface BillSchedule {
          /**
           * When this entry will be billed.
           */
          bill_at: BillSchedule.BillAt;

          /**
           * The amount to bill for this entry, in the smallest currency unit.
           */
          value: bigint;
        }

        export interface ProductDetails {
          /**
           * The ID of the v1 Product.
           */
          product: string;
        }

        export namespace BillSchedule {
          export interface BillAt {
            /**
             * The datetime at which the entry will be billed. Set when `type` is `datetime`.
             */
            timestamp?: string;

            /**
             * The type of the bill_at.
             */
            type: BillAt.Type;
          }

          export namespace BillAt {
            export type Type = 'contract_start' | 'datetime';
          }
        }
      }

      export namespace PricingLine {
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
             * The ID of the V1 price.
             */
            price: string;
          }
        }
      }

      export namespace PricingOverride {
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

        export interface OverwritePrice {
          /**
           * The ID of the V1 price to overwrite.
           */
          price: string;

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

        export type Type = 'multiplier' | 'overwrite_price';

        export namespace Multiplier {
          export interface Criterion {
            /**
             * Filter by billable item IDs.
             */
            billable_item_ids: Array<string>;

            /**
             * Filter by billable item lookup keys.
             */
            billable_item_lookup_keys: Array<string>;

            /**
             * Filter by billable item type.
             */
            billable_item_types: Array<Criterion.BillableItemType>;

            /**
             * Filter by metadata conditions.
             */
            metadata_conditions: Array<Criterion.MetadataCondition>;

            /**
             * Filter by rate card IDs. Only applicable for `multiplier` overrides.
             */
            rate_card_ids: Array<string>;

            /**
             * Whether to include or exclude items matching these criteria.
             */
            type: Criterion.Type;
          }

          export namespace Criterion {
            export type BillableItemType = 'licensed' | 'metered';

            export interface MetadataCondition {
              /**
               * All of these key-value conditions must match.
               */
              all_of: Array<MetadataCondition.AllOf>;
            }

            export type Type = 'exclude' | 'include';

            export namespace MetadataCondition {
              export interface AllOf {
                /**
                 * The metadata key.
                 */
                key: string;

                /**
                 * The metadata value.
                 */
                value: string;
              }
            }
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
      }

      export namespace StatusDetails {
        export interface Active {
          /**
           * The timestamp when the contract was activated.
           */
          activated_at: string;
        }

        export interface Canceled {
          /**
           * The timestamp when the contract was canceled.
           */
          canceled_at: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ContractCreateParams {
      /**
       * A list of contract lines to create with the contract.
       */
      contract_lines: Array<ContractCreateParams.ContractLine>;

      /**
       * A unique user-provided contract number e.g. C-2026-0001.
       */
      contract_number: string;

      /**
       * Currency of the contract.
       */
      currency: string;

      /**
       * A list of license quantity actions to create with the contract.
       */
      license_quantity_actions: Array<
        ContractCreateParams.LicenseQuantityAction
      >;

      /**
       * A list of pricing lines to create with the contract.
       */
      pricing_lines: Array<ContractCreateParams.PricingLine>;

      /**
       * A list of pricing overrides to create with the contract.
       */
      pricing_overrides: Array<ContractCreateParams.PricingOverride>;

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
    }

    export namespace ContractCreateParams {
      export interface ContractLine {
        /**
         * Timestamp to indicate when the contract line ends.
         */
        ends_at: ContractLine.EndsAt;

        /**
         * Set of key-value pairs that you can attach to an object.
         */
        metadata?: MetadataParam;

        /**
         * List of overrides. Later overrides in the list override earlier ones.
         */
        overrides: Array<ContractLine.Override>;

        /**
         * The pricing configuration for the contract line.
         */
        pricing: ContractLine.Pricing;

        /**
         * Timestamp to indicate when the contract line starts.
         */
        starts_at: ContractLine.StartsAt;
      }

      export interface LicenseQuantityAction {
        /**
         * The effective at for the license quantity action.
         */
        effective_at: LicenseQuantityAction.EffectiveAt;

        /**
         * The ID of the license pricing.
         */
        license_pricing_id?: string;

        /**
         * The lookup key for the license pricing.
         */
        license_pricing_lookup_key?: string;

        /**
         * The type of the license pricing.
         */
        license_pricing_type: LicenseQuantityAction.LicensePricingType;

        /**
         * The pricing line for the license quantity action.
         */
        pricing_line?: string;

        /**
         * The set quantity for the license quantity action.
         */
        set?: LicenseQuantityAction.Set;

        /**
         * The type of the license quantity action.
         */
        type: 'set';
      }

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
         * Parameters for an overwrite_price override. Required if `type` is `overwrite_price`.
         */
        overwrite_price?: PricingOverride.OverwritePrice;

        /**
         * The priority of this override relative to others. Lower number = higher priority.
         */
        priority: number;

        /**
         * When the pricing override starts.
         */
        starts_at: PricingOverride.StartsAt;

        /**
         * The type of pricing override.
         */
        type: PricingOverride.Type;
      }

      export interface BillingSettings {
        /**
         * Billing settings details for the contract.
         */
        contract_billing_details?: BillingSettings.ContractBillingDetails;
      }

      export type Include =
        | 'contract_line_details'
        | 'license_quantities'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides';

      export interface OneTimeFee {
        /**
         * The bill schedule for the fee. Each entry produces an individual invoice item billed at `bill_at`.
         */
        bill_schedule: Array<OneTimeFee.BillSchedule>;

        /**
         * The type of billable item that this fee references.
         */
        billable_item_type: 'product';

        /**
         * Details for a product billable target. Required when `billable_item_type` is `product`.
         */
        product_details?: OneTimeFee.ProductDetails;
      }

      export namespace BillingSettings {
        export interface ContractBillingDetails {
          /**
           * The bill settings details.
           */
          bill_settings_details?: ContractBillingDetails.BillSettingsDetails;

          /**
           * The billing profile details.
           */
          billing_profile_details: ContractBillingDetails.BillingProfileDetails;

          /**
           * The collection settings details.
           */
          collection_settings_details: ContractBillingDetails.CollectionSettingsDetails;
        }

        export namespace ContractBillingDetails {
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
      }

      export namespace ContractLine {
        export interface EndsAt {
          /**
           * The timestamp when the item ends.
           */
          timestamp: string;
        }

        export interface Override {
          /**
           * Timestamp to indicate when the override ends.
           */
          ends_at: Override.EndsAt;

          /**
           * Service action override parameters. Required if `type` is `service_action`.
           */
          service_action?: Override.ServiceAction;

          /**
           * Timestamp to indicate when the override starts.
           */
          starts_at: Override.StartsAt;

          /**
           * The type of the override.
           */
          type: 'service_action';
        }

        export interface Pricing {}

        export interface StartsAt {
          /**
           * The timestamp when the item starts.
           */
          timestamp: string;
        }

        export namespace Override {
          export interface EndsAt {
            /**
             * The timestamp when the item ends.
             */
            timestamp: string;
          }

          export interface ServiceAction {
            /**
             * Parameters for adding a new service action.
             */
            add?: ServiceAction.Add;

            /**
             * Parameters for replacing an existing service action.
             */
            replace?: ServiceAction.Replace;

            /**
             * The type of service action override.
             */
            type: ServiceAction.Type;
          }

          export interface StartsAt {
            /**
             * The timestamp when the item starts.
             */
            timestamp: string;
          }

          export namespace ServiceAction {
            export interface Add {
              /**
               * Details for the credit grant. Required if `type` is `credit_grant`.
               */
              credit_grant?: Add.CreditGrant;

              /**
               * The interval for assessing service.
               */
              service_interval: Add.ServiceInterval;

              /**
               * The length of the interval for assessing service.
               */
              service_interval_count: number;

              /**
               * The type of the service action.
               */
              type: 'credit_grant';
            }

            export interface Replace {
              /**
               * Details for the credit grant. Required if `type` is `credit_grant`.
               */
              credit_grant?: Replace.CreditGrant;

              /**
               * The ID of the service action to replace.
               */
              id?: string;

              /**
               * The lookup key for the service action to replace.
               */
              lookup_key?: string;

              /**
               * The interval for assessing service.
               */
              service_interval: Replace.ServiceInterval;

              /**
               * The length of the interval for assessing service.
               */
              service_interval_count: number;

              /**
               * The type of the service action.
               */
              type: 'credit_grant';
            }

            export type Type = 'add' | 'replace';

            export namespace Add {
              export interface CreditGrant {
                /**
                 * The amount of the credit grant.
                 */
                amount: CreditGrant.Amount;

                /**
                 * Defines the scope where the credit grant is applicable.
                 */
                applicability_config: CreditGrant.ApplicabilityConfig;

                /**
                 * The category of the credit grant.
                 */
                category?: CreditGrant.Category;

                /**
                 * The expiry configuration for the credit grant.
                 */
                expiry_config: CreditGrant.ExpiryConfig;

                /**
                 * A descriptive name.
                 */
                name: string;

                /**
                 * The desired priority for applying this credit grant. The highest priority is 0 and the lowest is 100.
                 */
                priority?: number;
              }

              export type ServiceInterval = 'day' | 'month' | 'week' | 'year';

              export namespace CreditGrant {
                export interface Amount {
                  /**
                   * The monetary amount of the credit grant. Required if `type` is `monetary`.
                   */
                  monetary?: V2Amount;

                  /**
                   * The type of the credit grant amount.
                   */
                  type: 'monetary';
                }

                export interface ApplicabilityConfig {
                  /**
                   * The applicability scope of the credit grant.
                   */
                  scope: ApplicabilityConfig.Scope;
                }

                export type Category = 'paid' | 'promotional';

                export interface ExpiryConfig {
                  /**
                   * The type of the expiry configuration.
                   */
                  type: 'end_of_service_period';
                }

                export namespace ApplicabilityConfig {
                  export interface Scope {
                    /**
                     * The billable items to apply the credit grant to.
                     */
                    billable_items?: Array<string>;

                    /**
                     * The price type that credit grants can apply to.
                     */
                    price_type?: 'metered';
                  }
                }
              }
            }

            export namespace Replace {
              export interface CreditGrant {
                /**
                 * The amount of the credit grant.
                 */
                amount: CreditGrant.Amount;

                /**
                 * Defines the scope where the credit grant is applicable.
                 */
                applicability_config: CreditGrant.ApplicabilityConfig;

                /**
                 * The category of the credit grant.
                 */
                category?: CreditGrant.Category;

                /**
                 * The expiry configuration for the credit grant.
                 */
                expiry_config: CreditGrant.ExpiryConfig;

                /**
                 * A descriptive name.
                 */
                name: string;

                /**
                 * The desired priority for applying this credit grant. The highest priority is 0 and the lowest is 100.
                 */
                priority?: number;
              }

              export type ServiceInterval = 'day' | 'month' | 'week' | 'year';

              export namespace CreditGrant {
                export interface Amount {
                  /**
                   * The monetary amount of the credit grant. Required if `type` is `monetary`.
                   */
                  monetary?: V2Amount;

                  /**
                   * The type of the credit grant amount.
                   */
                  type: 'monetary';
                }

                export interface ApplicabilityConfig {
                  /**
                   * The applicability scope of the credit grant.
                   */
                  scope: ApplicabilityConfig.Scope;
                }

                export type Category = 'paid' | 'promotional';

                export interface ExpiryConfig {
                  /**
                   * The type of the expiry configuration.
                   */
                  type: 'end_of_service_period';
                }

                export namespace ApplicabilityConfig {
                  export interface Scope {
                    /**
                     * The billable items to apply the credit grant to.
                     */
                    billable_items?: Array<string>;

                    /**
                     * The price type that credit grants can apply to.
                     */
                    price_type?: 'metered';
                  }
                }
              }
            }
          }
        }
      }

      export namespace LicenseQuantityAction {
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

        export type LicensePricingType = 'license_fee' | 'price';

        export interface Set {
          /**
           * The quantity to set.
           */
          quantity: number;
        }
      }

      export namespace OneTimeFee {
        export interface BillSchedule {
          /**
           * When this entry should be billed.
           */
          bill_at: BillSchedule.BillAt;

          /**
           * The amount to bill for this entry, in the smallest currency unit.
           */
          value: bigint;
        }

        export interface ProductDetails {
          /**
           * The ID of the v1 Product.
           */
          product: string;
        }

        export namespace BillSchedule {
          export interface BillAt {
            /**
             * The datetime at which the entry should be billed. Required if `type` is `datetime`.
             */
            timestamp?: string;

            /**
             * The type of the bill_at.
             */
            type: BillAt.Type;
          }

          export namespace BillAt {
            export type Type = 'contract_start' | 'datetime';
          }
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
             * The quantity for the price. Only applicable for licensed prices.
             */
            quantity?: number;
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
          criteria: Array<Multiplier.Criterion>;

          /**
           * The multiplier factor, represented as a decimal string. e.g. "0.8" for a 20% reduction.
           */
          factor: string;
        }

        export interface OverwritePrice {
          /**
           * The ID of the V1 price to overwrite.
           */
          price: string;

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

        export type Type = 'multiplier' | 'overwrite_price';

        export namespace EndsAt {
          export type Type = 'contract_end' | 'timestamp';
        }

        export namespace Multiplier {
          export interface Criterion {
            /**
             * Filter by billable item IDs.
             */
            billable_item_ids: Array<string>;

            /**
             * Filter by billable item lookup keys.
             */
            billable_item_lookup_keys: Array<string>;

            /**
             * Filter by billable item type.
             */
            billable_item_types: Array<Criterion.BillableItemType>;

            /**
             * Filter by metadata conditions.
             */
            metadata_conditions: Array<Criterion.MetadataCondition>;

            /**
             * Filter by rate card IDs. Only applicable for `multiplier` overrides.
             */
            rate_card_ids: Array<string>;

            /**
             * Whether to include or exclude items matching these criteria.
             */
            type: Criterion.Type;
          }

          export namespace Criterion {
            export type BillableItemType = 'licensed' | 'metered';

            export interface MetadataCondition {
              /**
               * All of these key-value conditions must match.
               */
              all_of: Array<MetadataCondition.AllOf>;
            }

            export type Type = 'exclude' | 'include';

            export namespace MetadataCondition {
              export interface AllOf {
                /**
                 * The metadata key.
                 */
                key: string;

                /**
                 * The metadata value.
                 */
                value: string;
              }
            }
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
        | 'contract_line_details'
        | 'license_quantities'
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
       * Schema-only: License quantity actions (implementation to follow).
       */
      license_quantity_actions?: Array<
        ContractUpdateParams.LicenseQuantityAction
      >;

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
        | 'contract_line_details'
        | 'license_quantities'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides';

      export interface LicenseQuantityAction {
        /**
         * The effective at for the license quantity action.
         */
        effective_at: LicenseQuantityAction.EffectiveAt;

        /**
         * The ID of the license pricing.
         */
        license_pricing_id?: string;

        /**
         * The lookup key for the license pricing.
         */
        license_pricing_lookup_key?: string;

        /**
         * The type of the license pricing.
         */
        license_pricing_type: LicenseQuantityAction.LicensePricingType;

        /**
         * The pricing line ID for the license quantity action.
         */
        pricing_line?: string;

        /**
         * The pricing line lookup key for the license quantity action.
         */
        pricing_line_lookup_key?: string;

        /**
         * The set quantity for the license quantity action.
         */
        set?: LicenseQuantityAction.Set;

        /**
         * The type of the license quantity action.
         */
        type: 'set';
      }

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

      export namespace LicenseQuantityAction {
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

        export type LicensePricingType = 'license_fee' | 'price';

        export interface Set {
          /**
           * The quantity to set.
           */
          quantity: number;
        }
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
               * The quantity for the price. Only applicable for licensed prices.
               */
              quantity?: number;
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
           * The priority for the pricing override.
           */
          priority: number;

          /**
           * The start time for the pricing override.
           */
          starts_at: Add.StartsAt;

          /**
           * The type of pricing override to add.
           */
          type: Add.Type;
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
             * The ID of the V1 price to overwrite.
             */
            price: string;

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

          export type Type = 'multiplier' | 'overwrite_price';

          export namespace EndsAt {
            export type Type = 'billing_period_end' | 'timestamp';
          }

          export namespace Multiplier {
            export interface Criterion {
              /**
               * Filter by billable item IDs.
               */
              billable_item_ids: Array<string>;

              /**
               * Filter by billable item lookup keys.
               */
              billable_item_lookup_keys: Array<string>;

              /**
               * Filter by billable item type.
               */
              billable_item_types: Array<Criterion.BillableItemType>;

              /**
               * Filter by metadata conditions.
               */
              metadata_conditions: Array<Criterion.MetadataCondition>;

              /**
               * Filter by rate card IDs. Only applicable for `multiplier` overrides.
               */
              rate_card_ids: Array<string>;

              /**
               * Whether to include or exclude items matching these criteria.
               */
              type: Criterion.Type;
            }

            export namespace Criterion {
              export type BillableItemType = 'licensed' | 'metered';

              export interface MetadataCondition {
                /**
                 * All of these key-value conditions must match.
                 */
                all_of: Array<MetadataCondition.AllOf>;
              }

              export type Type = 'exclude' | 'include';

              export namespace MetadataCondition {
                export interface AllOf {
                  /**
                   * The metadata key.
                   */
                  key: string;

                  /**
                   * The metadata value.
                   */
                  value: string;
                }
              }
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
       * The limit for the number of results per page.
       */
      limit?: number;
    }
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
        | 'contract_line_details'
        | 'license_quantities'
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
       * Additional fields to include in the response.
       */
      include?: Array<ContractCancelParams.Include>;
    }

    export namespace ContractCancelParams {
      export type Include =
        | 'contract_line_details'
        | 'license_quantities'
        | 'one_time_fees'
        | 'pricing_lines'
        | 'pricing_overrides';
    }
  }
}
