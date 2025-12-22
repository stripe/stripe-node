// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {Customer, DeletedCustomer} from './../Customers.js';
import * as TestHelpers from './../TestHelpers/index.js';
import {
  MetadataParam,
  Emptyable,
  PaginationParams,
  Metadata,
} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class CreditGrantResource extends StripeResource {
  /**
   * Retrieve a list of credit grants.
   */
  list(
    params?: Billing.CreditGrantListParams,
    options?: RequestOptions
  ): ApiListPromise<CreditGrant>;
  list(options?: RequestOptions): ApiListPromise<CreditGrant>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/billing/credit_grants',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a credit grant.
   */
  create(
    params: Billing.CreditGrantCreateParams,
    options?: RequestOptions
  ): Promise<Response<CreditGrant>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/billing/credit_grants',
    }).call(this, ...args);
  }

  /**
   * Retrieves a credit grant.
   */
  retrieve(
    id: string,
    params?: Billing.CreditGrantRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CreditGrant>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<CreditGrant>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/billing/credit_grants/{id}',
    }).call(this, ...args);
  }

  /**
   * Updates a credit grant.
   */
  update(
    id: string,
    params?: Billing.CreditGrantUpdateParams,
    options?: RequestOptions
  ): Promise<Response<CreditGrant>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/billing/credit_grants/{id}',
    }).call(this, ...args);
  }

  /**
   * Expires a credit grant.
   */
  expire(
    id: string,
    params?: Billing.CreditGrantExpireParams,
    options?: RequestOptions
  ): Promise<Response<CreditGrant>>;
  expire(id: string, options?: RequestOptions): Promise<Response<CreditGrant>>;
  expire(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/billing/credit_grants/{id}/expire',
    }).call(this, ...args);
  }

  /**
   * Voids a credit grant.
   */
  voidGrant(
    id: string,
    params?: Billing.CreditGrantVoidGrantParams,
    options?: RequestOptions
  ): Promise<Response<CreditGrant>>;
  voidGrant(
    id: string,
    options?: RequestOptions
  ): Promise<Response<CreditGrant>>;
  voidGrant(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/billing/credit_grants/{id}/void',
    }).call(this, ...args);
  }
}
export interface CreditGrant {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.credit_grant';

  amount: Billing.CreditGrant.Amount;

  applicability_config: Billing.CreditGrant.ApplicabilityConfig;

  /**
   * The category of this credit grant. This is for tracking purposes and isn't displayed to the customer.
   */
  category: Billing.CreditGrant.Category;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * ID of the customer receiving the billing credits.
   */
  customer: string | Customer | DeletedCustomer;

  /**
   * The time when the billing credits become effective-when they're eligible for use.
   */
  effective_at: number | null;

  /**
   * The time when the billing credits expire. If not present, the billing credits don't expire.
   */
  expires_at: number | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * A descriptive name shown in dashboard.
   */
  name: string | null;

  /**
   * The priority for applying this credit grant. The highest priority is 0 and the lowest is 100.
   */
  priority?: number | null;

  /**
   * ID of the test clock this credit grant belongs to.
   */
  test_clock: string | TestHelpers.TestClock | null;

  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;

  /**
   * The time when this credit grant was voided. If not present, the credit grant hasn't been voided.
   */
  voided_at: number | null;
}
export namespace Billing {
  export namespace CreditGrant {
    export interface Amount {
      /**
       * The monetary amount.
       */
      monetary: Amount.Monetary | null;

      /**
       * The type of this amount. We currently only support `monetary` billing credits.
       */
      type: 'monetary';
    }

    export interface ApplicabilityConfig {
      scope: ApplicabilityConfig.Scope;
    }

    export type Category = 'paid' | 'promotional';

    export namespace Amount {
      export interface Monetary {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount.
         */
        value: number;
      }
    }

    export namespace ApplicabilityConfig {
      export interface Scope {
        /**
         * The price type that credit grants can apply to. We currently only support the `metered` price type. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `prices`.
         */
        price_type?: 'metered';

        /**
         * The prices that credit grants can apply to. We currently only support `metered` prices. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `price_type`.
         */
        prices?: Array<Scope.Price>;
      }

      export namespace Scope {
        export interface Price {
          /**
           * Unique identifier for the object.
           */
          id: string | null;
        }
      }
    }
  }
}
export namespace Billing {
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
    metadata?: MetadataParam;

    /**
     * A descriptive name shown in the Dashboard.
     */
    name?: string;

    /**
     * The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.
     */
    priority?: number;
  }

  export namespace CreditGrantCreateParams {
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

    export namespace Amount {
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

    export namespace ApplicabilityConfig {
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

      export namespace Scope {
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
export namespace Billing {
  export interface CreditGrantRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
  export interface CreditGrantUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The time when the billing credits created by this credit grant expire. If set to empty, the billing credits never expire.
     */
    expires_at?: Emptyable<number>;

    /**
     * Set of key-value pairs you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
     */
    metadata?: MetadataParam;
  }
}
export namespace Billing {
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
export namespace Billing {
  export interface CreditGrantExpireParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
  export interface CreditGrantVoidGrantParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
