// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Reporting {
      /**
       * The ReportType object.
       */
      interface ReportType {
        /**
         * The [ID of the Report Type](https://stripe.com/docs/reporting/statements/api#available-report-types), such as `balance.summary.1`.
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

      interface ReportTypeRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ReportTypeListParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class ReportTypesResource {
        /**
         * Retrieves the details of a Report Type. (Certain report types require a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
         */
        retrieve(
          id: string,
          params?: ReportTypeRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Reporting.ReportType>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Reporting.ReportType>>;

        /**
         * Returns a full list of Report Types.
         */
        list(
          params?: ReportTypeListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Reporting.ReportType>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Reporting.ReportType>;
      }
    }
  }
}
