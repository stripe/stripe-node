// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {SearchResultList} from './SearchResultLists.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class OperationResource extends StripeResource {
  /**
   * Resolve a natural-language query into ranked public analytical resources
   * (schemas, reports, and metrics) with execution context.
   */
  search(
    params: V2.Data.OperationSearchParams,
    options?: RequestOptions
  ): Promise<Response<SearchResultList>> {
    return this._makeRequest(
      'POST',
      '/v2/data/operations/search',
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  relevance_score: {kind: 'decimal_string'},
                  catalog: {
                    kind: 'discriminatedUnion',
                    discriminator: 'catalog',
                    variants: {
                      metrics: {kind: 'object', fields: {}},
                      reports: {kind: 'object', fields: {}},
                      schemas: {kind: 'object', fields: {}},
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
  export namespace Data {
    export interface OperationSearchParams {
      /**
       * Natural-language question. Required.
       */
      query: string;

      /**
       * Restrict results to public resource catalogs. Defaults to all catalogs
       * available to the caller.
       */
      catalogs?: Array<OperationSearchParams.Catalog>;

      /**
       * Maximum results. Default: 5, Max: 20.
       */
      limit?: number;

      /**
       * The page token for pagination.
       */
      page?: string;
    }

    export namespace OperationSearchParams {
      export type Catalog = 'metrics' | 'reports' | 'schemas' | OtherString;
    }
  }
}
