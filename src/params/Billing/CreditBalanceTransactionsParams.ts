// File generated from our OpenAPI spec

namespace Billing {
  export interface CreditBalanceTransactionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Billing {
  export interface CreditBalanceTransactionListParams extends PaginationParams {
    /**
     * The customer for which to fetch credit balance transactions.
     */
    customer: string;

    /**
     * The credit grant for which to fetch credit balance transactions.
     */
    credit_grant?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
