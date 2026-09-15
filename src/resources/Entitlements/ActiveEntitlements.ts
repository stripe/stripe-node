// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Feature} from './Features.js';
import {
  ApplyExpandListItem,
  ApplyExpand,
  PaginationParams,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class ActiveEntitlementResource extends StripeResource {
  /**
   * Retrieve a list of active entitlements for a customer
   */
  list<E extends string = never>(
    params: Entitlements.ActiveEntitlementListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<ActiveEntitlement, E>> {
    return this._makeRequest(
      'GET',
      '/v1/entitlements/active_entitlements',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieve an active entitlement
   */
  retrieve<E extends string = never>(
    id: string,
    params?: Entitlements.ActiveEntitlementRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<ActiveEntitlement, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/entitlements/active_entitlements/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
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
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * A unique key you provide as your own system identifier. This may be up to 80 characters.
   */
  lookup_key: string;
}
export namespace Entitlements {
  export interface ActiveEntitlementRetrieveParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
export namespace Entitlements {
  export interface ActiveEntitlementListParams<E extends string = string>
    extends PaginationParams {
    /**
     * The ID of the customer.
     */
    customer: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
