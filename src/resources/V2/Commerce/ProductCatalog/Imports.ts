// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {ProductCatalogImport} from './../../../V2/Commerce/ProductCatalogImports.js';
import {MetadataParam} from '../../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';

export class ImportResource extends StripeResource {
  /**
   * Returns a list of ProductCatalogImport objects.
   */
  list(
    params?: V2.Commerce.ProductCatalog.ImportListParams,
    options?: RequestOptions
  ): ApiListPromise<ProductCatalogImport> {
    return this._makeRequest(
      'GET',
      '/v2/commerce/product_catalog/imports',
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
                  status_details: {
                    kind: 'object',
                    fields: {
                      processing: {
                        kind: 'object',
                        fields: {
                          error_count: {kind: 'int64_string'},
                          success_count: {kind: 'int64_string'},
                        },
                      },
                      succeeded: {
                        kind: 'object',
                        fields: {success_count: {kind: 'int64_string'}},
                      },
                      succeeded_with_errors: {
                        kind: 'object',
                        fields: {
                          error_count: {kind: 'int64_string'},
                          error_file: {
                            kind: 'object',
                            fields: {size: {kind: 'int64_string'}},
                          },
                          samples: {
                            kind: 'array',
                            element: {
                              kind: 'object',
                              fields: {row: {kind: 'int64_string'}},
                            },
                          },
                          success_count: {kind: 'int64_string'},
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
   * Creates a ProductCatalogImport.
   */
  create(
    params: V2.Commerce.ProductCatalog.ImportCreateParams,
    options?: RequestOptions
  ): Promise<Response<ProductCatalogImport>> {
    return this._makeRequest(
      'POST',
      '/v2/commerce/product_catalog/imports',
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            status_details: {
              kind: 'object',
              fields: {
                processing: {
                  kind: 'object',
                  fields: {
                    error_count: {kind: 'int64_string'},
                    success_count: {kind: 'int64_string'},
                  },
                },
                succeeded: {
                  kind: 'object',
                  fields: {success_count: {kind: 'int64_string'}},
                },
                succeeded_with_errors: {
                  kind: 'object',
                  fields: {
                    error_count: {kind: 'int64_string'},
                    error_file: {
                      kind: 'object',
                      fields: {size: {kind: 'int64_string'}},
                    },
                    samples: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {row: {kind: 'int64_string'}},
                      },
                    },
                    success_count: {kind: 'int64_string'},
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
   * Retrieves a ProductCatalogImport by ID.
   */
  retrieve(
    id: string,
    params?: V2.Commerce.ProductCatalog.ImportRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ProductCatalogImport>> {
    return this._makeRequest(
      'GET',
      `/v2/commerce/product_catalog/imports/${id}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            status_details: {
              kind: 'object',
              fields: {
                processing: {
                  kind: 'object',
                  fields: {
                    error_count: {kind: 'int64_string'},
                    success_count: {kind: 'int64_string'},
                  },
                },
                succeeded: {
                  kind: 'object',
                  fields: {success_count: {kind: 'int64_string'}},
                },
                succeeded_with_errors: {
                  kind: 'object',
                  fields: {
                    error_count: {kind: 'int64_string'},
                    error_file: {
                      kind: 'object',
                      fields: {size: {kind: 'int64_string'}},
                    },
                    samples: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {row: {kind: 'int64_string'}},
                      },
                    },
                    success_count: {kind: 'int64_string'},
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
  export namespace Commerce {
    export namespace ProductCatalog {
      export interface ImportCreateParams {
        /**
         * The type of catalog data to import.
         */
        feed_type: ImportCreateParams.FeedType;

        /**
         * Additional information about the import in a structured format.
         */
        metadata: MetadataParam;

        /**
         * The strategy for handling existing catalog data during import.
         */
        mode: ImportCreateParams.Mode;
      }

      export namespace ImportCreateParams {
        export type FeedType = 'inventory' | 'pricing' | 'product';

        export type Mode = 'replace' | 'upsert';
      }
    }
  }
}
export namespace V2 {
  export namespace Commerce {
    export namespace ProductCatalog {
      export interface ImportRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Commerce {
    export namespace ProductCatalog {
      export interface ImportListParams {
        /**
         * Filter for objects created at the specified timestamp.
         * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
         */
        created?: string;

        /**
         * Filter for objects created after the specified timestamp.
         * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
         */
        created_gt?: string;

        /**
         * Filter for objects created on or after the specified timestamp.
         * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
         */
        created_gte?: string;

        /**
         * Filter for objects created before the specified timestamp.
         * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
         */
        created_lt?: string;

        /**
         * Filter for objects created on or before the specified timestamp.
         * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
         */
        created_lte?: string;

        /**
         * Filter by the type of feed data being imported.
         */
        feed_type?: ImportListParams.FeedType;

        /**
         * The maximum number of results per page.
         */
        limit?: number;

        /**
         * Filter by import status.
         */
        status?: ImportListParams.Status;
      }

      export namespace ImportListParams {
        export type FeedType = 'inventory' | 'pricing' | 'product';

        export type Status =
          | 'awaiting_upload'
          | 'failed'
          | 'processing'
          | 'succeeded'
          | 'succeeded_with_errors';
      }
    }
  }
}
