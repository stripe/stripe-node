// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class ReceivedDebitMandateResource extends StripeResource {
  /**
   * Returns a list of ReceivedDebitMandates.
   */
  list(
    params?: V2.MoneyManagement.ReceivedDebitMandateListParams,
    options?: RequestOptions
  ): V2ListPromise<ReceivedDebitMandate> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/received_debit_mandates',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves the details of an existing ReceivedDebitMandate.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.ReceivedDebitMandateRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ReceivedDebitMandate>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/received_debit_mandates/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Cancels an active ReceivedDebitMandate.
   */
  cancel(
    id: string,
    params?: V2.MoneyManagement.ReceivedDebitMandateCancelParams,
    options?: RequestOptions
  ): Promise<Response<ReceivedDebitMandate>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/received_debit_mandates/${encodeURIComponent(
        id
      )}/cancel`,
      params,
      options
    ) as any;
  }
}
export interface ReceivedDebitMandate {
  /**
   * The unique identifier for the ReceivedDebitMandate.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.received_debit_mandate';

  /**
   * This object stores details about the originating bank transfer that resulted in the ReceivedDebitMandate. Present if `type` field value is `bank_transfer`.
   */
  bank_transfer?: ReceivedDebitMandate.BankTransfer;

  /**
   * The time at which the ReceivedDebitMandate was created.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2026-06-03T13:22:18.123Z`.
   */
  created: string;

  /**
   * The currency of the ReceivedDebitMandate in ISO 4217 format. This is the currency that debits will be collected in.
   */
  currency: string;

  /**
   * Financial account ID associated with this mandate.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The status of the ReceivedDebitMandate.
   */
  status: ReceivedDebitMandate.Status;

  /**
   * Detailed information that elaborates on the specific status of the ReceivedDebitMandate.
   */
  status_details?: ReceivedDebitMandate.StatusDetails;

  /**
   * Timestamps describing when the mandate changed status.
   */
  status_transitions?: ReceivedDebitMandate.StatusTransitions;

  /**
   * The type of the ReceivedDebitMandate.
   */
  type: 'bank_transfer';
}
export namespace ReceivedDebitMandate {
  export interface BankTransfer {
    /**
     * The name of the account holder that initiated the debit.
     */
    account_holder_name?: string;

    /**
     * The financial address associated with this mandate.
     */
    financial_address: string;

    /**
     * The bank transfer network for this mandate.
     */
    network: 'bacs';

    /**
     * The bank transfer reference provided by the bank.
     */
    reference?: string;
  }

  export type Status =
    | 'active'
    | 'canceled'
    | 'expired'
    | 'pending_cancellation'
    | OtherString;

  export interface StatusDetails {
    /**
     * If the mandate is canceled, this field provides more details on the cancellation reason.
     */
    canceled?: StatusDetails.Canceled;
  }

  export interface StatusTransitions {
    /**
     * Timestamp describing when the ReceivedDebitMandate changed status to `active`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision.
     */
    activated_at?: string;

    /**
     * Timestamp describing when the ReceivedDebitMandate changed status to `canceled`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision for example: 2026-06-03T13:22:18.123Z.
     */
    canceled_at?: string;

    /**
     * Timestamp describing when the ReceivedDebitMandate was created.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision for example: 2026-06-03T13:22:18.123Z.
     */
    created_at?: string;

    /**
     * Timestamp describing when the ReceivedDebitMandate changed status to `expired`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2026-06-03T13:22:18.123Z.
     */
    expired_at?: string;

    /**
     * Timestamp describing when the ReceivedDebitMandate changed status to `pending_cancellation`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision.
     */
    pending_cancellation_at?: string;
  }

  export namespace StatusDetails {
    export interface Canceled {
      /**
       * The `canceled` status reason.
       */
      reason: Canceled.Reason;
    }

    export namespace Canceled {
      export type Reason =
        | 'canceled_by_beneficiary'
        | 'canceled_by_stripe'
        | 'user_action'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface ReceivedDebitMandateRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface ReceivedDebitMandateListParams {
      /**
       * The ID of the FinancialAccount to filter by.
       */
      financial_account?: string;

      /**
       * The page limit.
       */
      limit?: number;

      /**
       * Filter by mandate status.
       */
      statuses?: Array<ReceivedDebitMandateListParams.Status>;

      /**
       * The type of ReceivedDebitMandate to filter by.
       */
      type?: 'bank_transfer';
    }

    export namespace ReceivedDebitMandateListParams {
      export type Status =
        | 'active'
        | 'canceled'
        | 'expired'
        | 'pending_cancellation'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface ReceivedDebitMandateCancelParams {}
  }
}
