// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Amount} from './../../V2/Amounts.js';
import {CustomPricingUnit} from './CustomPricingUnits.js';
import {MetadataParam, Metadata, Decimal} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class PricingPlanSubscriptionResource extends StripeResource {
  /**
   * List all Pricing Plan Subscription objects.
   */
  list(
    params?: V2.Billing.PricingPlanSubscriptionListParams,
    options?: RequestOptions
  ): ApiListPromise<PricingPlanSubscription>;
  list(options?: RequestOptions): ApiListPromise<PricingPlanSubscription>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/pricing_plan_subscriptions',
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                pricing_plan_component_details: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      license_fee_details: {
                        kind: 'object',
                        fields: {
                          tiers: {
                            kind: 'array',
                            element: {
                              kind: 'object',
                              fields: {up_to_decimal: {kind: 'decimal_string'}},
                            },
                          },
                          transform_quantity: {
                            kind: 'object',
                            fields: {divide_by: {kind: 'int64_string'}},
                          },
                        },
                      },
                      recurring_credit_grant_details: {
                        kind: 'object',
                        fields: {
                          credit_grant_details: {
                            kind: 'object',
                            fields: {
                              amount: {
                                kind: 'object',
                                fields: {
                                  custom_pricing_unit: {
                                    kind: 'object',
                                    fields: {value: {kind: 'decimal_string'}},
                                  },
                                },
                              },
                            },
                          },
                          credit_grant_per_tenant_details: {
                            kind: 'object',
                            fields: {
                              amount: {
                                kind: 'object',
                                fields: {
                                  custom_pricing_unit: {
                                    kind: 'object',
                                    fields: {value: {kind: 'decimal_string'}},
                                  },
                                },
                              },
                            },
                          },
                        },
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
   * Retrieve a Pricing Plan Subscription object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.PricingPlanSubscriptionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlanSubscription>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<PricingPlanSubscription>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/pricing_plan_subscriptions/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          pricing_plan_component_details: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                license_fee_details: {
                  kind: 'object',
                  fields: {
                    tiers: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {up_to_decimal: {kind: 'decimal_string'}},
                      },
                    },
                    transform_quantity: {
                      kind: 'object',
                      fields: {divide_by: {kind: 'int64_string'}},
                    },
                  },
                },
                recurring_credit_grant_details: {
                  kind: 'object',
                  fields: {
                    credit_grant_details: {
                      kind: 'object',
                      fields: {
                        amount: {
                          kind: 'object',
                          fields: {
                            custom_pricing_unit: {
                              kind: 'object',
                              fields: {value: {kind: 'decimal_string'}},
                            },
                          },
                        },
                      },
                    },
                    credit_grant_per_tenant_details: {
                      kind: 'object',
                      fields: {
                        amount: {
                          kind: 'object',
                          fields: {
                            custom_pricing_unit: {
                              kind: 'object',
                              fields: {value: {kind: 'decimal_string'}},
                            },
                          },
                        },
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
   * Update a Pricing Plan Subscription object.
   */
  update(
    id: string,
    params?: V2.Billing.PricingPlanSubscriptionUpdateParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlanSubscription>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/pricing_plan_subscriptions/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          pricing_plan_component_details: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                license_fee_details: {
                  kind: 'object',
                  fields: {
                    tiers: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {up_to_decimal: {kind: 'decimal_string'}},
                      },
                    },
                    transform_quantity: {
                      kind: 'object',
                      fields: {divide_by: {kind: 'int64_string'}},
                    },
                  },
                },
                recurring_credit_grant_details: {
                  kind: 'object',
                  fields: {
                    credit_grant_details: {
                      kind: 'object',
                      fields: {
                        amount: {
                          kind: 'object',
                          fields: {
                            custom_pricing_unit: {
                              kind: 'object',
                              fields: {value: {kind: 'decimal_string'}},
                            },
                          },
                        },
                      },
                    },
                    credit_grant_per_tenant_details: {
                      kind: 'object',
                      fields: {
                        amount: {
                          kind: 'object',
                          fields: {
                            custom_pricing_unit: {
                              kind: 'object',
                              fields: {value: {kind: 'decimal_string'}},
                            },
                          },
                        },
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
   * Remove Discounts from a Pricing Plan Subscription.
   */
  removeDiscounts(
    id: string,
    params?: V2.Billing.PricingPlanSubscriptionRemoveDiscountsParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlanSubscription>>;
  removeDiscounts(
    id: string,
    options?: RequestOptions
  ): Promise<Response<PricingPlanSubscription>>;
  removeDiscounts(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/pricing_plan_subscriptions/{id}/remove_discounts',
      responseSchema: {
        kind: 'object',
        fields: {
          pricing_plan_component_details: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                license_fee_details: {
                  kind: 'object',
                  fields: {
                    tiers: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {up_to_decimal: {kind: 'decimal_string'}},
                      },
                    },
                    transform_quantity: {
                      kind: 'object',
                      fields: {divide_by: {kind: 'int64_string'}},
                    },
                  },
                },
                recurring_credit_grant_details: {
                  kind: 'object',
                  fields: {
                    credit_grant_details: {
                      kind: 'object',
                      fields: {
                        amount: {
                          kind: 'object',
                          fields: {
                            custom_pricing_unit: {
                              kind: 'object',
                              fields: {value: {kind: 'decimal_string'}},
                            },
                          },
                        },
                      },
                    },
                    credit_grant_per_tenant_details: {
                      kind: 'object',
                      fields: {
                        amount: {
                          kind: 'object',
                          fields: {
                            custom_pricing_unit: {
                              kind: 'object',
                              fields: {value: {kind: 'decimal_string'}},
                            },
                          },
                        },
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
}
export interface PricingPlanSubscription {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.pricing_plan_subscription';

  /**
   * The ID of the Billing Cadence this subscription is billed on.
   */
  billing_cadence: string;

  /**
   * Details about why the subscription was canceled, if applicable. Includes system-generated reason.
   */
  cancellation_details?: V2.Billing.PricingPlanSubscription.CancellationDetails;

  /**
   * Current collection status of this subscription.
   */
  collection_status: V2.Billing.PricingPlanSubscription.CollectionStatus;

  /**
   * Timestamps for collection status transitions.
   */
  collection_status_transitions: V2.Billing.PricingPlanSubscription.CollectionStatusTransitions;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * Details about Discounts applied to this subscription.
   */
  discount_details?: Array<V2.Billing.PricingPlanSubscription.DiscountDetail>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The ID of the Pricing Plan for this subscription.
   */
  pricing_plan: string;

  /**
   * Pricing plan component details for the subscription, populated when pricing_plan_component_details is included.
   */
  pricing_plan_component_details?: Array<
    V2.Billing.PricingPlanSubscription.PricingPlanComponentDetail
  >;

  /**
   * The ID of the Pricing Plan Version for this subscription.
   */
  pricing_plan_version: string;

  /**
   * Current servicing status of this subscription.
   */
  servicing_status: V2.Billing.PricingPlanSubscription.ServicingStatus;

  /**
   * Timestamps for servicing status transitions.
   */
  servicing_status_transitions: V2.Billing.PricingPlanSubscription.ServicingStatusTransitions;

  /**
   * The ID of the Test Clock of the associated Billing Cadence, if any.
   */
  test_clock?: string;
}
export namespace V2 {
  export namespace Billing {
    export namespace PricingPlanSubscription {
      export interface CancellationDetails {
        /**
         * Additional comments about why the user canceled the subscription, if the subscription was canceled explicitly by the user.
         */
        comment?: string;

        /**
         * The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user.
         */
        feedback?: CancellationDetails.Feedback;

        /**
         * System-generated reason for cancellation.
         */
        reason?: 'cancellation_requested';
      }

      export type CollectionStatus =
        | 'awaiting_customer_action'
        | 'current'
        | 'past_due'
        | 'paused'
        | 'unpaid';

      export interface CollectionStatusTransitions {
        /**
         * When the collection status transitioned to awaiting customer action.
         */
        awaiting_customer_action_at?: string;

        /**
         * When the collection status transitioned to current.
         */
        current_at?: string;

        /**
         * When the collection status transitioned to past due.
         */
        past_due_at?: string;

        /**
         * When the collection status transitioned to paused.
         */
        paused_at?: string;

        /**
         * When the collection status transitioned to unpaid.
         */
        unpaid_at?: string;
      }

      export interface DiscountDetail {
        /**
         * The ID of the Discount.
         */
        discount: string;

        /**
         * The time at which the Discount ends, if applicable.
         */
        end?: string;

        /**
         * The ID of the PromotionCode, if applicable.
         */
        promotion_code?: string;

        /**
         * The source of the Discount.
         */
        source: DiscountDetail.Source;

        /**
         * The time at which the Discount starts.
         */
        start: string;
      }

      export interface PricingPlanComponentDetail {
        /**
         * License fee details, present when type is license_fee_details.
         */
        license_fee_details?: PricingPlanComponentDetail.LicenseFeeDetails;

        /**
         * The ID of the Pricing Plan Component.
         */
        pricing_plan_component: string;

        /**
         * Rate card details, present when type is rate_card_details.
         */
        rate_card_details?: PricingPlanComponentDetail.RateCardDetails;

        /**
         * Recurring credit grant details, present when type is recurring_credit_grant_details.
         */
        recurring_credit_grant_details?: PricingPlanComponentDetail.RecurringCreditGrantDetails;

        /**
         * The type of component details included.
         */
        type: PricingPlanComponentDetail.Type;
      }

      export type ServicingStatus =
        | 'active'
        | 'canceled'
        | 'paused'
        | 'pending';

      export interface ServicingStatusTransitions {
        /**
         * When the servicing status transitioned to activated.
         */
        activated_at?: string;

        /**
         * When the servicing status transitioned to canceled.
         */
        canceled_at?: string;

        /**
         * When the servicing status transitioned to paused.
         */
        paused_at?: string;

        /**
         * When the servicing is scheduled to transition to activate.
         */
        will_activate_at?: string;

        /**
         * When the servicing is scheduled to cancel.
         */
        will_cancel_at?: string;
      }

      export namespace CancellationDetails {
        export type Feedback =
          | 'customer_service'
          | 'low_quality'
          | 'missing_features'
          | 'other'
          | 'switched_service'
          | 'too_complex'
          | 'too_expensive'
          | 'unused';
      }

      export namespace DiscountDetail {
        export interface Source {
          /**
           * The ID of the Coupon.
           */
          coupon?: string;

          /**
           * Type of the Discount source.
           */
          type: 'coupon';
        }
      }

      export namespace PricingPlanComponentDetail {
        export interface LicenseFeeDetails {
          /**
           * Three-letter ISO currency code, in lowercase.
           */
          currency: string;

          /**
           * A customer-facing name for the license fee.
           */
          display_name: string;

          /**
           * The ID of the License Fee.
           */
          license_fee: string;

          /**
           * The ID of the License Fee Version.
           */
          license_fee_version: string;

          /**
           * Quantity of the license fee on the subscription.
           */
          quantity: number;

          /**
           * The service cycle configuration.
           */
          service_cycle: LicenseFeeDetails.ServiceCycle;

          /**
           * Defines whether the tiering price should be graduated or volume-based.
           */
          tiering_mode?: LicenseFeeDetails.TieringMode;

          /**
           * Each element represents a pricing tier.
           */
          tiers: Array<LicenseFeeDetails.Tier>;

          /**
           * Apply a transformation to the reported usage or set quantity before computing the amount billed.
           */
          transform_quantity?: LicenseFeeDetails.TransformQuantity;

          /**
           * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal places.
           */
          unit_amount?: string;

          /**
           * The unit label from the licensed item, used for display purposes (e.g. "seat", "environment").
           */
          unit_label?: string;
        }

        export interface RateCardDetails {
          /**
           * Three-letter ISO currency code, in lowercase.
           */
          currency: string;

          /**
           * A customer-facing name for the rate card.
           */
          display_name: string;

          /**
           * The ID of the Rate Card.
           */
          rate_card: string;

          /**
           * The ID of the Rate Card Version.
           */
          rate_card_version: string;

          /**
           * The service cycle configuration.
           */
          service_cycle: RateCardDetails.ServiceCycle;

          /**
           * Whether the rates are inclusive or exclusive of tax.
           */
          tax_behavior: RateCardDetails.TaxBehavior;
        }

        export interface RecurringCreditGrantDetails {
          /**
           * Credit grant details, present when type is CREDIT_GRANT.
           */
          credit_grant_details?: RecurringCreditGrantDetails.CreditGrantDetails;

          /**
           * Credit grant per tenant details, present when type is CREDIT_GRANT_PER_TENANT.
           */
          credit_grant_per_tenant_details?: RecurringCreditGrantDetails.CreditGrantPerTenantDetails;

          /**
           * The ID of the Recurring Credit Grant.
           */
          recurring_credit_grant: string;

          /**
           * The service cycle configuration.
           */
          service_cycle: RecurringCreditGrantDetails.ServiceCycle;

          /**
           * The type of the recurring credit grant.
           */
          type: RecurringCreditGrantDetails.Type;
        }

        export type Type =
          | 'license_fee_details'
          | 'rate_card_details'
          | 'recurring_credit_grant_details';

        export namespace LicenseFeeDetails {
          export interface ServiceCycle {
            /**
             * The interval for assessing service.
             */
            interval: ServiceCycle.Interval;

            /**
             * The length of the interval for assessing service. For example, set this to 3 and `interval` to `"month"` in
             * order to specify quarterly service.
             */
            interval_count: number;
          }

          export type TieringMode = 'graduated' | 'volume';

          export interface Tier {
            /**
             * Price for the entire tier, represented as a decimal string in minor currency units with at most 12 decimal places.
             */
            flat_amount?: string;

            /**
             * Per-unit price for units included in this tier, represented as a decimal string in minor currency units with at
             * most 12 decimal places.
             */
            unit_amount?: string;

            /**
             * Up to and including this quantity will be contained in the tier. Only one of `up_to_decimal` and `up_to_inf` may
             * be set.
             */
            up_to_decimal?: Decimal;

            /**
             * No upper bound to this tier. Only one of `up_to_decimal` and `up_to_inf` may be set.
             */
            up_to_inf?: 'inf';
          }

          export interface TransformQuantity {
            /**
             * Divide usage by this number.
             */
            divide_by: bigint;

            /**
             * After division, round the result up or down.
             */
            round: TransformQuantity.Round;
          }

          export namespace ServiceCycle {
            export type Interval = 'day' | 'month' | 'week' | 'year';
          }

          export namespace TransformQuantity {
            export type Round = 'down' | 'up';
          }
        }

        export namespace RateCardDetails {
          export interface ServiceCycle {
            /**
             * The interval for assessing service.
             */
            interval: ServiceCycle.Interval;

            /**
             * The length of the interval for assessing service. For example, set this to 3 and `interval` to `"month"` in
             * order to specify quarterly service.
             */
            interval_count: number;
          }

          export type TaxBehavior = 'exclusive' | 'inclusive';

          export namespace ServiceCycle {
            export type Interval = 'day' | 'month' | 'week' | 'year';
          }
        }

        export namespace RecurringCreditGrantDetails {
          export interface CreditGrantDetails {
            /**
             * The amount of the credit grant.
             */
            amount: CreditGrantDetails.Amount;

            /**
             * Defines the scope where the credit grant is applicable.
             */
            applicability_config: CreditGrantDetails.ApplicabilityConfig;

            /**
             * The expiry configuration for the credit grant.
             */
            expiry_config: CreditGrantDetails.ExpiryConfig;
          }

          export interface CreditGrantPerTenantDetails {
            /**
             * The amount of the credit grant.
             */
            amount: CreditGrantPerTenantDetails.Amount;

            /**
             * Defines the scope where the credit grant is applicable.
             */
            applicability_config: CreditGrantPerTenantDetails.ApplicabilityConfig;

            /**
             * The expiry configuration for the credit grant.
             */
            expiry_config: CreditGrantPerTenantDetails.ExpiryConfig;
          }

          export interface ServiceCycle {
            /**
             * The interval for assessing service.
             */
            interval: ServiceCycle.Interval;

            /**
             * The length of the interval for assessing service. For example, set this to 3 and `interval` to `"month"` in
             * order to specify quarterly service.
             */
            interval_count: number;
          }

          export type Type = 'credit_grant' | 'credit_grant_per_tenant';

          export namespace CreditGrantDetails {
            export interface Amount {
              /**
               * The type of the credit grant amount. We currently support `monetary` and `custom_pricing_unit` billing credits.
               */
              type: Amount.Type;

              /**
               * The custom pricing unit amount of the credit grant. Required if `type` is `custom_pricing_unit`.
               */
              custom_pricing_unit?: Amount.CustomPricingUnit;

              /**
               * The monetary amount of the credit grant. Required if `type` is `monetary`.
               */
              monetary?: Amount;
            }

            export interface ApplicabilityConfig {
              /**
               * The applicability scope of the credit grant.
               */
              scope: ApplicabilityConfig.Scope;
            }

            export interface ExpiryConfig {
              /**
               * The type of the expiry configuration. We currently support `end_of_service_period`.
               */
              type: 'end_of_service_period';
            }

            export namespace Amount {
              export type Type = 'custom_pricing_unit' | 'monetary';

              export interface CustomPricingUnit {
                /**
                 * The Custom Pricing Unit object.
                 */
                custom_pricing_unit_details?: CustomPricingUnit;

                /**
                 * The id of the custom pricing unit.
                 */
                id: string;

                /**
                 * The value of the credit grant, decimal value represented as a string.
                 */
                value: Decimal;
              }
            }

            export namespace ApplicabilityConfig {
              export interface Scope {
                /**
                 * The billable items to apply the credit grant to.
                 */
                billable_items?: Array<string>;

                /**
                 * The price type that credit grants can apply to. We currently only support the `metered` price type. This will apply to metered prices and rate cards. Cannot be used in combination with `billable_items`.
                 */
                price_type?: 'metered';
              }
            }
          }

          export namespace CreditGrantPerTenantDetails {
            export interface Amount {
              /**
               * The type of the credit grant amount. We currently support `monetary` and `custom_pricing_unit` billing credits.
               */
              type: Amount.Type;

              /**
               * The custom pricing unit amount of the credit grant. Required if `type` is `custom_pricing_unit`.
               */
              custom_pricing_unit?: Amount.CustomPricingUnit;

              /**
               * The monetary amount of the credit grant. Required if `type` is `monetary`.
               */
              monetary?: Amount;
            }

            export interface ApplicabilityConfig {
              /**
               * The applicability scope of the credit grant.
               */
              scope: ApplicabilityConfig.Scope;
            }

            export interface ExpiryConfig {
              /**
               * The type of the expiry configuration. We currently support `end_of_service_period`.
               */
              type: 'end_of_service_period';
            }

            export namespace Amount {
              export type Type = 'custom_pricing_unit' | 'monetary';

              export interface CustomPricingUnit {
                /**
                 * The Custom Pricing Unit object.
                 */
                custom_pricing_unit_details?: CustomPricingUnit;

                /**
                 * The id of the custom pricing unit.
                 */
                id: string;

                /**
                 * The value of the credit grant, decimal value represented as a string.
                 */
                value: Decimal;
              }
            }

            export namespace ApplicabilityConfig {
              export interface Scope {
                /**
                 * The billable items to apply the credit grant to.
                 */
                billable_items?: Array<string>;

                /**
                 * The price type that credit grants can apply to. We currently only support the `metered` price type. This will apply to metered prices and rate cards. Cannot be used in combination with `billable_items`.
                 */
                price_type?: 'metered';
              }
            }
          }

          export namespace ServiceCycle {
            export type Interval = 'day' | 'month' | 'week' | 'year';
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface PricingPlanSubscriptionRetrieveParams {
      /**
       * Expand to include additional data such as discount_details.
       */
      include?: Array<PricingPlanSubscriptionRetrieveParams.Include>;
    }

    export namespace PricingPlanSubscriptionRetrieveParams {
      export type Include =
        | 'discount_details'
        | 'pricing_plan_component_details';
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface PricingPlanSubscriptionUpdateParams {
      /**
       * When set to true, the `servicing_status_transition.will_cancel_at` field will be cleared.
       */
      clear_cancel_at?: boolean;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface PricingPlanSubscriptionListParams {
      /**
       * Filter by Billing Cadence ID. Mutually exclusive with `payer`, `pricing_plan`, and `pricing_plan_version`.
       */
      billing_cadence?: string;

      /**
       * Expand to include additional data such as discount_details, billing_cadence_details, or pricing_plan_component_details.
       */
      include?: Array<PricingPlanSubscriptionListParams.Include>;

      /**
       * Optionally set the maximum number of results per page. Defaults to 20.
       */
      limit?: number;

      /**
       * Filter by payer. Mutually exclusive with `billing_cadence`, `pricing_plan`, and `pricing_plan_version`.
       */
      payer?: PricingPlanSubscriptionListParams.Payer;

      /**
       * Filter by PricingPlan ID. Mutually exclusive with `billing_cadence`, `payer`, and `pricing_plan_version`.
       */
      pricing_plan?: string;

      /**
       * Filter by Pricing Plan Version ID. Mutually exclusive with `billing_cadence`, `payer`, and `pricing_plan`.
       */
      pricing_plan_version?: string;

      /**
       * Filter by servicing status.
       */
      servicing_status?: PricingPlanSubscriptionListParams.ServicingStatus;
    }

    export namespace PricingPlanSubscriptionListParams {
      export type Include =
        | 'discount_details'
        | 'pricing_plan_component_details';

      export interface Payer {
        /**
         * The ID of the Customer object. If provided, only Pricing Plan Subscriptions that are subscribed on the cadences with the specified payer will be returned.
         */
        customer?: string;

        /**
         * A string identifying the type of the payer. Currently the only supported value is `customer`.
         */
        type: 'customer';
      }

      export type ServicingStatus =
        | 'active'
        | 'canceled'
        | 'paused'
        | 'pending';
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface PricingPlanSubscriptionRemoveDiscountsParams {
      /**
       * Expand to include additional data such as discount_details.
       */
      include?: Array<PricingPlanSubscriptionRemoveDiscountsParams.Include>;
    }

    export namespace PricingPlanSubscriptionRemoveDiscountsParams {
      export type Include =
        | 'discount_details'
        | 'pricing_plan_component_details';
    }
  }
}
