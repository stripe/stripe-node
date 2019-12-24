declare module 'stripe' {
  namespace Stripe {
    /**
     * The BitcoinTransaction object.
     */
    interface BitcoinTransaction {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'bitcoin_transaction';

      /**
       * The amount of `currency` that the transaction was converted to in real-time.
       */
      amount: number;

      /**
       * The amount of bitcoin contained in the transaction.
       */
      bitcoin_amount: number;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) to which this transaction was converted.
       */
      currency: string;

      /**
       * The receiver to which this transaction was sent.
       */
      receiver: string;
    }

    interface BitcoinTransactionListParams extends PaginationParams {
      /**
       * Only return transactions for the customer specified by this customer ID.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
