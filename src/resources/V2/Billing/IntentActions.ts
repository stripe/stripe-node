// File generated from our OpenAPI spec

import {Decimal, Metadata} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface IntentAction {
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
  apply?: V2.Billing.IntentAction.Apply;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * Details for a deactivate action.
   */
  deactivate?: V2.Billing.IntentAction.Deactivate;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Details for a modify action.
   */
  modify?: V2.Billing.IntentAction.Modify;

  /**
   * Details for a remove action.
   */
  remove?: V2.Billing.IntentAction.Remove;

  /**
   * Details for a subscribe action.
   */
  subscribe?: V2.Billing.IntentAction.Subscribe;

  /**
   * Type of the Billing Intent Action.
   */
  type: V2.Billing.IntentAction.Type;
}
export namespace V2 {
  export namespace Billing {
    export namespace IntentAction {
      export interface Apply {
        /**
         * Details for applying a discount.
         */
        discount?: Apply.Discount;

        /**
         * When the apply action takes effect. If not specified, defaults to on_reserve.
         */
        effective_at?: Apply.EffectiveAt;

        /**
         * Details for applying a discount rule to future invoices.
         */
        invoice_discount_rule?: Apply.InvoiceDiscountRule;

        /**
         * Details for applying a spend modifier rule. Only present if type is spend_modifier_rule.
         */
        spend_modifier_rule?: Apply.SpendModifierRule;

        /**
         * Type of the apply action details.
         */
        type: Apply.Type;
      }

      export interface Deactivate {
        /**
         * Details about why the cancellation was requested by the user.
         */
        cancellation_details?: Deactivate.CancellationDetails;

        /**
         * Allows users to override the collect at behavior.
         */
        collect_at: Deactivate.CollectAt;

        /**
         * When the deactivate action takes effect. If not specified, the default behavior is on_reserve.
         */
        effective_at: Deactivate.EffectiveAt;

        /**
         * Details for deactivating a Pricing Plan Subscription.
         */
        pricing_plan_subscription_details?: Deactivate.PricingPlanSubscriptionDetails;

        /**
         * Type of the action details.
         */
        type: Deactivate.Type;
      }

      export interface Modify {
        /**
         * Allows users to override the collect at behavior.
         */
        collect_at: Modify.CollectAt;

        /**
         * When the modify action takes effect. If not specified, the default behavior is on_reserve.
         */
        effective_at: Modify.EffectiveAt;

        /**
         * Details for modifying a Pricing Plan Subscription.
         */
        pricing_plan_subscription_details?: Modify.PricingPlanSubscriptionDetails;

        /**
         * Type of the action details.
         */
        type: Modify.Type;
      }

      export interface Remove {
        /**
         * When the remove action takes effect. If not specified, defaults to on_reserve.
         */
        effective_at?: Remove.EffectiveAt;

        /**
         * The ID of the discount rule to remove for future invoices.
         */
        invoice_discount_rule?: string;

        /**
         * The ID of the spend modifier rule removed.
         */
        spend_modifier_rule?: string;

        /**
         * Type of the remove action.
         */
        type: Remove.Type;
      }

      export interface Subscribe {
        /**
         * Allows users to override the collect at behavior.
         */
        collect_at: Subscribe.CollectAt;

        /**
         * When the subscribe action takes effect. If not specified, the default behavior is on_reserve.
         */
        effective_at: Subscribe.EffectiveAt;

        /**
         * Details for subscribing to a Pricing Plan.
         */
        pricing_plan_subscription_details?: Subscribe.PricingPlanSubscriptionDetails;

        /**
         * Type of the action details.
         */
        type: Subscribe.Type;

        /**
         * Details for subscribing to a V1 subscription.
         */
        v1_subscription_details?: Subscribe.V1SubscriptionDetails;
      }

      export type Type =
        | 'apply'
        | 'deactivate'
        | 'modify'
        | 'remove'
        | 'subscribe';

      export namespace Apply {
        export interface Discount {
          /**
           * The ID of the Coupon applied.
           */
          coupon?: string;

          /**
           * The ID of the created Discount.
           */
          discount?: string;

