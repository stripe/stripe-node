// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface ProgramCreateParams {
        /**
         * The program to use as the parent for the new program to create.
         */
        platform_program: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If true, makes the specified program the default for the given account.
         */
        is_default?: boolean;
      }

      interface ProgramRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ProgramUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If true, makes the specified program the default.
         */
        is_default?: boolean;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      interface ProgramListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class ProgramsResource {
        /**
         * Create a Program object.
         */
        create(
          params: ProgramCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Program>>;

        /**
         * Retrieves the program specified by the given id.
         */
        retrieve(
          id: string,
          params?: ProgramRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Program>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Program>>;

        /**
         * Updates a Program object.
         */
        update(
          id: string,
          params?: ProgramUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Program>>;

        /**
         * List all of the programs the given Issuing user has access to.
         */
        list(
          params?: ProgramListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Program>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Issuing.Program>;
      }
    }
  }
}
