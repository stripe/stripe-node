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
      }
    }
  }
}
