// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * Fix me empty_doc_string.
         */
        interface MeterEvent {
          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.meter_event';

          /**
           * The creation time of this meter event.
           */
          created: string;

          /**
           * The name of the meter event. Corresponds with the `event_name` field on a meter.
           */
          event_name: string;

          /**
           * A unique identifier for the event. If not provided, one will be generated. We recommend using a globally unique identifier for this. We'll enforce uniqueness within a rolling 24 hour period.
           */
          identifier: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The payload of the event. This must contain the fields corresponding to a meter's
           * `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and
           * `value_settings.event_payload_key` (default is `value`). Read more about
           * the [payload](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage#payload-key-overrides)..
           */
          payload: {
            [key: string]: string;
          };

          /**
           * The time of the event. Must be within the past 35 calendar days or up to
           * 5 minutes in the future. Defaults to current timestamp if not specified.
           */
          timestamp: string;
        }
      }
    }
  }
}
