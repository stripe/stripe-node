// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface MeterEventAdjustmentCreateParams {
          /**
           * Specifies which event to cancel.
           */
          cancel: MeterEventAdjustmentCreateParams.Cancel;

          /**
           * The name of the meter event. Corresponds with the `event_name` field on a meter.
           */
          event_name: string;

          /**
           * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
           */
          type: 'cancel';
        }

        namespace MeterEventAdjustmentCreateParams {
          interface Cancel {
            /**
             * Unique identifier for the event. You can only cancel events within 24 hours of Stripe receiving them.
             */
            identifier: string;
          }
        }
      }

      namespace Billing {
        class MeterEventAdjustmentsResource {
          /**
           * Creates a meter event adjustment to cancel a previously sent meter event.
           */
          create(
            params: MeterEventAdjustmentCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.MeterEventAdjustment>>;
        }
      }
    }
  }
}
