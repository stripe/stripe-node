declare namespace Stripe {
  /**
   * The ApplicationFee object.
   */
  interface ApplicationFee {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'application_fee';

    /**
     * ID of the Stripe account this fee was taken from.
     */
    account?: string | Account | DeletedAccount;

    /**
     * Amount earned, in %s.
     */
    amount?: number;

    /**
     * Amount in %s refunded (can be less than the amount attribute on the fee if a partial refund was issued)
     */
    amount_refunded?: number;

    /**
     * ID of the Connect application that earned the fee.
     */
    application?: string | Application;

    /**
     * Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
     */
    balance_transaction?: string | BalanceTransaction | null;

    /**
     * ID of the charge that the application fee was taken from.
     */
    charge?: string | Charge;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
     */
    originating_transaction?: string | Charge | null;

    /**
     * Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
     */
    refunded?: boolean;

    /**
     * A list of refunds that have been applied to the fee.
     */
    refunds?: ApiList<FeeRefund>;
  }

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
   * Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.
   */
  interface ApplicationFeeRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Returns a list of application fees you've previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.
   */
  interface ApplicationFeeListParams {
    /**
     * Only return application fees for the charge specified by this charge ID.
     */
    charge?: string;

    created?: number | ApplicationFeeListParams.Created;

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

  namespace ApplicationFeeListParams {
    interface Created {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }
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
  interface ApplicationFeeCreateRefundParams {
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
   * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.
   */
  interface ApplicationFeeListRefundsParams {
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

  /**
   * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.
   */
  interface ApplicationFeeRetrieveRefundParams {
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
  interface ApplicationFeeUpdateRefundParams {
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

  class ApplicationFeesResource {
    /**
     * Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.
     */
    retrieve(
      id: string,
      params?: ApplicationFeeRetrieveParams,
      options?: RequestOptions
    ): Promise<ApplicationFee>;
    retrieve(id: string, options?: RequestOptions): Promise<ApplicationFee>;

    /**
     * Returns a list of application fees you've previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.
     */
    list(
      params?: ApplicationFeeListParams,
      options?: RequestOptions
    ): ApiListPromise<ApplicationFee>;
    list(options?: RequestOptions): ApiListPromise<ApplicationFee>;

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
    createRefund(
      id: string,
      params?: ApplicationFeeCreateRefundParams,
      options?: RequestOptions
    ): Promise<FeeRefund>;
    createRefund(id: string, options?: RequestOptions): Promise<FeeRefund>;

    /**
     * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.
     */
    listRefunds(
      id: string,
      params?: ApplicationFeeListRefundsParams,
      options?: RequestOptions
    ): ApiListPromise<FeeRefund>;
    listRefunds(
      id: string,
      options?: RequestOptions
    ): ApiListPromise<FeeRefund>;

    /**
     * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.
     */
    retrieveRefund(
      feeId: string,
      id: string,
      params?: ApplicationFeeRetrieveRefundParams,
      options?: RequestOptions
    ): Promise<FeeRefund>;
    retrieveRefund(
      feeId: string,
      id: string,
      options?: RequestOptions
    ): Promise<FeeRefund>;

    /**
     * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     *
     * This request only accepts metadata as an argument.
     */
    updateRefund(
      feeId: string,
      id: string,
      params?: ApplicationFeeUpdateRefundParams,
      options?: RequestOptions
    ): Promise<FeeRefund>;
  }
}