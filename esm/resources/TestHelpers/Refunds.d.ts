import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { Refund } from './../Refunds.js';
import { Response } from '../../lib.js';
export declare class RefundResource extends StripeResource {
    /**
     * Expire a refund with a status of requires_action.
     */
    expire(id: string, params?: TestHelpers.RefundExpireParams, options?: RequestOptions): Promise<Response<Refund>>;
    expire(id: string, options?: RequestOptions): Promise<Response<Refund>>;
}
export declare namespace TestHelpers {
    interface RefundExpireParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
