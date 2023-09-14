// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface CardDesignCreateParams {
        /**
         * The card bundle object belonging to this card design.
         */
        card_bundle: string;

        /**
         * The file for the card logo, for use with card bundles that support card logos.
         */
        card_logo?: string;

        /**
         * Hash containing carrier text, for use with card bundles that support carrier text.
         */
        carrier_text?: CardDesignCreateParams.CarrierText;

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
         * Friendly display name.
         */
        name?: string;

        /**
         * Information on whether this card design is used to create cards when one is not specified.
         */
        preferences?: CardDesignCreateParams.Preferences;

        /**
         * If set to true, will atomically remove the lookup key from the existing card design, and assign it to this card design.
         */
        transfer_lookup_key?: boolean;
      }

      namespace CardDesignCreateParams {
        interface CarrierText {
          /**
           * The footer body text of the carrier letter.
           */
          footer_body?: string;

          /**
           * The footer title text of the carrier letter.
           */
          footer_title?: string;

          /**
           * The header body text of the carrier letter.
           */
          header_body?: string;

          /**
           * The header title text of the carrier letter.
           */
          header_title?: string;
        }

        interface Preferences {
          /**
           * Whether this card design is used to create cards when one is not specified. A connected account will use the Connect platform's default if no card design is set as the account default.
           */
          account_default: boolean;
        }
      }

      interface CardDesignRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CardDesignUpdateParams {
        /**
         * The card bundle object belonging to this card design.
         */
        card_bundle?: string;

        /**
         * The file for the card logo, for use with card bundles that support card logos.
         */
        card_logo?: string;

        /**
         * Hash containing carrier text, for use with card bundles that support carrier text.
         */
        carrier_text?: CardDesignUpdateParams.CarrierText;

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
         * Information on whether this card design is used to create cards when one is not specified.
         */
        preferences?: CardDesignUpdateParams.Preferences;

        /**
         * If set to true, will atomically remove the lookup key from the existing card design, and assign it to this card design.
         */
        transfer_lookup_key?: boolean;
      }

      namespace CardDesignUpdateParams {
        interface CarrierText {
          /**
           * The footer body text of the carrier letter.
           */
          footer_body?: string;

          /**
           * The footer title text of the carrier letter.
           */
          footer_title?: string;

          /**
           * The header body text of the carrier letter.
           */
          header_body?: string;

          /**
           * The header title text of the carrier letter.
           */
          header_title?: string;
        }

        interface Preferences {
          /**
           * Whether this card design is used to create cards when one is not specified. A connected account will use the Connect platform's default if no card design is set as the account default.
           */
          account_default: boolean;
        }
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
         * Only return card designs with the given preferences.
         */
        preferences?: CardDesignListParams.Preferences;

        /**
         * Only return card designs with the given status.
         */
        status?: CardDesignListParams.Status;
      }

      namespace CardDesignListParams {
        interface Preferences {
          /**
           * Only return the card design that is set as the account default. A connected account will use the Connect platform's default if no card design is set as the account default.
           */
          account_default?: boolean;

          /**
           * Only return the card design that is set as the Connect platform's default. This parameter is only applicable to connected accounts.
           */
          platform_default?: boolean;
        }

        type Status = 'active' | 'inactive' | 'rejected' | 'review';
      }

      class CardDesignsResource {
        /**
         * Creates a card design object.
         */
        create(
          params: CardDesignCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.CardDesign>>;

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
