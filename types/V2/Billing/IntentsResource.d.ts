// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface IntentCreateParams {
          /**
           * Actions to be performed by this Billing Intent.
           */
          actions: Array<IntentCreateParams.Action>;

          /**
           * Three-letter ISO currency code, in lowercase. Must be a supported currency.
           */
          currency: string;

          /**
           * ID of an existing Cadence to use.
           */
          cadence?: string;
        }

        namespace IntentCreateParams {
          interface Action {
            /**
             * Type of the Billing Intent action.
             */
            type: Action.Type;

            /**
             * Details for an apply action.
             */
            apply?: Action.Apply;

            /**
             * Details for a deactivate action.
             */
            deactivate?: Action.Deactivate;

            /**
             * Details for a modify action.
             */
            modify?: Action.Modify;

            /**
             * Details for a remove action.
             */
            remove?: Action.Remove;

            /**
             * Details for a subscribe action.
             */
            subscribe?: Action.Subscribe;
          }

          namespace Action {
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
                 * The entity that the discount rule applies to, for example, the cadence.
                 */
                applies_to: 'cadence';

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
                   * The maximum number of times this discount can be applied for this cadence.
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
              billing_details?: Deactivate.BillingDetails;

              /**
               * When the deactivate action will take effect. If not specified, the default behavior is on_reserve.
               */
              effective_at?: Deactivate.EffectiveAt;

              /**
               * Details for deactivating a pricing plan subscription.
               */
              pricing_plan_subscription_details: Deactivate.PricingPlanSubscriptionDetails;

              /**
               * Type of the action details.
               */
              type: Deactivate.Type;
            }

            namespace Deactivate {
              interface BillingDetails {
                /**
                 * This controls the proration adjustment for the partial servicing period.
                 */
                proration_behavior?: BillingDetails.ProrationBehavior;
              }

              namespace BillingDetails {
                type ProrationBehavior =
                  | 'no_adjustment'
                  | 'prorated_adjustment';
              }

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
                  | 'current_billing_period_start'
                  | 'on_reserve'
                  | 'timestamp';
              }

              interface PricingPlanSubscriptionDetails {
                /**
                 * ID of the pricing plan subscription to deactivate.
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
              billing_details?: Modify.BillingDetails;

              /**
               * When the modify action will take effect. If not specified, the default behavior is on_reserve.
               */
              effective_at?: Modify.EffectiveAt;

              /**
               * Details for modifying a pricing plan subscription.
               */
              pricing_plan_subscription_details: Modify.PricingPlanSubscriptionDetails;

              /**
               * Type of the action details.
               */
              type: Modify.Type;
            }

            namespace Modify {
              interface BillingDetails {
                /**
                 * This controls the proration adjustment for the partial servicing period.
                 */
                proration_behavior?: BillingDetails.ProrationBehavior;
              }

              namespace BillingDetails {
                type ProrationBehavior =
                  | 'no_adjustment'
                  | 'prorated_adjustment';
              }

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
                 * New configurations for the components of the pricing plan.
                 */
                component_configurations?: Array<
                  PricingPlanSubscriptionDetails.ComponentConfiguration
                >;

                /**
                 * The ID of the new Pricing Plan, if changing plans.
                 */
                new_pricing_plan?: string;

                /**
                 * The ID of the new Pricing Plan Version to use.
                 */
                new_pricing_plan_version?: string;

                /**
                 * The ID of the Pricing Plan Subscription to modify.
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
               * Configuration for the billing details. If not specified, see the default behavior for individual attributes.
               */
              billing_details?: Subscribe.BillingDetails;

              /**
               * When the subscribe action will take effect. If not specified, the default behavior is on_reserve.
               */
              effective_at?: Subscribe.EffectiveAt;

              /**
               * Type of the action details.
               */
              type: Subscribe.Type;

              /**
               * Details for subscribing to a pricing plan.
               */
              pricing_plan_subscription_details?: Subscribe.PricingPlanSubscriptionDetails;

              /**
               * Details for subscribing to a v1 subscription.
               */
              v1_subscription_details?: Subscribe.V1SubscriptionDetails;
            }

            namespace Subscribe {
              interface BillingDetails {
                /**
                 * This controls the proration adjustment for the partial servicing period.
                 */
                proration_behavior?: BillingDetails.ProrationBehavior;
              }

              namespace BillingDetails {
                type ProrationBehavior =
                  | 'no_adjustment'
                  | 'prorated_adjustment';
              }

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
                 * Configurations for the components of the pricing plan.
                 */
                component_configurations?: Array<
                  PricingPlanSubscriptionDetails.ComponentConfiguration
                >;

                /**
                 * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata?: Stripe.MetadataParam;

                /**
                 * ID of the Pricing Plan to subscribe to.
                 */
                pricing_plan: string;

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
                metadata?: Stripe.MetadataParam;
              }

              namespace V1SubscriptionDetails {
                interface Item {
                  /**
                   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                   */
                  metadata?: Stripe.MetadataParam;

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

      namespace Billing {
        interface IntentRetrieveParams {}
      }

      namespace Billing {
        interface IntentListParams {
          /**
           * Optionally set the maximum number of results per page. Defaults to 10.
           */
          limit?: number;
        }
      }

      namespace Billing {
        interface IntentCancelParams {}
      }

      namespace Billing {
        interface IntentCommitParams {
          /**
           * ID of the PaymentIntent associated with this commit.
           */
          payment_intent?: string;
        }
      }

      namespace Billing {
        interface IntentReleaseReservationParams {}
      }

      namespace Billing {
        interface IntentReserveParams {}
      }

      namespace Billing {
        class IntentsResource {
          actions: Stripe.V2.Billing.Intents.ActionsResource;

          /**
           * Create a Billing Intent.
           */
          create(
            params: IntentCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;

          /**
           * Retrieve a Billing Intent.
           */
          retrieve(
            id: string,
            params?: IntentRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;

          /**
           * List Billing Intents.
           */
          list(
            params?: IntentListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.Intent>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.Intent>;

          /**
           * Cancel a Billing Intent.
           */
          cancel(
            id: string,
            params?: IntentCancelParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;
          cancel(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;

          /**
           * Commit a Billing Intent.
           */
          commit(
            id: string,
            params?: IntentCommitParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;
          commit(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;

          /**
           * Release a Billing Intent.
           */
          releaseReservation(
            id: string,
            params?: IntentReleaseReservationParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;
          releaseReservation(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;

          /**
           * Reserve a Billing Intent.
           */
          reserve(
            id: string,
            params?: IntentReserveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;
          reserve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;
        }
      }
    }
  }
}
