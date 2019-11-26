declare namespace Stripe {
  /**
   * The ReportType object.
   */
  export interface ReportType {
    /**
     * Most recent time for which this Report Type is available. Measured in seconds since the Unix epoch.
     */
    data_available_end?: number;

    /**
     * Earliest time for which this Report Type is available. Measured in seconds since the Unix epoch.
     */
    data_available_start?: number;

    /**
     * List of column names that are included by default when this Report Type gets run. (If the Report Type doesn't support the `columns` parameter, this will be null.)
     */
    default_columns?: Array<string> | null;

    /**
     * The [ID of the Report Type](https://stripe.com/docs/reporting/statements/api#available-report-types), such as `balance.summary.1`.
     */
    id?: string;

    /**
     * Human-readable name of the Report Type
     */
    name?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'reporting.report_type';

    /**
     * When this Report Type was latest updated. Measured in seconds since the Unix epoch.
     */
    updated?: number;

    /**
     * Version of the Report Type. Different versions report with the same ID will have the same purpose, but may take different run parameters or have different result schemas.
     */
    version?: number;
  }

  /**
   * Returns a full list of Report Types. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
   */
  export interface ReportTypeListParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Retrieves the details of a Report Type. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
   */
  export interface ReportTypeRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class ReportTypeResource {
    /**
     * Returns a full list of Report Types. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
     */
    list(
      params?: ReportTypeListParams,
      options?: HeaderOptions
    ): Promise<ApiList<Reporting.ReportType>>;

    /**
     * Retrieves the details of a Report Type. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
     */
    retrieve(
      id: string,
      params?: ReportTypeRetrieveParams,
      options?: HeaderOptions
    ): Promise<Reporting.ReportType>;
  }
}