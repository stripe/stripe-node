// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * An InboundTransfer object, representing a money movement from a
         * user owned PaymentMethod to a FinancialAccount belonging to the same user.
         */
        interface InboundTransfer {
          /**
           * Unique identifier for the InboundTransfer.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.inbound_transfer';

          /**
           * The amount in specified currency that will land in the FinancialAccount balance.
           */
          amount: Amount;

          /**
           * Creation time of the InboundTransfer. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * A freeform text field provided by user, containing metadata.
           */
          description: string;

          /**
           * A nested object containing information about the origin of the InboundTransfer.
           */
          from: InboundTransfer.From;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * A hosted transaction receipt URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
           */
          receipt_url: string | null;

          /**
           * A nested object containing information about the destination of the InboundTransfer.
           */
          to: InboundTransfer.To;

          /**
           * A list of history objects, representing changes in the state of the InboundTransfer.
           */
          transfer_history: Array<InboundTransfer.TransferHistory>;
        }

        namespace InboundTransfer {
          interface From {
            /**
             * The amount in specified currency that was debited from the Payment Method.
             */
            debited: Amount;

            /**
             * The Payment Method object used to create the InboundTransfer.
             */
            payment_method: From.PaymentMethod;
          }

          namespace From {
            interface PaymentMethod {
              /**
               * The type of object this destination represents. For a us bank account, we expect us_bank_account.
               */
              type: string;

              /**
               * The destination US bank account identifier. eg "usba_***".
               */
              us_bank_account: string | null;
            }
          }

          interface To {
            /**
             * The amount by which the FinancialAccount balance is credited.
             */
            credited: Amount;

            /**
             * The FinancialAccount that funds will land in.
             */
            financial_account: string;
          }

          interface TransferHistory {
            /**
             * Creation time of the HistoryEntry in RFC 3339 format and UTC.
             */
            created: string;

            /**
             * Effective at time of the HistoryEntry in RFC 3339 format and UTC.
             */
            effective_at: string;

            /**
             * A unique ID for the HistoryEntry.
             */
            id: string;

            /**
             * Open Enum. The Level of the HistoryEntry.
             */
            level: TransferHistory.Level;

            /**
             * Open Enum. The type of the HistoryEntry.
             */
            type: TransferHistory.Type;

            /**
             * The history entry for a failed InboundTransfer.
             */
            bank_debit_failed: TransferHistory.BankDebitFailed | null;

            /**
             * The history entry for a processing InboundTransfer.
             */
            bank_debit_processing: TransferHistory.BankDebitProcessing | null;

            /**
             * The history entry for a queued InboundTransfer.
             */
            bank_debit_queued: TransferHistory.BankDebitQueued | null;

            /**
             * The history entry for a returned InboundTransfer.
             */
            bank_debit_returned: TransferHistory.BankDebitReturned | null;

            /**
             * The history entry for a succeeded InboundTransfer.
             */
            bank_debit_succeeded: TransferHistory.BankDebitSucceeded | null;
          }

          namespace TransferHistory {
            interface BankDebitFailed {
              /**
               * Open Enum. The return reason for the failed InboundTransfer.
               */
              failure_reason: BankDebitFailed.FailureReason;
            }

            namespace BankDebitFailed {
              type FailureReason =
                | 'bank_account_closed'
                | 'bank_account_not_found'
                | 'bank_debit_could_not_be_processed'
                | 'bank_debit_not_authorized'
                | 'insufficient_funds';
            }

            interface BankDebitProcessing {}

            interface BankDebitQueued {}

            interface BankDebitReturned {
              /**
               * Open Enum. The return reason for the returned InboundTransfer.
               */
              return_reason: BankDebitReturned.ReturnReason;
            }

            namespace BankDebitReturned {
              type ReturnReason =
                | 'bank_account_closed'
                | 'bank_account_not_found'
                | 'bank_debit_could_not_be_processed'
                | 'bank_debit_not_authorized'
                | 'insufficient_funds';
            }

            interface BankDebitSucceeded {}

            type Level = 'canonical' | 'debug';

            type Type =
              | 'bank_debit_failed'
              | 'bank_debit_processing'
              | 'bank_debit_queued'
              | 'bank_debit_returned'
              | 'bank_debit_succeeded';
          }
        }
      }
    }
  }
}
