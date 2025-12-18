import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { Feature } from './Features.js';
import { PaginationParams } from '../../shared.js';
import { ApiListPromise, Response } from '../../lib.js';
export declare class ActiveEntitlementResource extends StripeResource {
    /**
     * Retrieve a list of active entitlements for a customer
     */
    list(params: Entitlements.ActiveEntitlementListParams, options?: RequestOptions): ApiListPromise<ActiveEntitlement>;
    /**
     * Retrieve an active entitlement
     */
    retrieve(id: string, params?: Entitlements.ActiveEntitlementRetrieveParams, options?: RequestOptions): Promise<Response<ActiveEntitlement>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<ActiveEntitlement>>;
}
export /**
 * An active entitlement describes access to a feature for a customer.
 */ interface ActiveEntitlement {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'entitlements.active_entitlement';
    /**
     * The [Feature](https://stripe.com/docs/api/entitlements/feature) that the customer is entitled to.
     */
    feature: string | Feature;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * A unique key you provide as your own system identifier. This may be up to 80 characters.
     */
    lookup_key: string;
}
export declare namespace Entitlements {
    interface ActiveEntitlementRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Entitlements {
    interface ActiveEntitlementListParams extends PaginationParams {
        /**
         * The ID of the customer.
         */
        customer: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
