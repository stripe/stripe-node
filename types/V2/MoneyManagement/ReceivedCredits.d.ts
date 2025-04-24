// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * Use ReceivedCredits API to retrieve information on when, where, and how funds are sent into your FinancialAccount.
         */
        interface ReceivedCredit {
          /**
           * Unique identifier for the ReceivedCredit.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.received_credit';

          /**
           * The amount and currency of the ReceivedCredit.
           */
          amount: Amount;

          /**
           * This object stores details about the originating Stripe transaction that resulted in the ReceivedCredit. Present if `type` field value is `balance_transfer`.
           */
          balance_transfer: ReceivedCredit.BalanceTransfer | null;

          /**
           * This object stores details about the originating banking transaction that resulted in the ReceivedCredit. Present if `type` field value is `external_credit`.
           */
          bank_transfer: ReceivedCredit.BankTransfer | null;

          /**
           * This object stores details about the originating issuing card spend that resulted in the ReceivedCredit. Present if `type` field value is `card_spend`.
           */
          card_spend: ReceivedCredit.CardSpend | null;

          /**
           * Time at which the ReceivedCredit was created.
           * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * Freeform string set by originator of the ReceivedCredit.
           */
          description: string | null;

          /**
           * Financial Account ID on which funds for ReceivedCredit were received.
           */
          financial_account: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * A hosted transaction receipt URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
           */
          receipt_url: string | null;

          /**
           * Open Enum. The status of the ReceivedCredit.
           */
          status: ReceivedCredit.Status;

          /**
           * This hash contains detailed information that elaborates on the specific status of the ReceivedCredit. e.g the reason behind a failure if the status is marked as `failed`.
           */
          status_details: ReceivedCredit.StatusDetails | null;

          /**
           * Hash containing timestamps of when the object transitioned to a particular status.
           */
          status_transitions: ReceivedCredit.StatusTransitions | null;

          /**
           * Open Enum. The type of flow that caused the ReceivedCredit.
           */
          type: ReceivedCredit.Type;
        }

        namespace ReceivedCredit {
          interface BalanceTransfer {
            /**
             * The ID of the Stripe Money Movement that originated the ReceivedCredit.
             */
            payout_v1: string;

            /**
             * Open Enum. The type of Stripe Money Movement that originated the ReceivedCredit.
             */
            type: 'payout_v1';
          }

          interface BankTransfer {
            /**
             * Financial Address on which funds for ReceivedCredit were received.
             */
            financial_address: string;

            /**
             * Open Enum. Indicates the type of source via from which external funds originated.
             */
            payment_method_type: BankTransfer.PaymentMethodType;

            /**
             * Freeform string set by originator of the external ReceivedCredit.
             */
            statement_descriptor: string | null;

            /**
             * Hash containing the transaction bank details. Present if `payment_method_type` field value is `gb_bank_account`.
             */
            gb_bank_account: BankTransfer.GbBankAccount | null;

            /**
             * Hash containing the transaction bank details. Present if `payment_method_type` field value is `us_bank_account`.
             */
            us_bank_account: BankTransfer.UsBankAccount | null;
          }

          namespace BankTransfer {
            interface GbBankAccount {
              /**
               * The bank name the transfer was received from.
               */
              account_holder_name: string | null;

              /**
               * The bank name the transfer was received from.
               */
              bank_name: string | null;

              /**
               * The last 4 digits of the account number that originated the transfer.
               */
              last4: string | null;

              /**
               * Open Enum. The money transmission network used to send funds for this ReceivedCredit.
               */
              network: 'fps';

              /**
               * The sort code of the account that originated the transfer.
               */
              sort_code: string | null;
            }

            type PaymentMethodType = 'gb_bank_account' | 'us_bank_account';

            interface UsBankAccount {
              /**
               * The bank name the transfer was received from.
               */
              bank_name: string | null;

              /**
               * The last 4 digits of the account number that originated the transfer.
               */
              last4: string | null;

              /**
               * Open Enum. The money transmission network used to send funds for this ReceivedCredit.
               */
              network: UsBankAccount.Network;

              /**
               * The routing number of the account that originated the transfer.
               */
              routing_number: string | null;
            }

            namespace UsBankAccount {
              type Network = 'ach' | 'rtp' | 'us_domestic_wire';
            }
          }

          interface CardSpend {
            /**
             * The reference to the issuing card object.
             */
            card_v1_id: string;

            /**
             * Hash containing information about the Dispute that triggered this credit.
             */
            dispute: CardSpend.Dispute | null;

            /**
             * Hash containing information about the Refund that triggered this credit.
             */
            refund: CardSpend.Refund | null;
          }

          namespace CardSpend {
            interface Dispute {
              /**
               * The reference to the v1 issuing dispute ID.
               */
              issuing_dispute_v1: string;
            }

            interface Refund {
              /**
               * The reference to the v1 issuing transaction ID.
               */
              issuing_transaction_v1: string;
            }
          }

          type Status = 'failed' | 'pending' | 'returned' | 'succeeded';

          interface StatusDetails {
            /**
             * Hash that provides additional information regarding the reason behind a `failed` ReceivedCredit status. It is only present when the ReceivedCredit status is `failed`.
             */
            failed: StatusDetails.Failed | null;

            /**
             * Hash that provides additional information regarding the reason behind a `returned` ReceivedCredit status. It is only present when the ReceivedCredit status is `returned`.
             */
            returned: StatusDetails.Returned | null;
          }

          namespace StatusDetails {
            interface Failed {
              /**
               * Open Enum. The `failed` status reason.
               */
              reason: Failed.Reason;
            }

            namespace Failed {
              type Reason =
                | 'capability_inactive'
                | 'currency_unsupported_on_financial_address'
                | 'financial_address_inactive'
                | 'stripe_rejected';
            }

            interface Returned {
              /**
               * Open Enum. The `returned` status reason.
               */
              reason: 'originator_initiated_reversal';
            }
          }

          interface StatusTransitions {
            /**
             * Timestamp describing when the ReceivedCredit was marked as `failed`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
             */
            failed_at: string | null;

            /**
             * Timestamp describing when the ReceivedCredit changed status to `returned`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
             */
            returned_at: string | null;

            /**
             * Timestamp describing when the ReceivedCredit was marked as `succeeded`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
             */
            succeeded_at: string | null;
          }

          type Type =
            | 'balance_transfer'
            | 'bank_transfer'
            | 'card_spend'
            | 'external_credit';
        }
      }
    }
  }
}
