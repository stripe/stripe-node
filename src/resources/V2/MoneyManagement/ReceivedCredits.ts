// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {RangeQueryParam, OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class ReceivedCreditResource extends StripeResource {
  /**
   * Retrieves a list of ReceivedCredits.
   */
  list(
    params?: V2.MoneyManagement.ReceivedCreditListParams,
    options?: RequestOptions
  ): V2ListPromise<ReceivedCredit> {
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
      `/v2/money_management/received_credits/${encodeURIComponent(id)}`,
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
   * The amount and currency credited to the FinancialAccount.
   */
  amount: V2Amount;

  /**
   * The amount and currency Stripe received from the external source, before any conversion or fees.
   */
  amount_received: V2Amount;

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
   * Financial Account ID on which funds for ReceivedCredit were received.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

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
    payout?: string;

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
     * Financial Address on which funds for ReceivedCredit were received.
     */
    financial_address: string;

    /**
     * The money transmission network used to send funds for this ReceivedCredit.
     */
    network: BankTransfer.Network;

    /**
     * Hash containing the originating bank account details and type for this bank transfer.
     */
    originating_bank_account: BankTransfer.OriginatingBankAccount;

    /**
     * Freeform string set by originator of the external ReceivedCredit.
     */
    statement_descriptor?: string;
  }

  export type Status =
    | 'failed'
    | 'pending'
    | 'returned'
    | 'succeeded'
    | OtherString;

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

  export type Type = 'balance_transfer' | 'bank_transfer' | OtherString;

  export namespace BalanceTransfer {
    export type Type =
      | 'outbound_payment'
      | 'outbound_transfer'
      | 'payout'
      | 'transfer'
      | OtherString;
  }

  export namespace BankTransfer {
    export type Network =
      | 'ach'
      | 'chaps'
      | 'fedwire'
      | 'fps'
      | 'rtp'
      | 'sepa'
      | 'sepa_instant'
      | OtherString;

    export interface OriginatingBankAccount {
      /**
       * Hash containing the transaction bank details. Present if `type` field value is `aba`.
       */
      aba?: OriginatingBankAccount.Aba;

      /**
       * Hash containing the transaction bank details. Present if `type` field value is `iban`.
       */
      iban?: OriginatingBankAccount.Iban;

      /**
       * Hash containing the transaction bank details. Present if `type` field value is `sort_code`.
       */
      sort_code?: OriginatingBankAccount.SortCode;

      /**
       * Open Enum. The type of bank transfer that originated this ReceivedCredit.
       */
      type: OriginatingBankAccount.Type;
    }

    export namespace OriginatingBankAccount {
      export interface Aba {
        /**
         * The name of the account holder that sent the payment.
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
         * The routing number of the account that originated the transfer.
         */
        routing_number?: string;
      }

      export interface Iban {
        /**
         * The account holder name of the bank account the transfer was received from.
         */
        account_holder_name?: string;

        /**
         * The bank name the transfer was received from.
         */
        bank_name?: string;

        /**
         * The BIC/SWIFT code of the account that originated the transfer.
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
      }

      export interface SortCode {
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
         */
        last4?: string;

        /**
         * The sort code of the account that originated the transfer.
         */
        sort_code?: string;
      }

      export type Type = 'aba' | 'iban' | 'sort_code' | OtherString;
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
      reason: Returned.Reason;
    }

    export namespace Failed {
      export type Reason =
        | 'capability_inactive'
        | 'currency_unsupported_on_financial_address'
        | 'financial_address_inactive'
        | 'stripe_rejected'
        | OtherString;
    }

    export namespace Returned {
      export type Reason = 'originator_initiated_reversal' | OtherString;
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
       * Hash of options for filtering on creation time.
       */
      created?: RangeQueryParam;

      /**
       * The page limit.
       */
      limit?: number;
    }
  }
}
