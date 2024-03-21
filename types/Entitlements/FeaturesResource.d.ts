// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Entitlements {
      interface FeatureCreateParams {
        /**
         * A unique key you provide as your own system identifier. This may be up to 80 characters.
         */
        lookup_key: string;

        /**
         * The feature's name, for your own purpose, not meant to be displayable to the customer.
         */
        name: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.MetadataParam;
      }

      interface FeatureListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class FeaturesResource {
        /**
         * Creates a feature
         */
        create(
          params: FeatureCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Entitlements.Feature>>;

        /**
         * Retrieve a list of features
         */
        list(
          params?: FeatureListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Entitlements.Feature>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Entitlements.Feature>;
      }
    }
  }
}
