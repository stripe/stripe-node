// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Sigma {
      interface SchemaListParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        product?: SchemaListParams.Product;
      }

      namespace SchemaListParams {
        type Product = 'sigma' | 'stripe_data_pipeline';
      }

      class SchemasResource {
        /**
         * Lists the schemas available to the authorized merchant in Stripe's data products
         */
        list(
          params?: SchemaListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Sigma.Schema>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Sigma.Schema>;
      }
    }
  }
}
