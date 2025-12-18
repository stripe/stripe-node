import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { CreditGrant } from './CreditGrants.js';
import { Invoice } from './../Invoices.js';
import * as TestHelpers from './../TestHelpers/index.js';
import { PaginationParams } from '../../shared.js';
import { ApiListPromise, Response } from '../../lib.js';
export declare class CreditBalanceTransactionResource extends StripeResource {
    /**
     * Retrieve a list of credit balance transactions.
     */
    list(params: Billing.CreditBalanceTransactionListParams, options?: RequestOptions): ApiListPromise<CreditBalanceTransaction>;
    /**
     * Retrieves a credit balance transaction.
     */
    retrieve(id: string, params?: Billing.CreditBalanceTransactionRetrieveParams, options?: RequestOptions): Promise<Response<CreditBalanceTransaction>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<CreditBalanceTransaction>>;
}
export /**
 * A credit balance transaction is a resource representing a transaction (either a credit or a debit) against an existing credit grant.
 */ interface CreditBalanceTransaction {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'billing.credit_balance_transaction';
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Credit details for this credit balance transaction. Only present if type is `credit`.
     */
    credit: Billing.CreditBalanceTransaction.Credit | null;
    /**
     * The credit grant associated with this credit balance transaction.
     */
    credit_grant: string | CreditGrant;
    /**
     * Debit details for this credit balance transaction. Only present if type is `debit`.
     */
    debit: Billing.CreditBalanceTransaction.Debit | null;
    /**
     * The effective time of this credit balance transaction.
     */
    effective_at: number;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * ID of the test clock this credit balance transaction belongs to.
     */
    test_clock: string | TestHelpers.TestClock | null;
    /**
     * The type of credit balance transaction (credit or debit).
     */
    type: Billing.CreditBalanceTransaction.Type | null;
}
export declare namespace Billing {
    namespace CreditBalanceTransaction {
        interface Credit {
            amount: Credit.Amount;
            /**
             * Details of the invoice to which the reinstated credits were originally applied. Only present if `type` is `credits_application_invoice_voided`.
             */
            credits_application_invoice_voided: Credit.CreditsApplicationInvoiceVoided | null;
            /**
             * The type of credit transaction.
             */
            type: Credit.Type;
        }
        interface Debit {
            amount: Debit.Amount;
            /**
             * Details of how the billing credits were applied to an invoice. Only present if `type` is `credits_applied`.
             */
            credits_applied: Debit.CreditsApplied | null;
            /**
             * The type of debit transaction.
             */
            type: Debit.Type;
        }
        type Type = 'credit' | 'debit';
        namespace Credit {
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
            interface CreditsApplicationInvoiceVoided {
                /**
                 * The invoice to which the reinstated billing credits were originally applied.
                 */
                invoice: string | Invoice;
                /**
                 * The invoice line item to which the reinstated billing credits were originally applied.
                 */
                invoice_line_item: string;
            }
            type Type = 'credits_application_invoice_voided' | 'credits_granted';
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
        }
        namespace Debit {
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
            interface CreditsApplied {
                /**
                 * The invoice to which the billing credits were applied.
                 */
                invoice: string | Invoice;
                /**
                 * The invoice line item to which the billing credits were applied.
                 */
                invoice_line_item: string;
            }
            type Type = 'credits_applied' | 'credits_expired' | 'credits_voided';
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
        }
    }
}
export declare namespace Billing {
    interface CreditBalanceTransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Billing {
    interface CreditBalanceTransactionListParams extends PaginationParams {
        /**
         * The customer for which to fetch credit balance transactions.
         */
        customer: string;
        /**
         * The credit grant for which to fetch credit balance transactions.
         */
        credit_grant?: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
