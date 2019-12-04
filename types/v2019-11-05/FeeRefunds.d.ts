declare namespace Stripe {
  /**
   * The FeeRefund object.
   */
  interface FeeRefund {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'fee_refund';

    /**
     * Amount, in %s.
     */
    amount?: number;

    /**
     * Balance transaction that describes the impact on your account balance.
     */
    balance_transaction?: string | BalanceTransaction | null;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * ID of the application fee that was refunded.
     */
    fee?: string | ApplicationFee;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * Refunds an application fee that has previously been collected but not yet refunded.
   * Funds will be refunded to the Stripe account from which the fee was originally collected.
   *
   * You can optionally refund only part of an application fee.
   * You can do so multiple times, until the entire fee has been refunded.
   *
   * Once entirely refunded, an application fee can't be refunded again.
   * This method will raise an error when called on an already-refunded application fee,
   * or when trying to refund more money than is left on an application fee.
   */
  interface FeeRefundCreateParams {
    /**
     * A positive integer, in _%s_, representing how much of this fee to refund. Can refund only up to the remaining unrefunded amount of the fee.
     */
    amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.
   */
  interface FeeRefundRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request only accepts metadata as an argument.
   */
  interface FeeRefundUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.
   */
  interface FeeRefundListParams {
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