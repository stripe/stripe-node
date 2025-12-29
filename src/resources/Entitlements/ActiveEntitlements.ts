// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Feature} from './Features.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class ActiveEntitlementResource extends StripeResource {
  /**
   * Retrieve a list of active entitlements for a customer
   */
  list(
    params: Entitlements.ActiveEntitlementListParams,
    options?: RequestOptions
  ): ApiListPromise<ActiveEntitlement>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/entitlements/active_entitlements',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieve an active entitlement
   */
  retrieve(
    id: string,
    params?: Entitlements.ActiveEntitlementRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ActiveEntitlement>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<ActiveEntitlement>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/entitlements/active_entitlements/{id}',
    }).call(this, ...args);
  }
}
export interface ActiveEntitlement {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'entitlements.active_entitlement';

  /**
   * The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to.
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
export namespace Entitlements {
  export interface ActiveEntitlementRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Entitlements {
  export interface ActiveEntitlementListParams extends PaginationParams {
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
