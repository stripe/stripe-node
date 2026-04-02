// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Refund} from './../Refunds.js';
import {RequestOptions, Response} from '../../lib.js';

export class RefundResource extends StripeResource {
  /**
   * Expire a refund with a status of requires_action.
   */
  expire(
    id: string,
    params?: TestHelpers.RefundExpireParams,
    options?: RequestOptions
  ): Promise<Response<Refund>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/refunds/${id}/expire`,
      params,
      options
    );
  }
}
export namespace TestHelpers {
  export interface RefundExpireParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
