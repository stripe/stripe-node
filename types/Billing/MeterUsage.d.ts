// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A billing meter usage event represents an aggregated view of a customer's billing meter events within a specified timeframe.
       */
      interface MeterUsage {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.meter_usage';

        /**
         * The aggregated meter usage data for the specified customer and time range.
         */
        data: Array<Stripe.Billing.MeterUsageRow>;

        /**
         * Timestamp indicating how fresh the data is. Measured in seconds since the Unix epoch.
         */
        data_refreshed_at: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;
      }
    }
  }
}
