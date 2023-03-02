// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface CardDesignRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CardDesignUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A lookup key used to retrieve card designs dynamically from a static string. This may be up to 200 characters.
         */
        lookup_key?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Friendly display name. Providing an empty string will set the field to null.
         */
        name?: string;

        /**
         * Whether this card design is used to create cards when one is not specified.
         */
        preference?: CardDesignUpdateParams.Preference;

        /**
         * If set to true, will atomically remove the lookup key from the existing card design, and assign it to this card design.
         */
        transfer_lookup_key?: boolean;
      }

      namespace CardDesignUpdateParams {
        type Preference = 'default' | 'none';
      }

      interface CardDesignListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return card designs with the given lookup keys.
         */
        lookup_keys?: Array<string>;

        /**
         * Only return card designs with the given preference.
         */
        preference?: CardDesignListParams.Preference;

        /**
         * Only return card designs with the given status.
         */
        status?: CardDesignListParams.Status;
      }

      namespace CardDesignListParams {
        type Preference = 'default' | 'none';

        type Status = 'active' | 'inactive' | 'rejected' | 'review';
      }

      class CardDesignsResource {
        /**
         * Retrieves a card design object.
         */
        retrieve(
          id: string,
          params?: CardDesignRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CardDesign>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CardDesign>>;

        /**
         * Updates a card design object.
         */
        update(
          id: string,
          params?: CardDesignUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CardDesign>>;

        /**
         * Returns a list of card design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: CardDesignListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.CardDesign>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.CardDesign>;
      }
    }
  }
}
