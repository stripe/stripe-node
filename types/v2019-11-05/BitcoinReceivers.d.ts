declare namespace Stripe {
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

    customer: string | null;

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
    metadata: {
      [key: string]: string;
    };

    /**
     * The ID of the payment created from the receiver, if any. Hidden when viewing the receiver with a publishable key.
     */
    payment: string | null;

    refund_address: string | null;

    /**
     * A list with one entry for each time that the customer sent bitcoin to the receiver. Hidden when viewing the receiver with a publishable key.
     */
    transactions: ApiList<BitcoinTransaction>;

    /**
     * This receiver contains uncaptured funds that can be used for a payment or refunded.
     */
    uncaptured_funds: boolean;

    used_for_payment: boolean | null;
  }

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

  /**
   * The BitcoinTransaction object.
   */
  interface BitcoinTransaction {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'bitcoin_transaction';

    /**
     * The amount of `currency` that the transaction was converted to in real-time.
     */
    amount?: number;

    /**
     * The amount of bitcoin contained in the transaction.
     */
    bitcoin_amount?: number;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) to which this transaction was converted.
     */
    currency?: string;

    /**
     * The receiver to which this transaction was sent.
     */
    receiver?: string;
  }

  /**
   * Retrieves the Bitcoin receiver with the given ID.
   */
  interface BitcoinReceiverRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.
   */
  interface BitcoinReceiverListParams {
    /**
     * Filter for active receivers.
     */
    active?: boolean;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Filter for filled receivers.
     */
    filled?: boolean;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;

    /**
     * Filter for receivers with uncaptured funds.
     */
    uncaptured_funds?: boolean;
  }

  /**
   * List bitcoin transacitons for a given receiver.
   */
  interface BitcoinReceiverListTransactionsParams {
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

  class BitcoinReceiversResource {
    /**
     * Retrieves the Bitcoin receiver with the given ID.
     */
    retrieve(
      id: string,
      params?: BitcoinReceiverRetrieveParams,
      options?: RequestOptions
    ): Promise<BitcoinReceiver>;
    retrieve(id: string, options?: RequestOptions): Promise<BitcoinReceiver>;

    /**
     * Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.
     */
    list(
      params?: BitcoinReceiverListParams,
      options?: RequestOptions
    ): ApiListPromise<BitcoinReceiver>;
    list(options?: RequestOptions): ApiListPromise<BitcoinReceiver>;

    /**
     * List bitcoin transacitons for a given receiver.
     */
    listTransactions(
      id: string,
      params?: BitcoinReceiverListTransactionsParams,
      options?: RequestOptions
    ): ApiListPromise<BitcoinTransaction>;
    listTransactions(
      id: string,
      options?: RequestOptions
    ): ApiListPromise<BitcoinTransaction>;
  }
}