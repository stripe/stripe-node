// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace GiftCards {
      /**
       * A gift card transaction represents a single transaction on a referenced gift card.
       * A transaction is in one of three states, `confirmed`, `held` or `canceled`. A `confirmed`
       * transaction is one that has added/deducted funds. A `held` transaction has created a
       * temporary hold on funds, which can then be cancelled or confirmed. A `held` transaction
       * can be confirmed into a `confirmed` transaction, or canceled into a `canceled` transaction.
       * A `canceled` transaction has no effect on a gift card's balance.
       */
      interface Transaction {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'gift_cards.transaction';

        /**
         * The amount of this transaction. A positive value indicates that funds were added to the gift card. A negative value indicates that funds were removed from the gift card.
         */
        amount: number | null;

        /**
         * Time at which the transaction was confirmed. Measured in seconds since the Unix epoch.
         */
        confirmed_at: number | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number | null;

        /**
         * The related Stripe objects that created this gift card transaction.
         */
        created_by: Transaction.CreatedBy | null;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string | null;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description: string | null;

        /**
         * The gift card that this transaction occurred on
         */
        gift_card: string | null;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Status of this transaction, one of `held`, `confirmed`, or `canceled`.
         */
        status: Transaction.Status | null;

        /**
         * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers) for details.
         */
        transfer_group: string | null;
      }

      namespace Transaction {
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

        type Status = 'canceled' | 'confirmed' | 'held' | 'invalid';
      }

      interface TransactionCreateParams {
        /**
         * The amount of the transaction. A negative amount deducts funds, and a positive amount adds funds.
         */
        amount: number;

        /**
         * The currency of the transaction. This must match the currency of the gift card.
         */
        currency: string;

        /**
         * The gift card to create a new transaction on.
         */
        gift_card: string;

        /**
         * Whether this is a confirmed transaction. A confirmed transaction immediately deducts from/adds to the `amount_available` on the gift card. Otherwise, it creates a held transaction that increments the `amount_held` on the gift card.
         */
        confirm?: boolean;

        /**
         * Related objects which created this transaction.
         */
        created_by?: TransactionCreateParams.CreatedBy;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers) for details.
         */
        transfer_group?: string;
      }

      namespace TransactionCreateParams {
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

      interface TransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TransactionUpdateParams {
        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      interface TransactionListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The gift card to list transactions for.
         */
        gift_card?: string;

        /**
         * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers) for details.
         */
        transfer_group?: string;
      }

      interface TransactionCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TransactionConfirmParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class TransactionsResource {
        /**
         * Create a gift card transaction
         */
        create(
          params: TransactionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Transaction>>;

        /**
         * Retrieves the gift card transaction.
         */
        retrieve(
          id: string,
          params?: TransactionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Transaction>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Transaction>>;

        /**
         * Update a gift card transaction
         */
        update(
          id: string,
          params?: TransactionUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Transaction>>;

        /**
         * List gift card transactions for a gift card
         */
        list(
          params?: TransactionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.GiftCards.Transaction>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.GiftCards.Transaction>;

        /**
         * Cancel a gift card transaction
         */
        cancel(
          id: string,
          params?: TransactionCancelParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Transaction>>;
        cancel(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Transaction>>;

        /**
         * Confirm a gift card transaction
         */
        confirm(
          id: string,
          params?: TransactionConfirmParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Transaction>>;
        confirm(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.GiftCards.Transaction>>;
      }
    }
  }
}
