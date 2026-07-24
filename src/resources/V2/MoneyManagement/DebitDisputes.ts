// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class DebitDisputeResource extends StripeResource {
  /**
   * Retrieves a list of DebitDisputes.
   */
  list(
    params?: V2.MoneyManagement.DebitDisputeListParams,
    options?: RequestOptions
  ): V2ListPromise<DebitDispute> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/debit_disputes',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a new DebitDispute for a ReceivedDebit.
   */
  create(
    params: V2.MoneyManagement.DebitDisputeCreateParams,
    options?: RequestOptions
  ): Promise<Response<DebitDispute>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/debit_disputes',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an existing DebitDispute.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.DebitDisputeRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<DebitDispute>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/debit_disputes/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface DebitDispute {
  /**
   * The ID of a DebitDispute.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.debit_dispute';

  /**
   * The amount of the DebitDispute.
   */
  amount: V2Amount;

  /**
   * Details about the bank transfer dispute. Present if `type` field value is `bank_transfer`.
   */
  bank_transfer?: DebitDispute.BankTransfer;

  /**
   * Time at which the DebitDispute was created.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2026-03-23T13:22:18.123Z`.
   */
  created: string;

  /**
   * The Financial Account associated with the DebitDispute.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The ID of the ReceivedDebit that was disputed.
   */
  received_debit: string;

  /**
   * The status of the DebitDispute.
   */
  status: DebitDispute.Status;

  /**
   * Detailed information about the status of the DebitDispute.
   */
  status_details?: DebitDispute.StatusDetails;

  /**
   * The time at which the DebitDispute transitioned to a particular status.
   */
  status_transitions?: DebitDispute.StatusTransitions;

  /**
   * The type of the DebitDispute.
   */
  type: 'bank_transfer';
}
export namespace DebitDispute {
  export interface BankTransfer {
    /**
     * The bank network the dispute was originated on.
     */
    network: BankTransfer.Network;

    /**
     * The reason for the dispute.
     */
    reason?: BankTransfer.Reason;

    /**
     * The statement descriptor set by the originator of the debit.
     */
    statement_descriptor?: string;
  }

  export type Status = 'failed' | 'submitted' | 'succeeded' | OtherString;

  export interface StatusDetails {
    /**
     * Information that elaborates on the `failed` status of a DebitDispute.
     * It is only present when the DebitDispute status is `failed`.
     */
    failed: StatusDetails.Failed;
  }

  export interface StatusTransitions {
    /**
     * The time when the DebitDispute was marked as `failed`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2026-04-23T13:22:18.123Z`.
     */
    failed_at?: string;

    /**
     * The time when the DebitDispute was marked as `succeeded`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: `2026-04-23T13:22:18.123Z`.
     */
    succeeded_at?: string;
  }

  export namespace BankTransfer {
    export type Network = 'ach' | 'bacs' | OtherString;

    export type Reason =
      | 'beneficiary_unrecognized'
      | 'incorrect_amount_or_date'
      | 'mandate_canceled'
      | 'mandate_canceled_by_stripe'
      | 'no_advance_notice'
      | 'originator_requested'
      | 'signature_invalid'
      | 'unauthorized'
      | OtherString;
  }

  export namespace StatusDetails {
    export interface Failed {
      /**
       * The reason for the failure of the DebitDispute.
       */
      reason: 'unknown';
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface DebitDisputeCreateParams {
      /**
       * The ID of the ReceivedDebit to dispute.
       */
      received_debit: string;

      /**
       * Parameters for bank transfer disputes.
       */
      bank_transfer?: DebitDisputeCreateParams.BankTransfer;
    }

    export namespace DebitDisputeCreateParams {
      export interface BankTransfer {
        /**
         * The reason for the dispute.
         */
        reason?: BankTransfer.Reason;
      }

      export namespace BankTransfer {
        export type Reason =
          | 'incorrect_amount_or_date'
          | 'unauthorized'
          | OtherString;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface DebitDisputeRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface DebitDisputeListParams {
      /**
       * Filter by a Financial Account.
       */
      financial_account?: string;

      /**
       * The page limit.
       */
      limit?: number;

      /**
       * Filter by status.
       */
      status?: DebitDisputeListParams.Status;
    }

    export namespace DebitDisputeListParams {
      export type Status = 'failed' | 'submitted' | 'succeeded' | OtherString;
    }
  }
}
