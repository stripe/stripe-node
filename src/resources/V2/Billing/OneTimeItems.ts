// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class OneTimeItemResource extends StripeResource {
  /**
   * List all One-Time Item objects in reverse chronological order of creation.
   */
  list(
    params?: V2.Billing.OneTimeItemListParams,
    options?: RequestOptions
  ): ApiListPromise<OneTimeItem>;
  list(options?: RequestOptions): ApiListPromise<OneTimeItem>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/one_time_items',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create a One-Time Item object.
   */
  create(
    params: V2.Billing.OneTimeItemCreateParams,
    options?: RequestOptions
  ): Promise<Response<OneTimeItem>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/one_time_items',
    }).call(this, ...args);
  }

  /**
   * Retrieve a One-Time Item object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.OneTimeItemRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OneTimeItem>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OneTimeItem>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/one_time_items/{id}',
    }).call(this, ...args);
  }

  /**
   * Update a One-Time Item object.
   */
  update(
    id: string,
    params?: V2.Billing.OneTimeItemUpdateParams,
    options?: RequestOptions
  ): Promise<Response<OneTimeItem>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/billing/one_time_items/{id}',
    }).call(this, ...args);
  }
}
export interface OneTimeItem {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.one_time_item';

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * Description that customers will see in the invoice line item.
   * Maximum length of 250 characters.
   */
  display_name: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * An internal key you can use to search for a particular one-time item.
   * Maximum length of 200 characters.
   */
  lookup_key?: string;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * Stripe Tax details.
   */
  tax_details?: V2.Billing.OneTimeItem.TaxDetails;

  /**
   * The unit to use when displaying prices for this one-time item. For example, set this field
   * to "credit" for the display to show "(price) per credit".
   * Maximum length of 100 characters.
   */
  unit_label?: string;
}
export namespace V2 {
  export namespace Billing {
    export namespace OneTimeItem {
      export interface TaxDetails {
        /**
         * Product tax code (PTC).
         */
        tax_code: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface OneTimeItemCreateParams {
      /**
       * Description that customers will see in the invoice line item.
       * Maximum length of 250 characters.
       */
      display_name: string;

      /**
       * An internal key you can use to search for a particular one-time item.
       * Must be unique among one-time items.
       * Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * Stripe Tax details.
       */
      tax_details?: OneTimeItemCreateParams.TaxDetails;

      /**
       * The unit to use when displaying prices for this one-time item. For example, set this field
       * to "credit" for the display to show "(price) per credit".
       * Maximum length of 100 characters.
       */
      unit_label?: string;
    }

    export namespace OneTimeItemCreateParams {
      export interface TaxDetails {
        /**
         * Product tax code (PTC).
         */
        tax_code: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface OneTimeItemRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface OneTimeItemUpdateParams {
      /**
       * Description that customers will see in the invoice line item.
       * Maximum length of 250 characters.
       */
      display_name?: string;

      /**
       * An internal key you can use to search for a particular one-time item.
       * Maximum length of 200 characters.
       * To remove the lookup_key from the object, set it to null in the request.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * Stripe Tax details.
       */
      tax_details?: OneTimeItemUpdateParams.TaxDetails;

      /**
       * The unit to use when displaying prices for this one-time item. For example, set this field
       * to "credit" for the display to show "(price) per credit".
       * Maximum length of 100 characters.
       */
      unit_label?: string;
    }

    export namespace OneTimeItemUpdateParams {
      export interface TaxDetails {
        /**
         * Product tax code (PTC).
         */
        tax_code: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface OneTimeItemListParams {
      /**
       * Optionally set the maximum number of results per page. Defaults to 20.
       */
      limit?: number;

      /**
       * Filter by lookup keys.
       * You can specify up to 10 lookup keys.
       */
      lookup_keys?: Array<string>;
    }
  }
}
