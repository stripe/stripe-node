// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class ReceivedDebitResource extends StripeResource {
  /**
   * Retrieves a list of ReceivedDebits, given the selected filters.
   */
  list(
    params?: V2.MoneyManagement.ReceivedDebitListParams,
    options?: RequestOptions
  ): V2ListPromise<ReceivedDebit> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/received_debits',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves a single ReceivedDebit by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.ReceivedDebitRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ReceivedDebit>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/received_debits/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface ReceivedDebit {
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
  amount: V2Amount;

  /**
   * This object stores details about the balance transfer object that resulted in the ReceivedDebit.
   */
  balance_transfer?: ReceivedDebit.BalanceTransfer;

  /**
   * This object stores details about the originating banking transaction that resulted in the ReceivedDebit. Present if `type` field value is `bank_transfer`.
   */
  bank_transfer?: ReceivedDebit.BankTransfer;

  /**
   * This object stores details about the issuing transactions that resulted in the ReceivedDebit. Present if `type` field value is `card_spend`.
   */
  card_spend?: ReceivedDebit.CardSpend;

  /**
   * The time at which the ReceivedDebit was created.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
   */
  created: string;

  /**
   * Freeform string sent by the originator of the ReceivedDebit.
   */
  description?: string;

  /**
   * The dispute details.
   */
  dispute_details?: ReceivedDebit.DisputeDetails;

  /**
   * The amount and currency of the original/external debit request.
   */
  external_amount?: V2Amount;

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
  receipt_url?: string;

  /**
   * The time at which the scheduled ReceivedDebit is expected to settle.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
   * Only present when status is `scheduled`.
   */
  settles_at?: string;

  /**
   * Open Enum. The status of the ReceivedDebit.
   */
  status: ReceivedDebit.Status;

  /**
   * Detailed information about the status of the ReceivedDebit.
   */
  status_details?: ReceivedDebit.StatusDetails;

  /**
   * The time at which the ReceivedDebit transitioned to a particular status.
   */
  status_transitions?: ReceivedDebit.StatusTransitions;

  /**
   * This object stores details about the Stripe Balance Payment that resulted in the ReceivedDebit.
   */
  stripe_balance_payment?: ReceivedDebit.StripeBalancePayment;

  /**
   * Open Enum. The type of the ReceivedDebit.
   */
  type: ReceivedDebit.Type;
}
export namespace ReceivedDebit {
  export interface BalanceTransfer {
    /**
     * The ID of the topup object that originated the ReceivedDebit.
     */
    topup?: string;

    /**
     * Open Enum. The type of balance transfer that originated the ReceivedDebit.
     */
    type: 'topup';
  }

  export interface BankTransfer {
    /**
     * The Financial Address that was debited.
     */
    financial_address: string;

    /**
     * Object containing details of the GB Bank Account that originated the debit.
     * Present when the debit was originated via BACS.
     */
    gb_bank_account?: BankTransfer.GbBankAccount;

    /**
     * Open Enum. Indicates the origin type through which this debit was initiated.
     */
    origin_type: BankTransfer.OriginType;

    /**
     * Open Enum. The type of the payment method used to originate the debit.
     */
    payment_method_type: BankTransfer.PaymentMethodType;

    /**
     * The statement descriptor set by the originator of the debit.
     */
    statement_descriptor?: string;

    /**
     * Object containing details of the US Bank Account that originated the debit.
     * Present when the debit was originated via ACH.
     */
    us_bank_account?: BankTransfer.UsBankAccount;
  }

  export interface CardSpend {
    /**
     * The Issuing Authorization for this card_spend. Contains the reference id and the amount.
     */
    authorization?: CardSpend.Authorization;

    /**
     * The list of card spend transactions. These contain the transaction reference ID and the amount.
     */
    card_transactions: Array<CardSpend.CardTransaction>;

    /**
     * The reference to the card object that resulted in the debit.
     */
    card_v1_id: string;
  }

  export interface DisputeDetails {
    /**
     * The ID of the debit dispute, if one has been created.
     */
    debit_dispute?: string;

