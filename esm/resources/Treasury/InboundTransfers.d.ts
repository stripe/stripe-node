import { StripeResource } from '../../StripeResource.js';
import { Transaction } from './Transactions.js';
import { Mandate } from './../Mandates.js';
import { MetadataParam, PaginationParams, Metadata, Address } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class InboundTransferResource extends StripeResource {
    /**
     * Returns a list of InboundTransfers sent from the specified FinancialAccount.
     */
    list(params: Treasury.InboundTransferListParams, options?: RequestOptions): ApiListPromise<InboundTransfer>;
    /**
     * Creates an InboundTransfer.
     */
    create(params: Treasury.InboundTransferCreateParams, options?: RequestOptions): Promise<Response<InboundTransfer>>;
    /**
     * Retrieves the details of an existing InboundTransfer.
     */
    retrieve(id: string, params?: Treasury.InboundTransferRetrieveParams, options?: RequestOptions): Promise<Response<InboundTransfer>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<InboundTransfer>>;
    /**
     * Cancels an InboundTransfer.
     */
    cancel(id: string, params?: Treasury.InboundTransferCancelParams, options?: RequestOptions): Promise<Response<InboundTransfer>>;
    cancel(id: string, options?: RequestOptions): Promise<Response<InboundTransfer>>;
}
export interface InboundTransfer {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'treasury.inbound_transfer';
    /**
     * Amount (in cents) transferred.
     */
    amount: number;
    /**
     * Returns `true` if the InboundTransfer is able to be canceled.
     */
    cancelable: boolean;
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
    description: string | null;
    /**
     * Details about this InboundTransfer's failure. Only set when status is `failed`.
     */
    failure_details: Treasury.InboundTransfer.FailureDetails | null;
    /**
     * The FinancialAccount that received the funds.
     */
    financial_account: string;
    /**
     * A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
     */
    hosted_regulatory_receipt_url: string | null;
    linked_flows: Treasury.InboundTransfer.LinkedFlows;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;
    /**
     * The origin payment method to be debited for an InboundTransfer.
     */
    origin_payment_method: string | null;
    /**
     * Details about the PaymentMethod for an InboundTransfer.
     */
    origin_payment_method_details: Treasury.InboundTransfer.OriginPaymentMethodDetails | null;
    /**
     * Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state.
     */
    returned: boolean | null;
    /**
     * Statement descriptor shown when funds are debited from the source. Not all payment networks support `statement_descriptor`.
     */
    statement_descriptor: string;
    /**
     * Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. An InboundTransfer is `processing` if it is created and pending. The status changes to `succeeded` once the funds have been "confirmed" and a `transaction` is created and posted. The status changes to `failed` if the transfer fails.
     */
    status: Treasury.InboundTransfer.Status;
    status_transitions: Treasury.InboundTransfer.StatusTransitions;
    /**
     * The Transaction associated with this object.
     */
    transaction: string | Transaction | null;
}
export declare namespace Treasury {
    namespace InboundTransfer {
        interface FailureDetails {
            /**
             * Reason for the failure.
             */
            code: FailureDetails.Code;
        }
        interface LinkedFlows {
            /**
             * If funds for this flow were returned after the flow went to the `succeeded` state, this field contains a reference to the ReceivedDebit return.
             */
            received_debit: string | null;
        }
        interface OriginPaymentMethodDetails {
            billing_details: OriginPaymentMethodDetails.BillingDetails;
            /**
             * The type of the payment method used in the InboundTransfer.
             */
            type: 'us_bank_account';
            us_bank_account?: OriginPaymentMethodDetails.UsBankAccount;
        }
        type Status = 'canceled' | 'failed' | 'processing' | 'succeeded';
        interface StatusTransitions {
            /**
             * Timestamp describing when an InboundTransfer changed status to `canceled`.
             */
            canceled_at?: number | null;
            /**
             * Timestamp describing when an InboundTransfer changed status to `failed`.
             */
            failed_at: number | null;
            /**
             * Timestamp describing when an InboundTransfer changed status to `succeeded`.
             */
            succeeded_at: number | null;
        }
        namespace FailureDetails {
            type Code = 'account_closed' | 'account_frozen' | 'bank_account_restricted' | 'bank_ownership_changed' | 'debit_not_authorized' | 'incorrect_account_holder_address' | 'incorrect_account_holder_name' | 'incorrect_account_holder_tax_id' | 'insufficient_funds' | 'invalid_account_number' | 'invalid_currency' | 'no_account' | 'other';
        }
        namespace OriginPaymentMethodDetails {
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
            interface UsBankAccount {
                /**
                 * Account holder type: individual or company.
                 */
                account_holder_type: UsBankAccount.AccountHolderType | null;
                /**
                 * Account type: checkings or savings. Defaults to checking if omitted.
                 */
                account_type: UsBankAccount.AccountType | null;
                /**
                 * Name of the bank associated with the bank account.
                 */
                bank_name: string | null;
                /**
                 * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
                 */
                fingerprint: string | null;
                /**
                 * Last four digits of the bank account number.
                 */
                last4: string | null;
                /**
                 * ID of the mandate used to make this payment.
                 */
                mandate?: string | Mandate;
                /**
                 * The network rails used. See the [docs](https://docs.stripe.com/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
                 */
                network: 'ach';
                /**
                 * Routing number of the bank account.
                 */
                routing_number: string | null;
            }
            namespace UsBankAccount {
                type AccountHolderType = 'company' | 'individual';
                type AccountType = 'checking' | 'savings';
            }
        }
    }
}
export declare namespace Treasury {
    interface InboundTransferCreateParams {
        /**
         * Amount (in cents) to be transferred.
         */
        amount: number;
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;
        /**
         * The FinancialAccount to send funds to.
         */
        financial_account: string;
        /**
         * The origin payment method to be debited for the InboundTransfer.
         */
        origin_payment_method: string;
        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
        /**
         * The complete description that appears on your customers' statements. Maximum 10 characters. Can only include -#.$&*, spaces, and alphanumeric characters.
         */
        statement_descriptor?: string;
    }
}
export declare namespace Treasury {
    interface InboundTransferRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Treasury {
    interface InboundTransferListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Only return InboundTransfers that have the given status: `processing`, `succeeded`, `failed` or `canceled`.
         */
        status?: InboundTransferListParams.Status;
    }
    namespace InboundTransferListParams {
        type Status = 'canceled' | 'failed' | 'processing' | 'succeeded';
    }
}
export declare namespace Treasury {
    interface InboundTransferCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
