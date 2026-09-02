// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class FeedbackOptionResource extends StripeResource {
  /**
   * Returns a list of your feedback options.
   */
  list(
    params?: Billing.FeedbackOptionListParams,
    options?: RequestOptions
  ): ApiListPromise<FeedbackOption> {
    return this._makeRequest(
      'GET',
      '/v1/billing/feedback_options',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a new feedback option.
   */
  create(
    params: Billing.FeedbackOptionCreateParams,
    options?: RequestOptions
  ): Promise<Response<FeedbackOption>> {
    return this._makeRequest(
      'POST',
      '/v1/billing/feedback_options',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves a feedback option object given an ID.
   */
  retrieve(
    id: string,
    params?: Billing.FeedbackOptionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FeedbackOption>> {
    return this._makeRequest(
      'GET',
      `/v1/billing/feedback_options/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the description of an existing feedback option.
   */
  update(
    id: string,
    params?: Billing.FeedbackOptionUpdateParams,
    options?: RequestOptions
  ): Promise<Response<FeedbackOption>> {
    return this._makeRequest(
      'POST',
      `/v1/billing/feedback_options/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Deactivates a feedback option. Deactivated feedback options cannot be used in portal configurations.
   */
  deactivate(
    id: string,
    params?: Billing.FeedbackOptionDeactivateParams,
    options?: RequestOptions
  ): Promise<Response<FeedbackOption>> {
    return this._makeRequest(
      'POST',
      `/v1/billing/feedback_options/${encodeURIComponent(id)}/deactivate`,
      params,
      options
    ) as any;
  }
}
export interface FeedbackOption {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.feedback_option';

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The feedback option's status.
   */
  status: FeedbackOption.Status;

  status_transitions: FeedbackOption.StatusTransitions;
}
export namespace FeedbackOption {
  export type Status = 'active' | 'inactive';

  export interface StatusTransitions {
    /**
     * The time the feedback option was deactivated, if any. Measured in seconds since Unix epoch.
     */
    deactivated_at: number | null;
  }
}
export namespace Billing {
  export interface FeedbackOptionCreateParams {
    /**
     * The text of the feedback option, which customers see when canceling. Maximum 100 characters.
     */
    description: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
  export interface FeedbackOptionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
  export interface FeedbackOptionUpdateParams {
    /**
     * The text of the feedback option, which customers see when canceling. Maximum 100 characters.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
  export interface FeedbackOptionListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Filter results to only include feedback options with the given status.
     */
    status?: FeedbackOptionListParams.Status;
  }

  export namespace FeedbackOptionListParams {
    export type Status = 'active' | 'inactive';
  }
}
export namespace Billing {
  export interface FeedbackOptionDeactivateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
