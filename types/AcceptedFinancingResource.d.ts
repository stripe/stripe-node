// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface AcceptedFinancingRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class AcceptedFinancingResource {
      /**
       * Returns the Accepted Financing offers for a merchant
       */
      retrieve(
        params?: AcceptedFinancingRetrieveParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.AcceptedFinancing>;
      retrieve(
        options?: RequestOptions
      ): ApiListPromise<Stripe.AcceptedFinancing>;
    }
  }
}
