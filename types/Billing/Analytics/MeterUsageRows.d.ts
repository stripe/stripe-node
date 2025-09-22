// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      namespace Analytics {
        /**
         * The MeterUsageRow object.
         */
        interface MeterUsageRow {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value.
           */
          object: 'billing.analytics.meter_usage_row';

          /**
           * A set of key-value pairs representing the dimensions of the meter usage.
           */
          dimensions: {
            [key: string]: string;
          } | null;

          /**
           * Timestamp indicating the end of the bucket. Measured in seconds since the Unix epoch.
           */
          ends_at: number;

          /**
           * The unique identifier for the meter. Null if no meters were provided and usage was aggregated across all meters.
           */
          meter: string | null;

          /**
           * Timestamp indicating the start of the bucket. Measured in seconds since the Unix epoch.
           */
          starts_at: number;

          /**
           * The aggregated meter usage value for the specified bucket.
           */
          value: number;
        }
      }
    }
  }
}
