// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The MeterEventAdjustment object.
         */
        interface MeterEventAdjustment {
          /**
           * The unique id of this meter event adjustment.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'billing.meter_event_adjustment';

          /**
           * Specifies which event to cancel.
           */
          cancel: MeterEventAdjustment.Cancel;

          /**
           * The time the adjustment was created.
           */
          created: string;

          /**
           * The name of the meter event. Corresponds with the `event_name` field on a meter.
           */
          event_name: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Open Enum. The meter event adjustment's status.
           */
          status: MeterEventAdjustment.Status;

          /**
           * Open Enum. Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
           */
          type: 'cancel';
        }

        namespace MeterEventAdjustment {
          interface Cancel {
            /**
             * Unique identifier for the event. You can only cancel events within 24 hours of Stripe receiving them.
             */
            identifier: string;
          }

          type Status = 'complete' | 'pending';
        }
      }
    }
  }
}
