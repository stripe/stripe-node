// File generated from our OpenAPI spec

import {Metadata} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface ProductCatalogImport {
  /**
   * The unique identifier for this ProductCatalogImport.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.commerce.product_catalog_import';

  /**
   * The time this ProductCatalogImport was created.
   */
  created: string;

  /**
   * The type of feed data being imported into the product catalog.
   */
  feed_type: V2.Commerce.ProductCatalogImport.FeedType;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * The current status of this ProductCatalogImport.
   */
  status: V2.Commerce.ProductCatalogImport.Status;

  /**
   * Details about the current import status.
   */
  status_details?: V2.Commerce.ProductCatalogImport.StatusDetails;
}
export namespace V2 {
  export namespace Commerce {
    export namespace ProductCatalogImport {
      export type FeedType = 'inventory' | 'pricing' | 'product';

      export type Status =
        | 'awaiting_upload'
        | 'failed'
        | 'processing'
        | 'succeeded'
        | 'succeeded_with_errors';

      export interface StatusDetails {
        /**
         * Details when the import is awaiting file upload.
         */
        awaiting_upload?: StatusDetails.AwaitingUpload;

        /**
         * Details when the import didn't complete.
         */
        failed?: StatusDetails.Failed;

        /**
         * Details when the import is processing.
         */
        processing?: StatusDetails.Processing;

        /**
         * Details when the import has succeeded.
         */
        succeeded?: StatusDetails.Succeeded;

        /**
         * Details when the import completed but some records failed to process.
         */
        succeeded_with_errors?: StatusDetails.SucceededWithErrors;
      }

      export namespace StatusDetails {
        export interface AwaitingUpload {
          /**
           * The pre-signed URL information for uploading the catalog file.
           */
          upload_url: AwaitingUpload.UploadUrl;
        }

        export interface Failed {
          /**
           * The error code for this product catalog processing failure.
           */
          code: Failed.Code;

          /**
           * A message explaining why the import failed.
           */
          failure_message: string;

          /**
           * The error type for this product catalog processing failure.
           */
          type: Failed.Type;
        }

        export interface Processing {
          /**
           * The number of records that failed to process so far.
           */
          error_count: bigint;

          /**
           * The number of records processed so far.
           */
          success_count: bigint;
        }

        export interface Succeeded {
          /**
           * The total number of records processed.
           */
          success_count: bigint;
        }

        export interface SucceededWithErrors {
          /**
           * The total number of records that failed to process.
           */
          error_count: bigint;

          /**
           * A file containing details about all errors that occurred.
           */
          error_file: SucceededWithErrors.ErrorFile;

          /**
           * A sample of errors that occurred during processing.
           */
          samples: Array<SucceededWithErrors.Sample>;

          /**
           * The total number of records processed.
           */
          success_count: bigint;
        }

        export namespace AwaitingUpload {
          export interface UploadUrl {
            /**
             * The timestamp when the upload URL expires.
             */
            expires_at: string;

            /**
             * The pre-signed URL for uploading the catalog file.
             */
            url: string;
          }
        }

        export namespace Failed {
          export type Code =
            | 'file_not_found'
            | 'internal_error'
            | 'invalid_file';

          export type Type = 'cannot_proceed' | 'transient_failure';
        }

        export namespace SucceededWithErrors {
          export interface ErrorFile {
            /**
             * The MIME type of the error file.
             */
            content_type: string;

            /**
             * The pre-signed URL information for downloading the error file.
             */
            download_url: ErrorFile.DownloadUrl;

            /**
             * The size of the error file in bytes.
             */
            size: bigint;
          }

          export interface Sample {
            /**
             * A description of what went wrong with this record.
             */
            error_message: string;

            /**
             * The name of the field that caused the error.
             */
            field: string;

            /**
             * The identifier of the record that failed to process.
             */
            id: string;

            /**
             * The row number in the import file where the error occurred.
             */
            row: bigint;
          }

          export namespace ErrorFile {
            export interface DownloadUrl {
              /**
               * The timestamp when the download URL expires.
               */
              expires_at: string;

              /**
               * The pre-signed URL for downloading the error file.
               */
              url: string;
            }
          }
        }
      }
    }
  }
}
