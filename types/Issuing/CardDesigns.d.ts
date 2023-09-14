// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * A Card Design is a logical grouping of a Card Bundle, card logo, and carrier text that represents a product line.
       */
      interface CardDesign {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.card_design';

        /**
         * The card bundle object belonging to this card design.
         */
        card_bundle: string | Stripe.Issuing.CardBundle;

        /**
         * The file for the card logo, for use with card bundles that support card logos.
         */
        card_logo: string | Stripe.File | null;

        /**
         * Hash containing carrier text, for use with card bundles that support carrier text.
         */
        carrier_text: CardDesign.CarrierText | null;

        /**
         * A lookup key used to retrieve card designs dynamically from a static string. This may be up to 200 characters.
         */
        lookup_key: string | null;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Friendly display name.
         */
        name: string | null;

        preferences: CardDesign.Preferences;

        rejection_reasons: CardDesign.RejectionReasons;

        /**
         * Whether this card design can be used to create cards.
         */
        status: CardDesign.Status;
      }

      namespace CardDesign {
        interface CarrierText {
          /**
           * The footer body text of the carrier letter.
           */
          footer_body: string | null;

          /**
           * The footer title text of the carrier letter.
           */
          footer_title: string | null;

          /**
           * The header body text of the carrier letter.
           */
          header_body: string | null;

          /**
           * The header title text of the carrier letter.
           */
          header_title: string | null;
        }

        interface Preferences {
          /**
           * Whether this card design is used to create cards when one is not specified. A connected account will use the Connect platform's default if no card design is set as the account default.
           */
          account_default: boolean;

          /**
           * Whether this card design is used to create cards when one is not specified and an account default for this connected account does not exist.
           */
          platform_default: boolean | null;
        }

        interface RejectionReasons {
          /**
           * The reason(s) the card logo was rejected.
           */
          card_logo: Array<RejectionReasons.CardLogo> | null;

          /**
           * The reason(s) the carrier text was rejected.
           */
          carrier_text: Array<RejectionReasons.CarrierText> | null;
        }

        namespace RejectionReasons {
          type CardLogo =
            | 'geographic_location'
            | 'inappropriate'
            | 'network_name'
            | 'non_binary_image'
            | 'non_fiat_currency'
            | 'other'
            | 'other_entity'
            | 'promotional_material';

          type CarrierText =
            | 'geographic_location'
            | 'inappropriate'
            | 'network_name'
            | 'non_fiat_currency'
            | 'other'
            | 'other_entity'
            | 'promotional_material';
        }

        type Status = 'active' | 'inactive' | 'rejected' | 'review';
      }
    }
  }
}
