// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
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

    /**
     * The DeletedApplePayDomain object.
     */
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

    interface ApplePayDomainCreateParams {
      domain_name: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ApplePayDomainRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ApplePayDomainListParams extends PaginationParams {
      domain_name?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ApplePayDomainDeleteParams {}

    class ApplePayDomainsResource {
      /**
       * Create an apple pay domain.
       */
      create(
        params: ApplePayDomainCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.ApplePayDomain>;

      /**
       * Retrieve an apple pay domain.
       */
      retrieve(
        id: string,
        params?: ApplePayDomainRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.ApplePayDomain>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.ApplePayDomain>;

      /**
       * List apple pay domains.
       */
      list(
        params?: ApplePayDomainListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ApplePayDomain>;
      list(options?: RequestOptions): ApiListPromise<Stripe.ApplePayDomain>;

      /**
       * Delete an apple pay domain.
       */
      del(
        id: string,
        params?: ApplePayDomainDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.DeletedApplePayDomain>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.DeletedApplePayDomain>;
    }
  }
}
