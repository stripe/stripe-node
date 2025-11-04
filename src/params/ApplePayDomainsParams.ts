// File generated from our OpenAPI spec

export interface ApplePayDomainCreateParams {
  domain_name: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplePayDomainRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplePayDomainListParams extends PaginationParams {
  domain_name?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplePayDomainDeleteParams {}
