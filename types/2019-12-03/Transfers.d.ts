declare module 'stripe' {
  namespace Stripe {
    /**
     * The Transfer object.
     */
    interface Transfer {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'transfer';

      /**
       * Amount in %s to be transferred.
       */
      amount: number;

      /**
       * Amount in %s reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
       */
      amount_reversed: number;

      /**
       * Balance transaction that describes the impact of this transfer on your account balance.
       */
      balance_transaction: string | Stripe.BalanceTransaction | null;

      /**
       * Time that this record of the transfer was first created.
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
       * ID of the Stripe account the transfer was sent to.
       */
      destination: string | Stripe.Account | null;

      /**
       * If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
       */
      destination_payment?: string | Stripe.Charge;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * A set of key-value pairs that you can attach to a transfer object. It can be useful for storing additional information about the transfer in a structured format.
       */
      metadata: Metadata;

      /**
       * A list of reversals that have been applied to the transfer.
       */
      reversals: ApiList<Stripe.TransferReversal>;

      /**
       * Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
       */
      reversed: boolean;

      /**
       * ID of the charge or payment that was used to fund the transfer. If null, the transfer was funded from the available balance.
       */
      source_transaction: string | Stripe.Charge | null;

      /**
       * The source balance this transfer came from. One of `card` or `bank_account`.
       */
      source_type: string | null;

      /**
       * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#grouping-transactions) for details.
       */
      transfer_group: string | null;
    }

    interface TransferCreateParams {
      /**
       * 3-letter [ISO code for currency](https://stripe.com/docs/payouts).
       */
      currency: string;

      /**
       * The ID of a connected Stripe account. [See the Connect documentation](https://stripe.com/docs/connect/charges-transfers) for details.
       */
      destination: string;

      /**
       * A positive integer in %s representing how much to transfer.
       */
      amount?: number;

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
      metadata?: MetadataParam;

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
      type SourceType = 'bank_account' | 'card';
    }

    interface TransferRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

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
      metadata?: MetadataParam;
    }

    interface TransferListParams extends PaginationParams {
      created?: RangeQueryParam | number;

      /**
       * Only return transfers for the destination specified by this account ID.
       */
      destination?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return transfers with the specified transfer group.
       */
      transfer_group?: string;
    }

    class TransfersResource {
      /**
       * To send funds from your Stripe account to a connected account, you create a new transfer object. Your [Stripe balance](https://stripe.com/docs/api#balance) must be able to cover the transfer amount, or you'll receive an “Insufficient Funds” error.
       */
      create(
        params: TransferCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Transfer>;

      /**
       * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.
       */
      retrieve(
        id: string,
        params?: TransferRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Transfer>;
      retrieve(id: string, options?: RequestOptions): Promise<Stripe.Transfer>;

      /**
       * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       *
       * This request accepts only metadata as an argument.
       */
      update(
        id: string,
        params?: TransferUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Transfer>;

      /**
       * Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.
       */
      list(
        params?: TransferListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Transfer>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Transfer>;

      /**
       * When you create a new reversal, you must specify a transfer to create it on.
       *
       * When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.
       *
       * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.
       */
      createReversal(
        id: string,
        params?: TransferReversalCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.TransferReversal>;
      createReversal(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.TransferReversal>;

      /**
       * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.
       */
      retrieveReversal(
        idId: string,
        id: string,
        params?: TransferReversalRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.TransferReversal>;
      retrieveReversal(
        idId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.TransferReversal>;

      /**
       * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       *
       * This request only accepts metadata and description as arguments.
       */
      updateReversal(
        idId: string,
        id: string,
        params?: TransferReversalUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.TransferReversal>;

      /**
       * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional reversals.
       */
      listReversals(
        id: string,
        params?: TransferReversalListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.TransferReversal>;
      listReversals(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.TransferReversal>;
    }
  }
}
