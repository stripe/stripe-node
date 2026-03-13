// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Orchestration {
      interface PaymentAttemptRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class PaymentAttemptsResource {
        /**
         * Retrieves orchestration information for the given payment attempt record (e.g. return url).
         */
        retrieve(
          id: string,
          params?: PaymentAttemptRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Orchestration.PaymentAttempt>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Orchestration.PaymentAttempt>>;
      }
    }
  }
}
