// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {ProviderServiceDetail} from './../../../V2/Provisioning/ProviderServiceDetails.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';

export class ServiceResource extends StripeResource {
  /**
   * Lists services available in the catalog.
   */
  list(
    params?: V2.Provisioning.Catalog.ServiceListParams,
    options?: RequestOptions
  ): V2ListPromise<ProviderServiceDetail> {
    return this._makeRequest(
      'GET',
      '/v2/provisioning/catalog/services',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
}
export namespace V2 {
  export namespace Provisioning {
    export namespace Catalog {
      export interface ServiceListParams {
        /**
         * Catalog partition to list services from.
         */
        catalog?: ServiceListParams.Catalog;

        /**
         * When `true`, list development-only services. When unset or `false`, development services are
         * excluded.
         */
        development?: boolean;

        /**
         * Maximum number of services to return.
         */
        limit?: number;

        /**
         * Filters services to those offered by the provider with this name.
         */
        provider_name?: string;
      }

      export namespace ServiceListParams {
        export type Catalog = 'dev' | 'prod' | 'testing';
      }
    }
  }
}
