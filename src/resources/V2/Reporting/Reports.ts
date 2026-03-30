// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class ReportResource extends StripeResource {
  /**
   * Retrieves metadata about a specific `Report` template, including its name, description,
   * and the parameters it accepts. It's useful for understanding the capabilities and
   * requirements of a particular `Report` before requesting a `ReportRun`.
   */
  retrieve(
    id: string,
    params?: V2.Reporting.ReportRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Report>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Report>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/reporting/reports/{id}',
    }).call(this, ...args);
  }
}
export interface Report {
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
    [key: string]: V2.Reporting.Report.Parameters;
  };
}
export namespace V2 {
  export namespace Reporting {
    export namespace Report {
      export interface Parameters {
        /**
         * For array parameters, provides details about the array elements.
         */
        array_details?: Parameters.ArrayDetails;

        /**
         * Explains the purpose and usage of the parameter.
         */
        description: string;

        /**
         * For enum parameters, provides the list of allowed values.
         */
        enum_details?: Parameters.EnumDetails;

        /**
         * Indicates whether the parameter must be provided.
         */
        required: boolean;

        /**
         * For timestamp parameters, specifies the allowed date range.
         */
        timestamp_details?: Parameters.TimestampDetails;

        /**
         * The data type of the parameter.
         */
        type: Parameters.Type;
      }

      export namespace Parameters {
        export interface ArrayDetails {
          /**
           * Data type of the elements in the array.
           */
          element_type: 'enum';

          /**
           * Details about enum elements in the array.
           */
          enum_details?: ArrayDetails.EnumDetails;
        }

        export interface EnumDetails {
          /**
           * Allowed values of the enum.
           */
          allowed_values: Array<string>;
        }

        export interface TimestampDetails {
          /**
           * Maximum permitted timestamp which can be requested.
           */
          max: string;

          /**
           * Minimum permitted timestamp which can be requested.
           */
          min: string;
        }

        export type Type = 'array' | 'enum' | 'string' | 'timestamp';

        export namespace ArrayDetails {
          export interface EnumDetails {
            /**
             * Allowed values of the enum.
             */
            allowed_values: Array<string>;
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Reporting {
    export interface ReportRetrieveParams {}
  }
}
