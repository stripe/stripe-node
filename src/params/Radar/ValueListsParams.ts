// File generated from our OpenAPI spec

namespace Radar {
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
    metadata?: Stripe.MetadataParam;
  }

  namespace ValueListCreateParams {
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
namespace Radar {
  export interface ValueListRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Radar {
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
    metadata?: Stripe.MetadataParam;

    /**
     * The human-readable name of the value list.
     */
    name?: string;
  }
}
namespace Radar {
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
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Radar {
  export interface ValueListDeleteParams {}
}
