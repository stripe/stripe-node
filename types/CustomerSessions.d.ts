// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A customer session allows you to grant client access to Stripe's frontend SDKs (like StripeJs)
     * control over a customer.
     */
    interface CustomerSession {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'customer_session';

      /**
       * The client secret of this customer session. Used on the client to set up secure access to the given `customer`.
       *
       * The client secret can be used to provide access to `customer` from your frontend. It should not be stored, logged, or exposed to anyone other than the relevant customer. Make sure that you have TLS enabled on any page that includes the client secret.
       */
      client_secret: string;

      /**
       * The customer the customer session was created for.
       */
      customer: string | Stripe.Customer;

      /**
       * The timestamp at which this customer session will expire.
       */
      expires_at: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;
    }
  }
}
