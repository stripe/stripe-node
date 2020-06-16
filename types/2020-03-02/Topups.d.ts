declare module 'stripe' {
  namespace Stripe {
    /**
     * The Topup object.
     */
    interface Topup {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'topup';

      /**
       * Amount transferred.
       */
      amount: number;

      /**
       * ID of the balance transaction that describes the impact of this top-up on your account balance. May not be specified depending on status of top-up.
       */
      balance_transaction: string | Stripe.BalanceTransaction | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * Date the funds are expected to arrive in your Stripe account for payouts. This factors in delays like weekends or bank holidays. May not be specified depending on status of top-up.
       */
      expected_availability_date: number | null;

      /**
       * Error code explaining reason for top-up failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
       */
      failure_code: string | null;

      /**
       * Message to user further explaining reason for top-up failure if available.
       */
      failure_message: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata;

      /**
       * `Source` objects allow you to accept a variety of payment methods. They
       * represent a customer's payment instrument, and can be used with the Stripe API
       * just like a `Card` object: once chargeable, they can be charged, or can be
       * attached to customers.
       *
       * Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
       */
      source: Stripe.Source;

      /**
       * Extra information about a top-up. This will appear on your source's bank statement. It must contain at least one letter.
       */
      statement_descriptor: string | null;

      /**
       * The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`.
       */
      status: Topup.Status;

      /**
       * A string that identifies this top-up as part of a group.
       */
      transfer_group: string | null;
    }

    namespace Topup {
      type Status =
        | 'canceled'
        | 'failed'
        | 'pending'
        | 'reversed'
        | 'succeeded';
    }

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
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

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

    interface TopupRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

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
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;
    }

    interface TopupListParams extends PaginationParams {
      /**
       * A positive integer representing how much to transfer.
       */
      amount?: RangeQueryParam | number;

      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.
       */
      status?: TopupListParams.Status;
    }

    namespace TopupListParams {
      type Status = 'canceled' | 'failed' | 'pending' | 'succeeded';
    }

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
      create(
        params: TopupCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Topup>;

      /**
       * Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.
       */
      retrieve(
        id: string,
        params?: TopupRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Topup>;
      retrieve(id: string, options?: RequestOptions): Promise<Stripe.Topup>;

      /**
       * Updates the metadata of a top-up. Other top-up details are not editable by design.
       */
      update(
        id: string,
        params?: TopupUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Topup>;

      /**
       * Returns a list of top-ups.
       */
      list(
        params?: TopupListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Topup>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Topup>;

      /**
       * Cancels a top-up. Only pending top-ups can be canceled.
       */
      cancel(
        id: string,
        params?: TopupCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Topup>;
      cancel(id: string, options?: RequestOptions): Promise<Stripe.Topup>;
    }
  }
}
