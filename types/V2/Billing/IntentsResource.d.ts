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

          /**
           * Data for creating a new Cadence.
           */
          cadence_data?: IntentCreateParams.CadenceData;
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
               * When the apply action will take effect. Defaults to on_reserve if not specified.
               */
              effective_at?: Apply.EffectiveAt;

              /**
               * Type of the apply action details.
               */
              type: Apply.Type;

              /**
               * Details for applying a discount rule to future invoices.
               */
              invoice_discount_rule?: Apply.InvoiceDiscountRule;

              /**
               * Details for applying a spend modifier rule. Only present if type is spend_modifier_rule.
               */
              spend_modifier_rule?: Apply.SpendModifierRule;
            }

            namespace Apply {
              interface EffectiveAt {
                /**
                 * When the apply action will take effect.
                 */
                type: EffectiveAt.Type;
              }

              namespace EffectiveAt {
                type Type =
                  | 'current_billing_period_end'
                  | 'next_billing_period_start'
                  | 'on_reserve';
              }

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

              interface SpendModifierRule {
                /**
                 * What the spend modifier applies to.
                 */
                applies_to: 'cadence';

                /**
                 * Type of the spend modifier.
                 */
                type: 'max_billing_period_spend';

                /**
                 * Details for max billing period spend modifier. Only present if type is max_billing_period_spend.
                 */
                max_billing_period_spend?: SpendModifierRule.MaxBillingPeriodSpend;
              }

              namespace SpendModifierRule {
                interface MaxBillingPeriodSpend {
                  /**
                   * The maximum amount allowed for the billing period.
                   */
                  amount: MaxBillingPeriodSpend.Amount;

                  /**
                   * The configration for the overage rate for the custom pricing unit.
                   */
                  custom_pricing_unit_overage_rate: MaxBillingPeriodSpend.CustomPricingUnitOverageRate;
                }

                namespace MaxBillingPeriodSpend {
                  interface Amount {
                    /**
                     * The type of the amount.
                     */
                    type: 'custom_pricing_unit';

                    /**
                     * The custom pricing unit amount.
                     */
                    custom_pricing_unit?: Amount.CustomPricingUnit;
                  }

                  namespace Amount {
                    interface CustomPricingUnit {
                      /**
                       * The value of the custom pricing unit.
                       */
                      value: string;
                    }
                  }

                  interface CustomPricingUnitOverageRate {
                    /**
                     * ID of the custom pricing unit overage rate.
                     */
                    id: string;
                  }
                }
              }

              type Type = 'invoice_discount_rule' | 'spend_modifier_rule';
            }

            interface Deactivate {
              /**
               * Details about why the cancellation is being requested.
               */
              cancellation_details?: Deactivate.CancellationDetails;

              /**
               * When the invoice will be collected. If not specified, the default behavior is on_effective_at.
               */
              collect_at?: Deactivate.CollectAt;

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
              interface CancellationDetails {
                /**
                 * Additional comments about why the user canceled the subscription, if the subscription was canceled explicitly by the user.
                 */
                comment?: string;

                /**
                 * The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user.
                 */
                feedback?: CancellationDetails.Feedback;
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
                 * Configurations for overriding behaviors related to the subscription.
                 */
                overrides?: PricingPlanSubscriptionDetails.Overrides;

                /**
                 * ID of the pricing plan subscription to deactivate.
                 */
                pricing_plan_subscription: string;
              }

              namespace PricingPlanSubscriptionDetails {
                interface Overrides {
                  /**
                   * Configurations for behaviors when the action takes effect during the service period.
                   */
                  partial_period_behaviors: Array<
                    Overrides.PartialPeriodBehavior
                  >;
                }

                namespace Overrides {
                  interface PartialPeriodBehavior {
                    /**
                     * The type of behavior to override.
                     */
                    type: 'license_fee';

                    /**
                     * Overrides the behavior for license fee components when the action takes effect during the service period.
                     */
                    license_fee?: PartialPeriodBehavior.LicenseFee;
                  }

                  namespace PartialPeriodBehavior {
                    interface LicenseFee {
                      /**
                       * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is deactivating. If not specified, defaults to none.
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
               * When the invoice will be collected. If not specified, the default behavior is next_billing_date.
               */
              collect_at?: Modify.CollectAt;

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
                 * Configurations for overriding behaviors related to the subscription.
                 */
                overrides?: PricingPlanSubscriptionDetails.Overrides;

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

                interface Overrides {
                  /**
                   * Configurations for behaviors when the action takes effect during the service period.
                   */
                  partial_period_behaviors: Array<
                    Overrides.PartialPeriodBehavior
                  >;
                }

                namespace Overrides {
                  interface PartialPeriodBehavior {
                    /**
                     * The type of behavior to override.
                     */
                    type: 'license_fee';

                    /**
                     * Overrides the behavior for license fee components when the action takes effect during the service period.
                     */
                    license_fee?: PartialPeriodBehavior.LicenseFee;
                  }

                  namespace PartialPeriodBehavior {
                    interface LicenseFee {
                      /**
                       * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user modifies the subscription. If not specified, defaults to prorated.
                       */
                      credit_proration_behavior: LicenseFee.CreditProrationBehavior;

                      /**
                       * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user modifies the subscription. If not specified, defaults to prorated.
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
               * When the remove action will take effect. Defaults to on_reserve if not specified.
               */
              effective_at?: Remove.EffectiveAt;

              /**
               * Type of the remove action.
               */
              type: Remove.Type;

              /**
               * The ID of the discount rule to remove for future invoices.
               */
              invoice_discount_rule?: string;

              /**
               * The ID of the spend modifier rule to remove.
               */
              spend_modifier_rule?: string;
            }

            namespace Remove {
              interface EffectiveAt {
                /**
                 * When the remove action will take effect.
                 */
                type: EffectiveAt.Type;
              }

              namespace EffectiveAt {
                type Type = 'current_billing_period_end' | 'on_reserve';
              }

              type Type = 'invoice_discount_rule' | 'spend_modifier_rule';
            }

            interface Subscribe {
              /**
               * When the invoice will be collected. If not specified, defaults to on_effective_at.
               */
              collect_at?: Subscribe.CollectAt;

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
                 * Configurations for overriding behaviors related to the subscription.
                 */
                overrides?: PricingPlanSubscriptionDetails.Overrides;

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

                interface Overrides {
                  /**
                   * Configurations for behaviors when the action takes effect during the service period.
                   */
                  partial_period_behaviors: Array<
                    Overrides.PartialPeriodBehavior
                  >;
                }

                namespace Overrides {
                  interface PartialPeriodBehavior {
                    /**
                     * The type of behavior to override.
                     */
                    type: 'license_fee';

                    /**
                     * Overrides the behavior for license fee components when the action takes effect during the service period.
                     */
                    license_fee?: PartialPeriodBehavior.LicenseFee;
                  }

                  namespace PartialPeriodBehavior {
                    interface LicenseFee {
                      /**
                       * The proration behavior for the partial servicing period. Defines how we prorate the license fee when the user is subscribing. If not specified, defaults to prorated.
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

          interface CadenceData {
            /**
             * The billing cycle configuration for this Cadence.
             */
            billing_cycle: CadenceData.BillingCycle;

            /**
             * Information about the payer for this Cadence.
             */
            payer: CadenceData.Payer;

            /**
             * Settings for creating the Cadence.
             */
            settings?: CadenceData.Settings;
          }

          namespace CadenceData {
            interface BillingCycle {
              /**
               * The number of intervals (specified in the interval attribute) between
               * cadence billings. For example, type=month and interval_count=3 bills every
               * 3 months. If this is not provided, it will default to 1.
               */
              interval_count?: number;

              /**
               * The frequency at which a cadence bills.
               */
              type: BillingCycle.Type;

              /**
               * Specific configuration for determining billing dates when type=day.
               */
              day?: BillingCycle.Day;

              /**
               * Specific configuration for determining billing dates when type=month.
               */
              month?: BillingCycle.Month;

              /**
               * Specific configuration for determining billing dates when type=week.
               */
              week?: BillingCycle.Week;

              /**
               * Specific configuration for determining billing dates when type=year.
               */
              year?: BillingCycle.Year;
            }

            namespace BillingCycle {
              interface Day {
                /**
                 * The time at which the billing cycle ends.
                 * This field is optional, and if not provided, it will default to
                 * the time at which the cadence was created in UTC timezone.
                 */
                time?: Day.Time;
              }

              namespace Day {
                interface Time {
                  /**
                   * The hour at which the billing cycle ends.
                   * This must be an integer between 0 and 23, inclusive.
                   * 0 represents midnight, and 23 represents 11 PM.
                   */
                  hour: number;

                  /**
                   * The minute at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  minute: number;

                  /**
                   * The second at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  second: number;
                }
              }

              interface Month {
                /**
                 * The day to anchor the billing on for a type="month" billing cycle from
                 * 1-31. If this number is greater than the number of days in the month being
                 * billed, this will anchor to the last day of the month. If not provided,
                 * this will default to the day the cadence was created.
                 */
                day_of_month: number;

                /**
                 * The month to anchor the billing on for a type="month" billing cycle from
                 * 1-12. If not provided, this will default to the month the cadence was created.
                 * This setting can only be used for monthly billing cycles with `interval_count` of 2, 3, 4 or 6.
                 * All occurrences will be calculated from month provided.
                 */
                month_of_year?: number;

                /**
                 * The time at which the billing cycle ends.
                 * This field is optional, and if not provided, it will default to
                 * the time at which the cadence was created in UTC timezone.
                 */
                time?: Month.Time;
              }

              namespace Month {
                interface Time {
                  /**
                   * The hour at which the billing cycle ends.
                   * This must be an integer between 0 and 23, inclusive.
                   * 0 represents midnight, and 23 represents 11 PM.
                   */
                  hour: number;

                  /**
                   * The minute at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  minute: number;

                  /**
                   * The second at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  second: number;
                }
              }

              type Type = 'day' | 'month' | 'week' | 'year';

              interface Week {
                /**
                 * The day of the week to bill the type=week billing cycle on.
                 * Numbered from 1-7 for Monday to Sunday respectively, based on the ISO-8601
                 * week day numbering. If not provided, this will default to the day the
                 * cadence was created.
                 */
                day_of_week: number;

                /**
                 * The time at which the billing cycle ends.
                 * This field is optional, and if not provided, it will default to
                 * the time at which the cadence was created in UTC timezone.
                 */
                time?: Week.Time;
              }

              namespace Week {
                interface Time {
                  /**
                   * The hour at which the billing cycle ends.
                   * This must be an integer between 0 and 23, inclusive.
                   * 0 represents midnight, and 23 represents 11 PM.
                   */
                  hour: number;

                  /**
                   * The minute at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  minute: number;

                  /**
                   * The second at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  second: number;
                }
              }

              interface Year {
                /**
                 * The day to anchor the billing on for a type="month" billing cycle from
                 * 1-31. If this number is greater than the number of days in the month being
                 * billed, this will anchor to the last day of the month. If not provided,
                 * this will default to the day the cadence was created.
                 */
                day_of_month?: number;

                /**
                 * The month to bill on from 1-12. If not provided, this will default to the
                 * month the cadence was created.
                 */
                month_of_year?: number;

                /**
                 * The time at which the billing cycle ends.
                 * This field is optional, and if not provided, it will default to
                 * the time at which the cadence was created in UTC timezone.
                 */
                time?: Year.Time;
              }

              namespace Year {
                interface Time {
                  /**
                   * The hour at which the billing cycle ends.
                   * This must be an integer between 0 and 23, inclusive.
                   * 0 represents midnight, and 23 represents 11 PM.
                   */
                  hour: number;

                  /**
                   * The minute at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  minute: number;

                  /**
                   * The second at which the billing cycle ends.
                   * Must be an integer between 0 and 59, inclusive.
                   */
                  second: number;
                }
              }
            }

            interface Payer {
              /**
               * The ID of the Billing Profile object which determines how a bill will be paid.
               */
              billing_profile?: string;

              /**
               * Data for creating a new profile.
               */
              billing_profile_data?: Payer.BillingProfileData;
            }

            namespace Payer {
              interface BillingProfileData {
                /**
                 * The customer to associate with the profile.
                 */
                customer: string;

                /**
                 * The default payment method to use when billing this profile.
                 * If left blank, the `PaymentMethod` from the `PaymentIntent` provided
                 * on commit will be used to create the profile.
                 */
                default_payment_method?: string;
              }
            }

            interface Settings {
              /**
               * Settings that configure bill generation, which includes calculating totals, tax, and presenting invoices.
               * If no setting is provided here, the settings from the customer referenced on the payer will be used.
               * If no customer settings are present, the merchant default settings will be used.
               */
              bill?: Settings.Bill;

              /**
               * Settings that configure and manage the behavior of collecting payments.
               * If no setting is provided here, the settings from the customer referenced from the payer will be used if they exist.
               * If no customer settings are present, the merchant default settings will be used.
               */
              collection?: Settings.Collection;
            }

            namespace Settings {
              interface Bill {
                /**
                 * The ID of the referenced settings object.
                 */
                id: string;

                /**
                 * An optional field to specify the version of the Settings to use.
                 * If not provided, this will always default to the live version any time the settings are used.
                 */
                version?: string;
              }

              interface Collection {
                /**
                 * The ID of the referenced settings object.
                 */
                id: string;

                /**
                 * An optional field to specify the version of the Settings to use.
                 * If not provided, this will always default to the live version any time the settings are used.
                 */
                version?: string;
              }
            }
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