    /**
     * The time at which the dispute window closes.
     */
    dispute_window_closes_at?: string;
  }

  export type Status =
    | 'canceled'
    | 'failed'
    | 'pending'
    | 'returned'
    | 'scheduled'
    | 'succeeded'
    | OtherString;

  export interface StatusDetails {
    /**
     * Information that elaborates on the `failed` status of a ReceivedDebit.
     * It is only present when the ReceivedDebit status is `failed`.
     */
    failed: StatusDetails.Failed;

    /**
     * Information that elaborates on the `returned` status of a ReceivedDebit.
     * It is only present when the ReceivedDebit status is `returned`.
     */
    returned: StatusDetails.Returned;
  }

  export interface StatusTransitions {
    /**
     * The time when the ReceivedDebit was marked as `canceled`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
     */
    canceled_at?: string;

    /**
     * The time when the ReceivedDebit was marked as `failed`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
     */
    failed_at?: string;

    /**
     * The time when the ReceivedDebit was marked as `returned`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
     */
    returned_at?: string;

    /**
     * The time when the ReceivedDebit was marked as `succeeded`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2022-09-18T13:22:18.123Z`.
     */
    succeeded_at?: string;
  }

  export interface StripeBalancePayment {
    /**
     * ID of the debit agreement associated with this payment.
     */
    debit_agreement?: string;

    /**
     * Statement descriptor for the Stripe Balance Payment.
     */
    statement_descriptor?: string;
  }

  export type Type =
    | 'balance_transfer'
    | 'bank_transfer'
    | 'card_spend'
    | 'external_debit'
    | 'stripe_balance_payment'
    | OtherString;

  export namespace BankTransfer {
    export interface GbBankAccount {
      /**
       * The name of the account holder that originated the debit.
       */
      account_holder_name?: string;

      /**
       * The name of the bank the debit originated from.
       */
      bank_name?: string;

      /**
       * Last 4 digits of the bank account number.
       */
      last4?: string;

      /**
       * Open Enum. The bank network the debit was originated on.
       */
      network: 'bacs';

      /**
       * The ID of the mandate associated with this debit.
       */
      received_debit_mandate?: string;

      /**
       * The sort code of the bank that originated the debit.
       */
      sort_code?: string;
    }

    export type OriginType =
      | 'gb_bank_account'
      | 'us_bank_account'
      | OtherString;

    export type PaymentMethodType =
      | 'gb_bank_account'
      | 'us_bank_account'
      | OtherString;

    export interface UsBankAccount {
      /**
       * The name of the bank the debit originated from.
       */
      bank_name?: string;

      /**
       * Open Enum. The bank network the debit was originated on.
       */
      network: 'ach';

      /**
       * The routing number of the bank that originated the debit.
       */
      routing_number?: string;
    }
  }

  export namespace CardSpend {
    export interface Authorization {
      /**
       * Amount associated with this issuing authorization.
       */
      amount: V2Amount;

      /**
       * The reference to the v1 issuing authorization ID.
       */
      issuing_authorization_v1: string;
    }

    export interface CardTransaction {
      /**
       * Amount associated with this issuing transaction.
       */
      amount: V2Amount;

      /**
       * The reference to the v1 issuing transaction ID.
       */
      issuing_transaction_v1: string;
    }
  }

  export namespace StatusDetails {
    export interface Failed {
      /**
       * Open Enum. The reason for the failure of the ReceivedDebit.
       */
      reason: Failed.Reason;
    }

    export interface Returned {
      /**
       * Open Enum. The reason the ReceivedDebit was returned.
       */
      reason: 'originator_initiated';
    }

    export namespace Failed {
      export type Reason =
        | 'capability_inactive'
        | 'financial_address_inactive'
        | 'insufficient_funds'
        | 'no_mandate'
        | 'stripe_rejected'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface ReceivedDebitRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface ReceivedDebitListParams {
      /**
       * The page limit.
       */
      limit?: number;

      /**
       * Filter by the received debit mandate ID.
       */
      received_debit_mandate?: string;
    }
  }
}
