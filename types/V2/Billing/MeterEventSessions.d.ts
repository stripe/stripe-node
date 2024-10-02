// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The MeterEventSession object.
         */
        interface MeterEventSession {
          /**
           * The unique id of this auth session.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'billing.meter_event_session';

          /**
           * The authentication token for this session.  Use this token when calling the
           * high-throughput meter event API.
           */
          authentication_token: string;

          /**
           * The creation time of this session.
           */
          created: string;

          /**
           * The time at which this session will expire.
           */
          expires_at: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;
        }
      }
    }
  }
}
