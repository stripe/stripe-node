// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class LicensedItemResource extends StripeResource {
  /**
   * List all Licensed Item objects in reverse chronological order of creation.
   */
  list(
    params?: V2.Billing.LicensedItemListParams,
    options?: RequestOptions
  ): ApiListPromise<LicensedItem> {
    return this._makeRequest(
      'GET',
      '/v2/billing/licensed_items',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a Licensed Item object.
   */
  create(
    params: V2.Billing.LicensedItemCreateParams,
    options?: RequestOptions
  ): Promise<Response<LicensedItem>> {
    return this._makeRequest(
      'POST',
      '/v2/billing/licensed_items',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a Licensed Item object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.LicensedItemRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<LicensedItem>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/licensed_items/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update a Licensed Item object. At least one of the fields is required.
   */
  update(
    id: string,
    params?: V2.Billing.LicensedItemUpdateParams,
    options?: RequestOptions
  ): Promise<Response<LicensedItem>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/licensed_items/${id}`,
      params,
      options
    ) as any;
  }
}
export interface LicensedItem {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.licensed_item';

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
   * An internal key you can use to search for a particular licensed item.
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
  tax_details?: V2.Billing.LicensedItem.TaxDetails;

  /**
   * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
   * to "seat" for Checkout to display "(price) per seat", or "environment" to display "(price) per environment".
   * Maximum length of 100 characters.
   */
  unit_label?: string;
}
export namespace V2 {
  export namespace Billing {
    export namespace LicensedItem {
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
    export interface LicensedItemCreateParams {
      /**
       * Description that customers will see in the invoice line item.
       * Maximum length of 250 characters.
       */
      display_name: string;

      /**
       * An internal key you can use to search for a particular licensed item.
       * Must be unique among licensed items.
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
      tax_details?: LicensedItemCreateParams.TaxDetails;

      /**
       * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
       * to "seat" for Checkout to display "(price) per seat", or "environment" to display "(price) per environment".
       * Maximum length of 100 characters.
       */
      unit_label?: string;
    }

    export namespace LicensedItemCreateParams {
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
    export interface LicensedItemRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface LicensedItemUpdateParams {
      /**
       * Description that customers will see in the invoice line item.
       * Maximum length of 250 characters.
       */
      display_name?: string;

      /**
       * An internal key you can use to search for a particular licensed item.
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
      tax_details?: LicensedItemUpdateParams.TaxDetails;

      /**
       * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
       * to "seat" for Checkout to display "(price) per seat", or "environment" to display "(price) per environment".
       * Maximum length of 100 characters.
       */
      unit_label?: string;
    }

    export namespace LicensedItemUpdateParams {
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
    export interface LicensedItemListParams {
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
