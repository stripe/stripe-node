// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * ReceivedDebit resource
         */
        interface ReceivedDebit {
          /**
           * Unique identifier for the ReceivedDebit.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.received_debit';

          /**
           * Amount and currency of the ReceivedDebit.
           */
          amount: Amount;

          /**
           * This object stores details about the originating banking transaction that resulted in the ReceivedDebit. Present if `type` field value is `bank_transfer`.
           */
          bank_transfer: ReceivedDebit.BankTransfer | null;

          /**
           * This object stores details about the issuing transactions that resulted in the ReceivedDebit. Present if `type` field value is `card_spend`.
           */
          card_spend: ReceivedDebit.CardSpend | null;

          /**
           * The time at which the ReceivedDebit was created.
           * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
           */
          created: string;

          /**
           * Freeform string sent by the originator of the ReceivedDebit.
           */
          description: string | null;

          /**
           * Financial Account on which funds for ReceivedDebit were debited.
           */
          financial_account: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * A link to the Stripe-hosted receipt for this ReceivedDebit.
           */
          receipt_url: string | null;

          /**
           * Open Enum. The status of the ReceivedDebit.
           */
          status: ReceivedDebit.Status;

          /**
           * Detailed information about the status of the ReceivedDebit.
           */
          status_details: ReceivedDebit.StatusDetails | null;

          /**
           * The time at which the ReceivedDebit transitioned to a particular status.
           */
          status_transitions: ReceivedDebit.StatusTransitions | null;

          /**
           * Open Enum. The type of the ReceivedDebit.
           */
          type: ReceivedDebit.Type;
        }

        namespace ReceivedDebit {
          interface BankTransfer {
            /**
             * The Financial Address that was debited.
             */
            financial_address: string;

            /**
             * Open Enum. The type of the payment method used to originate the debit.
             */
            payment_method_type: 'us_bank_account';

            /**
             * The statement descriptor set by the originator of the debit.
             */
            statement_descriptor: string | null;

            /**
             * The payment method used to originate the debit.
             */
            us_bank_account: BankTransfer.UsBankAccount;
          }

          namespace BankTransfer {
            interface UsBankAccount {
              /**
               * The name of the bank the debit originated from.
               */
              bank_name: string | null;

              /**
               * Open Enum. The bank network the debit was originated on.
               */
              network: 'ach';

              /**
               * The routing number of the bank that originated the debit.
               */
              routing_number: string | null;
            }
          }

          interface CardSpend {
            /**
             * The Issuing Authorization for this card_spend. Contains the reference id and the amount.
             */
            authorization: CardSpend.Authorization | null;

            /**
             * The list of card spend transactions. These contain the transaction reference ID and the amount.
             */
            card_transactions: Array<CardSpend.CardTransaction>;

            /**
             * The reference to the card object that resulted in the debit.
             */
            card_v1_id: string;
          }

          namespace CardSpend {
            interface Authorization {
              /**
               * Amount associated with this issuing authorization.
               */
              amount: Amount;

              /**
               * The reference to the v1 issuing authorization ID.
               */
              issuing_authorization_v1: string;
            }

            interface CardTransaction {
              /**
               * Amount associated with this issuing transaction.
               */
              amount: Amount;

              /**
               * The reference to the v1 issuing transaction ID.
               */
              issuing_transaction_v1: string;
            }
          }

          type Status =
            | 'canceled'
            | 'failed'
            | 'pending'
            | 'returned'
            | 'succeeded';

          interface StatusDetails {
            /**
             * Information that elaborates on the `failed` status of a ReceivedDebit.
             * It is only present when the ReceivedDebit status is `failed`.
             */
            failed: StatusDetails.Failed;
          }

          namespace StatusDetails {
            interface Failed {
              /**
               * Open Enum. The reason for the failure of the ReceivedDebit.
               */
              reason: Failed.Reason;
            }

            namespace Failed {
              type Reason =
                | 'financial_address_inactive'
                | 'insufficient_funds'
                | 'stripe_rejected';
            }
          }

          interface StatusTransitions {
            /**
             * The time when the ReceivedDebit was marked as `canceled`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
             */
            canceled_at: string | null;

            /**
             * The time when the ReceivedDebit was marked as `failed`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
             */
            failed_at: string | null;

            /**
             * The time when the ReceivedDebit was marked as `succeeded`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
             */
            succeeded_at: string | null;
          }

          type Type = 'bank_transfer' | 'card_spend' | 'external_debit';
        }
      }
    }
  }
}
