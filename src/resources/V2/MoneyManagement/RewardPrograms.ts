// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';
import {RuleResource} from './RewardPrograms/Rules.js';
import {Stripe} from '../../../stripe.core.js';
export class RewardProgramResource extends StripeResource {
  rules: RuleResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.rules = new RuleResource(stripe);
  }
  /**
   * Returns a list of RewardPrograms.
   */
  list(
    params?: V2.MoneyManagement.RewardProgramListParams,
    options?: RequestOptions
  ): V2ListPromise<RewardProgram> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/reward_programs',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a new RewardProgram. RewardPrograms are inactive by default on creation; use
   * ActivateRewardProgram to make them eligible for reward evaluation.
   */
  create(
    params: V2.MoneyManagement.RewardProgramCreateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgram>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/reward_programs',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an existing RewardProgram.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.RewardProgramRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgram>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/reward_programs/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the mutable fields of an existing RewardProgram. Use ActivateRewardProgram /
   * DeactivateRewardProgram to change the RewardProgram's status.
   */
  update(
    id: string,
    params?: V2.MoneyManagement.RewardProgramUpdateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgram>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/reward_programs/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Activates a RewardProgram, making it eligible for reward evaluation. Idempotent: calling this on a
   * RewardProgram that is already active returns 200 with the current object unchanged.
   */
  activate(
    id: string,
    params?: V2.MoneyManagement.RewardProgramActivateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgram>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/reward_programs/${encodeURIComponent(id)}/activate`,
      params,
      options
    ) as any;
  }
  /**
   * Deactivates a RewardProgram. Idempotent: calling this on a RewardProgram that is already inactive
   * returns 200 with the current object unchanged.
   */
  deactivate(
    id: string,
    params?: V2.MoneyManagement.RewardProgramDeactivateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgram>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/reward_programs/${encodeURIComponent(
        id
      )}/deactivate`,
      params,
      options
    ) as any;
  }
}
export interface RewardProgram {
  /**
   * Unique identifier for the RewardProgram.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.reward_program';

  /**
   * Time at which the RewardProgram was created.
   */
  created: string;

  /**
   * Determines who performs reward money movement after rule evaluation. Immutable after creation.
   */
  fulfilled_by: RewardProgram.FulfilledBy;

  /**
   * Whether this object exists in livemode or testmode.
   */
  livemode: boolean;

  /**
   * Display name for the RewardProgram.
   */
  name: string;

  /**
   * The status of the RewardProgram. Inactive by default on creation; use activate/deactivate to change.
   */
  status: RewardProgram.Status;
}
export namespace RewardProgram {
  export type FulfilledBy = 'application' | OtherString;

  export type Status = 'active' | 'inactive' | OtherString;
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramCreateParams {
      /**
       * Determines who performs reward money movement after rule evaluation. Only `application` is currently
       * supported.
       */
      fulfilled_by: RewardProgramCreateParams.FulfilledBy;

      /**
       * Display name for the RewardProgram.
       */
      name: string;
    }

    export namespace RewardProgramCreateParams {
      export type FulfilledBy = 'application' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramUpdateParams {
      /**
       * Display name for the RewardProgram.
       */
      name?: string;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramListParams {
      /**
       * Maximum number of results to return. Default: 10. Valid range: 1-100.
       */
      limit?: number;

      /**
       * Filter by RewardProgram status.
       */
      status?: RewardProgramListParams.Status;
    }

    export namespace RewardProgramListParams {
      export type Status = 'active' | 'inactive' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramActivateParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramDeactivateParams {}
  }
}
