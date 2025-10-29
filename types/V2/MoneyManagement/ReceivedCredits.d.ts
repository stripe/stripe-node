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
          balance_transfer?: ReceivedCredit.BalanceTransfer;

          /**
           * This object stores details about the originating banking transaction that resulted in the ReceivedCredit. Present if `type` field value is `bank_transfer`.
           */
          bank_transfer?: ReceivedCredit.BankTransfer;

          /**
           * Time at which the ReceivedCredit was created.
           * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * Freeform string set by originator of the ReceivedCredit.
           */
          description?: string;

          /**
           * The amount and currency of the original/external credit request.
           */
          external_amount?: Amount;

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
          receipt_url?: string;

          /**
           * Open Enum. The status of the ReceivedCredit.
           */
          status: ReceivedCredit.Status;

          /**
           * This hash contains detailed information that elaborates on the specific status of the ReceivedCredit. e.g the reason behind a failure if the status is marked as `failed`.
           */
          status_details?: ReceivedCredit.StatusDetails;

          /**
           * Hash containing timestamps of when the object transitioned to a particular status.
           */
          status_transitions?: ReceivedCredit.StatusTransitions;

          /**
           * Open Enum. The type of flow that caused the ReceivedCredit.
           */
          type: ReceivedCredit.Type;
        }

        namespace ReceivedCredit {
          interface BalanceTransfer {
            /**
             * The ID of the account that owns the source object originated the ReceivedCredit.
             */
            from_account?: string;

            /**
             * Open Enum. The type of Stripe Money Movement that originated the ReceivedCredit.
             */
            type: BalanceTransfer.Type;

            /**
             * The ID of the outbound payment object that originated the ReceivedCredit.
             */
            outbound_payment?: string;

            /**
             * The ID of the outbound transfer object that originated the ReceivedCredit.
             */
            outbound_transfer?: string;

            /**
             * The ID of the payout object that originated the ReceivedCredit.
             */
            payout_v1?: string;
          }

          namespace BalanceTransfer {
            type Type = 'outbound_payment' | 'outbound_transfer' | 'payout_v1';
          }

          interface BankTransfer {
            /**
             * Financial Address on which funds for ReceivedCredit were received.
             */
            financial_address: string;

            /**
             * Open Enum. Indicates the origin of source from which external funds originated from.
             */
            origin_type: BankTransfer.OriginType;

            /**
             * Freeform string set by originator of the external ReceivedCredit.
             */
            statement_descriptor?: string;

            /**
             * Hash containing the transaction bank details. Present if `origin_type` field value is `gb_bank_account`.
             */
            gb_bank_account?: BankTransfer.GbBankAccount;

            /**
             * Hash containing the transaction bank details. Present if `origin_type` field value is `sepa_bank_account`.
             */
            sepa_bank_account?: BankTransfer.SepaBankAccount;

            /**
             * Hash containing the transaction bank details. Present if `origin_type` field value is `us_bank_account`.
             */
            us_bank_account?: BankTransfer.UsBankAccount;
          }

          namespace BankTransfer {
            interface GbBankAccount {
              /**
               * The bank name the transfer was received from.
               */
              account_holder_name?: string;

              /**
               * The bank name the transfer was received from.
               */
              bank_name?: string;

              /**
               * The last 4 digits of the account number that originated the transfer.
               */
              last4?: string;

              /**
               * Open Enum. The money transmission network used to send funds for this ReceivedCredit.
               */
              network: 'fps';

              /**
               * The sort code of the account that originated the transfer.
               */
              sort_code?: string;
            }

            type OriginType =
              | 'gb_bank_account'
              | 'sepa_bank_account'
              | 'us_bank_account';

            interface SepaBankAccount {
              /**
               * The account holder name of the bank account the transfer was received from.
               */
              account_holder_name?: string;

              /**
               * The bank name the transfer was received from.
               */
              bank_name?: string;

              /**
               * The BIC of the SEPA account.
               */
              bic?: string;

              /**
               * The origination country of the bank transfer.
               */
              country?: string;

              /**
               * The IBAN that originated the transfer.
               */
              iban?: string;

              /**
               * The money transmission network used to send funds for this ReceivedCredit.
               */
              network: 'sepa_credit_transfer';
            }

            interface UsBankAccount {
              /**
               * The bank name the transfer was received from.
               */
              bank_name?: string;

              /**
               * The last 4 digits of the account number that originated the transfer.
               */
              last4?: string;

              /**
               * Open Enum. The money transmission network used to send funds for this ReceivedCredit.
               */
              network: UsBankAccount.Network;

              /**
               * The routing number of the account that originated the transfer.
               */
              routing_number?: string;
            }

            namespace UsBankAccount {
              type Network = 'ach' | 'rtp' | 'us_domestic_wire';
            }
          }

          type Status = 'failed' | 'pending' | 'returned' | 'succeeded';

          interface StatusDetails {
            /**
             * Hash that provides additional information regarding the reason behind a `failed` ReceivedCredit status. It is only present when the ReceivedCredit status is `failed`.
             */
            failed?: StatusDetails.Failed;

            /**
             * Hash that provides additional information regarding the reason behind a `returned` ReceivedCredit status. It is only present when the ReceivedCredit status is `returned`.
             */
            returned?: StatusDetails.Returned;
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
            failed_at?: string;

            /**
             * Timestamp describing when the ReceivedCredit changed status to `returned`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
             */
            returned_at?: string;

            /**
             * Timestamp describing when the ReceivedCredit was marked as `succeeded`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
             */
            succeeded_at?: string;
          }

          type Type = 'balance_transfer' | 'bank_transfer' | 'external_credit';
        }
      }
    }
  }
}
