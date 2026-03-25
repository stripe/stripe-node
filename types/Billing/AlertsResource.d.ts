// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      interface AlertCreateParams {
        /**
         * The type of alert to create.
         */
        alert_type: AlertCreateParams.AlertType;

        /**
         * The title of the alert.
         */
        title: string;

        /**
         * The configuration of the credit balance threshold.
         */
        credit_balance_threshold?: AlertCreateParams.CreditBalanceThreshold;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The configuration of the spend threshold. An event fires when the amount consumed exceeds the threshold, after all credits and discounts are applied but before tax is applied.
         */
        spend_threshold?: AlertCreateParams.SpendThreshold;

        /**
         * The configuration of the usage threshold.
         */
        usage_threshold?: AlertCreateParams.UsageThreshold;
      }

      namespace AlertCreateParams {
        type AlertType =
          | 'credit_balance_threshold'
          | 'spend_threshold'
          | 'usage_threshold';

        interface CreditBalanceThreshold {
          /**
           * The filters allows limiting the scope of this credit balance alert. You must specify a customer filter at this time.
           */
          filters?: Array<CreditBalanceThreshold.Filter>;

          /**
           * Defines at which value the alert will fire.
           */
          lte: CreditBalanceThreshold.Lte;
        }

        namespace CreditBalanceThreshold {
          interface Filter {
            /**
             * The credit grants for which to configure the credit balance alert.
             */
            credit_grants?: Filter.CreditGrants;

            /**
             * Limit the scope to this credit balance alert only to this customer.
             */
            customer?: string;

            /**
             * What type of filter is being applied to this credit balance alert.
             */
            type: Filter.Type;
          }

          namespace Filter {
            interface CreditGrants {
              /**
               * The applicability configuration for this credit grants filter.
               */
              applicability_config: CreditGrants.ApplicabilityConfig;
            }

            namespace CreditGrants {
              interface ApplicabilityConfig {
                /**
                 * Specify the scope of this applicability config.
                 */
                scope: ApplicabilityConfig.Scope;
              }

              namespace ApplicabilityConfig {
                interface Scope {
                  /**
                   * A list of billable items that the credit grant can apply to. We currently only support metered billable items. Cannot be used in combination with `price_type` or `prices`.
                   */
                  billable_items?: Array<Scope.BillableItem>;

                  /**
                   * The price type that credit grants can apply to. We currently only support the `metered` price type. Cannot be used in combination with `prices`.
                   */
                  price_type?: 'metered';

                  /**
                   * A list of prices that the credit grant can apply to. We currently only support the `metered` prices. Cannot be used in combination with `price_type`.
                   */
                  prices?: Array<Scope.Price>;
                }

                namespace Scope {
                  interface BillableItem {
                    /**
                     * The billable item ID this credit grant should apply to.
                     */
                    id: string;
                  }

                  interface Price {
                    /**
                     * The price ID this credit grant should apply to.
                     */
                    id: string;
                  }
                }
              }
            }

            type Type = 'customer' | 'tenant';
          }

          interface Lte {
            /**
             * Specify the type of this balance. We currently only support `monetary` billing credits.
             */
            balance_type: Lte.BalanceType;

            /**
             * The custom pricing unit amount.
             */
            custom_pricing_unit?: Lte.CustomPricingUnit;

            /**
             * The monetary amount.
             */
            monetary?: Lte.Monetary;
          }

          namespace Lte {
            type BalanceType = 'custom_pricing_unit' | 'monetary';

            interface CustomPricingUnit {
              /**
               * The ID of the custom pricing unit.
               */
              id: string;

              /**
               * A positive decimal string representing the amount of the custom pricing unit threshold.
               */
              value: Decimal;
            }

            interface Monetary {
              /**
               * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `value` parameter.
               */
              currency: string;

              /**
               * An integer representing the amount of the threshold.
               */
              value: number;
            }
          }
        }

        interface SpendThreshold {
          /**
           * Defines the period over which spend is aggregated.
           */
          aggregation_period: 'billing';

          /**
           * Filters to scope the spend calculation.
           */
          filters?: SpendThreshold.Filters;

          /**
           * Defines the granularity of spend aggregation. Defaults to `pricing_plan_subscription`.
           */
          group_by?: 'pricing_plan_subscription';

          /**
           * Defines at which value the alert will fire.
           */
          gte: SpendThreshold.Gte;
        }

        namespace SpendThreshold {
          interface Filters {
            /**
             * Filter by billable item IDs. Maximum of 20 billable items.
             */
            billable_items?: Array<string>;

            /**
             * Filter by billing cadence ID.
             */
            billing_cadence?: string;

            /**
             * Filter by pricing plan ID.
             */
            pricing_plan?: string;

            /**
             * Filter by pricing plan subscription ID.
             */
            pricing_plan_subscription?: string;
          }

          interface Gte {
            /**
             * The monetary amount. Required when type is `amount`. The threshold is the total_before_tax, the amount consumed after all credits and discounts are applied, but before tax is applied.
             */
            amount?: Gte.Amount;

            /**
             * The custom pricing unit amount. Required when type is `custom_pricing_unit`.
             */
            custom_pricing_unit?: Gte.CustomPricingUnit;

            /**
             * The type of the threshold amount.
             */
            type: Gte.Type;
          }

          namespace Gte {
            interface Amount {
              /**
               * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `value` parameter.
               */
              currency: string;

              /**
               * An integer representing the amount of the threshold.
               */
              value: number;
            }

            interface CustomPricingUnit {
              /**
               * The ID of the custom pricing unit.
               */
              id: string;

              /**
               * A positive decimal string representing the amount of the custom pricing unit threshold.
               */
              value: Decimal;
            }

            type Type = 'amount' | 'custom_pricing_unit';
          }
        }

        interface UsageThreshold {
          /**
           * The filters allows limiting the scope of this usage alert. You can only specify up to one filter at this time.
           */
          filters?: Array<UsageThreshold.Filter>;

          /**
           * Defines the threshold value that triggers the alert.
           */
          gte: number;

          /**
           * The [Billing Meter](https://docs.stripe.com/api/billing/meter) ID whose usage is monitored.
           */
          meter: string;

          /**
           * Defines how the alert will behave.
           */
          recurrence: 'one_time';
        }

        namespace UsageThreshold {
          interface Filter {
            /**
             * Limit the scope to this usage alert only to this customer.
             */
            customer?: string;

            /**
             * What type of filter is being applied to this usage alert.
             */
            type: 'customer';
          }
        }
      }

      interface AlertRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AlertListParams extends PaginationParams {
        /**
         * Filter results to only include this type of alert.
         */
        alert_type?: AlertListParams.AlertType;

        /**
         * Filter results to only include alerts for the given customer.
         */
        customer?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Filter results to only include alerts with the given meter.
         */
        meter?: string;
      }

      namespace AlertListParams {
        type AlertType =
          | 'credit_balance_threshold'
          | 'spend_threshold'
          | 'usage_threshold';
      }

      interface AlertActivateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AlertArchiveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AlertDeactivateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class AlertsResource {
        /**
         * Creates a billing alert
         */
        create(
          params: AlertCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Retrieves a billing alert given an ID
         */
        retrieve(
          id: string,
          params?: AlertRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Lists billing active and inactive alerts
         */
        list(
          params?: AlertListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Billing.Alert>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Billing.Alert>;

        /**
         * Reactivates this alert, allowing it to trigger again.
         */
        activate(
          id: string,
          params?: AlertActivateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        activate(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Archives this alert, removing it from the list view and APIs. This is non-reversible.
         */
        archive(
          id: string,
          params?: AlertArchiveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        archive(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Deactivates this alert, preventing it from triggering.
         */
        deactivate(
          id: string,
          params?: AlertDeactivateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        deactivate(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
      }
    }
  }
}
