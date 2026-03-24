// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * The AlertTriggered object.
       */
      interface AlertTriggered {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.alert_triggered';

        /**
         * The aggregation period for which this alert triggered
         */
        aggregation_period?: AlertTriggered.AggregationPeriod | null;

        /**
         * A billing alert is a resource that notifies you when a certain usage threshold on a meter is crossed. For example, you might create a billing alert to notify you when a certain user made 100 API requests.
         */
        alert: Stripe.Billing.Alert;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Currency for the threshold value
         */
        currency?: string | null;

        /**
         * Custom pricing unit for the threshold value
         */
        custom_pricing_unit?: string | null;

        /**
         * ID of customer for which the alert triggered
         */
        customer: string;

        /**
         * External customer ID for the customer for which the alert triggered
         */
        external_customer_id?: string | null;

        /**
         * Populated specifically for spend alerts to notify merchants which group_by entity has the exceeded spend
         */
        group_by?: AlertTriggered.GroupBy | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Timestamp at which the threshold was crossed
         */
        triggered_at?: number | null;

        /**
         * The value triggering the alert
         */
        value: Decimal;
      }

      namespace AlertTriggered {
        interface AggregationPeriod {
          /**
           * End time of the aggregation period
           */
          ends_at: number;

          /**
           * Start time of the aggregation period
           */
          starts_at: number;
        }

        interface GroupBy {
          /**
           * The billing cadence ID, populated when type is `billing_cadence`
           */
          billing_cadence: string | null;

          /**
           * The pricing plan subscription ID, populated when type is `pricing_plan_subscription`
           */
          pricing_plan_subscription: string | null;

          /**
           * The type of grouping used for this alert notification
           */
          type: GroupBy.Type;
        }

        namespace GroupBy {
          type Type = 'billing_cadence' | 'pricing_plan_subscription';
        }
      }
    }
  }
}
