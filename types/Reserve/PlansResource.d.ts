// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Reserve {
      interface PlanRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class PlansResource {
        /**
         * Retrieve a ReservePlan.
         */
        retrieve(
          id: string,
          params?: PlanRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Reserve.Plan>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Reserve.Plan>>;
      }
    }
  }
}
