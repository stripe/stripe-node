// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {PricingPlanVersion} from './../../../V2/Billing/PricingPlanVersions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';

export class VersionResource extends StripeResource {
  /**
   * List all Pricing Plan Versions of a Pricing Plan.
   */
  list(
    id: string,
    params?: V2.Billing.PricingPlans.VersionListParams,
    options?: RequestOptions
  ): ApiListPromise<PricingPlanVersion> {
    return this._makeRequest(
      'GET',
      `/v2/billing/pricing_plans/${id}/versions`,
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
      `/v2/billing/pricing_plans/${pricingPlanId}/versions/${id}`,
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
