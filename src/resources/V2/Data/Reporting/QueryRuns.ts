// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RequestOptions, Response} from '../../../../lib.js';

export class QueryRunResource extends StripeResource {
  /**
   * Creates a query run to execute ad-hoc SQL and returns a `QueryRun` object to track progress and retrieve results.
   */
  create(
    params: V2.Data.Reporting.QueryRunCreateParams,
    options?: RequestOptions
  ): Promise<Response<QueryRun>> {
    return this._makeRequest(
      'POST',
      '/v2/data/reporting/query_runs',
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            result: {
              kind: 'object',
              fields: {
                file: {kind: 'object', fields: {size: {kind: 'int64_string'}}},
              },
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Fetches the current state and details of a previously created `QueryRun`. If the `QueryRun`
   * has succeeded, the endpoint will provide details for how to retrieve the results.
   */
  retrieve(
    id: string,
    params?: V2.Data.Reporting.QueryRunRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<QueryRun>> {
    return this._makeRequest(
      'GET',
      `/v2/data/reporting/query_runs/${id}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            result: {
              kind: 'object',
              fields: {
                file: {kind: 'object', fields: {size: {kind: 'int64_string'}}},
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
   * The unique identifier of the `QueryRun` object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.data.reporting.query_run';

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Details how to retrieve the results of a successfully completed `QueryRun`.
   */
  result?: V2.Data.Reporting.QueryRun.Result;

  /**
   * The options specified for customizing the output of the `QueryRun`.
   */
  result_options?: V2.Data.Reporting.QueryRun.ResultOptions;

  /**
   * The SQL that was executed.
   */
  sql: string;

  /**
   * The current status of the `QueryRun`.
   */
  status: V2.Data.Reporting.QueryRun.Status;

  /**
   * Additional details about the current state of the `QueryRun`. Populated when the `QueryRun`
   * is in the `failed` state, providing more information about why the query failed.
   */
  status_details: {
    [key: string]: V2.Data.Reporting.QueryRun.StatusDetails;
  };
}
export namespace V2 {
  export namespace Data {
    export namespace Reporting {
      export namespace QueryRun {
        export interface Result {
          /**
           * The type of the `ReportRun` or `QueryRun` result.
           */
          type: 'file';

          /**
           * Contains metadata about the file produced by the `ReportRun` or `QueryRun`, including
           * its content type, size, and a URL to download its contents.
           */
          file?: Result.File;
        }

        export interface ResultOptions {
          /**
           * If set, the generated results file will be compressed into a ZIP folder.
           * This is useful for reducing file size and download time for large results.
           */
          compress_file?: boolean;
        }

        export type Status = 'failed' | 'running' | 'succeeded';

        export interface StatusDetails {
          /**
           * Error code categorizing the reason the `QueryRun` failed.
           */
          error_code?: StatusDetails.ErrorCode;

          /**
           * Error message with additional details about the failure.
           */
          error_message?: string;
        }

        export namespace Result {
          export interface File {
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

          export namespace File {
            export type ContentType = 'csv' | 'zip';

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
          }
        }

        export namespace StatusDetails {
          export type ErrorCode = 'file_size_above_limit' | 'internal_error';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Data {
    export namespace Reporting {
      export interface QueryRunCreateParams {
        /**
         * The SQL to execute.
         */
        sql: string;

        /**
         * Optional settings to customize the results of the `QueryRun`.
         */
        result_options?: QueryRunCreateParams.ResultOptions;
      }

      export namespace QueryRunCreateParams {
        export interface ResultOptions {
          /**
           * If set, the generated results file will be compressed into a ZIP folder.
           * This is useful for reducing file size and download time for large results.
           */
          compress_file?: boolean;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Data {
    export namespace Reporting {
      export interface QueryRunRetrieveParams {}
    }
  }
}
