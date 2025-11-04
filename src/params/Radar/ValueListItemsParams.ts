// File generated from our OpenAPI spec

namespace Radar {
  export interface ValueListItemCreateParams {
    /**
     * The value of the item (whose type must match the type of the parent value list).
     */
    value: string;

    /**
     * The identifier of the value list which the created item will be added to.
     */
    value_list: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Radar {
  export interface ValueListItemRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Radar {
  export interface ValueListItemListParams extends PaginationParams {
    /**
     * Identifier for the parent value list this item belongs to.
     */
    value_list: string;

    /**
     * Only return items that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
     */
    value?: string;
  }
}
namespace Radar {
  export interface ValueListItemDeleteParams {}
}
