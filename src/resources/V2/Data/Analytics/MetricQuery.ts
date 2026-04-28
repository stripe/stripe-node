// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {MetricQueryResult} from './MetricQueryResults.js';
import {RequestOptions, Response} from '../../../../lib.js';

export class MetricQueryResource extends StripeResource {
  /**
   * Run a synchronous metric query against one or more metrics within the same metric namespace.
   */
  create(
    params: V2.Data.Analytics.MetricQueryCreateParams,
    options?: RequestOptions
  ): Promise<Response<MetricQueryResult>> {
    return this._makeRequest(
      'POST',
      '/v2/data/analytics/metric_query',
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
                  results: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {value: {kind: 'int64_string'}},
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
    export namespace Analytics {
      export interface MetricQueryCreateParams {
        /**
         * Timestamp denoting the end of the time range to request data for.
         */
        ends_at: string;

        /**
         * The time granularity to aggregate results by.
         */
        granularity: MetricQueryCreateParams.Granularity;

        /**
         * A list of the metrics to be returned; all metrics must share the same metric namespace.
         */
        metrics: Array<MetricQueryCreateParams.Metric>;

        /**
         * Timestamp denoting the beginning of the time range to request data for.
         */
        starts_at: string;

        /**
         * Which currency to return monetary metric results in.
         */
        currency?: string;

        /**
         * Which dimension values to filter on; keys are dimension names, values are arrays of dimension values to filter on.
         */
        filters?: MetricQueryCreateParams.Filters;

        /**
         * Which dimension keys to group by; if not specified no grouping is performed.
         */
        group_by?: Array<string>;

        /**
         * The maximum number of rows in the response.
         */
        limit?: number;

        /**
         * Pagination future-proofing: page token for navigating to next/previous batch of rows.
         */
        page?: string;

        /**
         * The timezone results should be in; defaults to the merchant's timezone.
         */
        timezone?: string;
      }

      export namespace MetricQueryCreateParams {
        export type Granularity = 'day' | 'month' | 'week' | 'year';

        export interface Metric {
          /**
           * The Gen6 ID for this metric, e.g. metric_61Sud3n5oAGVCWiSr5.
           */
          id?: string;

          /**
           * The common name for this metric, e.g. mrr_minor_units.
           */
          name?: string;
        }

        export type Filters = {
          [key: string]: unknown;
        };
      }
    }
  }
}
