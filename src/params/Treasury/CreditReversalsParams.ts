// File generated from our OpenAPI spec

namespace Treasury {
  export interface CreditReversalCreateParams {
    /**
     * The ReceivedCredit to reverse.
     */
    received_credit: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.MetadataParam;
  }
}
namespace Treasury {
  export interface CreditReversalRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Treasury {
  export interface CreditReversalListParams extends PaginationParams {
    /**
     * Returns objects associated with this FinancialAccount.
     */
    financial_account: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return CreditReversals for the ReceivedCredit ID.
     */
    received_credit?: string;

    /**
     * Only return CreditReversals for a given status.
     */
    status?: CreditReversalListParams.Status;
  }

  namespace CreditReversalListParams {
    export type Status = 'canceled' | 'posted' | 'processing';
  }
}
