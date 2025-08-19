// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * Use Transactions to view changes to your FinancialAccount balance over time. Every flow that moves money, such as OutboundPayments or ReceivedCredits, will have one or more Transactions that describes how the flow impacted your balance. Note that while the FinancialAccount balance will always be up to date, be aware that Transactions and TransactionEntries are created shortly after to reflect changes.
         */
        interface Transaction {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.transaction';

          /**
           * The amount of the Transaction.
           */
          amount: Amount;

          /**
           * The delta to the FinancialAccount's balance. The balance_impact for the Transaction is equal to sum of its
           * TransactionEntries that have `effective_at`s in the past.
           */
          balance_impact: Transaction.BalanceImpact;

          /**
           * Open Enum. A descriptive category used to classify the Transaction.
           */
          category: Transaction.Category;

          /**
           * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * Indicates the FinancialAccount affected by this Transaction.
           */
          financial_account: string;

          /**
           * Details about the Flow object that created the Transaction.
           */
          flow: Transaction.Flow;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Closed Enum. Current status of the Transaction.
           * A Transaction is `pending` if either `balance_impact.inbound_pending` or `balance_impact.outbound_pending` is non-zero.
           * A Transaction is `posted` if only `balance_impact.available` is non-zero.
           * A Transaction is `void` if there is no balance impact.
           * `posted` and `void` are terminal states, and no additional entries will be added to the Transaction.
           */
          status: Transaction.Status;

          /**
           * Timestamps for when the Transaction transitioned to a particular status.
           */
          status_transitions: Transaction.StatusTransitions;
        }

        namespace Transaction {
          interface BalanceImpact {
            /**
             * Impact to the available balance.
             */
            available: Amount;

            /**
             * Impact to the inbound_pending balance.
             */
            inbound_pending: Amount;

            /**
             * Impact to the outbound_pending balance.
             */
            outbound_pending: Amount;
          }

          type Category =
            | 'adjustment'
            | 'currency_conversion'
            | 'inbound_transfer'
            | 'outbound_payment'
            | 'outbound_transfer'
            | 'received_credit'
            | 'received_debit'
            | 'return'
            | 'stripe_fee';

          interface Flow {
            /**
             * Open Enum. Type of the flow that created the Transaction. The field matching this value will contain the ID of the flow.
             */
            type: Flow.Type;

            /**
             * If applicable, the ID of the Adjustment that created this Transaction.
             */
            adjustment: string | null;

            /**
             * In the future, this will be the ID of the currency conversion that created this Transaction. For now, this field is always null.
             */
            currency_conversion: string | null;

            /**
             * If applicable, the ID of the FeeTransaction that created this Transaction.
             */
            fee_transaction: string | null;

            /**
             * If applicable, the ID of the InboundTransfer that created this Transaction.
             */
            inbound_transfer: string | null;

            /**
             * If applicable, the ID of the OutboundPayment that created this Transaction.
             */
            outbound_payment: string | null;

            /**
             * If applicable, the ID of the OutboundTransfer that created this Transaction.
             */
            outbound_transfer: string | null;

            /**
             * If applicable, the ID of the ReceivedCredit that created this Transaction.
             */
            received_credit: string | null;

            /**
             * If applicable, the ID of the ReceivedDebit that created this Transaction.
             */
            received_debit: string | null;
          }

          namespace Flow {
            type Type =
              | 'adjustment'
              | 'currency_conversion'
              | 'fee_transaction'
              | 'inbound_transfer'
              | 'outbound_payment'
              | 'outbound_transfer'
              | 'received_credit'
              | 'received_debit';
          }

          type Status = 'pending' | 'posted' | 'void';

          interface StatusTransitions {
            /**
             * The time at which the Transaction became posted. Only present if status == posted.
             */
            posted_at: string | null;

            /**
             * The time at which the Transaction became void. Only present if status == void.
             */
            void_at: string | null;
          }
        }
      }
    }
  }
}
