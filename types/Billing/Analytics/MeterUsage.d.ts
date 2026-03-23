// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      namespace Analytics {
        /**
         * A billing meter usage event represents an aggregated view of a customer's billing meter events within a specified timeframe.
         */
        interface MeterUsage {
          /**
           * String representing the object's type. Objects of the same type share the same value.
           */
          object: 'billing.analytics.meter_usage';

          /**
           * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
           */
          livemode: boolean;

          /**
           * The timestamp to indicate data freshness, measured in seconds since the Unix epoch.
           */
          refreshed_at: number;

          rows: ApiList<Stripe.Billing.Analytics.MeterUsageRow>;
        }
      }
    }
  }
}
