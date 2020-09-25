// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The Payout object.
     */
    interface Payout {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payout';

      /**
       * Amount (in %s) to be transferred to your bank account or debit card.
       */
      amount: number;

      /**
       * Date the payout is expected to arrive in the bank. This factors in delays like weekends or bank holidays.
       */
      arrival_date: number;

      /**
       * Returns `true` if the payout was created by an [automated payout schedule](https://stripe.com/docs/payouts#payout-schedule), and `false` if it was [requested manually](https://stripe.com/docs/payouts#manual-payouts).
       */
      automatic: boolean;

      /**
       * ID of the balance transaction that describes the impact of this payout on your account balance.
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
       * ID of the bank account or card the payout was sent to.
       */
      destination:
        | string
        | Stripe.BankAccount
        | Stripe.DeletedBankAccount
        | Stripe.Card
        | Stripe.DeletedCard
        | null;

      /**
       * If the payout failed or was canceled, this will be the ID of the balance transaction that reversed the initial balance transaction, and puts the funds from the failed payout back in your balance.
       */
      failure_balance_transaction: string | Stripe.BalanceTransaction | null;

      /**
       * Error code explaining reason for payout failure if available. See [Types of payout failures](https://stripe.com/docs/api#payout_failures) for a list of failure codes.
       */
      failure_code: string | null;

      /**
       * Message to user further explaining reason for payout failure if available.
       */
      failure_message: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata | null;

      /**
       * The method used to send this payout, which can be `standard` or `instant`. `instant` is only supported for payouts to debit cards. (See [Instant payouts for marketplaces](https://stripe.com/blog/instant-payouts-for-marketplaces) for more information.)
       */
      method: string;

      /**
       * The source balance this payout came from. One of `card`, `fpx`, or `bank_account`.
       */
      source_type: string;

      /**
       * Extra information about a payout to be displayed on the user's bank statement.
       */
      statement_descriptor: string | null;

      /**
       * Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. A payout is `pending` until it is submitted to the bank, when it becomes `in_transit`. The status then changes to `paid` if the transaction goes through, or to `failed` or `canceled` (within 5 business days). Some failed payouts may initially show as `paid` but then change to `failed`.
       */
      status: string;

      /**
       * Can be `bank_account` or `card`.
       */
      type: Payout.Type;
    }

    namespace Payout {
      type Type = 'bank_account' | 'card';
    }

    interface PayoutCreateParams {
      /**
       * A positive integer in cents representing how much to payout.
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
       * The ID of a bank account or a card to send the payout to. If no destination is supplied, the default external account for the specified currency will be used.
       */
      destination?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * The method used to send this payout, which can be `standard` or `instant`. `instant` is only supported for payouts to debit cards. (See [Instant payouts for marketplaces for more information](https://stripe.com/blog/instant-payouts-for-marketplaces).)
       */
      method?: PayoutCreateParams.Method;

      /**
       * The balance type of your Stripe balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the balances API. One of `bank_account`, `card`, or `fpx`.
       */
      source_type?: PayoutCreateParams.SourceType;

      /**
       * A string to be displayed on the recipient's bank or card statement. This may be at most 22 characters. Attempting to use a `statement_descriptor` longer than 22 characters will return an error. Note: Most banks will truncate this information and/or display it inconsistently. Some may not display it at all.
       */
      statement_descriptor?: string;
    }

    namespace PayoutCreateParams {
      type Method = 'instant' | 'standard';

      type SourceType = 'bank_account' | 'card' | 'fpx';
    }

    interface PayoutRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PayoutUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;
    }

    interface PayoutListParams extends PaginationParams {
      arrival_date?: RangeQueryParam | number;

      created?: RangeQueryParam | number;

      /**
       * The ID of an external account - only return payouts sent to this external account.
       */
      destination?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.
       */
      status?: string;
    }

    interface PayoutCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class PayoutsResource {
      /**
       * To send funds to your own bank account, you create a new payout object. Your [Stripe balance](https://stripe.com/docs/api#balance) must be able to cover the payout amount, or you'll receive an “Insufficient Funds” error.
       *
       * If your API key is in test mode, money won't actually be sent, though everything else will occur as if in live mode.
       *
       * If you are creating a manual payout on a Stripe account that uses multiple payment source types, you'll need to specify the source type balance that the payout should draw from. The [balance object](https://stripe.com/docs/api#balance_object) details available and pending amounts by source type.
       */
      create(
        params: PayoutCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;

      /**
       * Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.
       */
      retrieve(
        id: string,
        params?: PayoutRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;

      /**
       * Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.
       */
      update(
        id: string,
        params?: PayoutUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;

      /**
       * Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.
       */
      list(
        params?: PayoutListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Payout>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Payout>;

      /**
       * A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance. You may not cancel automatic Stripe payouts.
       */
      cancel(
        id: string,
        params?: PayoutCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;
    }
  }
}
