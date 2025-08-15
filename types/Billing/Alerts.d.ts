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
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Status of the alert. This can be active, inactive or archived.
         */
        status: Alert.Status | null;

        /**
         * Title of the alert.
         */
        title: string;

        /**
         * Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://stripe.com/docs/api/billing/meter).
         */
        usage_threshold: Alert.UsageThreshold | null;
      }

      namespace Alert {
        type AlertType = 'credit_balance_threshold' | 'usage_threshold';

        interface CreditBalanceThreshold {
          /**
           * The filters allow limiting the scope of this credit balance alert. You must specify only a customer filter at this time.
           */
          filters: Array<CreditBalanceThreshold.Filter> | null;

          lte: CreditBalanceThreshold.Lte;

          /**
           * Defines how the alert will behave.
           */
          recurrence: 'one_time';
        }

        namespace CreditBalanceThreshold {
          interface Filter {
            /**
             * Limit the scope of the alert to this customer ID
             */
            customer: string | Stripe.Customer | null;

            type: 'customer';
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
               * Unique identifier for the object.
               */
              id: string;

              /**
               * A positive decimal string representing the amount.
               */
              value: string;
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
