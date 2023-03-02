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

        /**
         * Whether this card design is used to create cards when one is not specified.
         */
        preference: CardDesign.Preference;

        /**
         * Whether this card design can be used to create cards.
         */
        status: CardDesign.Status;
      }

      namespace CardDesign {
        type Preference = 'default' | 'none';

        type Status = 'active' | 'inactive' | 'rejected' | 'review';
      }
    }
  }
}
