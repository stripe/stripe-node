// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * BatchJob resource.
         */
        interface BatchJob {
          /**
           * Unique identifier for the BatchJob.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.core.batch_job';

          /**
           * Timestamp at which BatchJob was created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The maximum rps defined for the `BatchJob`.
           */
          maximum_rps: number;

          /**
           * The metadata of the `BatchJob` object.
           */
          metadata: Stripe.Metadata;

          /**
           * If the validation will be run previous to the execution of the `BatchJob`.
           */
          skip_validation: boolean;

          /**
           * The current status of the `BatchJob`.
           */
          status: BatchJob.Status;

          /**
           * Additional details about the current state of the `BatchJob`.
           */
          status_details?: BatchJob.StatusDetails;
        }

        namespace BatchJob {
          type Status =
            | 'batch_failed'
            | 'canceled'
            | 'cancelling'
            | 'complete'
            | 'in_progress'
            | 'ready_for_upload'
            | 'timeout'
            | 'upload_timeout'
            | 'validating'
            | 'validation_failed';

          interface StatusDetails {
            /**
             * Additional details for the `BATCH_FAILED` status of the `BatchJob`.
             */
            batch_failed?: StatusDetails.BatchFailed;

            /**
             * Additional details for the `CANCELED` status of the `BatchJob`.
             */
            canceled?: StatusDetails.Canceled;

            /**
             * Additional details for the `COMPLETE` status of the `BatchJob`.
             */
            complete?: StatusDetails.Complete;

            /**
             * Additional details for the `IN_PROGRESS` status of the `BatchJob`.
             */
            in_progress?: StatusDetails.InProgress;

            /**
             * Additional details for the `READY_FOR_UPLOAD` status of the `BatchJob`.
             */
            ready_for_upload?: StatusDetails.ReadyForUpload;

            /**
             * Additional details for the `TIMEOUT` status of the `BatchJob`.
             */
            timeout?: StatusDetails.Timeout;

            /**
             * Additional details for the `VALIDATING` status of the `BatchJob`.
             */
            validating?: StatusDetails.Validating;

            /**
             * Additional details for the `VALIDATION_FAILED` status of the `BatchJob`.
             */
            validation_failed?: StatusDetails.ValidationFailed;
          }

          namespace StatusDetails {
            interface BatchFailed {
              /**
               * Details about the `BatchJob` failure.
               */
              error: string;
            }

            interface Canceled {
              /**
               * The total number of records that failed processing.
               */
              failure_count: number;

              /**
               * The output file details. If BatchJob is cancelled it's provided only if there is already output at this point.
               */
              output_file: Canceled.OutputFile;

              /**
               * The total number of records that were successfully processed.
               */
              success_count: number;
            }

            namespace Canceled {
              interface OutputFile {
                /**
                 * The content type of the file.
                 */
                content_type: string;

                /**
                 * A pre-signed URL that allows secure, time-limited access to download the file.
                 */
                download_url: OutputFile.DownloadUrl;

                /**
                 * The total size of the file in bytes.
                 */
                size: number;
              }

              namespace OutputFile {
                interface DownloadUrl {
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

            interface Complete {
              /**
               * The total number of records that failed processing.
               */
              failure_count: number;

              /**
               * The output file details. If BatchJob is cancelled it's provided only if there is already output at this point.
               */
              output_file: Complete.OutputFile;

              /**
               * The total number of records that were successfully processed.
               */
              success_count: number;
            }

            namespace Complete {
              interface OutputFile {
                /**
                 * The content type of the file.
                 */
                content_type: string;

                /**
                 * A pre-signed URL that allows secure, time-limited access to download the file.
                 */
                download_url: OutputFile.DownloadUrl;

                /**
                 * The total size of the file in bytes.
                 */
                size: number;
              }

              namespace OutputFile {
                interface DownloadUrl {
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

            interface InProgress {
              /**
               * The number of records that failed processing so far.
               */
              failure_count: number;

              /**
               * The number of records that were successfully processed so far.
               */
              success_count: number;
            }

            interface ReadyForUpload {
              /**
               * The upload file details.
               */
              upload_url: ReadyForUpload.UploadUrl;
            }

            namespace ReadyForUpload {
              interface UploadUrl {
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

            interface Timeout {
              /**
               * The total number of records that failed processing.
               */
              failure_count: number;

              /**
               * The output file details. If BatchJob is cancelled it's provided only if there is already output at this point.
               */
              output_file: Timeout.OutputFile;

              /**
               * The total number of records that were successfully processed.
               */
              success_count: number;
            }

            namespace Timeout {
              interface OutputFile {
                /**
                 * The content type of the file.
                 */
                content_type: string;

                /**
                 * A pre-signed URL that allows secure, time-limited access to download the file.
                 */
                download_url: OutputFile.DownloadUrl;

                /**
                 * The total size of the file in bytes.
                 */
                size: number;
              }

              namespace OutputFile {
                interface DownloadUrl {
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

            interface Validating {
              /**
               * The number of records that were validated. Note that there is no failure counter here;
               * once we have any validation failures we give up.
               */
              validated_count: number;
            }

            interface ValidationFailed {
              /**
               * The total number of records that failed processing.
               */
              failure_count: number;

              /**
               * The output file details. If BatchJob is cancelled it's provided only if there is already output at this point.
               */
              output_file: ValidationFailed.OutputFile;

              /**
               * The total number of records that were successfully processed.
               */
              success_count: number;
            }

            namespace ValidationFailed {
              interface OutputFile {
                /**
                 * The content type of the file.
                 */
                content_type: string;

                /**
                 * A pre-signed URL that allows secure, time-limited access to download the file.
                 */
                download_url: OutputFile.DownloadUrl;

                /**
                 * The total size of the file in bytes.
                 */
                size: number;
              }

              namespace OutputFile {
                interface DownloadUrl {
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
          }
        }
      }
    }
  }
}
