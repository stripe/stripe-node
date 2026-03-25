// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * A Pricing Plan Subscription represents a customer's active subscription to a Pricing Plan. It tracks both the servicing
         * status (whether the customer is receiving service) and collection status (whether payments are current). Subscriptions
         * are created through Billing Intents and bill according to the associated Billing Cadence.
         */
        interface PricingPlanSubscription {
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
          cancellation_details?: PricingPlanSubscription.CancellationDetails;

          /**
           * Current collection status of this subscription.
           */
          collection_status: PricingPlanSubscription.CollectionStatus;

          /**
           * Timestamps for collection status transitions.
           */
          collection_status_transitions: PricingPlanSubscription.CollectionStatusTransitions;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Details about Discounts applied to this subscription.
           */
          discount_details?: Array<PricingPlanSubscription.DiscountDetail>;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.Metadata;

          /**
           * The ID of the Pricing Plan for this subscription.
           */
          pricing_plan: string;

          /**
           * Pricing plan component details for the subscription, populated when pricing_plan_component_details is included.
           */
          pricing_plan_component_details?: Array<
            PricingPlanSubscription.PricingPlanComponentDetail
          >;

          /**
           * The ID of the Pricing Plan Version for this subscription.
           */
          pricing_plan_version: string;

          /**
           * Current servicing status of this subscription.
           */
          servicing_status: PricingPlanSubscription.ServicingStatus;

          /**
           * Timestamps for servicing status transitions.
           */
          servicing_status_transitions: PricingPlanSubscription.ServicingStatusTransitions;

          /**
           * The ID of the Test Clock of the associated Billing Cadence, if any.
           */
          test_clock?: string;
        }

        namespace PricingPlanSubscription {
          interface CancellationDetails {
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

          namespace CancellationDetails {
            type Feedback =
              | 'customer_service'
              | 'low_quality'
              | 'missing_features'
              | 'other'
              | 'switched_service'
              | 'too_complex'
              | 'too_expensive'
              | 'unused';
          }

          type CollectionStatus =
            | 'awaiting_customer_action'
            | 'current'
            | 'past_due'
            | 'paused'
            | 'unpaid';

          interface CollectionStatusTransitions {
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

          interface DiscountDetail {
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

          namespace DiscountDetail {
            interface Source {
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

          interface PricingPlanComponentDetail {
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

          namespace PricingPlanComponentDetail {
            interface LicenseFeeDetails {
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

            namespace LicenseFeeDetails {
              interface ServiceCycle {
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

              namespace ServiceCycle {
                type Interval = 'day' | 'month' | 'week' | 'year';
              }

              interface Tier {
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

              type TieringMode = 'graduated' | 'volume';

              interface TransformQuantity {
                /**
                 * Divide usage by this number.
                 */
                divide_by: bigint;

                /**
                 * After division, round the result up or down.
                 */
                round: TransformQuantity.Round;
              }

              namespace TransformQuantity {
                type Round = 'down' | 'up';
              }
            }

            interface RateCardDetails {
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

            namespace RateCardDetails {
              interface ServiceCycle {
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

              namespace ServiceCycle {
                type Interval = 'day' | 'month' | 'week' | 'year';
              }

              type TaxBehavior = 'exclusive' | 'inclusive';
            }

            interface RecurringCreditGrantDetails {
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

            namespace RecurringCreditGrantDetails {
              interface CreditGrantDetails {
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

              namespace CreditGrantDetails {
                interface Amount {
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
                  monetary?: V2.Amount;
                }

                namespace Amount {
                  interface CustomPricingUnit {
                    /**
                     * The Custom Pricing Unit object.
                     */
                    custom_pricing_unit_details?: Stripe.V2.Billing.CustomPricingUnit;

                    /**
                     * The id of the custom pricing unit.
                     */
                    id: string;

                    /**
                     * The value of the credit grant, decimal value represented as a string.
                     */
                    value: Decimal;
                  }

                  type Type = 'custom_pricing_unit' | 'monetary';
                }

                interface ApplicabilityConfig {
                  /**
                   * The applicability scope of the credit grant.
                   */
                  scope: ApplicabilityConfig.Scope;
                }

                namespace ApplicabilityConfig {
                  interface Scope {
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

                interface ExpiryConfig {
                  /**
                   * The type of the expiry configuration. We currently support `end_of_service_period`.
                   */
                  type: 'end_of_service_period';
                }
              }

              interface CreditGrantPerTenantDetails {
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

              namespace CreditGrantPerTenantDetails {
                interface Amount {
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
                  monetary?: V2.Amount;
                }

                namespace Amount {
                  interface CustomPricingUnit {
                    /**
                     * The Custom Pricing Unit object.
                     */
                    custom_pricing_unit_details?: Stripe.V2.Billing.CustomPricingUnit;

                    /**
                     * The id of the custom pricing unit.
                     */
                    id: string;

                    /**
                     * The value of the credit grant, decimal value represented as a string.
                     */
                    value: Decimal;
                  }

                  type Type = 'custom_pricing_unit' | 'monetary';
                }

                interface ApplicabilityConfig {
                  /**
                   * The applicability scope of the credit grant.
                   */
                  scope: ApplicabilityConfig.Scope;
                }

                namespace ApplicabilityConfig {
                  interface Scope {
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

                interface ExpiryConfig {
                  /**
                   * The type of the expiry configuration. We currently support `end_of_service_period`.
                   */
                  type: 'end_of_service_period';
                }
              }

              interface ServiceCycle {
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

              namespace ServiceCycle {
                type Interval = 'day' | 'month' | 'week' | 'year';
              }

              type Type = 'credit_grant' | 'credit_grant_per_tenant';
            }

            type Type =
              | 'license_fee_details'
              | 'rate_card_details'
              | 'recurring_credit_grant_details';
          }

          type ServicingStatus = 'active' | 'canceled' | 'paused' | 'pending';

          interface ServicingStatusTransitions {
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
        }
      }
    }
  }
}
