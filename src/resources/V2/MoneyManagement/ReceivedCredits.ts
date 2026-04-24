// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class ReceivedCreditResource extends StripeResource {
  /**
   * Retrieves a list of ReceivedCredits.
   */
  list(
    params?: V2.MoneyManagement.ReceivedCreditListParams,
    options?: RequestOptions
  ): ApiListPromise<ReceivedCredit> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/received_credits',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieve a ReceivedCredit by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.ReceivedCreditRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ReceivedCredit>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/received_credits/${id}`,
      params,
      options
    ) as any;
  }
}
export interface ReceivedCredit {
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
  amount: V2Amount;

  /**
   * This object stores details about the originating Stripe transaction that resulted in the ReceivedCredit. Present if `type` field value is `balance_transfer`.
   */
  balance_transfer?: V2.MoneyManagement.ReceivedCredit.BalanceTransfer;

  /**
   * This object stores details about the originating banking transaction that resulted in the ReceivedCredit. Present if `type` field value is `bank_transfer`.
   */
  bank_transfer?: V2.MoneyManagement.ReceivedCredit.BankTransfer;

  /**
   * This object stores details about the originating issuing card spend that resulted in the ReceivedCredit. Present if `type` field value is `card_spend`.
   */
  card_spend?: V2.MoneyManagement.ReceivedCredit.CardSpend;

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
  external_amount?: V2Amount;

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
  status: V2.MoneyManagement.ReceivedCredit.Status;

  /**
   * This hash contains detailed information that elaborates on the specific status of the ReceivedCredit. e.g the reason behind a failure if the status is marked as `failed`.
   */
  status_details?: V2.MoneyManagement.ReceivedCredit.StatusDetails;

  /**
   * Hash containing timestamps of when the object transitioned to a particular status.
   */
  status_transitions?: V2.MoneyManagement.ReceivedCredit.StatusTransitions;

  /**
   * This object stores details about the stripe balance pay refund that resulted in the ReceivedCredit. Present if `type` field value is `stripe_balance_payment`.
   */
  stripe_balance_payment?: V2.MoneyManagement.ReceivedCredit.StripeBalancePayment;

  /**
   * Open Enum. The type of flow that caused the ReceivedCredit.
   */
  type: V2.MoneyManagement.ReceivedCredit.Type;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace ReceivedCredit {
      export interface BalanceTransfer {
        /**
         * The ID of the account that owns the source object originated the ReceivedCredit.
         */
        from_account?: string;

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

        /**
         * The ID of the v1 transfer object that originated the ReceivedCredit.
         */
        transfer?: string;

        /**
         * Open Enum. The type of Stripe Money Movement that originated the ReceivedCredit.
         */
        type: BalanceTransfer.Type;
      }

      export interface BankTransfer {
        /**
         * Hash containing the transaction bank details. Present if `origin_type` field value is `ca_bank_account`.
         */
        ca_bank_account?: BankTransfer.CaBankAccount;

        /**
         * Financial Address on which funds for ReceivedCredit were received.
         */
        financial_address: string;

        /**
         * Hash containing the transaction bank details. Present if `origin_type` field value is `gb_bank_account`.
         */
        gb_bank_account?: BankTransfer.GbBankAccount;

        /**
         * Open Enum. Indicates the origin of source from which external funds originated from.
         */
        origin_type: BankTransfer.OriginType;

        /**
         * Hash containing the transaction bank details. Present if `origin_type` field value is `sepa_bank_account`.
         */
        sepa_bank_account?: BankTransfer.SepaBankAccount;

        /**
         * Freeform string set by originator of the external ReceivedCredit.
         */
        statement_descriptor?: string;

        /**
         * Hash containing the transaction bank details. Present if `origin_type` field value is `us_bank_account`.
         */
        us_bank_account?: BankTransfer.UsBankAccount;
      }

      export interface CardSpend {
        /**
         * The reference to the issuing card object.
         */
        card_v1_id: string;

        /**
         * Hash containing information about the Dispute that triggered this credit.
         */
        dispute?: CardSpend.Dispute;

        /**
         * Hash containing information about the Refund that triggered this credit.
         */
        refund?: CardSpend.Refund;
      }

      export type Status = 'failed' | 'pending' | 'returned' | 'succeeded';

      export interface StatusDetails {
        /**
         * Hash that provides additional information regarding the reason behind a `failed` ReceivedCredit status. It is only present when the ReceivedCredit status is `failed`.
         */
        failed?: StatusDetails.Failed;

        /**
         * Hash that provides additional information regarding the reason behind a `returned` ReceivedCredit status. It is only present when the ReceivedCredit status is `returned`.
         */
        returned?: StatusDetails.Returned;
      }

      export interface StatusTransitions {
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

      export interface StripeBalancePayment {
        /**
         * Statement descriptor for the Stripe Balance Payment.
         */
        statement_descriptor?: string;
      }

      export type Type =
        | 'balance_transfer'
        | 'bank_transfer'
        | 'card_spend'
        | 'external_credit'
        | 'stripe_balance_payment';

      export namespace BalanceTransfer {
        export type Type =
          | 'outbound_payment'
          | 'outbound_transfer'
          | 'transfer'
          | 'payout_v1';
      }

      export namespace BankTransfer {
        export interface CaBankAccount {
          /**
           * The account holder name of the bank account the transfer was received from.
           */
          account_holder_name?: string;

          /**
           * The bank name the transfer was received from.
           */
          bank_name?: string;

          /**
           * The last 4 digits of the account number that originated the transfer.
           * Depending on the bank, this may instead be the last 4 digits of the return account number.
           */
          last4?: string;

          /**
           * Open Enum. The money transmission network used to send funds for this ReceivedCredit.
           */
          network: 'acss';
        }

        export interface GbBankAccount {
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

        export type OriginType =
          | 'ca_bank_account'
          | 'gb_bank_account'
          | 'sepa_bank_account'
          | 'us_bank_account';

        export interface SepaBankAccount {
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

        export interface UsBankAccount {
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

        export namespace UsBankAccount {
          export type Network = 'ach' | 'rtp' | 'us_domestic_wire';
        }
      }

      export namespace CardSpend {
        export interface Dispute {
          /**
           * The reference to the v1 issuing dispute ID.
           */
          issuing_dispute_v1: string;
        }

        export interface Refund {
          /**
           * The reference to the v1 issuing transaction ID.
           */
          issuing_transaction_v1: string;
        }
      }

      export namespace StatusDetails {
        export interface Failed {
          /**
           * Open Enum. The `failed` status reason.
           */
          reason: Failed.Reason;
        }

        export interface Returned {
          /**
           * Open Enum. The `returned` status reason.
           */
          reason: 'originator_initiated_reversal';
        }

        export namespace Failed {
          export type Reason =
            | 'capability_inactive'
            | 'currency_unsupported_on_financial_address'
            | 'financial_address_inactive'
            | 'stripe_rejected';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface ReceivedCreditRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface ReceivedCreditListParams {
      /**
       * Filter for objects created at the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created?: string;

      /**
       * Filter for objects created after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gt?: string;

      /**
       * Filter for objects created on or after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gte?: string;

      /**
       * Filter for objects created before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lt?: string;

      /**
       * Filter for objects created on or before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lte?: string;

      /**
       * The page limit.
       */
      limit?: number;
    }
  }
}
