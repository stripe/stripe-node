// File generated from our OpenAPI spec

namespace Terminal {
  export interface LocationCreateParams {
    /**
     * The full address of the location.
     */
    address?: LocationCreateParams.Address;

    /**
     * The Kana variation of the full address of the location (Japan only).
     */
    address_kana?: Stripe.JapanAddressParam;

    /**
     * The Kanji variation of the full address of the location (Japan only).
     */
    address_kanji?: Stripe.JapanAddressParam;

    /**
     * The ID of a configuration that will be used to customize all readers in this location.
     */
    configuration_overrides?: string;

    /**
     * A name for the location. Maximum length is 1000 characters.
     */
    display_name?: string;

    /**
     * The Kana variation of the name for the location (Japan only). Maximum length is 1000 characters.
     */
    display_name_kana?: string;

    /**
     * The Kanji variation of the name for the location (Japan only). Maximum length is 1000 characters.
     */
    display_name_kanji?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * The phone number for the location.
     */
    phone?: string;
  }

  namespace LocationCreateParams {
    export interface Address {
      /**
       * City, district, suburb, town, or village.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string;

      /**
       * Address line 1, such as the street, PO Box, or company name.
       */
      line1?: string;

      /**
       * Address line 2, such as the apartment, suite, unit, or building.
       */
      line2?: string;

      /**
       * ZIP or postal code.
       */
      postal_code?: string;

      /**
       * State, county, province, or region.
       */
      state?: string;
    }
  }
}
namespace Terminal {
  export interface LocationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Terminal {
  export interface LocationUpdateParams {
    /**
     * The full address of the location. You can't change the location's `country`. If you need to modify the `country` field, create a new `Location` object and re-register any existing readers to that location.
     */
    address?: Stripe.AddressParam;

    /**
     * The Kana variation of the full address of the location (Japan only).
     */
    address_kana?: Stripe.JapanAddressParam;

    /**
     * The Kanji variation of the full address of the location (Japan only).
     */
    address_kanji?: Stripe.JapanAddressParam;

    /**
     * The ID of a configuration that will be used to customize all readers in this location.
     */
    configuration_overrides?: Stripe.Emptyable<string>;

    /**
     * A name for the location.
     */
    display_name?: Stripe.Emptyable<string>;

    /**
     * The Kana variation of the name for the location (Japan only).
     */
    display_name_kana?: Stripe.Emptyable<string>;

    /**
     * The Kanji variation of the name for the location (Japan only).
     */
    display_name_kanji?: Stripe.Emptyable<string>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

    /**
     * The phone number for the location.
     */
    phone?: Stripe.Emptyable<string>;
  }
}
namespace Terminal {
  export interface LocationListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Terminal {
  export interface LocationDeleteParams {}
}
