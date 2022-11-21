// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface CustomerCashBalanceTransactionRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CustomerCashBalanceTransactionListParams
      extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
