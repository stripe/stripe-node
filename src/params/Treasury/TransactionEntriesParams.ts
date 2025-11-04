// File generated from our OpenAPI spec

namespace Treasury {
  export interface TransactionEntryRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Treasury {
  export interface TransactionEntryListParams extends PaginationParams {
    /**
     * Returns objects associated with this FinancialAccount.
     */
    financial_account: string;

    /**
     * Only return TransactionEntries that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

    effective_at?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The results are in reverse chronological order by `created` or `effective_at`. The default is `created`.
     */
    order_by?: TransactionEntryListParams.OrderBy;

    /**
     * Only return TransactionEntries associated with this Transaction.
     */
    transaction?: string;
  }

  namespace TransactionEntryListParams {
    export type OrderBy = 'created' | 'effective_at';
  }
}
