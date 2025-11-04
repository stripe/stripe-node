// File generated from our OpenAPI spec

namespace Billing {
  export interface CreditGrantCreateParams {
    /**
     * Amount of this credit grant.
     */
    amount: CreditGrantCreateParams.Amount;

    /**
     * Configuration specifying what this credit grant applies to. We currently only support `metered` prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them.
     */
    applicability_config: CreditGrantCreateParams.ApplicabilityConfig;

    /**
     * ID of the customer to receive the billing credits.
     */
    customer: string;

    /**
     * The category of this credit grant. It defaults to `paid` if not specified.
     */
    category?: CreditGrantCreateParams.Category;

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

    /**
     * The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.
     */
    priority?: number;
  }

  namespace CreditGrantCreateParams {
    export interface Amount {
      /**
       * The monetary amount.
       */
      monetary?: Amount.Monetary;

      /**
       * The type of this amount. We currently only support `monetary` billing credits.
       */
      type: 'monetary';
    }

    export interface ApplicabilityConfig {
      /**
       * Specify the scope of this applicability config.
       */
      scope: ApplicabilityConfig.Scope;
    }

    export type Category = 'paid' | 'promotional';

    namespace Amount {
      export interface Monetary {
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

    namespace ApplicabilityConfig {
      export interface Scope {
        /**
         * The price type that credit grants can apply to. We currently only support the `metered` price type. Cannot be used in combination with `prices`.
         */
        price_type?: 'metered';

        /**
         * A list of prices that the credit grant can apply to. We currently only support the `metered` prices. Cannot be used in combination with `price_type`.
         */
        prices?: Array<Scope.Price>;
      }

      namespace Scope {
        export interface Price {
          /**
           * The price ID this credit grant should apply to.
           */
          id: string;
        }
      }
    }
  }
}
namespace Billing {
  export interface CreditGrantRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Billing {
  export interface CreditGrantUpdateParams {
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
}
namespace Billing {
  export interface CreditGrantListParams extends PaginationParams {
    /**
     * Only return credit grants for this customer.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Billing {
  export interface CreditGrantExpireParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Billing {
  export interface CreditGrantVoidGrantParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
