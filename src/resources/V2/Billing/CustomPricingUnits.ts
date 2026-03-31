// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class CustomPricingUnitResource extends StripeResource {
  /**
   * List all Custom Pricing Unit objects.
   */
  list(
    params?: V2.Billing.CustomPricingUnitListParams,
    options?: RequestOptions
  ): ApiListPromise<CustomPricingUnit>;
  list(options?: RequestOptions): ApiListPromise<CustomPricingUnit>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/custom_pricing_units',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create a Custom Pricing Unit object.
   */
  create(
    params: V2.Billing.CustomPricingUnitCreateParams,
    options?: RequestOptions
  ): Promise<Response<CustomPricingUnit>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/custom_pricing_units',
    }).call(this, ...args);
  }

  /**
   * Retrieve a Custom Pricing Unit object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.CustomPricingUnitRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CustomPricingUnit>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<CustomPricingUnit>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/custom_pricing_units/{id}',
    }).call(this, ...args);
  }

  /**
   * Update a Custom Pricing Unit object.
   */
  update(
    id: string,
    params?: V2.Billing.CustomPricingUnitUpdateParams,
    options?: RequestOptions
  ): Promise<Response<CustomPricingUnit>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/custom_pricing_units/{id}',
    }).call(this, ...args);
  }
}
export interface CustomPricingUnit {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.custom_pricing_unit';

  /**
   * Whether the custom pricing unit is active.
   */
  active: boolean;

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * Description that customers will see in the invoice line item.
   * Maximum length of 10 characters.
   */
  display_name: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * An internal key you can use to search for a particular Custom Pricing Unit.
   * Maximum length of 200 characters.
   */
  lookup_key?: string;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;
}
export namespace V2 {
  export namespace Billing {
    export interface CustomPricingUnitCreateParams {
      /**
       * Description that customers will see in the invoice line item.
       * Maximum length of 10 characters.
       */
      display_name: string;

      /**
       * An internal key you can use to search for a particular custom pricing unit item.
       * Must be unique among items.
       * Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface CustomPricingUnitRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface CustomPricingUnitUpdateParams {
      /**
       * Whether the Custom Pricing Unit is active.
       */
      active?: boolean;

      /**
       * Description that customers will see in the invoice line item.
       */
      display_name?: string;

      /**
       * An internal key you can use to search for a particular CustomPricingUnit item.
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
    export interface CustomPricingUnitListParams {
      /**
       * Filter for active/inactive custom pricing units. Mutually exclusive with `lookup_keys`.
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
