// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * A Card Bundle represents the bundle of physical items - card stock, carrier letter, and envelope - that is shipped to a cardholder when you create a physical card.
       */
      interface CardBundle {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.card_bundle';

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Friendly display name.
         */
        name: string;

        /**
         * Whether this card bundle can be used to create cards.
         */
        status: CardBundle.Status;

        /**
         * Whether this card bundle is a standard Stripe offering or custom-made for you.
         */
        type: CardBundle.Type;
      }

      namespace CardBundle {
        type Status = 'active' | 'inactive' | 'review';

        type Type = 'custom' | 'standard';
      }
    }
  }
}
