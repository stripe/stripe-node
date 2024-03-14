// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A billing meter event adjustment represents the status of a meter event adjustment.
       */
      interface MeterEventAdjustment {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.meter_event_adjustment';

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The meter event adjustment's status.
         */
        status: MeterEventAdjustment.Status;
      }

      namespace MeterEventAdjustment {
        type Status = 'complete' | 'pending';
      }
    }
  }
}
