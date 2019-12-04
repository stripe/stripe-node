declare namespace Stripe {
  /**
   * The Topup object.
   */
  interface Topup {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'topup';

    /**
     * Amount transferred.
     */
    amount?: number;

    /**
     * ID of the balance transaction that describes the impact of this top-up on your account balance. May not be specified depending on status of top-up.
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
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;

    /**
     * Date the funds are expected to arrive in your Stripe account for payouts. This factors in delays like weekends or bank holidays. May not be specified depending on status of top-up.
     */
    expected_availability_date?: number | null;

    /**
     * Error code explaining reason for top-up failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
     */
    failure_code?: string | null;

    /**
     * Message to user further explaining reason for top-up failure if available.
     */
    failure_message?: string | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    source?: Source;

    /**
     * Extra information about a top-up. This will appear on your source's bank statement. It must contain at least one letter.
     */
    statement_descriptor?: string | null;

    /**
     * The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`.
     */
    status?: Topup.Status;

    /**
     * A string that identifies this top-up as part of a group.
     */
    transfer_group?: string | null;
  }

  namespace Topup {
    type Status = 'canceled' | 'failed' | 'pending' | 'reversed' | 'succeeded'
  }

  /**
   * Top up the balance of an account
   */
  interface TopupCreateParams {
    /**
     * A positive integer representing how much to transfer.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * The ID of a source to transfer funds from. For most users, this should be left unspecified which will use the bank account that was set up in the dashboard for the specified currency. In test mode, this can be a test bank token (see [Testing Top-ups](https://stripe.com/docs/connect/testing#testing-top-ups)).
     */
    source?: string;

    /**
     * Extra information about a top-up for the source's bank statement. Limited to 15 ASCII characters.
     */
    statement_descriptor?: string;

    /**
     * A string that identifies this top-up as part of a group.
     */
    transfer_group?: string;
  }

  /**
   * Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.
   */
  interface TopupRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the metadata of a top-up. Other top-up details are not editable by design.
   */
  interface TopupUpdateParams {
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * Returns a list of top-ups.
   */
  interface TopupListParams {
    /**
     * A positive integer representing how much to transfer.
     */
    amount?: number | TopupListParams.Amount;

    /**
     * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
     */
    created?: number | TopupListParams.Created;

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
     * Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.
     */
    status?: TopupListParams.Status;
  }

  namespace TopupListParams {
    interface Amount {
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

    type Status = 'canceled' | 'failed' | 'pending' | 'succeeded'
  }

  /**
   * Cancels a top-up. Only pending top-ups can be canceled.
   */
  interface TopupCancelParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class TopupsResource {
    /**
     * Top up the balance of an account
     */
    create(params: TopupCreateParams, options?: RequestOptions): Promise<Topup>;

    /**
     * Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.
     */
    retrieve(
      id: string,
      params?: TopupRetrieveParams,
      options?: RequestOptions
    ): Promise<Topup>;
    retrieve(id: string, options?: RequestOptions): Promise<Topup>;

    /**
     * Updates the metadata of a top-up. Other top-up details are not editable by design.
     */
    update(
      id: string,
      params?: TopupUpdateParams,
      options?: RequestOptions
    ): Promise<Topup>;

    /**
     * Returns a list of top-ups.
     */
    list(
      params?: TopupListParams,
      options?: RequestOptions
    ): ApiListPromise<Topup>;
    list(options?: RequestOptions): ApiListPromise<Topup>;

    /**
     * Cancels a top-up. Only pending top-ups can be canceled.
     */
    cancel(
      id: string,
      params?: TopupCancelParams,
      options?: RequestOptions
    ): Promise<Topup>;
    cancel(id: string, options?: RequestOptions): Promise<Topup>;
  }
}