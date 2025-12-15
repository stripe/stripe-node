// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Capital {
      interface FinancingSummaryRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class FinancingSummaryResource {
        /**
         * Retrieve the financing summary object for the account.
         */
        retrieve(
          params?: FinancingSummaryRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Capital.FinancingSummary>>;
        retrieve(
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Capital.FinancingSummary>>;
      }
    }
  }
}
