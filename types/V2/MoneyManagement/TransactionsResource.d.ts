// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface TransactionRetrieveParams {}
      }

      namespace MoneyManagement {
        interface TransactionListParams {
          /**
           * Filter for Transactions created at an exact time.
           */
          created?: string;

          /**
           * Filter for Transactions created after the specified timestamp.
           */
          created_gt?: string;

          /**
           * Filter for Transactions created at or after the specified timestamp.
           */
          created_gte?: string;

          /**
           * Filter for Transactions created before the specified timestamp.
           */
          created_lt?: string;

          /**
           * Filter for Transactions created at or before the specified timestamp.
           */
          created_lte?: string;

          /**
           * Filter for Transactions belonging to a FinancialAccount.
           */
          financial_account?: string;

          /**
           * Filter for Transactions corresponding to a Flow.
           */
          flow?: string;

          /**
           * The page limit.
           */
          limit?: number;
        }
      }

      namespace MoneyManagement {
        class TransactionsResource {
          /**
           * Retrieves the details of a Transaction by ID.
           */
          retrieve(
            id: string,
            params?: TransactionRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Transaction>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Transaction>>;

          /**
           * Returns a list of Transactions that match the provided filters.
           */
          list(
            params?: TransactionListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Transaction>;
          list(options?: RequestOptions): ApiListPromise<Stripe.V2.Transaction>;
        }
      }
    }
  }
}
