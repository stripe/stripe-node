// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface DisputeSettlementDetailRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface DisputeSettlementDetailListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Select the Issuing dispute settlement details for the given settlement.
         */
        settlement?: string;
      }

      class DisputeSettlementDetailsResource {
        /**
         * Retrieves an Issuing DisputeSettlementDetail object.
         */
        retrieve(
          id: string,
          params?: DisputeSettlementDetailRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.DisputeSettlementDetail>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.DisputeSettlementDetail>>;

        /**
         * Returns a list of Issuing DisputeSettlementDetail objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: DisputeSettlementDetailListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.DisputeSettlementDetail>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.DisputeSettlementDetail>;
      }
    }
  }
}
