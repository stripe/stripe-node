// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../Types.js';
import {ValueListItem} from './ValueListItems.js';
import {
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../../shared.js';
import {Response, ApiListPromise, ApiList} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class ValueListResource extends StripeResource {
  /**
   * Deletes a ValueList object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.
   */
  del(
    id: string,
    params?: Radar.ValueListDeleteParams,
    options?: RequestOptions
  ): Promise<Response<Radar.DeletedValueList>>;
  del(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Radar.DeletedValueList>>;
  del(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath: '/v1/radar/value_lists/{value_list}',
    }).call(this, ...args);
  }

  /**
   * Retrieves a ValueList object.
   */
  retrieve(
    id: string,
    params?: Radar.ValueListRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ValueList>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<ValueList>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/radar/value_lists/{value_list}',
    }).call(this, ...args);
  }

  /**
   * Updates a ValueList object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that item_type is immutable.
   */
  update(
    id: string,
    params?: Radar.ValueListUpdateParams,
    options?: RequestOptions
  ): Promise<Response<ValueList>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/radar/value_lists/{value_list}',
    }).call(this, ...args);
  }

  /**
   * Returns a list of ValueList objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
   */
  list(
    params?: Radar.ValueListListParams,
    options?: RequestOptions
  ): ApiListPromise<ValueList>;
  list(options?: RequestOptions): ApiListPromise<ValueList>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/radar/value_lists',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new ValueList object, which can then be referenced in rules.
   */
  create(
    params: Radar.ValueListCreateParams,
    options?: RequestOptions
  ): Promise<Response<ValueList>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/radar/value_lists',
    }).call(this, ...args);
  }
}
export /**
 * Value lists allow you to group values together which can then be referenced in rules.
 *
 * Related guide: [Default Stripe lists](https://stripe.com/docs/radar/lists#managing-list-items)
 */
interface ValueList {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'radar.value_list';

  /**
   * The name of the value list for use in rules.
   */
  alias: string;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The name or email address of the user who created this value list.
   */
  created_by: string;

  /**
   * Always true for a deleted object
   */
  deleted?: void;

  /**
   * The type of items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, `customer_id`, `sepa_debit_fingerprint`, or `us_bank_account_fingerprint`.
   */
  item_type: Radar.ValueList.ItemType;

  /**
   * List of items contained within this value list.
   */
  list_items: ApiList<ValueListItem>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * The name of the value list.
   */
  name: string;
}
export namespace Radar {
  export /**
   * The DeletedValueList object.
   */
  interface DeletedValueList {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'radar.value_list';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  export namespace ValueList {
    export type ItemType =
      | 'card_bin'
      | 'card_fingerprint'
      | 'case_sensitive_string'
      | 'country'
      | 'customer_id'
      | 'email'
      | 'ip_address'
      | 'sepa_debit_fingerprint'
      | 'string'
      | 'us_bank_account_fingerprint';
  }
}
export namespace Radar {
  export interface ValueListCreateParams {
    /**
     * The name of the value list for use in rules.
     */
    alias: string;

    /**
     * The human-readable name of the value list.
     */
    name: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Type of the items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, `customer_id`, `sepa_debit_fingerprint`, or `us_bank_account_fingerprint`. Use `string` if the item type is unknown or mixed.
     */
    item_type?: ValueListCreateParams.ItemType;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
  }

  export namespace ValueListCreateParams {
    export type ItemType =
      | 'card_bin'
      | 'card_fingerprint'
      | 'case_sensitive_string'
      | 'country'
      | 'customer_id'
      | 'email'
      | 'ip_address'
      | 'sepa_debit_fingerprint'
      | 'string'
      | 'us_bank_account_fingerprint';
  }
}
export namespace Radar {
  export interface ValueListRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Radar {
  export interface ValueListUpdateParams {
    /**
     * The name of the value list for use in rules.
     */
    alias?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * The human-readable name of the value list.
     */
    name?: string;
  }
}
export namespace Radar {
  export interface ValueListListParams extends PaginationParams {
    /**
     * The alias used to reference the value list when writing rules.
     */
    alias?: string;

    /**
     * A value contained within a value list - returns all value lists containing this value.
     */
    contains?: string;

    /**
     * Only return value lists that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Radar {
  export interface ValueListDeleteParams {}
}
