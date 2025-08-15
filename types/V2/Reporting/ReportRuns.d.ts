// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Reporting {
        /**
         * The `ReportRun` object represents an instance of a `Report` generated with specific
         * run parameters. Once the object is created, Stripe begins processing the report. When
         * the report has finished running, it will give you a reference to the results.
         */
        interface ReportRun {
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
          report_parameters: {
            [key: string]: ReportRun.ReportParameters;
          };

          /**
           * Details how to retrieve the results of a successfully completed `ReportRun`.
           */
          result: ReportRun.Result | null;

          /**
           * The options specified for customizing the output file of the `ReportRun`.
           */
          result_options: ReportRun.ResultOptions | null;

          /**
           * The current status of the `ReportRun`.
           */
          status: ReportRun.Status;

          /**
           * Additional details about the current state of the `ReportRun`. The field is currently only populated when a `ReportRun`
           * is in the `failed` state, providing more information about why the report failed to generate successfully.
           */
          status_details: {
            [key: string]: ReportRun.StatusDetails;
          };
        }

        namespace ReportRun {
          interface ReportParameters {
            /**
             * Parameter with an array data type.
             */
            array_value: ReportParameters.ArrayValue | null;

            /**
             * Parameter with a string data type.
             */
            string_value: string | null;

            /**
             * Parameter with a timestamp data type.
             */
            timestamp_value: string | null;
          }

          namespace ReportParameters {
            interface ArrayValue {
              /**
               * The list of string values in the array.
               */
              items: Array<string>;
            }
          }

          interface Result {
            /**
             * Contains metadata about the file produced by the `ReportRun`, including
             * its content type, size, and a URL to download its contents.
             */
            file: Result.File;

            /**
             * The type of the `ReportRun` result.
             */
            type: 'file';
          }

          namespace Result {
            interface File {
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
              size: number;
            }

            namespace File {
              type ContentType = 'csv' | 'zip';

              interface DownloadUrl {
                /**
                 * The time that the URL expires.
                 */
                expires_at: string | null;

                /**
                 * The URL that can be used for accessing the file.
                 */
                url: string;
              }
            }
          }

          interface ResultOptions {
            /**
             * If set, the generated report file will be compressed into a ZIP folder.
             * This is useful for reducing file size and download time for large reports.
             */
            compress_file: boolean | null;
          }

          type Status = 'failed' | 'running' | 'succeeded';

          interface StatusDetails {
            /**
             * Error code categorizing the reason the `ReportRun` failed.
             */
            error_code: StatusDetails.ErrorCode | null;

            /**
             * Error message with additional details about the failure.
             */
            error_message: string | null;
          }

          namespace StatusDetails {
            type ErrorCode = 'file_size_above_limit' | 'internal_error';
          }
        }
      }
    }
  }
}
