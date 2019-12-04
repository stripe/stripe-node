declare namespace Stripe {
  /**
   * The Transfer object.
   */
  interface Transfer {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'transfer';

    /**
     * Amount in %s to be transferred.
     */
    amount?: number;

    /**
     * Amount in %s reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
     */
    amount_reversed?: number;

    /**
     * Balance transaction that describes the impact of this transfer on your account balance.
     */
    balance_transaction?: string | BalanceTransaction | null;

    /**
     * Time that this record of the transfer was first created.
     */
    created?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;

    /**
     * ID of the Stripe account the transfer was sent to.
     */
    destination?: string | Account | DeletedAccount | null;

    /**
     * If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
     */
    destination_payment?: string | Charge;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * A set of key-value pairs that you can attach to a transfer object. It can be useful for storing additional information about the transfer in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * A list of reversals that have been applied to the transfer.
     */
    reversals?: ApiList<TransferReversal>;

    /**
     * Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
     */
    reversed?: boolean;

    /**
     * ID of the charge or payment that was used to fund the transfer. If null, the transfer was funded from the available balance.
     */
    source_transaction?: string | Charge | null;

    /**
     * The source balance this transfer came from. One of `card` or `bank_account`.
     */
    source_type?: string | null;

    /**
     * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#grouping-transactions) for details.
     */
    transfer_group?: string | null;
  }

  /**
   * The TransferReversal object.
   */
  interface TransferReversal {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'transfer_reversal';

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
     * Linked payment refund for the transfer reversal.
     */
    destination_payment_refund?: string | Refund | null;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * ID of the refund responsible for the transfer reversal.
     */
    source_refund?: string | Refund | null;

    /**
     * ID of the transfer that was reversed.
     */
    transfer?: string | Transfer;
  }

  /**
   * To send funds from your Stripe account to a connected account, you create a new transfer object. Your [Stripe balance](https://stripe.com/docs/api#balance) must be able to cover the transfer amount, or you'll receive an “Insufficient Funds” error.
   */
  interface TransferCreateParams {
    /**
     * A positive integer in %s representing how much to transfer.
     */
    amount?: number;

    /**
     * 3-letter [ISO code for currency](https://stripe.com/docs/payouts).
     */
    currency: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * The ID of a connected Stripe account. [See the Connect documentation](https://stripe.com/docs/connect/charges-transfers) for details.
     */
    destination: string;

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

    /**
     * You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-availability) for details.
     */
    source_transaction?: string;

    /**
     * The source balance to use for this transfer. One of `bank_account` or `card`. For most users, this will default to `card`.
     */
    source_type?: TransferCreateParams.SourceType;

    /**
     * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#grouping-transactions) for details.
     */
    transfer_group?: string;
  }

  namespace TransferCreateParams {
    type SourceType = 'bank_account' | 'card'
  }

  /**
   * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.
   */
  interface TransferRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request accepts only metadata as an argument.
   */
  interface TransferUpdateParams {
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

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
   * Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.
   */
  interface TransferListParams {
    created?: number | TransferListParams.Created;

    /**
     * Only return transfers for the destination specified by this account ID.
     */
    destination?: string;

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

    /**
     * Only return transfers with the specified transfer group.
     */
    transfer_group?: string;
  }

  namespace TransferListParams {
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
   * When you create a new reversal, you must specify a transfer to create it on.
   *
   * When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.
   *
   * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.
   */
  interface TransferCreateReversalParams {
    /**
     * A positive integer in %s representing how much of this transfer to reverse. Can only reverse up to the unreversed amount remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts. Defaults to the entire transfer amount.
     */
    amount?: number;

    /**
     * An arbitrary string which you can attach to a reversal object. It is displayed alongside the reversal in the Dashboard. This will be unset if you POST an empty value.
     */
    description?: string;

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

    /**
     * Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.
     */
    refund_application_fee?: boolean;
  }

  /**
   * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional reversals.
   */
  interface TransferListReversalsParams {
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
   * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.
   */
  interface TransferRetrieveReversalParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request only accepts metadata and description as arguments.
   */
  interface TransferUpdateReversalParams {
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

  class TransfersResource {
    /**
     * To send funds from your Stripe account to a connected account, you create a new transfer object. Your [Stripe balance](https://stripe.com/docs/api#balance) must be able to cover the transfer amount, or you'll receive an “Insufficient Funds” error.
     */
    create(
      params: TransferCreateParams,
      options?: RequestOptions
    ): Promise<Transfer>;

    /**
     * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.
     */
    retrieve(
      id: string,
      params?: TransferRetrieveParams,
      options?: RequestOptions
    ): Promise<Transfer>;
    retrieve(id: string, options?: RequestOptions): Promise<Transfer>;

    /**
     * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     *
     * This request accepts only metadata as an argument.
     */
    update(
      id: string,
      params?: TransferUpdateParams,
      options?: RequestOptions
    ): Promise<Transfer>;

    /**
     * Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.
     */
    list(
      params?: TransferListParams,
      options?: RequestOptions
    ): ApiListPromise<Transfer>;
    list(options?: RequestOptions): ApiListPromise<Transfer>;

    /**
     * When you create a new reversal, you must specify a transfer to create it on.
     *
     * When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.
     *
     * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.
     */
    createReversal(
      id: string,
      params?: TransferCreateReversalParams,
      options?: RequestOptions
    ): Promise<TransferReversal>;
    createReversal(
      id: string,
      options?: RequestOptions
    ): Promise<TransferReversal>;

    /**
     * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional reversals.
     */
    listReversals(
      id: string,
      params?: TransferListReversalsParams,
      options?: RequestOptions
    ): ApiListPromise<TransferReversal>;
    listReversals(
      id: string,
      options?: RequestOptions
    ): ApiListPromise<TransferReversal>;

    /**
     * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.
     */
    retrieveReversal(
      idId: string,
      id: string,
      params?: TransferRetrieveReversalParams,
      options?: RequestOptions
    ): Promise<TransferReversal>;
    retrieveReversal(
      idId: string,
      id: string,
      options?: RequestOptions
    ): Promise<TransferReversal>;

    /**
     * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     *
     * This request only accepts metadata and description as arguments.
     */
    updateReversal(
      idId: string,
      id: string,
      params?: TransferUpdateReversalParams,
      options?: RequestOptions
    ): Promise<TransferReversal>;
  }
}