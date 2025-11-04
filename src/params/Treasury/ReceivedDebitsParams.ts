// File generated from our OpenAPI spec

namespace Treasury {
  export interface ReceivedDebitRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Treasury {
  export interface ReceivedDebitListParams extends PaginationParams {
    /**
     * The FinancialAccount that funds were pulled from.
     */
    financial_account: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return ReceivedDebits that have the given status: `succeeded` or `failed`.
     */
    status?: ReceivedDebitListParams.Status;
  }

  namespace ReceivedDebitListParams {
    export type Status = 'failed' | 'succeeded';
  }
}
