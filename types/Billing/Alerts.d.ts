// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A billing alert is a resource that notifies you when a certain usage threshold on a meter is crossed. For example, you might create a billing alert to notify you when a certain user made 100 API requests.
       */
      interface Alert {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.alert';

        /**
         * Defines the type of the alert.
         */
        alert_type: Alert.AlertType;

        /**
         * Encapsulates configuration of the alert to monitor billing credit balance.
         */
        credit_balance_threshold?: Alert.CreditBalanceThreshold | null;

        /**
         * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
         */
        livemode: boolean;

        /**
         * Encapsulates the alert's configuration to monitor spend on pricing plan subscriptions.
         */
        spend_threshold?: Alert.SpendThreshold | null;

        /**
         * Status of the alert. This can be active, inactive or archived.
         */
        status: Alert.Status | null;

        /**
         * Title of the alert.
         */
        title: string;

        /**
         * Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter).
         */
        usage_threshold: Alert.UsageThreshold | null;
      }

      namespace Alert {
        type AlertType =
          | 'credit_balance_threshold'
          | 'spend_threshold'
          | 'usage_threshold';

        interface CreditBalanceThreshold {
          /**
           * The filters allow limiting the scope of this credit balance alert. You must specify only a customer filter at this time.
           */
          filters: Array<CreditBalanceThreshold.Filter> | null;

          lte: CreditBalanceThreshold.Lte;
        }

        namespace CreditBalanceThreshold {
          interface Filter {
            /**
             * Limit the scope of the alert to this customer ID
             */
            customer: string | Stripe.Customer | null;

            type: Filter.Type;
          }

          namespace Filter {
            type Type = 'customer' | 'tenant';
          }

          interface Lte {
            /**
             * The type of this balance. We currently only support `monetary` amounts.
             */
            balance_type: Lte.BalanceType;

            /**
             * The custom pricing unit amount.
             */
            custom_pricing_unit?: Lte.CustomPricingUnit | null;

            /**
             * The monetary amount.
             */
            monetary: Lte.Monetary | null;
          }

          namespace Lte {
            type BalanceType = 'custom_pricing_unit' | 'monetary';

            interface CustomPricingUnit {
              /**
               * The custom pricing unit object.
               */
              custom_pricing_unit_details: CustomPricingUnit.CustomPricingUnitDetails | null;

              /**
               * Unique identifier for the object.
               */
              id: string;

              /**
               * A positive decimal string representing the amount.
               */
              value: Decimal;
            }

            namespace CustomPricingUnit {
              interface CustomPricingUnitDetails {
                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * The name of the custom pricing unit.
                 */
                display_name: string;

                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * A lookup key for the custom pricing unit.
                 */
                lookup_key: string | null;

                /**
                 * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: Stripe.Metadata;

                /**
                 * The status of the custom pricing unit.
                 */
                status: string;
              }
            }

            interface Monetary {
              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency: string;

              /**
               * A positive integer representing the amount.
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
          filters: SpendThreshold.Filters | null;

          /**
           * Defines the granularity of spend aggregation.
           */
          group_by: 'pricing_plan_subscription' | null;

          /**
           * The threshold value configuration for a spend threshold alert.
           */
          gte: SpendThreshold.Gte;
        }

        namespace SpendThreshold {
          interface Filters {
            /**
             * Filter by billing cadence ID.
             */
            billing_cadence: string | null;

            /**
             * Filter by pricing plan ID.
             */
            pricing_plan: string | null;

            /**
             * Filter by pricing plan subscription ID.
             */
            pricing_plan_subscription: string | null;
          }

          interface Gte {
            /**
             * The monetary amount. Present when type is `amount`.
             */
            amount: Gte.Amount | null;

            /**
             * The custom pricing unit amount. Present when type is `custom_pricing_unit`.
             */
            custom_pricing_unit: Gte.CustomPricingUnit | null;

            /**
             * The type of the threshold amount.
             */
            type: Gte.Type;
          }

          namespace Gte {
            interface Amount {
              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency: string;

              /**
               * A positive integer representing the amount.
               */
              value: number;
            }

            interface CustomPricingUnit {
              /**
               * The custom pricing unit object.
               */
              custom_pricing_unit_details: CustomPricingUnit.CustomPricingUnitDetails | null;

              /**
               * Unique identifier for the object.
               */
              id: string;

              /**
               * A positive decimal string representing the amount.
               */
              value: Decimal;
            }

            namespace CustomPricingUnit {
              interface CustomPricingUnitDetails {
                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * The name of the custom pricing unit.
                 */
                display_name: string;

                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * A lookup key for the custom pricing unit.
                 */
                lookup_key: string | null;

                /**
                 * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: Stripe.Metadata;

                /**
                 * The status of the custom pricing unit.
                 */
                status: string;
              }
            }

            type Type = 'amount' | 'custom_pricing_unit';
          }
        }

        type Status = 'active' | 'archived' | 'inactive';

        interface UsageThreshold {
          /**
           * The filters allow limiting the scope of this usage alert. You can only specify up to one filter at this time.
           */
          filters: Array<UsageThreshold.Filter> | null;

          /**
           * The value at which this alert will trigger.
           */
          gte: number;

          /**
           * The [Billing Meter](https://docs.stripe.com/api/billing/meter) ID whose usage is monitored.
           */
          meter: string | Stripe.Billing.Meter;

          /**
           * Defines how the alert will behave.
           */
          recurrence: 'one_time';
        }

        namespace UsageThreshold {
          interface Filter {
            /**
             * Limit the scope of the alert to this customer ID
             */
            customer: string | Stripe.Customer | null;

            type: 'customer';
          }
        }
      }
    }
  }
}
