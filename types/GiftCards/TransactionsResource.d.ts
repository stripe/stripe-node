// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace GiftCards {
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
         * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
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
         * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
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
