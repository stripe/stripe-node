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
         * ID of the customer to receive the billing credits.
         */
        customer: string;

        /**
         * The time when the billing credits become effective-when they're eligible for use. It defaults to the current timestamp if not specified.
         */
        effective_at?: number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The time when the billing credits expire. If not specified, the billing credits don't expire.
         */
        expires_at?: number;

        /**
         * Set of key-value pairs that you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * A descriptive name shown in the Dashboard.
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
           * Specify the type of this amount. We currently only support `monetary` billing credits.
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
             * The price type that credit grants can apply to. We currently only support the `metered` price type.
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
         * The time when the billing credits created by this credit grant expire. If set to empty, the billing credits never expire.
         */
        expires_at?: Stripe.Emptyable<number>;

        /**
         * Set of key-value pairs you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
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
         * Creates a credit grant.
         */
        create(
          params: CreditGrantCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;

        /**
         * Retrieves a credit grant.
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
         * Updates a credit grant.
         */
        update(
          id: string,
          params?: CreditGrantUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.CreditGrant>>;

        /**
         * Retrieve a list of credit grants.
         */
        list(
          params?: CreditGrantListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Billing.CreditGrant>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Billing.CreditGrant>;

        /**
         * Expires a credit grant.
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
         * Voids a credit grant.
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
