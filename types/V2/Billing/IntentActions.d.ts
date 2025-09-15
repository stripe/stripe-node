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
          apply: IntentAction.Apply | null;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Details for a deactivate action.
           */
          deactivate: IntentAction.Deactivate | null;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Details for a modify action.
           */
          modify: IntentAction.Modify | null;

          /**
           * Details for a remove action.
           */
          remove: IntentAction.Remove | null;

          /**
           * Details for a subscribe action.
           */
          subscribe: IntentAction.Subscribe | null;

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
            invoice_discount_rule: Apply.InvoiceDiscountRule | null;
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
              invoice_discount_rule: string | null;

              /**
               * Type of the discount rule.
               */
              type: 'percent_off';

              /**
               * Configuration for percentage off discount.
               */
              percent_off: InvoiceDiscountRule.PercentOff | null;
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
             * Configuration for the billing details.
             */
            billing_details: Deactivate.BillingDetails;

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
            pricing_plan_subscription_details: Deactivate.PricingPlanSubscriptionDetails | null;
          }

          namespace Deactivate {
            interface BillingDetails {
              /**
               * This controls the proration adjustment for the partial servicing period.
               */
              proration_behavior: BillingDetails.ProrationBehavior | null;
            }

            namespace BillingDetails {
              type ProrationBehavior = 'no_adjustment' | 'prorated_adjustment';
            }

            interface EffectiveAt {
              /**
               * The timestamp at which the deactivate action will take effect. Only present if type is timestamp.
               */
              timestamp: string | null;

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
               * ID of the Pricing Plan Subscription to deactivate.
               */
              pricing_plan_subscription: string;
            }

            type Type =
              | 'pricing_plan_subscription_details'
              | 'v1_subscription_details';
          }

          interface Modify {
            /**
             * Configuration for the billing details.
             */
            billing_details: Modify.BillingDetails;

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
            pricing_plan_subscription_details: Modify.PricingPlanSubscriptionDetails | null;
          }

          namespace Modify {
            interface BillingDetails {
              /**
               * This controls the proration adjustment for the partial servicing period.
               */
              proration_behavior: BillingDetails.ProrationBehavior | null;
            }

            namespace BillingDetails {
              type ProrationBehavior = 'no_adjustment' | 'prorated_adjustment';
            }

            interface EffectiveAt {
              /**
               * The timestamp at which the modify action will take effect. Only present if type is timestamp.
               */
              timestamp: string | null;

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
               * ID of the Pricing Plan Subscription to modify.
               */
              pricing_plan_subscription: string;
            }

            namespace PricingPlanSubscriptionDetails {
              interface ComponentConfiguration {
                /**
                 * Quantity of the component to be used.
                 */
                quantity: number | null;

                /**
                 * Lookup key for the pricing plan component.
                 */
                lookup_key: string | null;

                /**
                 * ID of the pricing plan component.
                 */
                pricing_plan_component: string | null;
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
            invoice_discount_rule: string | null;
          }

          interface Subscribe {
            /**
             * Configuration for the billing details. If not specified, see the default behavior for individual attributes.
             */
            billing_details: Subscribe.BillingDetails;

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
            pricing_plan_subscription_details: Subscribe.PricingPlanSubscriptionDetails | null;

            /**
             * Details for subscribing to a V1 subscription.
             */
            v1_subscription_details: Subscribe.V1SubscriptionDetails | null;
          }

          namespace Subscribe {
            interface BillingDetails {
              /**
               * This controls the proration adjustment for the partial servicing period.
               */
              proration_behavior: BillingDetails.ProrationBehavior | null;
            }

            namespace BillingDetails {
              type ProrationBehavior = 'no_adjustment' | 'prorated_adjustment';
            }

            interface EffectiveAt {
              /**
               * The timestamp at which the subscribe action will take effect. Only present if type is timestamp.
               */
              timestamp: string | null;

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
              metadata: Stripe.Metadata | null;

              /**
               * ID of the Pricing Plan to subscribe to.
               */
              pricing_plan: string;

              /**
               * ID of the created Pricing Plan Subscription. This is only present once the Billing Intent is committed and the Pricing Plan Subscription is created.
               */
              pricing_plan_subscription: string | null;

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
                quantity: number | null;

                /**
                 * Lookup key for the pricing plan component.
                 */
                lookup_key: string | null;

                /**
                 * ID of the pricing plan component.
                 */
                pricing_plan_component: string | null;
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
              description: string | null;

              /**
               * A list of up to 20 subscription items, each with an attached price.
               */
              items: Array<V1SubscriptionDetails.Item>;

              /**
               * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
               */
              metadata: Stripe.Metadata | null;
            }

            namespace V1SubscriptionDetails {
              interface Item {
                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: Stripe.Metadata | null;

                /**
                 * The ID of the price object.
                 */
                price: string;

                /**
                 * Quantity for this item. If not provided, will default to 1.
                 */
                quantity: number | null;
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
