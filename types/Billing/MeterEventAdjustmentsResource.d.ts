// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      interface MeterEventAdjustmentCreateParams {
        /**
         * Specifies which event to cancel.
         */
        cancel: MeterEventAdjustmentCreateParams.Cancel;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Specifies whether to cancel a single event or a range of events for a time period.
         */
        type?: 'cancel';
      }

      namespace MeterEventAdjustmentCreateParams {
        interface Cancel {
          /**
           * Unique identifier for the event.
           */
          identifier: string;
        }
      }

      class MeterEventAdjustmentsResource {
        /**
         * Creates a billing meter event adjustment
         */
        create(
          params: MeterEventAdjustmentCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.MeterEventAdjustment>>;
      }
    }
  }
}
