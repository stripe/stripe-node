import { StripeResource } from '../../StripeResource.js';
import { Customer, DeletedCustomer } from './../Customers.js';
import * as TestHelpers from './../TestHelpers/index.js';
import { MetadataParam, Emptyable, PaginationParams, Metadata } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class CreditGrantResource extends StripeResource {
    /**
     * Retrieve a list of credit grants.
     */
    list(params?: Billing.CreditGrantListParams, options?: RequestOptions): ApiListPromise<CreditGrant>;
    list(options?: RequestOptions): ApiListPromise<CreditGrant>;
    /**
     * Creates a credit grant.
     */
    create(params: Billing.CreditGrantCreateParams, options?: RequestOptions): Promise<Response<CreditGrant>>;
    /**
     * Retrieves a credit grant.
     */
    retrieve(id: string, params?: Billing.CreditGrantRetrieveParams, options?: RequestOptions): Promise<Response<CreditGrant>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<CreditGrant>>;
    /**
     * Updates a credit grant.
     */
    update(id: string, params?: Billing.CreditGrantUpdateParams, options?: RequestOptions): Promise<Response<CreditGrant>>;
    /**
     * Expires a credit grant.
     */
    expire(id: string, params?: Billing.CreditGrantExpireParams, options?: RequestOptions): Promise<Response<CreditGrant>>;
    expire(id: string, options?: RequestOptions): Promise<Response<CreditGrant>>;
    /**
     * Voids a credit grant.
     */
    voidGrant(id: string, params?: Billing.CreditGrantVoidGrantParams, options?: RequestOptions): Promise<Response<CreditGrant>>;
    voidGrant(id: string, options?: RequestOptions): Promise<Response<CreditGrant>>;
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
     * ID of the account representing the customer receiving the billing credits
     */
    customer_account: string | null;
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
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
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
export declare namespace Billing {
    namespace CreditGrant {
        interface Amount {
            /**
             * The monetary amount.
             */
            monetary: Amount.Monetary | null;
            /**
             * The type of this amount. We currently only support `monetary` billing credits.
             */
            type: 'monetary';
        }
        interface ApplicabilityConfig {
            scope: ApplicabilityConfig.Scope;
        }
        type Category = 'paid' | 'promotional';
        namespace Amount {
            interface Monetary {
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
        namespace ApplicabilityConfig {
            interface Scope {
                /**
                 * The price type that credit grants can apply to. We currently only support the `metered` price type. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `prices`.
                 */
                price_type?: 'metered';
                /**
                 * The prices that credit grants can apply to. We currently only support `metered` prices. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `price_type`.
                 */
                prices?: Array<Scope.Price>;
            }
            namespace Scope {
                interface Price {
                    /**
                     * Unique identifier for the object.
                     */
                    id: string | null;
                }
            }
        }
    }
}
export declare namespace Billing {
    interface CreditGrantCreateParams {
        /**
         * Amount of this credit grant.
         */
        amount: CreditGrantCreateParams.Amount;
        /**
         * Configuration specifying what this credit grant applies to. We currently only support `metered` prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them.
         */
        applicability_config: CreditGrantCreateParams.ApplicabilityConfig;
        /**
         * The category of this credit grant. It defaults to `paid` if not specified.
         */
        category?: CreditGrantCreateParams.Category;
        /**
         * ID of the customer receiving the billing credits.
         */
        customer?: string;
        /**
         * ID of the account representing the customer receiving the billing credits.
         */
        customer_account?: string;
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
    namespace CreditGrantCreateParams {
        interface Amount {
            /**
             * The monetary amount.
             */
            monetary?: Amount.Monetary;
            /**
             * The type of this amount. We currently only support `monetary` billing credits.
             */
            type: 'monetary';
        }
        interface ApplicabilityConfig {
            /**
             * Specify the scope of this applicability config.
             */
            scope: ApplicabilityConfig.Scope;
        }
        type Category = 'paid' | 'promotional';
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
        namespace ApplicabilityConfig {
            interface Scope {
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
                interface Price {
                    /**
                     * The price ID this credit grant should apply to.
                     */
                    id: string;
                }
            }
        }
    }
}
export declare namespace Billing {
    interface CreditGrantRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Billing {
    interface CreditGrantUpdateParams {
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
export declare namespace Billing {
    interface CreditGrantListParams extends PaginationParams {
        /**
         * Only return credit grants for this customer.
         */
        customer?: string;
        /**
         * Only return credit grants for this account representing the customer.
         */
        customer_account?: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Billing {
    interface CreditGrantExpireParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Billing {
    interface CreditGrantVoidGrantParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
