// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Capital {
      interface FinancingTransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface FinancingTransactionListParams extends PaginationParams {
        /**
         * For transactions of type `paydown` and reason `automatic_withholding` only, only returns transactions that were created as a result of this charge.
         */
        charge?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Returns transactions that were created that apply to this financing offer ID.
         */
        financing_offer?: string;

        /**
         * Only returns transactions that are responsible for reversing this financing transaction ID.
         */
        reversed_transaction?: string;

        /**
         * For transactions of type `paydown` and reason `automatic_withholding` only, only returns transactions that were created as a result of this Treasury Transaction.
         */
        treasury_transaction?: string;
      }

      class FinancingTransactionsResource {
        /**
         * Retrieves a financing transaction for a financing offer.
         */
        retrieve(
          id: string,
          params?: FinancingTransactionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Capital.FinancingTransaction>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Capital.FinancingTransaction>>;

        /**
         * Returns a list of financing transactions. The transactions are returned in sorted order,
         * with the most recent transactions appearing first.
         */
        list(
          params?: FinancingTransactionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Capital.FinancingTransaction>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Capital.FinancingTransaction>;
      }
    }
  }
}
