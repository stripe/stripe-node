// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class ReportResource extends StripeResource {
  /**
   * Returns a list of Stripe-defined reports that the caller can create a `ReportRun` for.
   */
  list(
    params?: V2.Data.ReportListParams,
    options?: RequestOptions
  ): V2ListPromise<Report> {
    return this._makeRequest('GET', '/v2/data/reports', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves metadata about a specific `Report`, including its name, description, and
   * the parameters it accepts. It's useful for understanding the capabilities and
   * requirements of a particular `Report` before requesting a `ReportRun`.
   */
  retrieve(
    id: string,
    params?: V2.Data.ReportRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Report>> {
    return this._makeRequest(
      'GET',
      `/v2/data/reports/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Report {
  /**
   * The unique identifier of the `Report`.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.data.report';

  /**
   * Representative SQL generated using common parameter values, or an explanatory message when
   * the report's SQL cannot be exposed. Only present when requested via `include[0]=default_sql`.
   */
  default_sql?: string;

  /**
   * A human-readable description of what this report contains.
   */
  description: string;

  /**
   * Whether this `Report` is available in live mode.
   */
  livemode: boolean;

  /**
   * The human-readable name of the `Report`.
   */
  name: string;

  /**
   * Specification of the parameters that the `Report` accepts, keyed by parameter name.
   */
  parameters?: {
    [key: string]: Report.Parameters;
  };
}
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
     * The data type of the parameter.
     */
    type: Parameters.Type;
  }

  export namespace Parameters {
    export interface ArrayDetails {
      /**
       * The data type of the elements in the array.
       */
      element_type: ArrayDetails.ElementType;

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

    export type Type = 'array' | 'enum' | 'string' | 'timestamp' | OtherString;

    export namespace ArrayDetails {
      export type ElementType =
        | 'array'
        | 'enum'
        | 'string'
        | 'timestamp'
        | OtherString;

      export interface EnumDetails {
        /**
         * Allowed values of the enum.
         */
        allowed_values: Array<string>;
      }
    }
  }
}
export namespace V2 {
  export namespace Data {
    export interface ReportRetrieveParams {
      /**
       * Any optional includes (see https://docs.stripe.com/api-includable-response-values).
       */
      include?: Array<ReportRetrieveParams.Include>;
    }

    export namespace ReportRetrieveParams {
      export type Include = 'default_sql' | 'parameters' | OtherString;
    }
  }
}
export namespace V2 {
  export namespace Data {
    export interface ReportListParams {
      /**
       * Any optional includes (see https://docs.stripe.com/api-includable-response-values).
       */
      include?: Array<ReportListParams.Include>;

      /**
       * The maximum number of results per page. Defaults to 10. Maximum is 100.
       */
      limit?: number;

      /**
       * If supplied, only return reports with this exact, case-sensitive name.
       */
      name?: string;
    }

    export namespace ReportListParams {
      export type Include = 'default_sql' | 'parameters' | OtherString;
    }
  }
}