          /**
           * The ID of the PromotionCode applied.
           */
          promotion_code?: string;

          /**
           * Type of the discount.
           */
          type: Discount.Type;
        }

        export interface EffectiveAt {
          /**
           * The timestamp at which the apply action takes effect. Only present if type is timestamp. Only allowed for discount actions.
           */
          timestamp?: string;

          /**
           * When the apply action takes effect.
           */
          type: EffectiveAt.Type;
        }

        export interface InvoiceDiscountRule {
          /**
           * The entity that the discount rule applies to, for example, the Billing Cadence.
           */
          applies_to: 'cadence';

          /**
           * The ID of the created discount rule. This is only present once the Billing Intent is committed and the discount rule is created.
           */
          invoice_discount_rule?: string;

          /**
           * Configuration for percentage off discount.
           */
          percent_off?: InvoiceDiscountRule.PercentOff;

          /**
           * Type of the discount rule.
           */
          type: 'percent_off';
        }

        export interface SpendModifierRule {
          /**
           * What the spend modifier applies to.
           */
          applies_to: 'cadence';

          /**
           * The ID of the spend modifier.
           */
          id: string;

          /**
           * Details for max billing period spend modifier. Only present if type is max_billing_period_spend.
           */
          max_billing_period_spend?: SpendModifierRule.MaxBillingPeriodSpend;

          /**
           * Type of the spend modifier.
           */
          type: 'max_billing_period_spend';
        }

        export type Type =
          | 'discount'
          | 'invoice_discount_rule'
          | 'spend_modifier_rule';

        export namespace Discount {
          export type Type = 'coupon' | 'promotion_code';
        }

        export namespace EffectiveAt {
          export type Type =
            | 'current_billing_period_end'
            | 'current_billing_period_start'
            | 'next_billing_period_start'
            | 'on_reserve'
            | 'timestamp';
        }

        export namespace InvoiceDiscountRule {
          export interface PercentOff {
            /**
             * The maximum number of times this discount can be applied for this Billing Cadence.
             */
            maximum_applications: PercentOff.MaximumApplications;

            /**
             * Percent that is taken off the amount. For example, a percent_off of 50.0 reduces a 100 USD amount to 50 USD.
             */
            percent_off: Decimal;
          }

          export namespace PercentOff {
            export interface MaximumApplications {
              /**
               * The type of maximum applications configuration.
               */
              type: 'indefinite';
            }
          }
        }

        export namespace SpendModifierRule {
          export interface MaxBillingPeriodSpend {
            /**
             * The maximum amount allowed for the billing period.
             */
            amount: MaxBillingPeriodSpend.Amount;

            /**
             * The configuration for the overage rate for the custom pricing unit.
             */
            custom_pricing_unit_overage_rate: MaxBillingPeriodSpend.CustomPricingUnitOverageRate;
          }

          export namespace MaxBillingPeriodSpend {
            export interface Amount {
              /**
               * The custom pricing unit amount.
               */
              custom_pricing_unit?: Amount.CustomPricingUnit;

              /**
               * The type of the amount.
               */
              type: 'custom_pricing_unit';
            }

            export interface CustomPricingUnitOverageRate {
              /**
               * ID of the custom pricing unit overage rate.
               */
              id: string;
            }

            export namespace Amount {
              export interface CustomPricingUnit {
                /**
                 * The id of the custom pricing unit.
                 */
                id?: string;

                /**
                 * The value of the custom pricing unit.
                 */
                value: string;
              }
            }
          }
        }
      }

      export namespace Deactivate {
        export interface CancellationDetails {
          /**
           * Additional comments about why the user canceled the subscription, if the subscription was canceled explicitly by the user.
           */
          comment?: string;

          /**
           * The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user.
           */
          feedback?: CancellationDetails.Feedback;
        }

        export type CollectAt = 'next_billing_date' | 'on_effective_at';

        export interface EffectiveAt {
          /**
           * The timestamp at which the deactivate action takes effect. Only present if type is timestamp.
           */
          timestamp?: string;

