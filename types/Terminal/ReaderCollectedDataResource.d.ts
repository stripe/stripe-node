// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      interface ReaderCollectedDataRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class ReaderCollectedDataResource {
        /**
         * Retrieve data collected using Reader hardware.
         */
        retrieve(
          id: string,
          params?: ReaderCollectedDataRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Terminal.ReaderCollectedData>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Terminal.ReaderCollectedData>>;
      }
    }
  }
}
