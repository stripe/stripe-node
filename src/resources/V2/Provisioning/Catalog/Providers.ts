// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {Provider} from './../../../V2/Provisioning/Providers.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';

export class ProviderResource extends StripeResource {
  /**
   * Lists providers available in the catalog.
   */
  list(
    params?: V2.Provisioning.Catalog.ProviderListParams,
    options?: RequestOptions
  ): V2ListPromise<Provider> {
    return this._makeRequest(
      'GET',
      '/v2/provisioning/catalog/providers',
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
      export interface ProviderListParams {
        /**
         * Catalog partition to list providers from.
         */
        catalog?: ProviderListParams.Catalog;

        /**
         * When `true`, list development-only providers. When unset or `false`, development providers are
         * excluded.
         */
        development?: boolean;

        /**
         * Maximum number of providers to return.
         */
        limit?: number;
      }

      export namespace ProviderListParams {
        export type Catalog = 'dev' | 'prod' | 'testing';
      }
    }
  }
}
