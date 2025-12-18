import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { Transaction } from './Transactions.js';
import { PaginationParams, Address } from '../../shared.js';
import { ApiListPromise, Response } from '../../lib.js';
export declare class ReceivedDebitResource extends StripeResource {
    /**
     * Returns a list of ReceivedDebits.
     */
    list(params: Treasury.ReceivedDebitListParams, options?: RequestOptions): ApiListPromise<ReceivedDebit>;
    /**
     * Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list
     */
    retrieve(id: string, params?: Treasury.ReceivedDebitRetrieveParams, options?: RequestOptions): Promise<Response<ReceivedDebit>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<ReceivedDebit>>;
}
export /**
 * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
 */ interface ReceivedDebit {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'treasury.received_debit';
    /**
     * Amount (in cents) transferred.
     */
    amount: number;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string;
    /**
     * Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn't have sufficient funds, is closed, or is frozen.
     */
    failure_code: Treasury.ReceivedDebit.FailureCode | null;
    /**
     * The FinancialAccount that funds were pulled from.
     */
    financial_account: string | null;
    /**
     * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
     */
    hosted_regulatory_receipt_url: string | null;
    initiating_payment_method_details?: Treasury.ReceivedDebit.InitiatingPaymentMethodDetails;
    linked_flows: Treasury.ReceivedDebit.LinkedFlows;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The network used for the ReceivedDebit.
     */
    network: Treasury.ReceivedDebit.Network;
    /**
     * Details describing when a ReceivedDebit might be reversed.
     */
    reversal_details: Treasury.ReceivedDebit.ReversalDetails | null;
    /**
     * Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`.
     */
    status: Treasury.ReceivedDebit.Status;
    /**
     * The Transaction associated with this object.
     */
    transaction: string | Transaction | null;
}
export declare namespace Treasury {
    namespace ReceivedDebit {
        type FailureCode = 'account_closed' | 'account_frozen' | 'insufficient_funds' | 'international_transaction' | 'other';
        interface InitiatingPaymentMethodDetails {
            /**
             * Set when `type` is `balance`.
             */
            balance?: 'payments';
            billing_details: InitiatingPaymentMethodDetails.BillingDetails;
            financial_account?: InitiatingPaymentMethodDetails.FinancialAccount;
            /**
             * Set when `type` is `issuing_card`. This is an [Issuing Card](https://stripe.com/docs/api#issuing_cards) ID.
             */
            issuing_card?: string;
            /**
             * Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount.
             */
            type: InitiatingPaymentMethodDetails.Type;
            us_bank_account?: InitiatingPaymentMethodDetails.UsBankAccount;
        }
        interface LinkedFlows {
            /**
             * The DebitReversal created as a result of this ReceivedDebit being reversed.
             */
            debit_reversal: string | null;
            /**
             * Set if the ReceivedDebit is associated with an InboundTransfer's return of funds.
             */
            inbound_transfer: string | null;
            /**
             * Set if the ReceivedDebit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
             */
            issuing_authorization: string | null;
            /**
             * Set if the ReceivedDebit is also viewable as an [Issuing Dispute](https://stripe.com/docs/api#issuing_disputes) object.
             */
            issuing_transaction: string | null;
            /**
             * Set if the ReceivedDebit was created due to a [Payout](https://stripe.com/docs/api#payouts) object.
             */
            payout: string | null;
        }
        type Network = 'ach' | 'card' | 'stripe';
        interface ReversalDetails {
            /**
             * Time before which a ReceivedDebit can be reversed.
             */
            deadline: number | null;
            /**
             * Set if a ReceivedDebit can't be reversed.
             */
            restricted_reason: ReversalDetails.RestrictedReason | null;
        }
        type Status = 'failed' | 'succeeded';
        namespace InitiatingPaymentMethodDetails {
            interface BillingDetails {
                address: Address;
                /**
                 * Email address.
                 */
                email: string | null;
                /**
                 * Full name.
                 */
                name: string | null;
            }
            interface FinancialAccount {
                /**
                 * The FinancialAccount ID.
                 */
                id: string;
                /**
                 * The rails the ReceivedCredit was sent over. A FinancialAccount can only send funds over `stripe`.
                 */
                network: 'stripe';
            }
            type Type = 'balance' | 'financial_account' | 'issuing_card' | 'stripe' | 'us_bank_account';
            interface UsBankAccount {
                /**
                 * Bank name.
                 */
                bank_name: string | null;
                /**
                 * The last four digits of the bank account number.
                 */
                last4: string | null;
                /**
                 * The routing number for the bank account.
                 */
                routing_number: string | null;
            }
        }
        namespace ReversalDetails {
            type RestrictedReason = 'already_reversed' | 'deadline_passed' | 'network_restricted' | 'other' | 'source_flow_restricted';
        }
    }
}
export declare namespace Treasury {
    interface ReceivedDebitRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Treasury {
    interface ReceivedDebitListParams extends PaginationParams {
        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Only return ReceivedDebits that have the given status: `succeeded` or `failed`.
         */
        status?: ReceivedDebitListParams.Status;
    }
    namespace ReceivedDebitListParams {
        type Status = 'failed' | 'succeeded';
    }
}
