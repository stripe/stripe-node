// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface MeterEventStreamCreateParams {
          /**
           * List of meter events to include in the request. Supports up to 100 events per request.
           */
          events: Array<MeterEventStreamCreateParams.Event>;
        }

        namespace MeterEventStreamCreateParams {
          interface Event {
            /**
             * The name of the meter event. Corresponds with the `event_name` field on a meter.
             */
            event_name: string;

            /**
             * A unique identifier for the event. If not provided, one will be generated.
             * We recommend using a globally unique identifier for this. We'll enforce
             * uniqueness within a rolling 24 hour period.
             */
            identifier?: string;

            /**
             * The payload of the event. This must contain the fields corresponding to a meter's
             * `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and
             * `value_settings.event_payload_key` (default is `value`). Read more about
             * the
             * [payload](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
             */
            payload: {
              [key: string]: string;
            };

            /**
             * The time of the event. Must be within the past 35 calendar days or up to
             * 5 minutes in the future. Defaults to current timestamp if not specified.
             */
            timestamp?: string;
          }
        }
      }

      namespace Billing {
        class MeterEventStreamResource {
          /**
           * Creates meter events. Events are processed asynchronously, including validation. Requires a meter event session for authentication. Supports up to 10,000 requests per second in livemode. For even higher rate-limits, contact sales.
           * @throws Stripe.TemporarySessionExpiredError
           */
          create(
            params: MeterEventStreamCreateParams,
            options?: RequestOptions
          ): Promise<void>;
        }
      }
    }
  }
}
