// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      interface CreditGrantCreateParams {
        /**
         * Amount of this credit grant.
         */
        amount: CreditGrantCreateParams.Amount;

        /**
         * Configuration specifying what this credit grant applies to.
         */
        applicability_config: CreditGrantCreateParams.ApplicabilityConfig;

        /**
         * The category of this credit grant.
         */
        category: CreditGrantCreateParams.Category;

        /**
         * Id of the customer to whom the credit should be granted.
         */
        customer: string;

        /**
         * The time when the credit becomes effective i.e when it is eligible to be used. Defaults to the current timestamp if not specified.
         */
        effective_at?: number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The time when the credit will expire. If not specified, the credit will never expire.
         */
        expires_at?: number;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object (ex: cost basis) in a structured format.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * A descriptive name shown in dashboard and on invoices.
         */
        name?: string;
      }

      namespace CreditGrantCreateParams {
        interface Amount {
          /**
           * The monetary amount.
           */
          monetary?: Amount.Monetary;

          /**
           * Specify the type of this amount. We currently only support `monetary` credits.
           */
          type: 'monetary';
        }

        namespace Amount {
          interface Monetary {
            /**
             * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `value` parameter.
             */
            currency: string;

            /**
             * A positive integer representing the amount of the credit grant.
             */
            value: number;
          }
        }

        interface ApplicabilityConfig {
          /**
           * Specify the scope of this applicability config.
           */
          scope: ApplicabilityConfig.Scope;
        }

        namespace ApplicabilityConfig {
          interface Scope {
            /**
             * The price type to which credit grants can apply to. We currently only support `metered` price type.
             */
            price_type: 'metered';
          }
        }

        type Category = 'paid' | 'promotional';
      }

      interface CreditGrantRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CreditGrantUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The time when the credit created by this credit grant will expire. If set to empty, the credit will never expire.
         */
        expires_at?: Stripe.Emptyable<number>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object (ex: cost basis) in a structured format.
         */
        metadata?: Stripe.MetadataParam;
      }

      interface CreditGrantListParams extends PaginationParams {
        /**
         * Only return credit grants for this customer.
         */
        customer?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CreditGrantExpireParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface CreditGrantVoidGrantParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class CreditGrantsResource {
        /**
         * Creates a credit grant
         */
        create(
          params: CreditGrantCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;

        /**
         * Retrieves a credit grant
         */
        retrieve(
          id: string,
          params?: CreditGrantRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;

        /**
         * Updates a credit grant
         */
        update(
          id: string,
          params?: CreditGrantUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;

        /**
         * Retrieve a list of credit grants
         */
        list(
          params?: CreditGrantListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Billing.CreditGrant>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Billing.CreditGrant>;

        /**
         * Expires a credit grant
         */
        expire(
          id: string,
          params?: CreditGrantExpireParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;
        expire(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;

        /**
         * Voids a credit grant
         */
        voidGrant(
          id: string,
          params?: CreditGrantVoidGrantParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;
        voidGrant(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;
      }
    }
  }
}
