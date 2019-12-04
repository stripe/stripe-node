declare namespace Stripe {
  /**
   * The ApplePayDomain object.
   */
  interface ApplePayDomain {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'apple_pay_domain';

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    deleted?: void;

    domain_name: string;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
  }

  interface DeletedApplePayDomain {
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
  interface ApplePayDomainCreateParams {
    domain_name: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Retrieve an apple pay domain.
   */
  interface ApplePayDomainRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * List apple pay domains.
   */
  interface ApplePayDomainListParams {
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
   * Delete an apple pay domain.
   */
  interface ApplePayDomainDeleteParams {}

  class ApplePayDomainsResource {
    /**
     * Create an apple pay domain.
     */
    create(
      params: ApplePayDomainCreateParams,
      options?: RequestOptions
    ): Promise<ApplePayDomain>;

    /**
     * Retrieve an apple pay domain.
     */
    retrieve(
      id: string,
      params?: ApplePayDomainRetrieveParams,
      options?: RequestOptions
    ): Promise<ApplePayDomain>;
    retrieve(id: string, options?: RequestOptions): Promise<ApplePayDomain>;

    /**
     * List apple pay domains.
     */
    list(
      params?: ApplePayDomainListParams,
      options?: RequestOptions
    ): ApiListPromise<ApplePayDomain>;
    list(options?: RequestOptions): ApiListPromise<ApplePayDomain>;

    /**
     * Delete an apple pay domain.
     */
    del(
      id: string,
      params?: ApplePayDomainDeleteParams,
      options?: RequestOptions
    ): Promise<DeletedApplePayDomain>;
    del(id: string, options?: RequestOptions): Promise<DeletedApplePayDomain>;
  }
}