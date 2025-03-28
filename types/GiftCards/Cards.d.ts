// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace GiftCards {
      /**
       * A gift card represents a single gift card owned by a customer, including the
       * remaining balance, gift card code, and whether or not it is active.
       */
      interface Card {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'gift_cards.card';

        /**
         * Whether this gift card can be used or not.
         */
        active: boolean;

        /**
         * The amount of funds available for new transactions.
         */
        amount_available: number;

        /**
         * The amount of funds marked as held.
         */
        amount_held: number;

        /**
         * Code used to redeem this gift card.
         */
        code?: string | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The related Stripe objects that created this gift card.
         */
        created_by: Card.CreatedBy | null;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Transactions on this gift card.
         */
        transactions?: ApiList<Stripe.GiftCards.Transaction>;
      }

      namespace Card {
        interface CreatedBy {
          checkout?: CreatedBy.Checkout;

          order?: CreatedBy.Order;

          payment?: CreatedBy.Payment;

          /**
           * The type of event that created this object.
           */
          type: CreatedBy.Type;
        }

        namespace CreatedBy {
          interface Checkout {
            /**
             * The Stripe CheckoutSession that created this object.
             */
            checkout_session: string;

            /**
             * The Stripe CheckoutSession LineItem that created this object.
             */
            line_item: string | null;
          }

          interface Order {
            /**
             * The Stripe Order LineItem that created this object.
             */
            line_item: string | null;

            /**
             * The Stripe Order that created this object.
             */
            order: string;
          }

          interface Payment {
            /**
             * The PaymentIntent that created this object.
             */
            payment_intent: string;
          }

          type Type = 'checkout' | 'order' | 'payment';
        }
      }
    }
  }
}
