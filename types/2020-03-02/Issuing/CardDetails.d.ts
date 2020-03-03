declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * The CardDetails object.
       */
      interface CardDetails {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.card_details';

        /**
         * You can [create physical or virtual cards](https://stripe.com/docs/issuing/cards) that are issued to cardholders.
         */
        card: Stripe.Issuing.Card;

        /**
         * The CVC number for the card.
         */
        cvc: string;

        /**
         * The expiration month of the card.
         */
        exp_month: number;

        /**
         * The expiration year of the card.
         */
        exp_year: number;

        /**
         * The card number.
         */
        number: string;
      }
    }
  }
}
