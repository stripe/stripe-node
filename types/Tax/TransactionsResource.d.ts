// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      interface TransactionCreateParams {
        /**
         * Tax Calculation ID to be used as input when creating the transaction.
         */
        from_calculation: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      interface TransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TransactionCreateReversalParams {
        /**
         * If `partial`, the provided line item amounts are reversed. If `full`, the original transaction is fully reversed.
         */
        mode: TransactionCreateReversalParams.Mode;

        /**
         * The ID of the Transaction to partially or fully reverse.
         */
        original_transaction: string;

        /**
         * A custom identifier for this reversal, such as 'myOrder_123-refund_1'. Must be unique across all transactions.
         */
        reference: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The line item amounts to reverse.
         */
        line_items?: Array<TransactionCreateReversalParams.LineItem>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      namespace TransactionCreateReversalParams {
        interface LineItem {
          /**
           * The amount to reverse, in negative integer cents.
           */
          amount: number;

          /**
           * The amount of tax to reverse, in negative integer cents.
           */
          amount_tax: number;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The `id` of the line item to reverse in the original transaction.
           */
          original_line_item: string;

          /**
           * The quantity reversed.
           */
          quantity?: number;

          /**
           * A custom identifier for this line item in the reversal transaction, such as 'L1-refund'.
           */
          reference: string;
        }

        type Mode = 'full' | 'partial';
      }

      class TransactionsResource {
        /**
         * Creates a Tax Transaction from a calculation.
         */
        create(
          params: TransactionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Transaction>>;

        /**
         * Retrieves a Tax Transaction object.
         */
        retrieve(
          id: string,
          params?: TransactionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Transaction>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Transaction>>;

        /**
         * Partially or fully reverses a previously created Transaction.
         */
        createReversal(
          params: TransactionCreateReversalParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Transaction>>;
      }
    }
  }
}
