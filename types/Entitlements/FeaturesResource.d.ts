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
         * The type of feature.
         */
        type: FeatureCreateParams.Type;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Contains information about type=quantity features. This is required when type=quantity.
         */
        quantity?: FeatureCreateParams.Quantity;
      }

      namespace FeatureCreateParams {
        interface Quantity {
          /**
           * The quantity of units made available by this feature. This quantity will be multiplied by the line_item quantity for line_items that contain this feature.
           */
          units_available: number;
        }

        type Type = 'quantity' | 'switch';
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
