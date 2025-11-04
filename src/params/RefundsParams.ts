// File generated from our OpenAPI spec

export interface RefundCreateParams {
  amount?: number;

  /**
   * The identifier of the charge to refund.
   */
  charge?: string;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;

  /**
   * Customer whose customer balance to refund from.
   */
  customer?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * For payment methods without native refund support (e.g., Konbini, PromptPay), use this email from the customer to receive refund instructions.
   */
  instructions_email?: string;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

  /**
   * Origin of the refund
   */
  origin?: 'customer_balance';

  /**
   * The identifier of the PaymentIntent to refund.
   */
  payment_intent?: string;

  /**
   * String indicating the reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying `fraudulent` as the reason will add the associated card and email to your [block lists](https://stripe.com/docs/radar/lists), and will also help us improve our fraud detection algorithms.
   */
  reason?: RefundCreateParams.Reason;

  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refund_application_fee?: boolean;

  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount).
   *
   * A transfer can be reversed only by the application that created the charge.
   */
  reverse_transfer?: boolean;
}
namespace RefundCreateParams {
  export type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer';
}
export interface RefundRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface RefundUpdateParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
}
export interface RefundListParams extends PaginationParams {
  /**
   * Only return refunds for the charge specified by this charge ID.
   */
  charge?: string;

  /**
   * Only return refunds that were created during the given date interval.
   */
  created?: Stripe.RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Only return refunds for the PaymentIntent specified by this ID.
   */
  payment_intent?: string;
}
export interface RefundCancelParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
