// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A `Payout` object is created when you receive funds from Stripe, or when you
     * initiate a payout to either a bank account or debit card of a [connected
     * Stripe account](https://stripe.com/docs/connect/bank-debit-card-payouts). You can retrieve individual payouts,
     * as well as list all payouts. Payouts are made on [varying
     * schedules](https://stripe.com/docs/connect/manage-payout-schedule), depending on your country and
     * industry.
     *
     * Related guide: [Receiving Payouts](https://stripe.com/docs/payouts).
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
      metadata: Stripe.Metadata | null;

      /**
       * The method used to send this payout, which can be `standard` or `instant`. `instant` is only supported for payouts to debit cards. (See [Instant payouts for marketplaces](https://stripe.com/blog/instant-payouts-for-marketplaces) for more information.)
       */
      method: string;

      /**
       * If the payout reverses another, this is the ID of the original payout.
       */
      original_payout: string | Stripe.Payout | null;

      /**
       * If the payout was reversed, this is the ID of the payout that reverses this payout.
       */
      reversed_by: string | Stripe.Payout | null;

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
  }
}
