// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {ApplyExpandListItem, ApplyExpand} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class ReportTypeResource extends StripeResource {
  /**
   * Returns a full list of Report Types.
   */
  list<E extends string = never>(
    params?: Reporting.ReportTypeListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<ReportType, E>> {
    return this._makeRequest(
      'GET',
      '/v1/reporting/report_types',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves the details of a Report Type. (Certain report types require a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
   */
  retrieve<E extends string = never>(
    id: string,
    params?: Reporting.ReportTypeRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<ReportType, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/reporting/report_types/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface ReportType {
  /**
   * The [ID of the Report Type](https://docs.stripe.com/reporting/statements/api#available-report-types), such as `balance.summary.1`.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'reporting.report_type';

  /**
   * Most recent time for which this Report Type is available. Measured in seconds since the Unix epoch.
   */
  data_available_end: number;

  /**
   * Earliest time for which this Report Type is available. Measured in seconds since the Unix epoch.
   */
  data_available_start: number;

  /**
   * List of column names that are included by default when this Report Type gets run. (If the Report Type doesn't support the `columns` parameter, this will be null.)
   */
  default_columns: Array<string> | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Human-readable name of the Report Type
   */
  name: string;

  /**
   * When this Report Type was latest updated. Measured in seconds since the Unix epoch.
   */
  updated: number;

  /**
   * Version of the Report Type. Different versions report with the same ID will have the same purpose, but may take different run parameters or have different result schemas.
   */
  version: number;
}
export namespace Reporting {
  export interface ReportTypeRetrieveParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
export namespace Reporting {
  export interface ReportTypeListParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
