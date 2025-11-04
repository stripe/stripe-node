// File generated from our OpenAPI spec

export interface PaymentMethodDomainCreateParams {
  /**
   * The domain name that this payment method domain object represents.
   */
  domain_name: string;

  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.
   */
  enabled?: boolean;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentMethodDomainRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentMethodDomainUpdateParams {
  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.
   */
  enabled?: boolean;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentMethodDomainListParams extends PaginationParams {
  /**
   * The domain name that this payment method domain object represents.
   */
  domain_name?: string;

  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods will not appear in Elements or Embedded Checkout
   */
  enabled?: boolean;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentMethodDomainValidateParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
