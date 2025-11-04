// File generated from our OpenAPI spec

namespace Issuing {
  export interface TokenRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Issuing {
  export interface TokenUpdateParams {
    /**
     * Specifies which status the token should be updated to.
     */
    status: TokenUpdateParams.Status;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  namespace TokenUpdateParams {
    export type Status = 'active' | 'deleted' | 'suspended';
  }
}
namespace Issuing {
  export interface TokenListParams extends PaginationParams {
    /**
     * The Issuing card identifier to list tokens for.
     */
    card: string;

    /**
     * Only return Issuing tokens that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Select Issuing tokens with the given status.
     */
    status?: TokenListParams.Status;
  }

  namespace TokenListParams {
    export type Status = 'active' | 'deleted' | 'requested' | 'suspended';
  }
}
