// File generated from our OpenAPI spec

namespace Issuing {
  export interface TransactionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Issuing {
  export interface TransactionUpdateParams {
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
  export interface TransactionListParams extends PaginationParams {
    /**
     * Only return transactions that belong to the given card.
     */
    card?: string;

    /**
     * Only return transactions that belong to the given cardholder.
     */
    cardholder?: string;

    /**
     * Only return transactions that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return transactions that have the given type. One of `capture` or `refund`.
     */
    type?: TransactionListParams.Type;
  }

  namespace TransactionListParams {
    export type Type = 'capture' | 'refund';
  }
}
