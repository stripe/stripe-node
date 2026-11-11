// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class SpendingMandateResource extends StripeResource {
  /**
   * Returns a list of SpendingMandates.
   */
  list(
    params?: V2.MoneyManagement.SpendingMandateListParams,
    options?: RequestOptions
  ): V2ListPromise<SpendingMandate> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/spending_mandates',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves the details of an existing SpendingMandate.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.SpendingMandateRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<SpendingMandate>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/spending_mandates/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Cancels an active SpendingMandate.
   */
  cancel(
    id: string,
    params?: V2.MoneyManagement.SpendingMandateCancelParams,
    options?: RequestOptions
  ): Promise<Response<SpendingMandate>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/spending_mandates/${encodeURIComponent(id)}/cancel`,
      params,
      options
    ) as any;
  }
}
export interface SpendingMandate {
  /**
   * The unique identifier for the SpendingMandate.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.spending_mandate';

  /**
   * Bank transfer details. Present if `type` is `bank_transfer`.
   */
  bank_transfer?: SpendingMandate.BankTransfer;

  /**
   * The time at which the SpendingMandate was created.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision.
   */
  created: string;

  /**
   * The currency in ISO 4217 format that debits will be collected in.
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
   * The status of the SpendingMandate.
   */
  status: SpendingMandate.Status;

  /**
   * Detailed information about the status of the SpendingMandate.
   */
  status_details?: SpendingMandate.StatusDetails;

  /**
   * Timestamps describing when the mandate changed status.
   */
  status_transitions?: SpendingMandate.StatusTransitions;

  /**
   * The type of the SpendingMandate.
   */
  type: SpendingMandate.Type;
}
export namespace SpendingMandate {
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
    network: BankTransfer.Network;

    /**
     * The bank transfer reference provided by the bank. Only present when `network` is `bacs`.
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
     * Timestamp describing when the SpendingMandate changed status to `active`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision.
     */
    activated_at?: string;

    /**
     * Timestamp describing when the SpendingMandate changed status to `canceled`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision.
     */
    canceled_at?: string;

    /**
     * Timestamp describing when the SpendingMandate was created.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision.
     */
    created_at?: string;

    /**
     * Timestamp describing when the SpendingMandate changed status to `expired`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision.
     */
    expired_at?: string;

    /**
     * Timestamp describing when the SpendingMandate changed status to `pending_cancellation`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision.
     */
    pending_cancellation_at?: string;
  }

  export type Type = 'bank_transfer' | OtherString;

  export namespace BankTransfer {
    export type Network = 'bacs' | OtherString;
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
    export interface SpendingMandateRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface SpendingMandateListParams {
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
      statuses?: Array<SpendingMandateListParams.Status>;

      /**
       * The type of SpendingMandate to filter by.
       */
      type?: SpendingMandateListParams.Type;
    }

    export namespace SpendingMandateListParams {
      export type Status =
        | 'active'
        | 'canceled'
        | 'expired'
        | 'pending_cancellation'
        | OtherString;

      export type Type = 'bank_transfer' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface SpendingMandateCancelParams {}
  }
}
