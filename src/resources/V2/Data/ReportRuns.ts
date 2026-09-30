// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ReportRunResource extends StripeResource {
  /**
   * Initiates the generation of a `ReportRun` based on the specified `Report` and
   * caller-provided parameters. Returns a `ReportRun` object which can be used to track
   * the progress and retrieve the results of the report.
   */
  create(
    params: V2.Data.ReportRunCreateParams,
    options?: RequestOptions
  ): Promise<Response<ReportRun>> {
    return this._makeRequest('POST', '/v2/data/report_runs', params, options, {
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
   * Fetches the current state and details of a previously created `ReportRun`. If the
   * `ReportRun` has succeeded, the endpoint provides details for how to retrieve the results.
   */
  retrieve(
    id: string,
    params?: V2.Data.ReportRunRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ReportRun>> {
    return this._makeRequest(
      'GET',
      `/v2/data/report_runs/${encodeURIComponent(id)}`,
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
export interface ReportRun {
  /**
   * The unique identifier of the `ReportRun`.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.data.report_run';

  /**
   * Time at which the `ReportRun` was created.
   */
  created: string;

  /**
   * Whether the `ReportRun` was executed in live mode.
   */
  livemode: boolean;

  /**
   * The human-readable name of the `Report` which was run.
   */
  name: string;

  /**
   * The parameters used to customize the generation of the report.
   */
  parameters: ReportRun.Parameters;

  /**
   * Time at which the data used by this report was last refreshed.
   */
  refreshed_at?: string;

  /**
   * The unique identifier of the `Report` which was run.
   */
  report: string;

  /**
   * The result of the `ReportRun`, populated when it has completed.
   */
  result?: ReportRun.Result;

  /**
   * Settings applied to the generated result file.
   */
  result_options?: ReportRun.ResultOptions;

  /**
   * The fully-resolved SQL that was executed. Only present when requested via
   * `include[0]=sql`.
   */
  sql?: string;

  /**
   * The current status of the `ReportRun`.
   */
  status: ReportRun.Status;

  /**
   * Additional details about the current state of the `ReportRun`.
   */
  status_details?: ReportRun.StatusDetails;
}
export namespace ReportRun {
  export type Parameters = {
    [key: string]: unknown;
  };

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
     * If set, the generated result file is compressed into a ZIP archive before
     * it is stored. This applies only to downloadable file results.
     */
    compress_file?: boolean;
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

  export namespace StatusDetails {
    export type Code =
      | 'file_size_above_limit'
      | 'internal_error'
      | 'query_run_invalid_sql'
      | OtherString;
  }
}
export namespace V2 {
  export namespace Data {
    export interface ReportRunCreateParams {
      /**
       * The file format for the result.
       */
      format: ReportRunCreateParams.Format;

      /**
       * A map of parameter names to values, specifying how the report should be customized.
       * The accepted parameters depend on the specific `Report` being run.
       */
      parameters: ReportRunCreateParams.Parameters;

      /**
       * A reference to the `Report` to run, by ID or name.
       */
      report: ReportRunCreateParams.Report;

      /**
       * Optional settings that customize the generated result file.
       */
      result_options?: ReportRunCreateParams.ResultOptions;
    }

    export namespace ReportRunCreateParams {
      export type Format = 'csv' | OtherString;

      export type Parameters = {
        [key: string]: unknown;
      };

      export interface Report {
        /**
         * The unique identifier of the `Report`.
         */
        id?: string;

        /**
         * The human-readable name of the `Report`.
         */
        name?: string;
      }

      export interface ResultOptions {
        /**
         * If set, the generated result file is compressed into a ZIP archive before
         * it is stored. This applies only to downloadable file results.
         */
        compress_file?: boolean;
      }
    }
  }
}
export namespace V2 {
  export namespace Data {
    export interface ReportRunRetrieveParams {
      /**
       * Any optional includes (see https://docs.stripe.com/api-includable-response-values).
       */
      include?: Array<ReportRunRetrieveParams.Include>;

      /**
       * The maximum number of inline `ReportRun` result rows to return. Defaults to 10. Maximum is 1000.
       */
      limit?: number;

      /**
       * The page token for paginating the inline `ReportRun` result rows.
       */
      page?: string;
    }

    export namespace ReportRunRetrieveParams {
      export type Include = 'result.inline' | 'sql' | OtherString;
    }
  }
}
