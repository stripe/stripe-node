// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ReportRunResource extends StripeResource {
  /**
   * Initiates the generation of a `ReportRun` based on the specified report template
   * and user-provided parameters. It's the starting point for obtaining report data,
   * and returns a `ReportRun` object which can be used to track the progress and retrieve
   * the results of the report.
   * @throws Stripe.RateLimitError
   */
  create(
    params: V2.Reporting.ReportRunCreateParams,
    options?: RequestOptions
  ): Promise<Response<ReportRun>> {
    return this._makeRequest(
      'POST',
      '/v2/reporting/report_runs',
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
   * Fetches the current state and details of a previously created `ReportRun`. If the `ReportRun`
   * has succeeded, the endpoint will provide details for how to retrieve the results.
   */
  retrieve(
    id: string,
    params?: V2.Reporting.ReportRunRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ReportRun>> {
    return this._makeRequest(
      'GET',
      `/v2/reporting/report_runs/${id}`,
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
export interface ReportRun {
  /**
   * The unique identifier of the `ReportRun` object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.reporting.report_run';

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The unique identifier of the `Report` object which was run.
   */
  report: string;

  /**
   * The human-readable name of the `Report` which was run.
   */
  report_name: string;

  /**
   * The parameters used to customize the generation of the report.
   */
  report_parameters: V2.Reporting.ReportRun.ReportParameters;

  /**
   * Details how to retrieve the results of a successfully completed `ReportRun`.
   */
  result?: V2.Reporting.ReportRun.Result;

  /**
   * The options specified for customizing the output file of the `ReportRun`.
   */
  result_options?: V2.Reporting.ReportRun.ResultOptions;

  /**
   * The current status of the `ReportRun`.
   */
  status: V2.Reporting.ReportRun.Status;

  /**
   * Additional details about the current state of the `ReportRun`. The field is currently only populated when a `ReportRun`
   * is in the `failed` state, providing more information about why the report failed to generate successfully.
   */
  status_details: {
    [key: string]: V2.Reporting.ReportRun.StatusDetails;
  };
}
export namespace V2 {
  export namespace Reporting {
    export namespace ReportRun {
      export type ReportParameters = {
        [key: string]: unknown;
      };

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
         * Error code categorizing the reason the `ReportRun` failed.
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
export namespace V2 {
  export namespace Reporting {
    export interface ReportRunCreateParams {
      /**
       * The unique identifier of the `Report` being requested.
       */
      report: string;

      /**
       * A map of parameter names to values, specifying how the report should be customized.
       * The accepted parameters depend on the specific `Report` being run.
       */
      report_parameters: ReportRunCreateParams.ReportParameters;

      /**
       * Optional settings to customize the results of the `ReportRun`.
       */
      result_options?: ReportRunCreateParams.ResultOptions;
    }

    export namespace ReportRunCreateParams {
      export type ReportParameters = {
        [key: string]: unknown;
      };

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
export namespace V2 {
  export namespace Reporting {
    export interface ReportRunRetrieveParams {}
  }
}
