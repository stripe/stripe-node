// File generated from our OpenAPI spec

import {RequestOptions} from '../../../../lib.js';
export interface MetricQueryResult {
  /**
   * The unique identifier of this metric query result.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.data.analytics.metric_query_result';

  /**
   * The timestamp at which this metric query result was created.
   */
  created: string;

  /**
   * An array of timeseries data rows.
   */
  data: Array<V2.Data.Analytics.MetricQueryResult.Data>;

  /**
   * Whether this query was run in live mode.
   */
  livemode: boolean;

  /**
   * Pagination future-proofing: URL to fetch the next page; always null for now.
   */
  next_page_url?: string;

  /**
   * Pagination future-proofing: URL to fetch the previous page; always null for now.
   */
  previous_page_url?: string;

  /**
   * A timestamp representing the freshness of the data this metric is aggregated from.
   */
  refreshed_at: string;
}
export namespace V2 {
  export namespace Data {
    export namespace Analytics {
      export namespace MetricQueryResult {
        export interface Data {
          /**
           * A hash of dimension type to dimension instance, if group_by was specified.
           */
          dimensions: {
            [key: string]: string;
          };

          /**
           * A unique identifier for this row.
           */
          id: string;

          /**
           * Array of metric values returned from this query.
           */
          results: Array<Data.Result>;

          /**
           * Timestamp denoting the start of this time bucket.
           */
          timestamp: string;
        }

        export namespace Data {
          export interface Result {
            /**
             * If this is a monetary metric, the currency it is returned in. Otherwise null.
             */
            currency?: string;

            /**
             * The Gen6 ID of this metric.
             */
            metric: string;

            /**
             * The common name of this metric.
             */
            name: string;

            /**
             * The numeric value of this metric.
             */
            value: bigint;
          }
        }
      }
    }
  }
}
