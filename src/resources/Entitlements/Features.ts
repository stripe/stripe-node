// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {
  MetadataParam,
  Emptyable,
  PaginationParams,
  Metadata,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class FeatureResource extends StripeResource {
  /**
   * Retrieve a list of features
   */
  list(
    params?: Entitlements.FeatureListParams,
    options?: RequestOptions
  ): ApiListPromise<Feature>;
  list(options?: RequestOptions): ApiListPromise<Feature>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/entitlements/features',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a feature
   */
  create(
    params: Entitlements.FeatureCreateParams,
    options?: RequestOptions
  ): Promise<Response<Feature>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/entitlements/features',
    }).call(this, ...args);
  }

  /**
   * Retrieves a feature
   */
  retrieve(
    id: string,
    params?: Entitlements.FeatureRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Feature>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Feature>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/entitlements/features/{id}',
    }).call(this, ...args);
  }

  /**
   * Update a feature's metadata or permanently deactivate it.
   */
  update(
    id: string,
    params?: Entitlements.FeatureUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Feature>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/entitlements/features/{id}',
    }).call(this, ...args);
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
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
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
    metadata?: MetadataParam;
  }
}
export namespace Entitlements {
  export interface FeatureRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Entitlements {
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
    metadata?: Emptyable<MetadataParam>;

    /**
     * The feature's name, for your own purpose, not meant to be displayable to the customer.
     */
    name?: string;
  }
}
export namespace Entitlements {
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
