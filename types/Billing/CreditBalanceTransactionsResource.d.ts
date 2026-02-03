// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      interface CreditBalanceTransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CreditBalanceTransactionListParams extends PaginationParams {
        /**
         * The credit grant for which to fetch credit balance transactions.
         */
        credit_grant?: string;

        /**
         * The customer whose credit balance transactions you're retrieving.
         */
        customer?: string;

        /**
         * The account representing the customer whose credit balance transactions you're retrieving.
         */
        customer_account?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class CreditBalanceTransactionsResource {
        /**
         * Retrieves a credit balance transaction.
         */
        retrieve(
          id: string,
          params?: CreditBalanceTransactionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditBalanceTransaction>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditBalanceTransaction>>;

        /**
         * Retrieve a list of credit balance transactions.
         */
        list(
          params?: CreditBalanceTransactionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Billing.CreditBalanceTransaction>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Billing.CreditBalanceTransaction>;
      }
    }
  }
}
