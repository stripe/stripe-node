// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class BatchJobResource extends StripeResource {
  /**
   * Creates a new batch job.
   */
  create(
    params: V2.Core.BatchJobCreateParams,
    options?: RequestOptions
  ): Promise<Response<BatchJob>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/core/batch_jobs',
      responseSchema: {
        kind: 'object',
        fields: {
          status_details: {
            kind: 'object',
            fields: {
              canceled: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
              complete: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
              in_progress: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  success_count: {kind: 'int64_string'},
                },
              },
              timeout: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
              validating: {
                kind: 'object',
                fields: {validated_count: {kind: 'int64_string'}},
              },
              validation_failed: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Retrieves an existing batch job.
   */
  retrieve(
    id: string,
    params?: V2.Core.BatchJobRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<BatchJob>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<BatchJob>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/batch_jobs/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          status_details: {
            kind: 'object',
            fields: {
              canceled: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
              complete: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
              in_progress: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  success_count: {kind: 'int64_string'},
                },
              },
              timeout: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
              validating: {
                kind: 'object',
                fields: {validated_count: {kind: 'int64_string'}},
              },
              validation_failed: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Cancels an existing batch job.
   */
  cancel(
    id: string,
    params?: V2.Core.BatchJobCancelParams,
    options?: RequestOptions
  ): Promise<Response<BatchJob>>;
  cancel(id: string, options?: RequestOptions): Promise<Response<BatchJob>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/core/batch_jobs/{id}/cancel',
      responseSchema: {
        kind: 'object',
        fields: {
          status_details: {
            kind: 'object',
            fields: {
              canceled: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
              complete: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
              in_progress: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  success_count: {kind: 'int64_string'},
                },
              },
              timeout: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
              validating: {
                kind: 'object',
                fields: {validated_count: {kind: 'int64_string'}},
              },
              validation_failed: {
                kind: 'object',
                fields: {
                  failure_count: {kind: 'int64_string'},
                  output_file: {
                    kind: 'object',
                    fields: {size: {kind: 'int64_string'}},
                  },
                  success_count: {kind: 'int64_string'},
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }
}
export interface BatchJob {
  /**
   * Unique identifier for the `batch_job`.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.batch_job';

  /**
   * Timestamp at which the `batch_job` was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The maximum requests per second defined for the `batch_job`.
   */
  maximum_rps: number;

  /**
   * The metadata of the `batch_job`.
   */
  metadata: Metadata;

  /**
   * Whether validation runs before executing the `batch_job`.
   */
  skip_validation: boolean;

  /**
   * The current status of the `batch_job`.
   */
  status: V2.Core.BatchJob.Status;

  /**
   * Additional details about the current state of the `batch_job`.
   */
  status_details?: V2.Core.BatchJob.StatusDetails;
}
export namespace V2 {
  export namespace Core {
    export namespace BatchJob {
      export type Status =
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

      export interface StatusDetails {
        /**
         * Additional details for the `BATCH_FAILED` status of the `batch_job`.
         */
        batch_failed?: StatusDetails.BatchFailed;

        /**
         * Additional details for the `CANCELED` status of the `batch_job`.
         */
        canceled?: StatusDetails.Canceled;

        /**
         * Additional details for the `COMPLETE` status of the `batch_job`.
         */
        complete?: StatusDetails.Complete;

        /**
         * Additional details for the `IN_PROGRESS` status of the `batch_job`.
         */
        in_progress?: StatusDetails.InProgress;

        /**
         * Additional details for the `READY_FOR_UPLOAD` status of the `batch_job`.
         */
        ready_for_upload?: StatusDetails.ReadyForUpload;

        /**
         * Additional details for the `TIMEOUT` status of the `batch_job`.
         */
        timeout?: StatusDetails.Timeout;

        /**
         * Additional details for the `VALIDATING` status of the `batch_job`.
         */
        validating?: StatusDetails.Validating;

        /**
         * Additional details for the `VALIDATION_FAILED` status of the `batch_job`.
         */
        validation_failed?: StatusDetails.ValidationFailed;
      }

      export namespace StatusDetails {
        export interface BatchFailed {
          /**
           * Details about the `batch_job` failure.
           */
          error: string;
        }

        export interface Canceled {
          /**
           * The total number of records that failed processing.
           */
          failure_count: bigint;

          /**
           * The output file details. If the `batch_job` is canceled, this is provided only if there is already output at this point.
           */
          output_file: Canceled.OutputFile;

          /**
           * The total number of records that were successfully processed.
           */
          success_count: bigint;
        }

        export interface Complete {
          /**
           * The total number of records that failed processing.
           */
          failure_count: bigint;

          /**
           * The output file details. If the `batch_job` is canceled, this is provided only if there is already output at this point.
           */
          output_file: Complete.OutputFile;

          /**
           * The total number of records that were successfully processed.
           */
          success_count: bigint;
        }

        export interface InProgress {
          /**
           * The number of records that failed processing so far.
           */
          failure_count: bigint;

          /**
           * The number of records that were successfully processed so far.
           */
          success_count: bigint;
        }

        export interface ReadyForUpload {
          /**
           * The upload file details.
           */
          upload_url: ReadyForUpload.UploadUrl;
        }

        export interface Timeout {
          /**
           * The total number of records that failed processing.
           */
          failure_count: bigint;

          /**
           * The output file details. If the `batch_job` is canceled, this is provided only if there is already output at this point.
           */
          output_file: Timeout.OutputFile;

          /**
           * The total number of records that were successfully processed.
           */
          success_count: bigint;
        }

        export interface Validating {
          /**
           * The number of records that were validated. Note that there is no failure counter here;
           * once we have any validation failures we give up.
           */
          validated_count: bigint;
        }

        export interface ValidationFailed {
          /**
           * The total number of records that failed processing.
           */
          failure_count: bigint;

          /**
           * The output file details. If the `batch_job` is canceled, this is provided only if there is already output at this point.
           */
          output_file: ValidationFailed.OutputFile;

          /**
           * The total number of records that were successfully processed.
           */
          success_count: bigint;
        }

        export namespace Canceled {
          export interface OutputFile {
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
            size: bigint;
          }

          export namespace OutputFile {
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

        export namespace Complete {
          export interface OutputFile {
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
            size: bigint;
          }

          export namespace OutputFile {
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

        export namespace ReadyForUpload {
          export interface UploadUrl {
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

        export namespace Timeout {
          export interface OutputFile {
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
            size: bigint;
          }

          export namespace OutputFile {
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

        export namespace ValidationFailed {
          export interface OutputFile {
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
            size: bigint;
          }

          export namespace OutputFile {
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
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface BatchJobCreateParams {
      /**
       * The endpoint configuration for the batch job.
       */
      endpoint: BatchJobCreateParams.Endpoint;

      /**
       * The metadata of the `batch_job`.
       */
      metadata: MetadataParam;

      /**
       * Allows the user to skip validation.
       */
      skip_validation: boolean;

      /**
       * Optional field that allows the user to control how fast they want this batch job to run.
       * Gives them a control over the number of webhooks they receive.
       */
      maximum_rps?: number;

      /**
       * Notification suppression settings for the batch job.
       */
      notification_suppression?: BatchJobCreateParams.NotificationSuppression;
    }

    export namespace BatchJobCreateParams {
      export interface Endpoint {
        /**
         * The HTTP method to use when calling the endpoint.
         */
        http_method: 'post';

        /**
         * The path of the endpoint to run this batch job against.
         * In the form used in the documentation. For instance, for
         * subscription migration this would be `/v1/subscriptions/:id/migrate`.
         */
        path: Endpoint.Path;
      }

      export interface NotificationSuppression {
        /**
         * The scope of notification suppression.
         */
        scope: NotificationSuppression.Scope;
      }

      export namespace Endpoint {
        export type Path =
          | '/v1/accounts/:account'
          | '/v1/credit_notes'
          | '/v1/customers/:customer'
          | '/v1/invoices/:invoice'
          | '/v1/invoices/:invoice/pay'
          | '/v1/promotion_codes'
          | '/v1/promotion_codes/:promotion_code'
          | '/v1/subscriptions/:subscription_exposed_id'
          | '/v1/subscriptions/:subscription/migrate'
          | '/v1/subscription_schedules'
          | '/v1/subscription_schedules/:schedule'
          | '/v1/subscription_schedules/:schedule/cancel';
      }

      export namespace NotificationSuppression {
        export type Scope = 'all' | 'none';
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface BatchJobRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface BatchJobCancelParams {}
  }
}
