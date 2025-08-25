// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface IntentCreateParams {
          /**
           * Actions to be performed by this BillingIntent.
           */
          actions: Array<IntentCreateParams.Action>;

          /**
           * Three-letter ISO currency code, in lowercase.
           */
          currency: string;

          /**
           * When the BillingIntent will take effect.
           */
          effective_at: IntentCreateParams.EffectiveAt;

          /**
           * ID of an existing Cadence to use.
           */
          cadence?: string;
        }

        namespace IntentCreateParams {
          interface Action {
            /**
             * Type of the BillingIntentAction.
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
               * Details for deactivating a pricing plan subscription.
               */
              pricing_plan_subscription_details: Deactivate.PricingPlanSubscriptionDetails;

              /**
               * Behavior for handling prorations.
               */
              proration_behavior: Deactivate.ProrationBehavior;

              /**
               * Type of the action details.
               */
              type: 'pricing_plan_subscription_details';
            }

            namespace Deactivate {
              interface PricingPlanSubscriptionDetails {
                /**
                 * ID of the pricing plan subscription to deactivate.
                 */
                pricing_plan_subscription: string;
              }

              type ProrationBehavior = 'always_invoice' | 'none';
            }

            interface Modify {
              /**
               * Details for modifying a pricing plan subscription.
               */
              pricing_plan_subscription_details: Modify.PricingPlanSubscriptionDetails;

              /**
               * Behavior for handling prorations.
               */
              proration_behavior: Modify.ProrationBehavior;

              /**
               * Type of the action details.
               */
              type: 'pricing_plan_subscription_details';
            }

            namespace Modify {
              interface PricingPlanSubscriptionDetails {
                /**
                 * New configurations for the components of the pricing plan.
                 */
                component_configurations?: Array<
                  PricingPlanSubscriptionDetails.ComponentConfiguration
                >;

                /**
                 * ID of the new pricing plan, if changing plans.
                 */
                new_pricing_plan?: string;

                /**
                 * Version of the pricing plan to use.
                 */
                new_pricing_plan_version?: string;

                /**
                 * ID of the pricing plan subscription to modify.
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

              type ProrationBehavior = 'always_invoice' | 'none';
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
               * Behavior for handling prorations.
               */
              proration_behavior: Subscribe.ProrationBehavior;

              /**
               * Type of the action details.
               */
              type: 'pricing_plan_subscription_details';

              /**
               * Details for subscribing to a pricing plan.
               */
              pricing_plan_subscription_details?: Subscribe.PricingPlanSubscriptionDetails;
            }

            namespace Subscribe {
              interface PricingPlanSubscriptionDetails {
                /**
                 * Configurations for the components of the pricing plan.
                 */
                component_configurations?: Array<
                  PricingPlanSubscriptionDetails.ComponentConfiguration
                >;

                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata?: Stripe.MetadataParam;

                /**
                 * ID of the pricing plan to subscribe to.
                 */
                pricing_plan: string;

                /**
                 * Version of the pricing plan to use.
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

              type ProrationBehavior = 'always_invoice' | 'none';
            }

            type Type =
              | 'apply'
              | 'deactivate'
              | 'modify'
              | 'remove'
              | 'subscribe';
          }

          type EffectiveAt =
            | 'current_billing_period_start'
            | 'on_commit'
            | 'on_reserve';
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
          /**
           * Create a BillingIntent.
           */
          create(
            params: IntentCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.Intent>>;

          /**
           * Retrieve a BillingIntent.
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
           * List BillingIntents.
           */
          list(
            params?: IntentListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.Intent>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.Intent>;

          /**
           * Cancel a BillingIntent.
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
           * Commit a BillingIntent.
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
           * Release a BillingIntent.
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
           * Reserve a BillingIntent.
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
