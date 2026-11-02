// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class InboundFundingResource extends StripeResource {
  /**
   * Lists InboundFundings.
   */
  list(
    params?: V2.MoneyManagement.InboundFundingListParams,
    options?: RequestOptions
  ): V2ListPromise<InboundFunding> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/inbound_fundings',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves an InboundFunding by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.InboundFundingRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<InboundFunding>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/inbound_fundings/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface InboundFunding {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.inbound_funding';

  /**
   * The amount of the InboundFunding.
   */
  amount: V2Amount;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * An arbitrary string attached to the InboundFunding.
   */
  description?: string;

  /**
   * The source of the funds.
   */
  from: InboundFunding.From;

  /**
   * The check lifecycle history.
   */
  history: Array<InboundFunding.History>;

  /**
   * Whether the InboundFunding exists in live mode.
   */
  livemode: boolean;

  /**
   * The current status of the InboundFunding.
   */
  status: InboundFunding.Status;

  /**
   * The destination for the funds.
   */
  to: InboundFunding.To;
}
export namespace InboundFunding {
  export interface From {
    /**
     * The amount debited from the source.
     */
    debited: V2Amount;

    /**
     * The payment method that funds the InboundFunding.
     */
    payment_method: From.PaymentMethod;
  }

  export interface History {
    /**
     * Details of the transition to failed.
     */
    check_failed?: History.CheckFailed;

    /**
     * Details of the transition to processing.
     */
    check_processing?: History.CheckProcessing;

    /**
     * Details of the transition to queued.
     */
    check_queued?: History.CheckQueued;

    /**
     * Details of the transition to returned.
     */
    check_returned?: History.CheckReturned;

    /**
     * Details of the transition to succeeded.
     */
    check_succeeded?: History.CheckSucceeded;

    /**
     * Time at which the object was created.
     */
    created: string;

    /**
     * Time at which the history entry took effect.
     */
    effective_at: string;

    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * The type of this object.
     */
    type: History.Type;
  }

  export type Status =
    | 'failed'
    | 'processing'
    | 'queued'
    | 'returned'
    | 'succeeded'
    | OtherString;

  export interface To {
    /**
     * The amount credited to the destination.
     */
    credited: V2Amount;

    /**
     * The ID of the destination FinancialAccount.
     */
    financial_account: string;
  }

  export namespace From {
    export interface PaymentMethod {
      /**
       * The type of this object.
       */
      type: string;

      /**
       * The ID of the paper check.
       */
      us_paper_check?: string;
    }
  }

  export namespace History {
    export interface CheckFailed {
      /**
       * The raw banking-partner failure code, when available.
       */
      failure_code?: string;

      /**
       * The reason the check failed.
       */
      failure_reason?: string;
    }

    export interface CheckProcessing {}

    export interface CheckQueued {}

    export interface CheckReturned {
      /**
       * The raw banking-partner return code, when available.
       */
      return_code?: string;

      /**
       * The reason the check was returned.
       */
      return_reason?: string;

      /**
       * The ID of the reversal Transaction.
       */
      reversal_transaction?: string;
    }

    export interface CheckSucceeded {}

    export type Type =
      | 'check_failed'
      | 'check_processing'
      | 'check_queued'
      | 'check_returned'
      | 'check_succeeded'
      | OtherString;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface InboundFundingRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface InboundFundingListParams {
      /**
       * The maximum number of results to return.
       */
      limit?: number;
    }
  }
}
