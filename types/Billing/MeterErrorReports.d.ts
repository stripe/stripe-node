// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * The MeterErrorReport object.
       */
      interface MeterErrorReport {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.meter_error_report';

        reason: MeterErrorReport.Reason;

        /**
         * The related objects about the error
         */
        related_object: MeterErrorReport.RelatedObject | null;

        /**
         * Summary of invalid events
         */
        summary: string;

        /**
         * Time when validation ended. Measured in seconds since the Unix epoch
         */
        validation_end: number;

        /**
         * Time when validation started. Measured in seconds since the Unix epoch
         */
        validation_start: number;
      }

      namespace MeterErrorReport {
        interface Reason {
          /**
           * The number of errors generated
           */
          error_count: number;

          /**
           * More information about errors
           */
          error_types: Array<Reason.ErrorType>;
        }

        namespace Reason {
          interface ErrorType {
            sample_errors: Array<ErrorType.SampleError>;
          }

          namespace ErrorType {
            interface SampleError {
              api_request: SampleError.ApiRequest | null;

              /**
               * message of the error
               */
              error_message: string;
            }

            namespace SampleError {
              interface ApiRequest {
                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * idempotency_key of the request
                 */
                idempotency_key: string;
              }
            }
          }
        }

        interface RelatedObject {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * The type of meter error related object. Should be 'meter'
           */
          object: string;

          /**
           * The url of the meter object
           */
          url: string;
        }
      }
    }
  }
}
