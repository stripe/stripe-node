// File generated from our OpenAPI spec

namespace Billing {
  export interface MeterEventAdjustmentCreateParams {
    /**
     * The name of the meter event. Corresponds with the `event_name` field on a meter.
     */
    event_name: string;

    /**
     * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
     */
    type: 'cancel';

    /**
     * Specifies which event to cancel.
     */
    cancel?: MeterEventAdjustmentCreateParams.Cancel;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace MeterEventAdjustmentCreateParams {
    export interface Cancel {
      /**
       * Unique identifier for the event. You can only cancel events within 24 hours of Stripe receiving them.
       */
      identifier?: string;
    }
  }
}
