// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Reporting {
        interface ReportRunCreateParams {
          /**
           * The unique identifier of the `Report` being requested.
           */
          report: string;

          /**
           * A map of parameter names to values, specifying how the report should be customized.
           * The accepted parameters depend on the specific `Report` being run.
           */
          report_parameters: {
            [key: string]: ReportRunCreateParams.ReportParameters;
          };

          /**
           * Optional settings to customize the results of the `ReportRun`.
           */
          result_options?: ReportRunCreateParams.ResultOptions;
        }

        namespace ReportRunCreateParams {
          interface ReportParameters {
            /**
             * Parameter with an array data type.
             */
            array_value?: ReportParameters.ArrayValue;

            /**
             * Parameter with a string data type.
             */
            string_value?: string;

            /**
             * Parameter with a timestamp data type.
             */
            timestamp_value?: string;
          }

          namespace ReportParameters {
            interface ArrayValue {
              /**
               * The list of string values in the array.
               */
              items: Array<string>;
            }
          }

          interface ResultOptions {
            /**
             * If set, the generated report file will be compressed into a ZIP folder.
             * This is useful for reducing file size and download time for large reports.
             */
            compress_file?: boolean;
          }
        }
      }

      namespace Reporting {
        interface ReportRunRetrieveParams {}
      }

      namespace Reporting {
        class ReportRunsResource {
          /**
           * Initiates the generation of a `ReportRun` based on the specified report template
           * and user-provided parameters. It's the starting point for obtaining report data,
           * and returns a `ReportRun` object which can be used to track the progress and retrieve
           * the results of the report.
           * @throws Stripe.RateLimitError
           */
          create(
            params: ReportRunCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Reporting.ReportRun>>;

          /**
           * Fetches the current state and details of a previously created `ReportRun`. If the `ReportRun`
           * has succeeded, the endpoint will provide details for how to retrieve the results.
           */
          retrieve(
            id: string,
            params?: ReportRunRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Reporting.ReportRun>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Reporting.ReportRun>>;
        }
      }
    }
  }
}
