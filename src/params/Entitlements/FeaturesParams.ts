// File generated from our OpenAPI spec

namespace Entitlements {
  export interface FeatureCreateParams {
    /**
     * A unique key you provide as your own system identifier. This may be up to 80 characters.
     */
    lookup_key: string;

    /**
     * The feature's name, for your own purpose, not meant to be displayable to the customer.
     */
    name: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Stripe.MetadataParam;
  }
}
namespace Entitlements {
  export interface FeatureRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Entitlements {
  export interface FeatureUpdateParams {
    /**
     * Inactive features cannot be attached to new products and will not be returned from the features list endpoint.
     */
    active?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * The feature's name, for your own purpose, not meant to be displayable to the customer.
     */
    name?: string;
  }
}
namespace Entitlements {
  export interface FeatureListParams extends PaginationParams {
    /**
     * If set, filter results to only include features with the given archive status.
     */
    archived?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * If set, filter results to only include features with the given lookup_key.
     */
    lookup_key?: string;
  }
}
