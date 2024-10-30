// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface FraudLiabilityDebitRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface FraudLiabilityDebitListParams extends PaginationParams {
        /**
         * Only return Issuing Fraud Liability Debits that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class FraudLiabilityDebitsResource {
        /**
         * Retrieves an Issuing FraudLiabilityDebit object.
         */
        retrieve(
          id: string,
          params?: FraudLiabilityDebitRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.FraudLiabilityDebit>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.FraudLiabilityDebit>>;

        /**
         * Returns a list of Issuing FraudLiabilityDebit objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: FraudLiabilityDebitListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.FraudLiabilityDebit>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.FraudLiabilityDebit>;
      }
    }
  }
}
