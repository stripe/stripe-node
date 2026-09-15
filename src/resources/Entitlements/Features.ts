// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {
  ApplyExpandListItem,
  ApplyExpand,
  MetadataParam,
  Emptyable,
  PaginationParams,
  Metadata,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class FeatureResource extends StripeResource {
  /**
   * Retrieve a list of features
   */
  list<E extends string = never>(
    params?: Entitlements.FeatureListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<Feature, E>> {
    return this._makeRequest(
      'GET',
      '/v1/entitlements/features',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a feature
   */
  create<E extends string = never>(
    params: Entitlements.FeatureCreateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Feature, E>>> {
    return this._makeRequest(
      'POST',
      '/v1/entitlements/features',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves a feature
   */
  retrieve<E extends string = never>(
    id: string,
    params?: Entitlements.FeatureRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Feature, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/entitlements/features/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Update a feature's metadata or permanently deactivate it.
   */
  update<E extends string = never>(
    id: string,
    params?: Entitlements.FeatureUpdateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Feature, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/entitlements/features/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Feature {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'entitlements.feature';

  /**
   * Inactive features cannot be attached to new products and will not be returned from the features list endpoint.
   */
  active: boolean;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * A unique key you provide as your own system identifier. This may be up to 80 characters.
   */
  lookup_key: string;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * The feature's name, for your own purpose, not meant to be displayable to the customer.
   */
  name: string;
}
export namespace Entitlements {
  export interface FeatureCreateParams<E extends string = string> {
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
    expand?: Array<E>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: MetadataParam;
  }
}
export namespace Entitlements {
  export interface FeatureRetrieveParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
export namespace Entitlements {
  export interface FeatureUpdateParams<E extends string = string> {
    /**
     * Inactive features cannot be attached to new products and will not be returned from the features list endpoint.
     */
    active?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Emptyable<MetadataParam>;

    /**
     * The feature's name, for your own purpose, not meant to be displayable to the customer.
     */
    name?: string;
  }
}
export namespace Entitlements {
  export interface FeatureListParams<E extends string = string>
    extends PaginationParams {
    /**
     * If set, filter results to only include features with the given archive status.
     */
    archived?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;

    /**
     * If set, filter results to only include features with the given lookup_key.
     */
    lookup_key?: string;
  }
}
