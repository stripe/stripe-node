// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class MeteredItemResource extends StripeResource {
  /**
   * List all Metered Item objects in reverse chronological order of creation.
   */
  list(
    params?: V2.Billing.MeteredItemListParams,
    options?: RequestOptions
  ): ApiListPromise<MeteredItem> {
    return this._makeRequest(
      'GET',
      '/v2/billing/metered_items',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a Metered Item object.
   */
  create(
    params: V2.Billing.MeteredItemCreateParams,
    options?: RequestOptions
  ): Promise<Response<MeteredItem>> {
    return this._makeRequest(
      'POST',
      '/v2/billing/metered_items',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a Metered Item object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.MeteredItemRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<MeteredItem>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/metered_items/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update a Metered Item object. At least one of the fields is required.
   */
  update(
    id: string,
    params?: V2.Billing.MeteredItemUpdateParams,
    options?: RequestOptions
  ): Promise<Response<MeteredItem>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/metered_items/${id}`,
      params,
      options
    ) as any;
  }
}
export interface MeteredItem {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.metered_item';

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
   * Optional array of Meter dimensions to group event dimension keys for invoice line items.
   */
  invoice_presentation_dimensions: Array<string>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * An internal key you can use to search for a particular metered item.
   * Maximum length of 200 characters.
   */
  lookup_key?: string;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * ID of the Meter that measures usage for this Metered Item.
   */
  meter: string;

  /**
   * Optional array of Meter segments to filter event dimension keys for billing.
   */
  meter_segment_conditions: Array<V2.Billing.MeteredItem.MeterSegmentCondition>;

  /**
   * Stripe Tax details.
   */
  tax_details?: V2.Billing.MeteredItem.TaxDetails;

  /**
   * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
   * to "CPU-hour" for Checkout to display "(price) per CPU-hour", or "1 million events" to display "(price) per 1
   * million events".
   * Maximum length of 100 characters.
   */
  unit_label?: string;
}
export namespace V2 {
  export namespace Billing {
    export namespace MeteredItem {
      export interface MeterSegmentCondition {
        /**
         * A Meter dimension.
         */
        dimension: string;

        /**
         * To count usage towards this metered item, the dimension must have this value.
         */
        value: string;
      }

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
    export interface MeteredItemCreateParams {
      /**
       * Description that customers will see in the invoice line item.
       * Maximum length of 250 characters.
       */
      display_name: string;

      /**
       * ID of the Meter that measures usage for this Metered Item.
       */
      meter: string;

      /**
       * Optional array of Meter dimensions to group event dimension keys for invoice line items.
       */
      invoice_presentation_dimensions?: Array<string>;

      /**
       * An internal key you can use to search for a particular metered item.
       * Must be unique among metered items.
       * Maximum length of 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * Optional array of Meter segments to filter event dimension keys for billing.
       */
      meter_segment_conditions?: Array<
        MeteredItemCreateParams.MeterSegmentCondition
      >;

      /**
       * Stripe Tax details.
       */
      tax_details?: MeteredItemCreateParams.TaxDetails;

      /**
       * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
       * to "CPU-hour" for Checkout to display "(price) per CPU-hour", or "1 million events" to display "(price) per 1
       * million events".
       * Maximum length of 100 characters.
       */
      unit_label?: string;
    }

    export namespace MeteredItemCreateParams {
      export interface MeterSegmentCondition {
        /**
         * A Meter dimension.
         */
        dimension: string;

        /**
         * To count usage towards this metered item, the dimension must have this value.
         */
        value: string;
      }

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
    export interface MeteredItemRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface MeteredItemUpdateParams {
      /**
       * Description that customers will see in the invoice line item.
       * Maximum length of 250 characters.
       */
      display_name?: string;

      /**
       * An internal key you can use to search for a particular metered item.
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
      tax_details?: MeteredItemUpdateParams.TaxDetails;

      /**
       * The unit to use when displaying prices for this billable item in places like Checkout. For example, set this field
       * to "CPU-hour" for Checkout to display "(price) per CPU-hour", or "1 million events" to display "(price) per 1
       * million events".
       * Maximum length of 100 characters.
       * To remove the unit_label from the object, set it to null in the request.
       */
      unit_label?: string;
    }

    export namespace MeteredItemUpdateParams {
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
    export interface MeteredItemListParams {
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
