// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {CollectionSettingVersion} from './../../../V2/Billing/CollectionSettingVersions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';

export class VersionResource extends StripeResource {
  /**
   * List all CollectionSettingVersions by CollectionSetting ID.
   */
  list(
    id: string,
    params?: V2.Billing.CollectionSettings.VersionListParams,
    options?: RequestOptions
  ): ApiListPromise<CollectionSettingVersion> {
    return this._makeRequest(
      'GET',
      `/v2/billing/collection_settings/${id}/versions`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Retrieve a CollectionSetting Version by ID.
   */
  retrieve(
    collectionSettingId: string,
    id: string,
    params?: V2.Billing.CollectionSettings.VersionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CollectionSettingVersion>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/collection_settings/${collectionSettingId}/versions/${id}`,
      params,
      options,
      {
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
      }
    ) as any;
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
