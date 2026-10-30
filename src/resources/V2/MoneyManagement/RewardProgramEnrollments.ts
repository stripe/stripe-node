// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class RewardProgramEnrollmentResource extends StripeResource {
  /**
   * Returns a list of RewardProgramEnrollments. Omitting `reward_program` returns platform-wide
   * enrollments across all RewardPrograms.
   */
  list(
    params?: V2.MoneyManagement.RewardProgramEnrollmentListParams,
    options?: RequestOptions
  ): V2ListPromise<RewardProgramEnrollment> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/reward_program_enrollments',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a new RewardProgramEnrollment, binding a connected account / Issuer Program to a
   * RewardProgram. RewardProgramEnrollments are active by default on creation.
   */
  create(
    params: V2.MoneyManagement.RewardProgramEnrollmentCreateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgramEnrollment>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/reward_program_enrollments',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an existing RewardProgramEnrollment.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.RewardProgramEnrollmentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgramEnrollment>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/reward_program_enrollments/${encodeURIComponent(
        id
      )}`,
      params,
      options
    ) as any;
  }
  /**
   * Activates a RewardProgramEnrollment. At most one RewardProgramEnrollment may be active per Issuer
   * Program globally, across all RewardPrograms. Idempotent: calling this on a RewardProgramEnrollment
   * that is already active returns 200 with the current object unchanged.
   */
  activate(
    id: string,
    params?: V2.MoneyManagement.RewardProgramEnrollmentActivateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgramEnrollment>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/reward_program_enrollments/${encodeURIComponent(
        id
      )}/activate`,
      params,
      options
    ) as any;
  }
  /**
   * Deactivates a RewardProgramEnrollment. Idempotent: calling this on a RewardProgramEnrollment that is
   * already inactive returns 200 with the current object unchanged.
   */
  deactivate(
    id: string,
    params?: V2.MoneyManagement.RewardProgramEnrollmentDeactivateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgramEnrollment>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/reward_program_enrollments/${encodeURIComponent(
        id
      )}/deactivate`,
      params,
      options
    ) as any;
  }
}
export interface RewardProgramEnrollment {
  /**
   * Unique identifier for the RewardProgramEnrollment.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.reward_program_enrollment';

  /**
   * The connected account enrolled in this RewardProgram. Immutable after creation.
   */
  account: string;

  /**
   * Issuing-specific per-enrollment configuration. Immutable after creation.
   */
  card_spend: RewardProgramEnrollment.CardSpend;

  /**
   * Time at which the RewardProgramEnrollment was created.
   */
  created: string;

  /**
   * Whether this object exists in livemode or testmode.
   */
  livemode: boolean;

  /**
   * The ID of the RewardProgram this enrollment belongs to. Immutable after creation.
   */
  reward_program: string;

  /**
   * The status of the RewardProgramEnrollment. Active by default on creation; use activate/deactivate to
   * change.
   */
  status: RewardProgramEnrollment.Status;
}
export namespace RewardProgramEnrollment {
  export interface CardSpend {
    /**
     * The Issuer Program for this connected account. Immutable after creation.
     */
    issuer_program: string;
  }

  export type Status = 'active' | 'inactive' | OtherString;
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramEnrollmentCreateParams {
      /**
       * The connected account to enroll into this RewardProgram.
       */
      account: string;

      /**
       * Issuing-specific per-enrollment configuration.
       */
      card_spend: RewardProgramEnrollmentCreateParams.CardSpend;

      /**
       * The RewardProgram to enroll into.
       */
      reward_program: string;
    }

    export namespace RewardProgramEnrollmentCreateParams {
      export interface CardSpend {
        /**
         * The Issuer Program for this connected account. Immutable after creation.
         */
        issuer_program: string;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramEnrollmentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramEnrollmentListParams {
      /**
       * Maximum number of results to return. Default: 10. Valid range: 1-100.
       */
      limit?: number;

      /**
       * Filter by RewardProgram. Omitting this field returns platform-wide enrollments across all
       * RewardPrograms.
       */
      reward_program?: string;

      /**
       * Filter by RewardProgramEnrollment status.
       */
      status?: RewardProgramEnrollmentListParams.Status;
    }

    export namespace RewardProgramEnrollmentListParams {
      export type Status = 'active' | 'inactive' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramEnrollmentActivateParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RewardProgramEnrollmentDeactivateParams {}
  }
}