          /**
           * When the deactivate action takes effect.
           */
          type: EffectiveAt.Type;
        }

        export interface PricingPlanSubscriptionDetails {
          /**
           * Configurations for overriding behaviors related to the subscription.
           */
          overrides?: PricingPlanSubscriptionDetails.Overrides;

          /**
           * ID of the Pricing Plan Subscription to deactivate.
           */
          pricing_plan_subscription: string;
        }

        export type Type =
          | 'pricing_plan_subscription_details'
          | 'v1_subscription_details';

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

        export namespace EffectiveAt {
          export type Type =
            | 'current_billing_period_end'
            | 'current_billing_period_start'
            | 'on_reserve'
            | 'timestamp';
        }

        export namespace PricingPlanSubscriptionDetails {
          export interface Overrides {
            /**
             * Configurations for behaviors when the action takes effect during the service period.
             */
            partial_period_behaviors: Array<Overrides.PartialPeriodBehavior>;
          }

          export namespace Overrides {
            export interface PartialPeriodBehavior {
              /**
               * Overrides the behavior for license fee components when the action takes effect during the service period.
               */
              license_fee?: PartialPeriodBehavior.LicenseFee;

              /**
               * The type of behavior to override.
               */
              type: PartialPeriodBehavior.Type;
            }

            export namespace PartialPeriodBehavior {
              export interface LicenseFee {
                /**
                 * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is deactivating. If not specified, defaults to none.
                 */
                credit_proration_behavior: LicenseFee.CreditProrationBehavior;
              }

              export type Type = 'license_fee' | 'recurring_credit_grant';

              export namespace LicenseFee {
                export type CreditProrationBehavior = 'none' | 'prorated';
              }
            }
          }
        }
      }

      export namespace Modify {
        export type CollectAt = 'next_billing_date' | 'on_effective_at';

        export interface EffectiveAt {
          /**
           * The timestamp at which the modify action takes effect. Only present if type is timestamp.
           */
          timestamp?: string;

          /**
           * When the modify action takes effect.
           */
          type: EffectiveAt.Type;
        }

        export interface PricingPlanSubscriptionDetails {
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
           * Configurations for overriding behaviors related to the subscription.
           */
          overrides?: PricingPlanSubscriptionDetails.Overrides;

          /**
           * ID of the Pricing Plan Subscription to modify.
           */
          pricing_plan_subscription: string;
        }

        export type Type =
          | 'pricing_plan_subscription_details'
          | 'v1_subscription_details';

        export namespace EffectiveAt {
          export type Type =
            | 'current_billing_period_start'
            | 'on_reserve'
            | 'timestamp';
        }

        export namespace PricingPlanSubscriptionDetails {
          export interface ComponentConfiguration {
            /**
             * Lookup key for the pricing plan component.
             */
            lookup_key?: string;

            /**
             * ID of the pricing plan component.
             */
            pricing_plan_component?: string;

            /**
             * Quantity of the component to be used.
             */
            quantity?: number;
          }

          export interface Overrides {
            /**
             * Configurations for behaviors when the action takes effect during the service period.
             */
            partial_period_behaviors: Array<Overrides.PartialPeriodBehavior>;
          }

          export namespace Overrides {
            export interface PartialPeriodBehavior {
              /**
               * Overrides the behavior for license fee components when the action takes effect during the service period.
               */
              license_fee?: PartialPeriodBehavior.LicenseFee;

              /**
               * Overrides the behavior for recurring credit grant components when the action takes effect during the service period.
               */
              recurring_credit_grant?: PartialPeriodBehavior.RecurringCreditGrant;

              /**
               * The type of behavior to override.
               */
              type: PartialPeriodBehavior.Type;
            }

            export namespace PartialPeriodBehavior {
              export interface LicenseFee {
                /**
                 * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user modifies the subscription. If not specified, defaults to prorated.
                 */
                credit_proration_behavior: LicenseFee.CreditProrationBehavior;

                /**
                 * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user modifies the subscription. If not specified, defaults to prorated.
                 */
                debit_proration_behavior: LicenseFee.DebitProrationBehavior;
              }

