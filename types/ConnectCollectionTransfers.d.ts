// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The ConnectCollectionTransfer object.
     */
    interface ConnectCollectionTransfer {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'connect_collection_transfer';

      /**
       * Amount transferred, in cents (or local equivalent).
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * ID of the account that funds are being collected for.
       */
      destination: string | Stripe.Account;

      /**
       * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
       */
      livemode: boolean;
    }
  }
}
