// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {MetadataParam, OtherString, Metadata} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class DisputeResource extends StripeResource {
  /**
   * Retrieves a list of Disputes.
   */
  list(
    params?: V2.MoneyManagement.DisputeListParams,
    options?: RequestOptions
  ): V2ListPromise<Dispute> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/disputes',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a Dispute for the specified money movement.
   * @throws Stripe.AlreadyExistsError
   * @throws Stripe.CannotProceedError
   */
  create(
    params: V2.MoneyManagement.DisputeCreateParams,
    options?: RequestOptions
  ): Promise<Response<Dispute>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/disputes',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves a Dispute.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.DisputeRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Dispute>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/disputes/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Dispute {
  /**
   * Unique identifier for the Dispute.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.dispute';

  /**
   * The amount and currency of the disputed money movement.
   */
  amount: V2Amount;

  /**
   * The time at which the dispute was created.
   */
  created: string;

  /**
   * Additional explanation for the dispute, if supplied.
   */
  explanation?: string;

  /**
   * The FinancialAccount associated with the disputed money movement.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The FinancialAccount holder's reason for disputing the money movement.
   */
  reason: Dispute.Reason;

  /**
   * The current status of the dispute.
   */
  status: Dispute.Status;

  /**
   * Timestamps describing when the dispute changed status.
   */
  status_transitions?: Dispute.StatusTransitions;

  /**
   * The money movement being disputed.
   */
  target: Dispute.Target;
}
export namespace Dispute {
  export type Reason =
    | 'authorization_revoked'
    | 'duplicate'
    | 'incorrect_amount'
    | 'incorrect_date'
    | 'other'
    | 'unauthorized'
    | OtherString;

  export type Status = 'lost' | 'under_review' | 'won' | OtherString;

  export interface StatusTransitions {
    /**
     * The time at which the Dispute became lost. Only present if status == lost.
     */
    lost_at?: string;

    /**
     * The time at which the Dispute became won. Only present if status == won.
     */
    won_at?: string;
  }

  export interface Target {
    /**
     * If applicable, the ID of the ReceivedDebit being disputed.
     */
    received_debit?: string;

    /**
     * The type of money movement being disputed.
     */
    type: Target.Type;
  }

  export namespace Target {
    export type Type = 'received_debit' | OtherString;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface DisputeCreateParams {
      /**
       * The FinancialAccount holder's reason for disputing the money movement.
       */
      reason: DisputeCreateParams.Reason;

      /**
       * The money movement being disputed.
       */
      target: DisputeCreateParams.Target;

      /**
       * Additional information explaining the dispute. Must contain non-whitespace text and be no longer than 5000 characters.
       */
      explanation?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;
    }

    export namespace DisputeCreateParams {
      export type Reason =
        | 'authorization_revoked'
        | 'duplicate'
        | 'incorrect_amount'
        | 'incorrect_date'
        | 'other'
        | 'unauthorized'
        | OtherString;

      export interface Target {
        /**
         * If applicable, the ID of the ReceivedDebit being disputed.
         */
        received_debit?: string;

        /**
         * The type of money movement being disputed.
         */
        type: Target.Type;
      }

      export namespace Target {
        export type Type = 'received_debit' | OtherString;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface DisputeRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface DisputeListParams {
      /**
       * Filter results by the ID of the FinancialAccount associated with the dispute.
       */
      financial_account?: string;

      /**
       * Maximum number of results to return, between 1 and 100. Defaults to 10.
       */
      limit?: number;

      /**
       * Filter results to Disputes with any of the provided statuses.
       */
      statuses?: Array<DisputeListParams.Status>;

      /**
       * Filter results by the ID of the disputed money movement.
       */
      target?: string;
    }

    export namespace DisputeListParams {
      export type Status = 'lost' | 'under_review' | 'won' | OtherString;
    }
  }
}
