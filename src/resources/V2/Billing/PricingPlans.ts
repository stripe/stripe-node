// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
import {ComponentResource} from './PricingPlans/Components.js';
import {VersionResource} from './PricingPlans/Versions.js';
import {Stripe} from '../../../stripe.core.js';
export class PricingPlanResource extends StripeResource {
  components: ComponentResource;
  versions: VersionResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.components = new ComponentResource(stripe);
    this.versions = new VersionResource(stripe);
  }
  /**
   * List all Pricing Plan objects.
   */
  list(
    params?: V2.Billing.PricingPlanListParams,
    options?: RequestOptions
  ): ApiListPromise<PricingPlan> {
    return this._makeRequest(
      'GET',
      '/v2/billing/pricing_plans',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a Pricing Plan object.
   */
  create(
    params: V2.Billing.PricingPlanCreateParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlan>> {
    return this._makeRequest(
      'POST',
      '/v2/billing/pricing_plans',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a Pricing Plan object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.PricingPlanRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlan>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/pricing_plans/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update a Pricing Plan object.
   */
  update(
    id: string,
    params?: V2.Billing.PricingPlanUpdateParams,
    options?: RequestOptions
  ): Promise<Response<PricingPlan>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/pricing_plans/${id}`,
      params,
      options
    ) as any;
  }
}
export interface PricingPlan {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.pricing_plan';

  /**
   * Whether the PricingPlan is active.
   */
  active: boolean;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * The currency of the PricingPlan.
   */
  currency: string;

  /**
   * A description for pricing plan subscription.
   * Maximum length of 500 characters.
   */
  description?: string;

  /**
   * Display name of the PricingPlan.
   */
  display_name: string;

  /**
   * The ID of the latest version of the PricingPlan.
   */
  latest_version: string;

  /**
   * The ID of the live version of the PricingPlan.
   */
  live_version?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * An internal key you can use to search for a particular PricingPlan. Maximum length of 200 characters.
   */
  lookup_key?: string;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The Stripe Tax tax behavior - whether the PricingPlan is inclusive or exclusive of tax.
   */
  tax_behavior: V2.Billing.PricingPlan.TaxBehavior;
}
export namespace V2 {
  export namespace Billing {
    export namespace PricingPlan {
      export type TaxBehavior = 'exclusive' | 'inclusive';
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface PricingPlanCreateParams {
      /**
       * The currency of the PricingPlan.
       */
      currency: string;

      /**
       * Display name of the PricingPlan. Maximum 250 characters.
       */
      display_name: string;

      /**
       * The Stripe Tax tax behavior - whether the PricingPlan is inclusive or exclusive of tax.
       */
      tax_behavior: PricingPlanCreateParams.TaxBehavior;

      /**
       * Description of pricing plan subscription.
       */
      description?: string;

      /**
       * An internal key you can use to search for a particular PricingPlan. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;
    }

    export namespace PricingPlanCreateParams {
      export type TaxBehavior = 'exclusive' | 'inclusive';
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface PricingPlanRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface PricingPlanUpdateParams {
      /**
       * Whether the PricingPlan is active.
       */
      active?: boolean;

      /**
       * Description of pricing plan subscription.
       */
      description?: string;

      /**
       * Display name of the PricingPlan. Maximum 250 characters.
       */
      display_name?: string;

      /**
       * The ID of the live version of the PricingPlan.
       */
      live_version?: string;

      /**
       * An internal key you can use to search for a particular PricingPlan. Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of key-value pairs that you can attach to an object.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface PricingPlanListParams {
      /**
       * Filter for active/inactive PricingPlans. Mutually exclusive with `lookup_keys`.
       */
      active?: boolean;

      /**
       * Optionally set the maximum number of results per page. Defaults to 20.
       */
      limit?: number;

      /**
       * Filter by lookup keys. Mutually exclusive with `active`.
       * You can specify up to 10 lookup keys.
       */
      lookup_keys?: Array<string>;
    }
  }
}
