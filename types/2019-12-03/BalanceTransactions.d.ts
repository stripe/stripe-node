declare module 'stripe' {
  namespace Stripe {
    /**
     * The BalanceTransaction object.
     */
    interface BalanceTransaction {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'balance_transaction';

      /**
       * Gross amount of the transaction, in %s.
       */
      amount: number;

      /**
       * The date the transaction's net funds will become available in the Stripe balance.
       */
      available_on: number;

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

      exchange_rate: number | null;

      /**
       * Fees (in %s) paid for this transaction.
       */
      fee: number;

      /**
       * Detailed breakdown of fees (in %s) paid for this transaction.
       */
      fee_details: Array<BalanceTransaction.FeeDetail>;

      /**
       * Net amount of the transaction, in %s.
       */
      net: number;

      /**
       * [Learn more](https://stripe.com/docs/reports/reporting-categories) about how reporting categories can help you understand balance transactions from an accounting perspective.
       */
      reporting_category: string;

      /**
       * The Stripe object to which this transaction is related.
       */
      source:
        | string
        | ApplicationFee
        | Charge
        | ConnectCollectionTransfer
        | Dispute
        | FeeRefund
        | Issuing.Authorization
        | Issuing.Transaction
        | Payout
        | PlatformTaxFee
        | Refund
        | ReserveTransaction
        | TaxDeductedAtSource
        | Topup
        | Transfer
        | TransferReversal
        | null;

      /**
       * If the transaction's net funds are available in the Stripe balance yet. Either `available` or `pending`.
       */
      status: string;

      /**
       * Transaction type: `adjustment`, `advance`, `advance_funding`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. [Learn more](https://stripe.com/docs/reports/balance-transaction-types) about balance transaction types and what they represent. If you are looking to classify transactions for accounting purposes, you might want to consider `reporting_category` instead.
       */
      type: BalanceTransaction.Type;
    }

    namespace BalanceTransaction {
      interface FeeDetail {
        /**
         * Amount of the fee, in cents.
         */
        amount: number;

        application: string | null;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description: string | null;

        /**
         * Type of the fee, one of: `application_fee`, `stripe_fee` or `tax`.
         */
        type: string;
      }

      type Type =
        | 'adjustment'
        | 'advance'
        | 'advance_funding'
        | 'application_fee'
        | 'application_fee_refund'
        | 'charge'
        | 'connect_collection_transfer'
        | 'issuing_authorization_hold'
        | 'issuing_authorization_release'
        | 'issuing_transaction'
        | 'payment'
        | 'payment_failure_refund'
        | 'payment_refund'
        | 'payout'
        | 'payout_cancel'
        | 'payout_failure'
        | 'refund'
        | 'refund_failure'
        | 'reserve_transaction'
        | 'reserved_funds'
        | 'stripe_fee'
        | 'stripe_fx_fee'
        | 'tax_fee'
        | 'topup'
        | 'topup_reversal'
        | 'transfer'
        | 'transfer_cancel'
        | 'transfer_failure'
        | 'transfer_refund';
    }

    interface BalanceTransactionRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface BalanceTransactionListParams extends PaginationParams {
      available_on?: RangeQueryParam | number;

      created?: RangeQueryParam | number;

      currency?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.
       */
      payout?: string;

      /**
       * Only returns the original transaction.
       */
      source?: string;

      /**
       * Only returns transactions of the given type. One of: `charge`, `refund`, `adjustment`, `application_fee`, `application_fee_refund`, `transfer`, `payment`, `payout`, `payout_failure`, `stripe_fee`, or `network_cost`.
       */
      type?: string;
    }

    class BalanceTransactionsResource {
      /**
       * Retrieves the balance transaction with the given ID.
       *
       * Note that this endpoint previously used the path /v1/balance/history/:id.
       */
      retrieve(
        id: string,
        params?: BalanceTransactionRetrieveParams,
        options?: RequestOptions
      ): Promise<BalanceTransaction>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<BalanceTransaction>;

      /**
       * Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.
       *
       * Note that this endpoint was previously called “Balance history” and used the path /v1/balance/history.
       */
      list(
        params?: BalanceTransactionListParams,
        options?: RequestOptions
      ): ApiListPromise<BalanceTransaction>;
      list(options?: RequestOptions): ApiListPromise<BalanceTransaction>;
    }
  }
}
