// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class DisputeAdjustmentResource extends StripeResource {
  /**
   * Retrieves a list of DisputeAdjustments.
   */
  list(
    params?: V2.MoneyManagement.DisputeAdjustmentListParams,
    options?: RequestOptions
  ): V2ListPromise<DisputeAdjustment> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/dispute_adjustments',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves a DisputeAdjustment by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.DisputeAdjustmentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<DisputeAdjustment>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/dispute_adjustments/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface DisputeAdjustment {
  /**
   * Unique identifier for the DisputeAdjustment.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.dispute_adjustment';

  /**
   * The amount and currency of the DisputeAdjustment.
   */
  amount: V2Amount;

  /**
   * The time at which the DisputeAdjustment was created.
   */
  created: string;

  /**
   * The ID of the FinancialAccount associated with the DisputeAdjustment.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The Dispute associated with this DisputeAdjustment.
   */
  related_dispute: DisputeAdjustment.RelatedDispute;
}
export namespace DisputeAdjustment {
  export interface RelatedDispute {
    /**
     * The ID of the Dispute associated with this DisputeAdjustment. Present when `type` is `dispute`.
     */
    dispute?: string;

    /**
     * The type of Dispute associated with this DisputeAdjustment.
     */
    type: RelatedDispute.Type;
  }

  export namespace RelatedDispute {
    export type Type = 'dispute' | OtherString;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface DisputeAdjustmentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface DisputeAdjustmentListParams {
      /**
       * Filter results by the ID of the FinancialAccount associated with the DisputeAdjustment.
       */
      financial_account?: string;

      /**
       * Maximum number of results to return, between 1 and 100. Defaults to 10.
       */
      limit?: number;

      /**
       * Filter results by the ID of the Dispute associated with the DisputeAdjustment.
       */
      related_dispute?: string;
    }
  }
}