              export interface RecurringCreditGrant {
                /**
                 * Controls credit grant creation behavior during partial periods. If not specified, defaults to full_credits.
                 */
                create_behavior: RecurringCreditGrant.CreateBehavior;
              }

              export type Type = 'license_fee' | 'recurring_credit_grant';

              export namespace LicenseFee {
                export type CreditProrationBehavior = 'none' | 'prorated';

                export type DebitProrationBehavior = 'none' | 'prorated';
              }

              export namespace RecurringCreditGrant {
                export type CreateBehavior = 'full_credits' | 'none';
              }
            }
          }
        }
      }

      export namespace Remove {
        export interface EffectiveAt {
          /**
           * When the remove action takes effect.
           */
          type: EffectiveAt.Type;
        }

        export type Type = 'invoice_discount_rule' | 'spend_modifier_rule';

        export namespace EffectiveAt {
          export type Type = 'current_billing_period_end' | 'on_reserve';
        }
      }

      export namespace Subscribe {
        export type CollectAt = 'next_billing_date' | 'on_effective_at';

        export interface EffectiveAt {
          /**
           * The timestamp at which the subscribe action takes effect. Only present if type is timestamp.
           */
          timestamp?: string;

          /**
           * When the subscribe action takes effect.
           */
          type: EffectiveAt.Type;
        }

        export interface PricingPlanSubscriptionDetails {
          /**
           * Configurations for the components of the Pricing Plan.
           */
          component_configurations: Array<
            PricingPlanSubscriptionDetails.ComponentConfiguration
          >;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Metadata;

          /**
           * Configurations for overriding behaviors related to the subscription.
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

        export type Type =
          | 'pricing_plan_subscription_details'
          | 'v1_subscription_details';

        export interface V1SubscriptionDetails {
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
          metadata?: Metadata;
        }

        export namespace EffectiveAt {
          export type Type =
            | 'current_billing_period_start'
            | 'on_reserve'
            | 'timestamp';
        }

        export namespace PricingPlanSubscriptionDetails {
          export interface ComponentConfiguration {
            /**
             * Lookup key for the pricing plan component.
             */
            lookup_key?: string;

            /**
             * ID of the pricing plan component.
             */
            pricing_plan_component?: string;

            /**
             * Quantity of the component to be used.
             */
            quantity?: number;
          }

          export interface Overrides {
            /**
             * Configurations for behaviors when the action takes effect during the service period.
             */
            partial_period_behaviors: Array<Overrides.PartialPeriodBehavior>;
          }

          export namespace Overrides {
            export interface PartialPeriodBehavior {
              /**
               * Overrides the behavior for license fee components when the action takes effect during the service period.
               */
              license_fee?: PartialPeriodBehavior.LicenseFee;

              /**
               * Overrides the behavior for recurring credit grant components when the action takes effect during the service period.
               */
              recurring_credit_grant?: PartialPeriodBehavior.RecurringCreditGrant;

              /**
               * The type of behavior to override.
               */
              type: PartialPeriodBehavior.Type;
            }

            export namespace PartialPeriodBehavior {
              export interface LicenseFee {
                /**
                 * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is subscribing. If not specified, defaults to prorated.
                 */
                debit_proration_behavior: LicenseFee.DebitProrationBehavior;
              }

              export interface RecurringCreditGrant {
                /**
                 * Controls credit grant creation behavior during partial periods. If not specified, defaults to full_credits.
                 */
                create_behavior: RecurringCreditGrant.CreateBehavior;
              }

              export type Type = 'license_fee' | 'recurring_credit_grant';

              export namespace LicenseFee {
                export type DebitProrationBehavior = 'none' | 'prorated';
              }

              export namespace RecurringCreditGrant {
                export type CreateBehavior = 'full_credits' | 'none';
              }
            }
          }
        }

        export namespace V1SubscriptionDetails {
          export interface Item {
            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Metadata;

            /**
             * The ID of the price object.
             */
            price: string;

            /**
             * Quantity for this item. If not provided, defaults to 1.
             */
            quantity?: number;
          }
        }
      }
    }
  }
}
