// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {PricingPlanVersion} from './../../../V2/Billing/PricingPlanVersions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
const stripeMethod = StripeResource.method;

export class VersionResource extends StripeResource {
  /**
   * List all Pricing Plan Versions of a Pricing Plan.
   */
  list(
    id: string,
    params?: V2.Billing.PricingPlans.VersionListParams,
    options?: RequestOptions
  ): ApiListPromise<PricingPlanVersion>;
  list(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<PricingPlanVersion>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/pricing_plans/{pricing_plan_id}/versions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieve a specific Pricing Plan Version of a Pricing Plan.
   */
  retrieve(
    pricingPlanId: string,
    id: string,
    params?: V2.Billing.PricingPlans.VersionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlanVersion>>;
  retrieve(
    pricingPlanId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<PricingPlanVersion>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/pricing_plans/{pricing_plan_id}/versions/{id}',
    }).call(this, ...args);
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
