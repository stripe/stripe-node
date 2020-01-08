declare module 'stripe' {
  namespace Stripe {
    namespace Reporting {
      /**
       * The ReportRun object.
       */
      interface ReportRun {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'reporting.report_run';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * If something should go wrong during the run, a message about the failure (populated when
         *  `status=failed`).
         */
        error: string | null;

        /**
         * Always `true`: reports can only be run on live-mode data.
         */
        livemode: boolean;

        parameters: ReportRun.Parameters;

        /**
         * The ID of the [report type](https://stripe.com/docs/reporting/statements/api#report-types) to run, such as `"balance.summary.1"`.
         */
        report_type: string;

        /**
         * The file object representing the result of the report run (populated when
         *  `status=succeeded`).
         */
        result: Stripe.File | null;

        /**
         * Status of this report run. This will be `pending` when the run is initially created.
         *  When the run finishes, this will be set to `succeeded` and the `result` field will be populated.
         *  Rarely, we may encounter an error, at which point this will be set to `failed` and the `error` field will be populated.
         */
        status: string;

        /**
         * Timestamp at which this run successfully finished (populated when
         *  `status=succeeded`). Measured in seconds since the Unix epoch.
         */
        succeeded_at: number | null;
      }

      namespace ReportRun {
        interface Parameters {
          /**
           * The set of output columns requested for inclusion in the report run.
           */
          columns?: Array<string>;

          /**
           * Connected account ID by which to filter the report run.
           */
          connected_account?: string;

          /**
           * Currency of objects to be included in the report run.
           */
          currency?: string;

          /**
           * Ending timestamp of data to be included in the report run (exclusive).
           */
          interval_end?: number;

          /**
           * Starting timestamp of data to be included in the report run.
           */
          interval_start?: number;

          /**
           * Payout ID by which to filter the report run.
           */
          payout?: string;

          /**
           * Category of balance transactions to be included in the report run.
           */
          reporting_category?: string;
        }
      }

      interface ReportRunCreateParams {
        /**
         * The ID of the [report type](https://stripe.com/docs/reporting/statements/api#report-types) to run, such as `"balance.summary.1"`.
         */
        report_type: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Parameters specifying how the report should be run. Different Report Types have different required and optional parameters, listed in the [API Access to Reports](https://stripe.com/docs/reporting/statements/api) documentation.
         */
        parameters?: ReportRunCreateParams.Parameters;
      }

      namespace ReportRunCreateParams {
        interface Parameters {
          /**
           * The set of report columns to include in the report output. If omitted, the Report Type is run with its default column set.
           */
          columns?: Array<string>;

          /**
           * Connected account ID to filter for in the report run.
           */
          connected_account?: string;

          /**
           * Currency of objects to be included in the report run.
           */
          currency?: string;

          /**
           * Ending timestamp of data to be included in the report run (exclusive).
           */
          interval_end?: number;

          /**
           * Starting timestamp of data to be included in the report run.
           */
          interval_start?: number;

          /**
           * Payout ID by which to filter the report run.
           */
          payout?: string;

          /**
           * Category of balance transactions to be included in the report run.
           */
          reporting_category?: Parameters.ReportingCategory;
        }

        namespace Parameters {
          type ReportingCategory =
            | 'advance'
            | 'advance_funding'
            | 'charge'
            | 'charge_failure'
            | 'connect_collection_transfer'
            | 'connect_reserved_funds'
            | 'dispute'
            | 'dispute_reversal'
            | 'fee'
            | 'financing_paydown'
            | 'financing_paydown_reversal'
            | 'financing_payout'
            | 'financing_payout_reversal'
            | 'issuing_authorization_hold'
            | 'issuing_authorization_release'
            | 'issuing_transaction'
            | 'network_cost'
            | 'other_adjustment'
            | 'partial_capture_reversal'
            | 'payout'
            | 'payout_reversal'
            | 'platform_earning'
            | 'platform_earning_refund'
            | 'refund'
            | 'refund_failure'
            | 'risk_reserved_funds'
            | 'tax'
            | 'topup'
            | 'topup_reversal'
            | 'transfer'
            | 'transfer_reversal';
        }
      }

      interface ReportRunRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ReportRunListParams extends PaginationParams {
        created?: RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class ReportRunsResource {
        /**
         * Creates a new object and begin running the report. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
         */
        create(
          params: ReportRunCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Reporting.ReportRun>;

        /**
         * Retrieves the details of an existing Report Run. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
         */
        retrieve(
          id: string,
          params?: ReportRunRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Reporting.ReportRun>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Reporting.ReportRun>;

        /**
         * Returns a list of Report Runs, with the most recent appearing first. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
         */
        list(
          params?: ReportRunListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Reporting.ReportRun>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Reporting.ReportRun>;
      }
    }
  }
}
