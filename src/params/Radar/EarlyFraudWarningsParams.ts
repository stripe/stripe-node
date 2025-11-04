// File generated from our OpenAPI spec

namespace Radar {
  export interface EarlyFraudWarningRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Radar {
  export interface EarlyFraudWarningListParams extends PaginationParams {
    /**
     * Only return early fraud warnings for the charge specified by this charge ID.
     */
    charge?: string;

    /**
     * Only return early fraud warnings that were created during the given date interval.
     */
    created?: Stripe.RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID.
     */
    payment_intent?: string;
  }
}
