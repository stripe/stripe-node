// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * Transactions represent changes to a [FinancialAccount's](https://stripe.com/docs/api#financial_accounts) balance.
       */
      interface Transaction {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.transaction';

        /**
         * Amount (in cents) transferred.
         */
        amount: number;

        /**
         * Change to a FinancialAccount's balance
         */
        balance_impact: Transaction.BalanceImpact;

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
        description: string;

        /**
         * A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints.
         */
        entries: ApiList<Stripe.Treasury.TransactionEntry> | null;

        /**
         * The FinancialAccount associated with this object.
         */
        financial_account: string;

        /**
         * ID of the flow that created the Transaction.
         */
        flow: string | null;

        /**
         * Details of the flow that created the Transaction.
         */
        flow_details: Transaction.FlowDetails | null;

        /**
         * Type of the flow that created the Transaction.
         */
        flow_type: Transaction.FlowType;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Status of the Transaction.
         */
        status: Transaction.Status;

        status_transitions: Transaction.StatusTransitions;
      }

      namespace Transaction {
        interface BalanceImpact {
          /**
           * The change made to funds the user can spend right now.
           */
          cash: number;

          /**
           * The change made to funds that are not spendable yet, but will become available at a later time.
           */
          inbound_pending: number;

          /**
           * The change made to funds in the account, but not spendable because they are being held for pending outbound flows.
           */
          outbound_pending: number;
        }

        interface FlowDetails {
          /**
           * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
           */
          credit_reversal?: Stripe.Treasury.CreditReversal;

          /**
           * You can reverse some [ReceivedDebits](https://stripe.com/docs/api#received_debits) depending on their network and source flow. Reversing a ReceivedDebit leads to the creation of a new object known as a DebitReversal.
           */
          debit_reversal?: Stripe.Treasury.DebitReversal;

          /**
           * Use [InboundTransfers](https://stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers) to add funds to your [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a PaymentMethod that is owned by you. The funds will be transferred via an ACH debit.
           */
          inbound_transfer?: Stripe.Treasury.InboundTransfer;

          /**
           * When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
           * object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
           * purchase to be completed successfully.
           *
           * Related guide: [Issued card authorizations](https://stripe.com/docs/issuing/purchases/authorizations)
           */
          issuing_authorization?: Stripe.Issuing.Authorization;

          /**
           * Use OutboundPayments to send funds to another party's external bank account or [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To send money to an account belonging to the same user, use an [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).
           *
           * Simulate OutboundPayment state changes with the `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods can only be called on test mode objects.
           */
          outbound_payment?: Stripe.Treasury.OutboundPayment;

          /**
           * Use OutboundTransfers to transfer funds from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, use [OutboundPayments](https://stripe.com/docs/api#outbound_payments) instead. You can send funds over ACH rails or through a domestic wire transfer to a user's own external bank account.
           *
           * Simulate OutboundTransfer state changes with the `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods can only be called on test mode objects.
           */
          outbound_transfer?: Stripe.Treasury.OutboundTransfer;

          /**
           * ReceivedCredits represent funds sent to a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for example, via ACH or wire). These money movements are not initiated from the FinancialAccount.
           */
          received_credit?: Stripe.Treasury.ReceivedCredit;

          /**
           * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
           */
          received_debit?: Stripe.Treasury.ReceivedDebit;

          /**
           * Type of the flow that created the Transaction. Set to the same value as `flow_type`.
           */
          type: FlowDetails.Type;
        }

        namespace FlowDetails {
          type Type =
            | 'credit_reversal'
            | 'debit_reversal'
            | 'inbound_transfer'
            | 'issuing_authorization'
            | 'other'
            | 'outbound_payment'
            | 'outbound_transfer'
            | 'received_credit'
            | 'received_debit';
        }

        type FlowType =
          | 'credit_reversal'
          | 'debit_reversal'
          | 'inbound_transfer'
          | 'issuing_authorization'
          | 'other'
          | 'outbound_payment'
          | 'outbound_transfer'
          | 'received_credit'
          | 'received_debit';

        type Status = 'open' | 'posted' | 'void';

        interface StatusTransitions {
          /**
           * Timestamp describing when the Transaction changed status to `posted`.
           */
          posted_at: number | null;

          /**
           * Timestamp describing when the Transaction changed status to `void`.
           */
          void_at: number | null;
        }
      }
    }
  }
}
