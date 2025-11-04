// File generated from our OpenAPI spec

namespace Treasury {
  export interface DebitReversalCreateParams {
    /**
     * The ReceivedDebit to reverse.
     */
    received_debit: string;

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
  export interface DebitReversalRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Treasury {
  export interface DebitReversalListParams extends PaginationParams {
    /**
     * Returns objects associated with this FinancialAccount.
     */
    financial_account: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return DebitReversals for the ReceivedDebit ID.
     */
    received_debit?: string;

    /**
     * Only return DebitReversals for a given resolution.
     */
    resolution?: DebitReversalListParams.Resolution;

    /**
     * Only return DebitReversals for a given status.
     */
    status?: DebitReversalListParams.Status;
  }

  namespace DebitReversalListParams {
    export type Resolution = 'lost' | 'won';

    export type Status = 'canceled' | 'completed' | 'processing';
  }
}
