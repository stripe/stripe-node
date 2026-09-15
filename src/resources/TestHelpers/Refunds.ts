// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Refund} from './../Refunds.js';
import {ApplyExpand} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class RefundResource extends StripeResource {
  /**
   * Expire a refund with a status of requires_action.
   */
  expire<E extends string = never>(
    id: string,
    params?: TestHelpers.RefundExpireParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Refund, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/refunds/${encodeURIComponent(id)}/expire`,
      params,
      options
    ) as any;
  }
}
export namespace TestHelpers {
  export interface RefundExpireParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
