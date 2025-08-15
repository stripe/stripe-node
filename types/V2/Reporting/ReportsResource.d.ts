// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Reporting {
        interface ReportRetrieveParams {}
      }

      namespace Reporting {
        class ReportsResource {
          /**
           * Retrieves metadata about a specific `Report` template, including its name, description,
           * and the parameters it accepts. It's useful for understanding the capabilities and
           * requirements of a particular `Report` before requesting a `ReportRun`.
           */
          retrieve(
            id: string,
            params?: ReportRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Reporting.Report>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Reporting.Report>>;
        }
      }
    }
  }
}
