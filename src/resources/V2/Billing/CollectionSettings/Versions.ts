// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {CollectionSettingVersion} from './../../../V2/Billing/CollectionSettingVersions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
const stripeMethod = StripeResource.method;

export class VersionResource extends StripeResource {
  /**
   * List all CollectionSettingVersions by CollectionSetting ID.
   */
  list(
    id: string,
    params?: V2.Billing.CollectionSettings.VersionListParams,
    options?: RequestOptions
  ): ApiListPromise<CollectionSettingVersion>;
  list(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<CollectionSettingVersion>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath:
        '/v2/billing/collection_settings/{collection_setting_id}/versions',
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                payment_method_options: {
                  kind: 'object',
                  fields: {
                    card: {
                      kind: 'object',
                      fields: {
                        mandate_options: {
                          kind: 'object',
                          fields: {amount: {kind: 'int64_string'}},
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Retrieve a CollectionSetting Version by ID.
   */
  retrieve(
    collectionSettingId: string,
    id: string,
    params?: V2.Billing.CollectionSettings.VersionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CollectionSettingVersion>>;
  retrieve(
    collectionSettingId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<CollectionSettingVersion>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath:
        '/v2/billing/collection_settings/{collection_setting_id}/versions/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          payment_method_options: {
            kind: 'object',
            fields: {
              card: {
                kind: 'object',
                fields: {
                  mandate_options: {
                    kind: 'object',
                    fields: {amount: {kind: 'int64_string'}},
                  },
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace CollectionSettings {
      export interface VersionRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace CollectionSettings {
      export interface VersionListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 20.
         */
        limit?: number;
      }
    }
  }
}
