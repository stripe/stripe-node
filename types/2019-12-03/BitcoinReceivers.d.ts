declare module 'stripe' {
  namespace Stripe {
    /**
     * The BitcoinReceiver object.
     */
    interface BitcoinReceiver {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'bitcoin_receiver';

      /**
       * True when this bitcoin receiver has received a non-zero amount of bitcoin.
       */
      active: boolean;

      /**
       * The amount of `currency` that you are collecting as payment.
       */
      amount: number;

      /**
       * The amount of `currency` to which `bitcoin_amount_received` has been converted.
       */
      amount_received: number;

      /**
       * The amount of bitcoin that the customer should send to fill the receiver. The `bitcoin_amount` is denominated in Satoshi: there are 10^8 Satoshi in one bitcoin.
       */
      bitcoin_amount: number;

      /**
       * The amount of bitcoin that has been sent by the customer to this receiver.
       */
      bitcoin_amount_received: number;

      /**
       * This URI can be displayed to the customer as a clickable link (to activate their bitcoin client) or as a QR code (for mobile wallets).
       */
      bitcoin_uri: string;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) to which the bitcoin will be converted.
       */
      currency: string;

      customer?: string | null;

      deleted?: void;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * The customer's email address, set by the API call that creates the receiver.
       */
      email: string | null;

      /**
       * This flag is initially false and updates to true when the customer sends the `bitcoin_amount` to this receiver.
       */
      filled: boolean;

      /**
       * A bitcoin address that is specific to this receiver. The customer can send bitcoin to this address to fill the receiver.
       */
      inbound_address: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata;

      /**
       * The ID of the payment created from the receiver, if any. Hidden when viewing the receiver with a publishable key.
       */
      payment?: string | null;

      refund_address: string | null;

      /**
       * A list with one entry for each time that the customer sent bitcoin to the receiver. Hidden when viewing the receiver with a publishable key.
       */
      transactions?: ApiList<Stripe.BitcoinTransaction>;

      /**
       * This receiver contains uncaptured funds that can be used for a payment or refunded.
       */
      uncaptured_funds: boolean;

      used_for_payment: boolean | null;
    }

    /**
     * The DeletedBitcoinReceiver object.
     */
    interface DeletedBitcoinReceiver {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'bitcoin_receiver';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
