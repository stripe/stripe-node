// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Orchestration {
      /**
       * Represents orchestration information for a payment attempt record (e.g. return url).
       */
      interface PaymentAttempt {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'orchestration.payment_attempt';

        /**
         * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
         */
        livemode: boolean;

        /**
         * If present, the return URL for this payment attempt.
         */
        return_url: string | null;
      }
    }
  }
}
