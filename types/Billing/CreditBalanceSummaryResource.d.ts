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
             * The price type that credit grants can apply to. We currently only support the `metered` price type. Cannot be used in combination with `prices`.
             */
            price_type?: 'metered';

            /**
             * A list of prices that the credit grant can apply to. We currently only support the `metered` prices. Cannot be used in combination with `price_type`.
             */
            prices?: Array<ApplicabilityScope.Price>;
          }

          namespace ApplicabilityScope {
            interface Price {
              /**
               * The price ID this credit grant should apply to.
               */
              id: string;
            }
          }

          type Type = 'applicability_scope' | 'credit_grant';
        }
      }

      class CreditBalanceSummaryResource {
        /**
         * Retrieves the credit balance summary for a customer.
         */
        retrieve(
          params: CreditBalanceSummaryRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditBalanceSummary>>;
      }
    }
  }
}
