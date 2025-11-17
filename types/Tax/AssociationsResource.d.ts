// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      interface AssociationFindParams {
        /**
         * Valid [PaymentIntent](https://stripe.com/docs/api/payment_intents/object) id
         */
        payment_intent: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class AssociationsResource {
        /**
         * Finds a tax association object by PaymentIntent id.
         */
        find(
          params: AssociationFindParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Association>>;
      }
    }
  }
}
