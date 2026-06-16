// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {PricingPlanVersion} from './../../../V2/Billing/PricingPlanVersions.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';

export class VersionResource extends StripeResource {
  /**
   * List all Pricing Plan Versions of a Pricing Plan.
   */
  list(
    pricingPlanId: string,
    params?: V2.Billing.PricingPlans.VersionListParams,
    options?: RequestOptions
  ): V2ListPromise<PricingPlanVersion> {
    return this._makeRequest(
      'GET',
      `/v2/billing/pricing_plans/${encodeURIComponent(pricingPlanId)}/versions`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieve a specific Pricing Plan Version of a Pricing Plan.
   */
  retrieve(
    pricingPlanId: string,
    id: string,
    params?: V2.Billing.PricingPlans.VersionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlanVersion>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/pricing_plans/${encodeURIComponent(
        pricingPlanId
      )}/versions/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace PricingPlans {
      export interface VersionRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace PricingPlans {
      export interface VersionListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 20.
         */
        limit?: number;
      }
    }
  }
}
