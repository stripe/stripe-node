declare namespace Stripe {
  /**
   * The ApplePayDomain object.
   */
  export interface ApplePayDomain {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    domain_name: string;

    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'apple_pay_domain';
  }

  export interface DeletedApplePayDomain {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'apple_pay_domain';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  /**
   * Create an apple pay domain.
   */
  export interface ApplePayDomainCreateParams {
    domain_name: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Delete an apple pay domain.
   */
  export interface ApplePayDomainDeleteParams {}

  /**
   * List apple pay domains.
   */
  export interface ApplePayDomainListParams {
    domain_name?: string;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Retrieve an apple pay domain.
   */
  export interface ApplePayDomainRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  class ApplePayDomainResource {
    /**
     * Create an apple pay domain.
     */
    create(
      params: ApplePayDomainCreateParams,
      options?: HeaderOptions
    ): Promise<ApplePayDomain>;

    /**
     * Delete an apple pay domain.
     */
    del(
      id: string,
      params?: ApplePayDomainDeleteParams,
      options?: HeaderOptions
    ): Promise<DeletedApplePayDomain>;

    /**
     * List apple pay domains.
     */
    list(
      params?: ApplePayDomainListParams,
      options?: HeaderOptions
    ): Promise<ApiList<ApplePayDomain>>;

    /**
     * Retrieve an apple pay domain.
     */
    retrieve(
      id: string,
      params?: ApplePayDomainRetrieveParams,
      options?: HeaderOptions
    ): Promise<ApplePayDomain>;
  }
}