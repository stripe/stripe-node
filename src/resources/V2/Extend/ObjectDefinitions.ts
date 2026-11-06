// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';
import {VersionResource} from './ObjectDefinitions/Versions.js';
import {Stripe} from '../../../stripe.core.js';
export class ObjectDefinitionResource extends StripeResource {
  versions: VersionResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.versions = new VersionResource(stripe);
  }
  /**
   * Lists a page of object definitions.
   */
  list(
    params?: V2.Extend.ObjectDefinitionListParams,
    options?: RequestOptions
  ): V2ListPromise<ObjectDefinition> {
    return this._makeRequest(
      'GET',
      '/v2/extend/object_definitions',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves an object definition.
   */
  retrieve(
    id: string,
    params?: V2.Extend.ObjectDefinitionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ObjectDefinition>> {
    return this._makeRequest(
      'GET',
      `/v2/extend/object_definitions/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface ObjectDefinition {
  /**
   * Unique identifier for the object definition.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.extend.object_definition';

  /**
   * The plural API name used in this definition's object record API paths. Immutable across versions.
   */
  api_name_plural: string;

  /**
   * The singular API name used in the object tag of this definition's records. Immutable across versions.
   */
  api_name_singular: string;

  /**
   * Time at which the object definition was created.
   */
  created: string;

  /**
   * The ID of the latest object definition version.
   */
  latest_version: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
export namespace V2 {
  export namespace Extend {
    export interface ObjectDefinitionRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Extend {
    export interface ObjectDefinitionListParams {
      /**
       * Maximum page size.
       */
      limit?: number;
    }
  }
}
