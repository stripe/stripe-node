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
         * Limits the scope of the alert to a specific [customer](https://stripe.com/docs/api/customers).
         */
        filter: Alert.Filter | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Encapsulates configuration of the spend to monitoring spend on a [Subscription](https://stripe.com/docs/api/subscriptions/object) or [Subscription item](https://stripe.com/docs/api/subscription_items/object).
         */
        spend_threshold_config?: Alert.SpendThresholdConfig | null;

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
        usage_threshold_config: Alert.UsageThresholdConfig | null;
      }

      namespace Alert {
        type AlertType = 'spend_threshold' | 'usage_threshold';

        interface Filter {
          /**
           * Limit the scope of the alert to this customer ID
           */
          customer: string | Stripe.Customer | null;
        }

        interface SpendThresholdConfig {
          /**
           * Defines if the alert will fire on spend aggregated across a subscription, or on individual subscription items.
           */
          aggregation: SpendThresholdConfig.Aggregation;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The value at which this alert will trigger.
           */
          gte: number;

          /**
           * Defines how the alert will behave.
           */
          recurrence: 'one_time';
        }

        namespace SpendThresholdConfig {
          type Aggregation = 'subscription' | 'subscription_item';
        }

        type Status = 'active' | 'archived' | 'inactive';

        interface UsageThresholdConfig {
          /**
           * The value at which this alert will trigger.
           */
          gte: number;

          /**
           * The [Billing Meter](https://stripe.com/api/billing/meter) ID whose usage is monitored.
           */
          meter: string | Stripe.Billing.Meter;

          /**
           * Defines how the alert will behave.
           */
          recurrence: 'one_time';
        }
      }
    }
  }
}
