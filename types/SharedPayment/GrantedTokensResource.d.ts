// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace SharedPayment {
      interface GrantedTokenRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class GrantedTokensResource {
        /**
         * Retrieves an existing SharedPaymentGrantedToken object
         */
        retrieve(
          id: string,
          params?: GrantedTokenRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.SharedPayment.GrantedToken>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.SharedPayment.GrantedToken>>;
      }
    }
  }
}
