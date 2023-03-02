// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface CardBundleRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CardBundleListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return card bundles with the given status.
         */
        status?: CardBundleListParams.Status;

        /**
         * Only return card bundles with the given type.
         */
        type?: CardBundleListParams.Type;
      }

      namespace CardBundleListParams {
        type Status = 'active' | 'inactive' | 'review';

        type Type = 'custom' | 'standard';
      }

      class CardBundlesResource {
        /**
         * Retrieves a card bundle object.
         */
        retrieve(
          id: string,
          params?: CardBundleRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CardBundle>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CardBundle>>;

        /**
         * Returns a list of card bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: CardBundleListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.CardBundle>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.CardBundle>;
      }
    }
  }
}
