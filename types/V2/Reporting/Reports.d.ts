// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Reporting {
        /**
         * The Report resource represents a customizable report template that provides insights into various aspects of your Stripe integration.
         */
        interface Report {
          /**
           * The unique identifier of the `Report` object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.reporting.report';

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The human-readable name of the `Report`.
           */
          name: string;

          /**
           * Specification of the parameters that the `Report` accepts. It details each parameter's
           * name, description, whether it is required, and any validations performed.
           */
          parameters: {
            [key: string]: Report.Parameters;
          };
        }

        namespace Report {
          interface Parameters {
            /**
             * For array parameters, provides details about the array elements.
             */
            array_details: Parameters.ArrayDetails | null;

            /**
             * Explains the purpose and usage of the parameter.
             */
            description: string;

            /**
             * For enum parameters, provides the list of allowed values.
             */
            enum_details: Parameters.EnumDetails | null;

            /**
             * Indicates whether the parameter must be provided.
             */
            required: boolean;

            /**
             * For timestamp parameters, specifies the allowed date range.
             */
            timestamp_details: Parameters.TimestampDetails | null;

            /**
             * The data type of the parameter.
             */
            type: Parameters.Type;
          }

          namespace Parameters {
            interface ArrayDetails {
              /**
               * Data type of the elements in the array.
               */
              element_type: 'enum';

              /**
               * Details about enum elements in the array.
               */
              enum_details: ArrayDetails.EnumDetails | null;
            }

            namespace ArrayDetails {
              interface EnumDetails {
                /**
                 * Allowed values of the enum.
                 */
                allowed_values: Array<string>;
              }
            }

            interface EnumDetails {
              /**
               * Allowed values of the enum.
               */
              allowed_values: Array<string>;
            }

            interface TimestampDetails {
              /**
               * Maximum permitted timestamp which can be requested.
               */
              max: string;

              /**
               * Minimum permitted timestamp which can be requested.
               */
              min: string;
            }

            type Type = 'array' | 'enum' | 'string' | 'timestamp';
          }
        }
      }
    }
  }
}
