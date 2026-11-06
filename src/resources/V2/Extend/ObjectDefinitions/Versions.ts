// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {ObjectDefinitionVersion} from './../../../V2/Extend/ObjectDefinitionVersions.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';

export class VersionResource extends StripeResource {
  /**
   * Lists a page of object definition versions in descending semantic version order.
   */
  list(
    objectDefinitionId: string,
    params?: V2.Extend.ObjectDefinitions.VersionListParams,
    options?: RequestOptions
  ): V2ListPromise<ObjectDefinitionVersion> {
    return this._makeRequest(
      'GET',
      `/v2/extend/object_definitions/${encodeURIComponent(
        objectDefinitionId
      )}/versions`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves an object definition version.
   */
  retrieve(
    objectDefinitionId: string,
    id: string,
    params?: V2.Extend.ObjectDefinitions.VersionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ObjectDefinitionVersion>> {
    return this._makeRequest(
      'GET',
      `/v2/extend/object_definitions/${encodeURIComponent(
        objectDefinitionId
      )}/versions/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace Extend {
    export namespace ObjectDefinitions {
      export interface VersionRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Extend {
    export namespace ObjectDefinitions {
      export interface VersionListParams {
        /**
         * Maximum page size.
         */
        limit?: number;
      }
    }
  }
}
