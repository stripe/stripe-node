declare namespace Stripe {
  namespace Reporting {
    /**
     * The ReportRun object.
     */
    interface ReportRun {
      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * If something should go wrong during the run, a message about the failure (populated when
       *  `status=failed`).
       */
      error?: string | null;

      /**
       * Unique identifier for the object.
       */
      id?: string;

      /**
       * Always `true`: reports can only be run on live-mode data.
       */
      livemode?: boolean;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'reporting.report_run';

      parameters?: Parameters;

      /**
       * The ID of the [report type](https://stripe.com/docs/reporting/statements/api#report-types) to run, such as `"balance.summary.1"`.
       */
      report_type?: string;

      /**
       * The file object representing the result of the report run (populated when
       *  `status=succeeded`).
       */
      result?: File | null;

      /**
       * Status of this report run. This will be `pending` when the run is initially created.
       *  When the run finishes, this will be set to `succeeded` and the `result` field will be populated.
       *  Rarely, we may encounter an error, at which point this will be set to `failed` and the `error` field will be populated.
       */
      status?: string;

      /**
       * Timestamp at which this run successfully finished (populated when
       *  `status=succeeded`). Measured in seconds since the Unix epoch.
       */
      succeeded_at?: number | null;
    }

    /**
     * Creates a new object and begin running the report. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
     */
    interface ReportRunCreateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Parameters specifying how the report should be run. Different Report Types have different required and optional parameters, listed in the [API Access to Reports](https://stripe.com/docs/reporting/statements/api) documentation.
       */
      parameters?: run_parameter_specs;

      /**
       * The ID of the [report type](https://stripe.com/docs/reporting/statements/api#report-types) to run, such as `"balance.summary.1"`.
       */
      report_type: string;
    }

    /**
     * Returns a list of Report Runs, with the most recent appearing first. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
     */
    interface ReportRunListParams {
      created?: range_query_specs | number;

      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;
    }

    /**
     * Retrieves the details of an existing Report Run. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
     */
    interface ReportRunRetrieveParams {
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
        options?: HeaderOptions
      ): Promise<Reporting.ReportRun>;

      /**
       * Returns a list of Report Runs, with the most recent appearing first. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
       */
      list(
        params?: ReportRunListParams,
        options?: HeaderOptions
      ): Promise<ApiList<Reporting.ReportRun>>;

      /**
       * Retrieves the details of an existing Report Run. (Requires a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
       */
      retrieve(
        id: string,
        params?: ReportRunRetrieveParams,
        options?: HeaderOptions
      ): Promise<Reporting.ReportRun>;
    }
  }
}