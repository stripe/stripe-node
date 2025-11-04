// File generated from our OpenAPI spec

namespace Issuing {
  export interface AuthorizationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Issuing {
  export interface AuthorizationUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }
}
namespace Issuing {
  export interface AuthorizationListParams extends PaginationParams {
    /**
     * Only return authorizations that belong to the given card.
     */
    card?: string;

    /**
     * Only return authorizations that belong to the given cardholder.
     */
    cardholder?: string;

    /**
     * Only return authorizations that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
     */
    status?: AuthorizationListParams.Status;
  }

  namespace AuthorizationListParams {
    export type Status = 'closed' | 'expired' | 'pending' | 'reversed';
  }
}
namespace Issuing {
  export interface AuthorizationApproveParams {
    /**
     * If the authorization's `pending_request.is_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://stripe.com/docs/api/issuing/authorizations/decline) to decline an authorization request).
     */
    amount?: number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }
}
namespace Issuing {
  export interface AuthorizationDeclineParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }
}
