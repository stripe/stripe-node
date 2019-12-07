declare namespace Stripe {
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

  interface BitcoinTransactionListParams {
    /**
     * Only return transactions for the customer specified by this customer ID.
     */
    customer?: string;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }
}