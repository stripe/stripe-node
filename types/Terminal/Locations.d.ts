// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * The DeletedLocation object.
       */
      interface DeletedLocation {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.location';

        /**
         * Always true for a deleted object
         */
        deleted: true;
      }

      /**
       * A Location represents a grouping of readers.
       *
       * Related guide: [Fleet management](https://docs.stripe.com/terminal/fleet/locations)
       */
      interface Location {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.location';

        address: Stripe.Address;

        address_kana?: Location.AddressKana;

        address_kanji?: Location.AddressKanji;

        /**
         * The ID of a configuration that will be used to customize all readers in this location.
         */
        configuration_overrides?: string;

        /**
         * Always true for a deleted object
         */
        deleted?: void;

        /**
         * The display name of the location.
         */
        display_name: string;

        /**
         * The Kana variation of the display name of the location.
         */
        display_name_kana?: string;

        /**
         * The Kanji variation of the display name of the location.
         */
        display_name_kanji?: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * The phone number of the location.
         */
        phone?: string;
      }

      namespace Location {
        interface AddressKana {
          /**
           * City/Ward.
           */
          city: string | null;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string | null;

          /**
           * Block/Building number.
           */
          line1: string | null;

          /**
           * Building details.
           */
          line2: string | null;

          /**
           * ZIP or postal code.
           */
          postal_code: string | null;

          /**
           * Prefecture.
           */
          state: string | null;

          /**
           * Town/cho-me.
           */
          town: string | null;
        }

        interface AddressKanji {
          /**
           * City/Ward.
           */
          city: string | null;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string | null;

          /**
           * Block/Building number.
           */
          line1: string | null;

          /**
           * Building details.
           */
          line2: string | null;

          /**
           * ZIP or postal code.
           */
          postal_code: string | null;

          /**
           * Prefecture.
           */
          state: string | null;

          /**
           * Town/cho-me.
           */
          town: string | null;
        }
      }
    }
  }
}
