// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      interface CreditBalanceSummaryRetrieveParams {
        /**
         * The customer for which to fetch credit balance summary.
         */
        customer: string;

        /**
         * The filter criteria for the credit balance summary.
         */
        filter: CreditBalanceSummaryRetrieveParams.Filter;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      namespace CreditBalanceSummaryRetrieveParams {
        interface Filter {
          /**
           * The billing credit applicability scope for which to fetch credit balance summary.
           */
          applicability_scope?: Filter.ApplicabilityScope;

          /**
           * The credit grant for which to fetch credit balance summary.
           */
          credit_grant?: string;

          /**
           * Specify the type of this filter.
           */
          type: Filter.Type;
        }

        namespace Filter {
          interface ApplicabilityScope {
            /**
             * The price type to which credit grants can apply to. We currently only support `metered` price type.
             */
            price_type: 'metered';
          }

          type Type = 'applicability_scope' | 'credit_grant';
        }
      }

      class CreditBalanceSummaryResource {
        /**
         * Retrieves the credit balance summary for a customer
         */
        retrieve(
          params: CreditBalanceSummaryRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditBalanceSummary>>;
      }
    }
  }
}
