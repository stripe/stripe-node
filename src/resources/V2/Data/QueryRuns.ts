// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class QueryRunResource extends StripeResource {
  /**
   * Submits a SQL query for execution against a dataset and returns a `QueryRun` object
   * to track progress and retrieve results.
   */
  create(
    params: V2.Data.QueryRunCreateParams,
    options?: RequestOptions
  ): Promise<Response<QueryRun>> {
    return this._makeRequest('POST', '/v2/data/query_runs', params, options, {
      responseSchema: {
        kind: 'object',
        fields: {
          result: {
            kind: 'object',
            fields: {
              col_count: {kind: 'int64_string'},
              file: {kind: 'object', fields: {size: {kind: 'int64_string'}}},
              row_count: {kind: 'int64_string'},
            },
          },
        },
      },
    }) as any;
  }
  /**
   * Retrieves the status and results of a previously created `QueryRun`. Returns a `404` error
   * if the `QueryRun` doesn't exist or its retention period has ended.
   */
  retrieve(
    id: string,
    params?: V2.Data.QueryRunRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<QueryRun>> {
    return this._makeRequest(
      'GET',
      `/v2/data/query_runs/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            result: {
              kind: 'object',
              fields: {
                col_count: {kind: 'int64_string'},
                file: {kind: 'object', fields: {size: {kind: 'int64_string'}}},
                row_count: {kind: 'int64_string'},
              },
            },
          },
        },
      }
    ) as any;
  }
}
export interface QueryRun {
  /**
   * The unique identifier of the `QueryRun`.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.data.query_run';

  /**
   * Time at which the `QueryRun` was created.
   */
  created: string;

  /**
   * The dataset that was queried.
   */
  dataset: QueryRun.Dataset;

  /**
   * The file format of the result. Only applicable when the result is a file.
   */
  format: QueryRun.Format;

  /**
   * Whether the `QueryRun` was executed in live mode.
   */
  livemode: boolean;

  /**
   * The query that was submitted for execution.
   */
  query: QueryRun.Query;

  /**
   * Time at which the data used by this query was last refreshed.
   */
  refreshed_at?: string;

  /**
   * The result of the `QueryRun`, populated when it has completed.
   */
  result?: QueryRun.Result;

  /**
   * Settings applied to the generated result file.
   */
  result_options?: QueryRun.ResultOptions;

  /**
   * The current status of the `QueryRun`.
   */
  status: QueryRun.Status;

  /**
   * Additional details about the current state of the `QueryRun`.
   */
  status_details?: QueryRun.StatusDetails;
}
export namespace QueryRun {
  export type Dataset = 'analytical' | OtherString;

  export type Format = 'csv' | OtherString;

  export interface Query {
    /**
     * Ad-hoc SQL to execute. The maximum length is 100,000 characters.
     */
    sql?: string;
  }

  export interface Result {
    /**
     * The total number of columns in the result.
     */
    col_count?: bigint;

    /**
     * File result with a download URL. This is the default result type.
     */
    file?: Result.File;

    /**
     * Inline result with data returned directly. Only present when requested via
     * `include[0]=result.inline`.
     */
    inline?: Result.Inline;

    /**
     * The total number of data rows in the result, excluding any header row.
     */
    row_count?: bigint;
  }

  export interface ResultOptions {
    /**
     * The compression applied to the generated result file. Defaults to `none`. This applies
     * only to downloadable file results.
     */
    compression?: ResultOptions.Compression;
  }

  export type Status =
    | 'canceled'
    | 'failed'
    | 'running'
    | 'succeeded'
    | OtherString;

  export interface StatusDetails {
    /**
     * Time at which the run was canceled. Populated when the run is in the `canceled` state.
     */
    canceled_at?: string;

    /**
     * Error code categorizing the reason the run failed.
     */
    code?: StatusDetails.Code;

    /**
     * Error message with additional details about the failure.
     */
    message?: string;

    /**
     * Errors found in the submitted SQL. Populated when the failure was caused by invalid SQL.
     */
    query_errors: Array<StatusDetails.QueryError>;
  }

  export namespace Result {
    export interface File {
      /**
       * The schema of the result data.
       */
      columns: Array<File.Column>;

      /**
       * The content type of the file.
       */
      content_type: File.ContentType;

      /**
       * A pre-signed URL that allows secure, time-limited access to download the file.
       */
      download_url: File.DownloadUrl;

      /**
       * The total size of the file in bytes.
       */
      size: bigint;
    }

    export interface Inline {
      /**
       * The schema of the result data.
       */
      columns: Array<Inline.Column>;

      /**
       * Token for the next page of rows.
       */
      next_page_url?: string;

      /**
       * Token for the previous page of rows.
       */
      previous_page_url?: string;

      /**
       * The result rows, each represented as a map of column name to value.
       */
      rows: Array<Inline.Row>;
    }

    export namespace File {
      export interface Column {
        /**
         * The name of the column.
         */
        name: string;

        /**
         * The data type of the column.
         */
        type: Column.Type;
      }

      export type ContentType = 'csv' | OtherString;

      export interface DownloadUrl {
        /**
         * The time that the URL expires.
         */
        expires_at?: string;

        /**
         * The URL that can be used for accessing the file.
         */
        url: string;
      }

      export namespace Column {
        export type Type =
          | 'bigint'
          | 'boolean'
          | 'date'
          | 'datetime'
          | 'decimal'
          | 'double'
          | 'integer'
          | 'timestamp'
          | 'varchar'
          | OtherString;
      }
    }

    export namespace Inline {
      export interface Column {
        /**
         * The name of the column.
         */
        name: string;

        /**
         * The data type of the column.
         */
        type: Column.Type;
      }

      export interface Row {
        /**
         * The column data in this row, keyed by column name.
         */
        data: Row.Data;
      }

      export namespace Column {
        export type Type =
          | 'bigint'
          | 'boolean'
          | 'date'
          | 'datetime'
          | 'decimal'
          | 'double'
          | 'integer'
          | 'timestamp'
          | 'varchar'
          | OtherString;
      }

      export namespace Row {
        export type Data = {
          [key: string]: unknown;
        };
      }
    }
  }

  export namespace ResultOptions {
    export type Compression = 'none' | 'zip' | OtherString;
  }

  export namespace StatusDetails {
    export type Code =
      | 'execution_failed'
      | 'file_size_above_limit'
      | 'internal_error'
      | 'query_run_invalid_sql'
      | 'resource_limit_exceeded'
      | OtherString;

    export interface QueryError {
      /**
       * A human-readable description of the error.
       */
      message: string;

      /**
       * A short identifier categorizing the type of error.
       */
      type: string;
    }
  }
}
export namespace V2 {
  export namespace Data {
    export interface QueryRunCreateParams {
      /**
       * The dataset to query.
       */
      dataset: QueryRunCreateParams.Dataset;

      /**
       * The file format for the result.
       */
      format: QueryRunCreateParams.Format;

      /**
       * The query to execute.
       */
      query: QueryRunCreateParams.Query;

      /**
       * Named bind parameters for the query. Keys are parameter names referenced in
       * the SQL (without any prefix). Omit this field for a non-parameterized query.
       * Values are strings, integers, or booleans. Fractional numbers, timestamps,
       * and dates should be passed as strings.
       */
      parameters?: QueryRunCreateParams.Parameters;

      /**
       * Optional settings that customize the generated result file.
       */
      result_options?: QueryRunCreateParams.ResultOptions;
    }

    export namespace QueryRunCreateParams {
      export type Dataset = 'analytical' | OtherString;

      export type Format = 'csv' | OtherString;

      export interface Query {
        /**
         * Ad-hoc SQL to execute. The maximum length is 100,000 characters.
         */
        sql?: string;
      }

      export type Parameters = {
        [key: string]: unknown;
      };

      export interface ResultOptions {
        /**
         * The compression applied to the generated result file. Defaults to `none`. This applies
         * only to downloadable file results.
         */
        compression?: ResultOptions.Compression;
      }

      export namespace ResultOptions {
        export type Compression = 'none' | 'zip' | OtherString;
      }
    }
  }
}
export namespace V2 {
  export namespace Data {
    export interface QueryRunRetrieveParams {
      /**
       * Any optional includes (see [include-dependent response values](https://docs.stripe.com/api-includable-response-values)).
       */
      include?: Array<QueryRunRetrieveParams.Include>;

      /**
       * The maximum number of inline `QueryRun` result rows to return. Defaults to 100. Maximum is 1000.
       */
      limit?: number;

      /**
       * The page token for paginating the inline `QueryRun` result rows.
       */
      page?: string;
    }

    export namespace QueryRunRetrieveParams {
      export type Include = 'result.inline' | OtherString;
    }
  }
}
