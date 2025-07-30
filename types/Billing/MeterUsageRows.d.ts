// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
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
        object: 'billing.meter_usage_row';

        /**
         * Timestamp indicating the end of the bucket. Measured in seconds since the Unix epoch.
         */
        bucket_end_time: number;

        /**
         * Timestamp indicating the start of the bucket. Measured in seconds since the Unix epoch.
         */
        bucket_start_time: number;

        /**
         * The aggregated meter usage value for the specified bucket.
         */
        bucket_value: number;

        /**
         * A set of key-value pairs representing the dimensions of the meter usage.
         */
        dimensions: {
          [key: string]: string;
        } | null;

        /**
         * The unique identifier for the meter.
         */
        meter_id: string | null;
      }
    }
  }
}
