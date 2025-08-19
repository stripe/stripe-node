// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * TransactionEntries represent individual money movements across different states within a Transaction.
         */
        interface TransactionEntry {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.transaction_entry';

          /**
           * The delta to the FinancialAccount's balance.
           */
          balance_impact: TransactionEntry.BalanceImpact;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Time at which the entry impacted (or will impact if it's in the future) the FinancialAccount balance.
           */
          effective_at: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The Transaction that this TransactionEntry belongs to.
           */
          transaction: string;

          /**
           * Details copied from the transaction that this TransactionEntry belongs to.
           */
          transaction_details: TransactionEntry.TransactionDetails;
        }

        namespace TransactionEntry {
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

          interface TransactionDetails {
            /**
             * Closed Enum for now, and will be turned into an Open Enum soon. A descriptive category used to classify the Transaction.
             */
            category: TransactionDetails.Category;

            /**
             * Indicates the FinancialAccount affected by this Transaction.
             */
            financial_account: string;

            /**
             * Details about the Flow object that created the Transaction.
             */
            flow: TransactionDetails.Flow;
          }

          namespace TransactionDetails {
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
          }
        }
      }
    }
  }
}
