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
        code: string | null;

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
        transactions: ApiList<Stripe.GiftCards.Transaction>;
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

      interface CardCreateParams {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The active state for the new gift card, defaults to false. The active state can be updated after creation.
         */
        active?: boolean;

        /**
         * Related objects which created this gift card.
         */
        created_by?: CardCreateParams.CreatedBy;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The initial amount to load onto the new gift card, defaults to 0.
         */
        initial_amount?: number;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      namespace CardCreateParams {
        interface CreatedBy {
          /**
           * The details for the payment that created this object.
           */
          payment: CreatedBy.Payment;

          /**
           * The type of event that created this object.
           */
          type: 'payment';
        }

        namespace CreatedBy {
          interface Payment {
            /**
             * The PaymentIntent used to collect payment for this object.
             */
            payment_intent: string;
          }
        }
      }

      interface CardRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CardUpdateParams {
        /**
         * The new active state for the gift card.
         */
        active?: boolean;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      interface CardListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CardValidateParams {
        /**
         * The gift card code to be validated.
         */
        code: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The pin associated with the gift card. Not all gift cards have pins.
         */
        giftcard_pin?: string;
      }

      class CardsResource {
        /**
         * Creates a new gift card object.
         */
        create(
          params: CardCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Card>>;

        /**
         * Retrieve a gift card by id
         */
        retrieve(
          id: string,
          params?: CardRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Card>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Card>>;

        /**
         * Update a gift card
         */
        update(
          id: string,
          params?: CardUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Card>>;

        /**
         * List gift cards for an account
         */
        list(
          params?: CardListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.GiftCards.Card>;
        list(options?: RequestOptions): ApiListPromise<Stripe.GiftCards.Card>;

        /**
         * Validates a gift card code, returning the matching gift card object if it exists.
         */
        validate(
          params: CardValidateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Card>>;
      }
    }
  }
}
