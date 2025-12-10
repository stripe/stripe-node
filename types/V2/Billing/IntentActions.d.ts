// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The IntentAction object.
         */
        interface IntentAction {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.intent_action';

          /**
           * Details for an apply action.
           */
          apply?: IntentAction.Apply;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Details for a deactivate action.
           */
          deactivate?: IntentAction.Deactivate;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Details for a modify action.
           */
          modify?: IntentAction.Modify;

          /**
           * Details for a remove action.
           */
          remove?: IntentAction.Remove;

          /**
           * Details for a subscribe action.
           */
          subscribe?: IntentAction.Subscribe;

          /**
           * Type of the Billing Intent Action.
           */
          type: IntentAction.Type;
        }

        namespace IntentAction {
          interface Apply {
            /**
             * Type of the apply action details.
             */
            type: 'invoice_discount_rule';

            /**
             * Details for applying a discount rule to future invoices.
             */
            invoice_discount_rule?: Apply.InvoiceDiscountRule;
          }

          namespace Apply {
            interface InvoiceDiscountRule {
              /**
               * The entity that the discount rule applies to, for example, the Billing Cadence.
               */
              applies_to: 'cadence';

              /**
               * The ID of the created discount rule. This is only present once the Billing Intent is committed and the discount rule is created.
               */
              invoice_discount_rule?: string;

              /**
               * Type of the discount rule.
               */
              type: 'percent_off';

              /**
               * Configuration for percentage off discount.
               */
              percent_off?: InvoiceDiscountRule.PercentOff;
            }

            namespace InvoiceDiscountRule {
              interface PercentOff {
                /**
                 * The maximum number of times this discount can be applied for this Billing Cadence.
                 */
                maximum_applications: PercentOff.MaximumApplications;

                /**
                 * Percent that will be taken off of the amount. For example, percent_off of 50.0 will make $100 amount $50 instead.
                 */
                percent_off: string;
              }

              namespace PercentOff {
                interface MaximumApplications {
                  /**
                   * The type of maximum applications configuration.
                   */
                  type: 'indefinite';
                }
              }
            }
          }

          interface Deactivate {
            /**
             * Allows users to override the collect at behavior.
             */
            collect_at: Deactivate.CollectAt;

            /**
             * When the deactivate action will take effect. If not specified, the default behavior is on_reserve.
             */
            effective_at: Deactivate.EffectiveAt;

            /**
             * Type of the action details.
             */
            type: Deactivate.Type;

            /**
             * Details for deactivating a Pricing Plan Subscription.
             */
            pricing_plan_subscription_details?: Deactivate.PricingPlanSubscriptionDetails;
          }

          namespace Deactivate {
            type CollectAt = 'next_billing_date' | 'on_effective_at';

            interface EffectiveAt {
              /**
               * The timestamp at which the deactivate action will take effect. Only present if type is timestamp.
               */
              timestamp?: string;

              /**
               * When the deactivate action will take effect.
               */
              type: EffectiveAt.Type;
            }

            namespace EffectiveAt {
              type Type =
                | 'current_billing_period_end'
                | 'current_billing_period_start'
                | 'on_reserve'
                | 'timestamp';
            }

            interface PricingPlanSubscriptionDetails {
              /**
               * Allows users to override the partial period behavior.
               */
              overrides?: PricingPlanSubscriptionDetails.Overrides;

              /**
               * ID of the Pricing Plan Subscription to deactivate.
               */
              pricing_plan_subscription: string;
            }

            namespace PricingPlanSubscriptionDetails {
              interface Overrides {
                /**
                 * Override for the partial period behavior.
                 */
                partial_period_behaviors: Array<
                  Overrides.PartialPeriodBehavior
                >;
              }

              namespace Overrides {
                interface PartialPeriodBehavior {
                  /**
                   * Type of the partial period behavior override.
                   */
                  type: 'license_fee';

                  /**
                   * Override for the license fee.
                   */
                  license_fee?: PartialPeriodBehavior.LicenseFee;
                }

                namespace PartialPeriodBehavior {
                  interface LicenseFee {
                    /**
                     * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is deactivating.
                     */
                    credit_proration_behavior: LicenseFee.CreditProrationBehavior;
                  }

                  namespace LicenseFee {
                    type CreditProrationBehavior = 'none' | 'prorated';
                  }
                }
              }
            }

            type Type =
              | 'pricing_plan_subscription_details'
              | 'v1_subscription_details';
          }

          interface Modify {
            /**
             * Allows users to override the collect at behavior.
             */
            collect_at: Modify.CollectAt;

            /**
             * When the modify action will take effect. If not specified, the default behavior is on_reserve.
             */
            effective_at: Modify.EffectiveAt;

            /**
             * Type of the action details.
             */
            type: Modify.Type;

            /**
             * Details for modifying a Pricing Plan Subscription.
             */
            pricing_plan_subscription_details?: Modify.PricingPlanSubscriptionDetails;
          }

          namespace Modify {
            type CollectAt = 'next_billing_date' | 'on_effective_at';

            interface EffectiveAt {
              /**
               * The timestamp at which the modify action will take effect. Only present if type is timestamp.
               */
              timestamp?: string;

              /**
               * When the modify action will take effect.
               */
              type: EffectiveAt.Type;
            }

            namespace EffectiveAt {
              type Type =
                | 'current_billing_period_start'
                | 'on_reserve'
                | 'timestamp';
            }

            interface PricingPlanSubscriptionDetails {
              /**
               * New configurations for the components of the Pricing Plan.
               */
              component_configurations: Array<
                PricingPlanSubscriptionDetails.ComponentConfiguration
              >;

              /**
               * ID of the new Pricing Plan.
               */
              new_pricing_plan: string;

              /**
               * Version of the Pricing Plan to use.
               */
              new_pricing_plan_version: string;

              /**
               * Allows users to override the partial period behavior.
               */
              overrides?: PricingPlanSubscriptionDetails.Overrides;

              /**
               * ID of the Pricing Plan Subscription to modify.
               */
              pricing_plan_subscription: string;
            }

            namespace PricingPlanSubscriptionDetails {
              interface ComponentConfiguration {
                /**
                 * Quantity of the component to be used.
                 */
                quantity?: number;

                /**
                 * Lookup key for the pricing plan component.
                 */
                lookup_key?: string;

                /**
                 * ID of the pricing plan component.
                 */
                pricing_plan_component?: string;
              }

              interface Overrides {
                /**
                 * Override for the partial period behavior.
                 */
                partial_period_behaviors: Array<
                  Overrides.PartialPeriodBehavior
                >;
              }

              namespace Overrides {
                interface PartialPeriodBehavior {
                  /**
                   * Type of the partial period behavior override.
                   */
                  type: 'license_fee';

                  /**
                   * Override for the license fee.
                   */
                  license_fee?: PartialPeriodBehavior.LicenseFee;
                }

                namespace PartialPeriodBehavior {
                  interface LicenseFee {
                    /**
                     * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is upgrading.
                     */
                    credit_proration_behavior: LicenseFee.CreditProrationBehavior;

                    /**
                     * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is downgrading.
                     */
                    debit_proration_behavior: LicenseFee.DebitProrationBehavior;
                  }

                  namespace LicenseFee {
                    type CreditProrationBehavior = 'none' | 'prorated';

                    type DebitProrationBehavior = 'none' | 'prorated';
                  }
                }
              }
            }

            type Type =
              | 'pricing_plan_subscription_details'
              | 'v1_subscription_details';
          }

          interface Remove {
            /**
             * Type of the remove action.
             */
            type: 'invoice_discount_rule';

            /**
             * The ID of the discount rule to remove for future invoices.
             */
            invoice_discount_rule?: string;
          }

          interface Subscribe {
            /**
             * Allows users to override the collect at behavior.
             */
            collect_at: Subscribe.CollectAt;

            /**
             * When the subscribe action will take effect. If not specified, the default behavior is on_reserve.
             */
            effective_at: Subscribe.EffectiveAt;

            /**
             * Type of the action details.
             */
            type: Subscribe.Type;

            /**
             * Details for subscribing to a Pricing Plan.
             */
            pricing_plan_subscription_details?: Subscribe.PricingPlanSubscriptionDetails;

            /**
             * Details for subscribing to a V1 subscription.
             */
            v1_subscription_details?: Subscribe.V1SubscriptionDetails;
          }

          namespace Subscribe {
            type CollectAt = 'next_billing_date' | 'on_effective_at';

            interface EffectiveAt {
              /**
               * The timestamp at which the subscribe action will take effect. Only present if type is timestamp.
               */
              timestamp?: string;

              /**
               * When the subscribe action will take effect.
               */
              type: EffectiveAt.Type;
            }

            namespace EffectiveAt {
              type Type =
                | 'current_billing_period_start'
                | 'on_reserve'
                | 'timestamp';
            }

            interface PricingPlanSubscriptionDetails {
              /**
               * Configurations for the components of the Pricing Plan.
               */
              component_configurations: Array<
                PricingPlanSubscriptionDetails.ComponentConfiguration
              >;

              /**
               * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
               */
              metadata?: Stripe.Metadata;

              /**
               * Allows users to override the partial period behavior.
               */
              overrides?: PricingPlanSubscriptionDetails.Overrides;

              /**
               * ID of the Pricing Plan to subscribe to.
               */
              pricing_plan: string;

              /**
               * ID of the created Pricing Plan Subscription. This is only present once the Billing Intent is committed and the Pricing Plan Subscription is created.
               */
              pricing_plan_subscription?: string;

              /**
               * Version of the Pricing Plan to use.
               */
              pricing_plan_version: string;
            }

            namespace PricingPlanSubscriptionDetails {
              interface ComponentConfiguration {
                /**
                 * Quantity of the component to be used.
                 */
                quantity?: number;

                /**
                 * Lookup key for the pricing plan component.
                 */
                lookup_key?: string;

                /**
                 * ID of the pricing plan component.
                 */
                pricing_plan_component?: string;
              }

              interface Overrides {
                /**
                 * Override for the partial period behavior.
                 */
                partial_period_behaviors: Array<
                  Overrides.PartialPeriodBehavior
                >;
              }

              namespace Overrides {
                interface PartialPeriodBehavior {
                  /**
                   * Type of the partial period behavior override.
                   */
                  type: 'license_fee';

                  /**
                   * Override for the license fee.
                   */
                  license_fee?: PartialPeriodBehavior.LicenseFee;
                }

                namespace PartialPeriodBehavior {
                  interface LicenseFee {
                    /**
                     * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is subscribing.
                     */
                    debit_proration_behavior: LicenseFee.DebitProrationBehavior;
                  }

                  namespace LicenseFee {
                    type DebitProrationBehavior = 'none' | 'prorated';
                  }
                }
              }
            }

            type Type =
              | 'pricing_plan_subscription_details'
              | 'v1_subscription_details';

            interface V1SubscriptionDetails {
              /**
               * The subscription's description, meant to be displayable to the customer.
               * Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
               */
              description?: string;

              /**
               * A list of up to 20 subscription items, each with an attached price.
               */
              items: Array<V1SubscriptionDetails.Item>;

              /**
               * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
               */
              metadata?: Stripe.Metadata;
            }

            namespace V1SubscriptionDetails {
              interface Item {
                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata?: Stripe.Metadata;

                /**
                 * The ID of the price object.
                 */
                price: string;

                /**
                 * Quantity for this item. If not provided, will default to 1.
                 */
                quantity?: number;
              }
            }
          }

          type Type =
            | 'apply'
            | 'deactivate'
            | 'modify'
            | 'remove'
            | 'subscribe';
        }
      }
    }
  }
}
