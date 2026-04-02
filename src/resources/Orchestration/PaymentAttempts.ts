// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions, Response} from '../../lib.js';

export class PaymentAttemptResource extends StripeResource {
  /**
   * Retrieves orchestration information for the given payment attempt record (e.g. return url).
   */
  retrieve(
    id: string,
    params?: Orchestration.PaymentAttemptRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PaymentAttempt>> {
    return this._makeRequest(
      'GET',
      `/v1/orchestration/payment_attempts/${id}`,
      params,
      options
    ) as any;
  }
}
export interface PaymentAttempt {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'orchestration.payment_attempt';

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * If present, the return URL for this payment attempt.
   */
  return_url: string | null;
}
export namespace Orchestration {
  export interface PaymentAttemptRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
