// File generated from our OpenAPI spec

export interface ApplicationFeeRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplicationFeeListParams extends PaginationParams {
  /**
   * Only return application fees for the charge specified by this charge ID.
   */
  charge?: string;

  /**
   * Only return applications fees that were created during the given date interval.
   */
  created?: Stripe.RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplicationFeeCreateRefundParams {
  /**
   * A positive integer, in _cents (or local equivalent)_, representing how much of this fee to refund. Can refund only up to the remaining unrefunded amount of the fee.
   */
  amount?: number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.MetadataParam;
}
export interface ApplicationFeeListRefundsParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplicationFeeRetrieveRefundParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplicationFeeUpdateRefundParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
}
