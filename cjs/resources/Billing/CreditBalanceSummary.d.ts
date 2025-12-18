import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { Customer, DeletedCustomer } from './../Customers.js';
import { Response } from '../../lib.js';
export declare class CreditBalanceSummaryResource extends StripeResource {
    /**
     * Retrieves the credit balance summary for a customer.
     */
    retrieve(params: Billing.CreditBalanceSummaryRetrieveParams, options?: RequestOptions): Promise<Response<CreditBalanceSummary>>;
}
export /**
 * Indicates the billing credit balance for billing credits granted to a customer.
 */ interface CreditBalanceSummary {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'billing.credit_balance_summary';
    /**
     * The billing credit balances. One entry per credit grant currency. If a customer only has credit grants in a single currency, then this will have a single balance entry.
     */
    balances: Array<Billing.CreditBalanceSummary.Balance>;
    /**
     * The customer the balance is for.
     */
    customer: string | Customer | DeletedCustomer;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
}
export declare namespace Billing {
    namespace CreditBalanceSummary {
        interface Balance {
            available_balance: Balance.AvailableBalance;
            ledger_balance: Balance.LedgerBalance;
        }
        namespace Balance {
            interface AvailableBalance {
                /**
                 * The monetary amount.
                 */
                monetary: AvailableBalance.Monetary | null;
                /**
                 * The type of this amount. We currently only support `monetary` billing credits.
                 */
                type: 'monetary';
            }
            interface LedgerBalance {
                /**
                 * The monetary amount.
                 */
                monetary: LedgerBalance.Monetary | null;
                /**
                 * The type of this amount. We currently only support `monetary` billing credits.
                 */
                type: 'monetary';
            }
            namespace AvailableBalance {
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
            namespace LedgerBalance {
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
        }
    }
}
export declare namespace Billing {
    interface CreditBalanceSummaryRetrieveParams {
        /**
         * The customer for which to fetch credit balance summary.
         */
        customer: string;
        /**
         * The filter criteria for the credit balance summary.
         */
        filter: CreditBalanceSummaryRetrieveParams.Filter;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
    namespace CreditBalanceSummaryRetrieveParams {
        interface Filter {
            /**
             * The billing credit applicability scope for which to fetch credit balance summary.
             */
            applicability_scope?: Filter.ApplicabilityScope;
            /**
             * The credit grant for which to fetch credit balance summary.
             */
            credit_grant?: string;
            /**
             * Specify the type of this filter.
             */
            type: Filter.Type;
        }
        namespace Filter {
            interface ApplicabilityScope {
                /**
                 * The price type that credit grants can apply to. We currently only support the `metered` price type. Cannot be used in combination with `prices`.
                 */
                price_type?: 'metered';
                /**
                 * A list of prices that the credit grant can apply to. We currently only support the `metered` prices. Cannot be used in combination with `price_type`.
                 */
                prices?: Array<ApplicabilityScope.Price>;
            }
            type Type = 'applicability_scope' | 'credit_grant';
            namespace ApplicabilityScope {
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
