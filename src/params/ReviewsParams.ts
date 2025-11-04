// File generated from our OpenAPI spec

export interface ReviewRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ReviewListParams extends PaginationParams {
  /**
   * Only return reviews that were created during the given date interval.
   */
  created?: Stripe.RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ReviewApproveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
