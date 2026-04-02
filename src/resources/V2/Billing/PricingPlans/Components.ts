// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {PricingPlanComponent} from './../../../V2/Billing/PricingPlanComponents.js';
import {MetadataParam} from '../../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
import {DeletedObject} from './../../../V2/DeletedObject.js';

export class ComponentResource extends StripeResource {
  /**
   * List all Pricing Plan Component objects for a Pricing Plan.
   */
  list(
    id: string,
    params?: V2.Billing.PricingPlans.ComponentListParams,
    options?: RequestOptions
  ): ApiListPromise<PricingPlanComponent> {
    return this._makeRequest(
      'GET',
      `/v2/billing/pricing_plans/${id}/components`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a Pricing Plan Component object.
   */
  create(
    id: string,
    params: V2.Billing.PricingPlans.ComponentCreateParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlanComponent>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/pricing_plans/${id}/components`,
      params,
      options
    ) as any;
  }
  /**
   * Remove a Pricing Plan Component from the latest version of a Pricing Plan.
   */
  del(
    pricingPlanId: string,
    id: string,
    params?: V2.Billing.PricingPlans.ComponentDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedObject>> {
    return this._makeRequest(
      'DELETE',
      `/v2/billing/pricing_plans/${pricingPlanId}/components/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a Pricing Plan Component object.
   */
  retrieve(
    pricingPlanId: string,
    id: string,
    params?: V2.Billing.PricingPlans.ComponentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlanComponent>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/pricing_plans/${pricingPlanId}/components/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update a Pricing Plan Component object.
   */
  update(
    pricingPlanId: string,
    id: string,
    params?: V2.Billing.PricingPlans.ComponentUpdateParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlanComponent>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/pricing_plans/${pricingPlanId}/components/${id}`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace PricingPlans {
      export interface ComponentCreateParams {
        /**
         * The type of the PricingPlanComponent.
         */
        type: ComponentCreateParams.Type;

        /**
         * Details if this component is a License Fee.
         */
        license_fee?: ComponentCreateParams.LicenseFee;

        /**
         * An identifier that can be used to find this component.
         */
        lookup_key?: string;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: MetadataParam;

        /**
         * Details if this component is a Rate Card.
         */
        rate_card?: ComponentCreateParams.RateCard;

        /**
         * Details if this component is a Service Action.
         */
        service_action?: ComponentCreateParams.ServiceAction;
      }

      export namespace ComponentCreateParams {
        export type Type = 'license_fee' | 'rate_card' | 'service_action';

        export interface LicenseFee {
          /**
           * The ID of the License Fee.
           */
          id: string;

          /**
           * The ID of the License Fee Version. If not specified, defaults to 'latest'.
           */
          version?: string;
        }

        export interface RateCard {
          /**
           * The ID of the Rate Card.
           */
          id: string;

          /**
           * The ID of the Rate Card Version. If not specified, defaults to 'latest'.
           */
          version?: string;
        }

        export interface ServiceAction {
          /**
           * The ID of the service action.
           */
          id: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace PricingPlans {
      export interface ComponentRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace PricingPlans {
      export interface ComponentUpdateParams {
        /**
         * An identifier that can be used to find this component. Maximum length of 200 characters.
         */
        lookup_key?: string;

        /**
         * Set of key-value pairs that you can attach to an object.
         */
        metadata?: MetadataParam;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace PricingPlans {
      export interface ComponentListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 20.
         */
        limit?: number;

        /**
         * Filter by lookup keys. Mutually exclusive with `pricing_plan_version`.
         * You can specify up to 10 lookup keys.
         */
        lookup_keys?: Array<string>;

        /**
         * The ID of the Pricing Plan Version to list components for. Will use the latest version if not provided.
         * Mutually exclusive with `lookup_keys`.
         */
        pricing_plan_version?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace PricingPlans {
      export interface ComponentDeleteParams {}
    }
  }
}
