declare module 'stripe' {
  namespace Stripe {
    namespace Sigma {
      /**
       * The ScheduledQueryRun object.
       */
      interface ScheduledQueryRun {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'scheduled_query_run';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * When the query was run, Sigma contained a snapshot of your Stripe data at this time.
         */
        data_load_time: number;

        error?: ScheduledQueryRun.Error;

        /**
         * The file object representing the results of the query.
         */
        file: Stripe.File | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Time at which the result expires and is no longer available for download.
         */
        result_available_until: number;

        /**
         * SQL for the query.
         */
        sql: string;

        /**
         * The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise.
         */
        status: string;

        /**
         * Title of the query.
         */
        title: string;
      }

      namespace ScheduledQueryRun {
        interface Error {
          /**
           * Information about the run failure.
           */
          message: string;
        }
      }

      interface ScheduledQueryRunRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ScheduledQueryRunListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class ScheduledQueryRunsResource {
        /**
         * Retrieves the details of an scheduled query run.
         */
        retrieve(
          id: string,
          params?: ScheduledQueryRunRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Sigma.ScheduledQueryRun>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Sigma.ScheduledQueryRun>;

        /**
         * Returns a list of scheduled query runs.
         */
        list(
          params?: ScheduledQueryRunListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Sigma.ScheduledQueryRun>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Sigma.ScheduledQueryRun>;
      }
    }
  }
}
