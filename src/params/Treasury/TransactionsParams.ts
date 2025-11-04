// File generated from our OpenAPI spec

namespace Treasury {
  export interface TransactionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Treasury {
  export interface TransactionListParams extends PaginationParams {
    /**
     * Returns objects associated with this FinancialAccount.
     */
    financial_account: string;

    /**
     * Only return Transactions that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The results are in reverse chronological order by `created` or `posted_at`. The default is `created`.
     */
    order_by?: TransactionListParams.OrderBy;

    /**
     * Only return Transactions that have the given status: `open`, `posted`, or `void`.
     */
    status?: TransactionListParams.Status;

    /**
     * A filter for the `status_transitions.posted_at` timestamp. When using this filter, `status=posted` and `order_by=posted_at` must also be specified.
     */
    status_transitions?: TransactionListParams.StatusTransitions;
  }

  namespace TransactionListParams {
    export type OrderBy = 'created' | 'posted_at';

    export type Status = 'open' | 'posted' | 'void';

    export interface StatusTransitions {
      /**
       * Returns Transactions with `posted_at` within the specified range.
       */
      posted_at?: Stripe.RangeQueryParam | number;
    }
  }
}
