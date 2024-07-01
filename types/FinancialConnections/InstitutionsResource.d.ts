// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      interface InstitutionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface InstitutionListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class InstitutionsResource {
        /**
         * Retrieves the details of a Financial Connections Institution.
         */
        retrieve(
          id: string,
          params?: InstitutionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Institution>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Institution>>;

        /**
         * Returns a list of Financial Connections Institution objects.
         */
        list(
          params?: InstitutionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.FinancialConnections.Institution>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.FinancialConnections.Institution>;
      }
    }
  }
}
