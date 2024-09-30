// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Event {
        interface Reason {
          /**
           * Event reason type.
           */
          type: 'request';

          /**
           * Information on the API request that instigated the event.
           */
          request: Reason.Request | null;
        }

        namespace Reason {
          interface Request {
            /**
             * ID of the API request that caused the event.
             */
            id: string;

            /**
             * The idempotency key transmitted during the request.
             */
            idempotency_key: string;
          }
        }
      }

      /**
       * The Event object.
       */
      interface EventBase {
        /**
         * Unique identifier for the event.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value of the object field.
         */
        object: 'v2.core.event';

        /**
         * Authentication context needed to fetch the event or related object.
         */
        context: string | null;

        /**
         * Time at which the object was created.
         */
        created: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Reason for the event.
         */
        reason: Event.Reason | null;

        /**
         * The type of the event.
         */
        type: string;
      }
    }
  }
}
