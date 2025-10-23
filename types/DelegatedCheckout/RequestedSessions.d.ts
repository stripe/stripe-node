// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace DelegatedCheckout {
      /**
       * A requested session is a session that has been requested by a customer.
       */
      interface RequestedSession {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'delegated_checkout.requested_session';

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The customer for this requested session.
         */
        customer: string | null;

        fulfillment_details: RequestedSession.FulfillmentDetails | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;
      }

      namespace RequestedSession {
        interface FulfillmentDetails {}
      }
    }
  }
}
