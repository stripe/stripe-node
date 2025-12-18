// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../Types.js';
import {Refund} from './../Refunds.js';
import {Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class RefundResource extends StripeResource {
  /**
   * Expire a refund with a status of requires_action.
   */
  expire(
    id: string,
    params?: TestHelpers.RefundExpireParams,
    options?: RequestOptions
  ): Promise<Response<Refund>>;
  expire(id: string, options?: RequestOptions): Promise<Response<Refund>>;
  expire(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/refunds/{refund}/expire',
    }).call(this, ...args);
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
