import { StripeResource } from '../../StripeResource.js';
import { BalanceTransaction } from './../BalanceTransactions.js';
import { Transaction } from './Transactions.js';
import { File } from './../Files.js';
import { MetadataParam, Emptyable, PaginationParams, RangeQueryParam, Metadata } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class DisputeResource extends StripeResource {
    /**
     * Returns a list of Issuing Dispute objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params?: Issuing.DisputeListParams, options?: RequestOptions): ApiListPromise<Dispute>;
    list(options?: RequestOptions): ApiListPromise<Dispute>;
    /**
     * Creates an Issuing Dispute object. Individual pieces of evidence within the evidence object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to [Dispute reasons and evidence](https://docs.stripe.com/docs/issuing/purchases/disputes#dispute-reasons-and-evidence) for more details about evidence requirements.
     */
    create(params?: Issuing.DisputeCreateParams, options?: RequestOptions): Promise<Response<Dispute>>;
    create(options?: RequestOptions): Promise<Response<Dispute>>;
    /**
     * Retrieves an Issuing Dispute object.
     */
    retrieve(id: string, params?: Issuing.DisputeRetrieveParams, options?: RequestOptions): Promise<Response<Dispute>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Dispute>>;
    /**
     * Updates the specified Issuing Dispute object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the evidence object can be unset by passing in an empty string.
     */
    update(id: string, params?: Issuing.DisputeUpdateParams, options?: RequestOptions): Promise<Response<Dispute>>;
    /**
     * Submits an Issuing Dispute to the card network. Stripe validates that all evidence fields required for the dispute's reason are present. For more details, see [Dispute reasons and evidence](https://docs.stripe.com/docs/issuing/purchases/disputes#dispute-reasons-and-evidence).
     */
    submit(id: string, params?: Issuing.DisputeSubmitParams, options?: RequestOptions): Promise<Response<Dispute>>;
    submit(id: string, options?: RequestOptions): Promise<Response<Dispute>>;
}
export interface Dispute {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'issuing.dispute';
    /**
     * Disputed amount in the card's currency and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). Usually the amount of the `transaction`, but can differ (usually because of currency fluctuation).
     */
    amount: number;
    /**
     * List of balance transactions associated with the dispute.
     */
    balance_transactions?: Array<BalanceTransaction> | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The currency the `transaction` was made in.
     */
    currency: string;
    evidence: Issuing.Dispute.Evidence;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The enum that describes the dispute loss outcome. If the dispute is not lost, this field will be absent. New enum values may be added in the future, so be sure to handle unknown values.
     */
    loss_reason?: Issuing.Dispute.LossReason;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;
    /**
     * Current status of the dispute.
     */
    status: Issuing.Dispute.Status;
    /**
     * The transaction being disputed.
     */
    transaction: string | Transaction;
    /**
     * [Treasury](https://docs.stripe.com/api/treasury) details related to this dispute if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts
     */
    treasury?: Issuing.Dispute.Treasury | null;
}
export declare namespace Issuing {
    namespace Dispute {
        interface Evidence {
            canceled?: Evidence.Canceled;
            duplicate?: Evidence.Duplicate;
            fraudulent?: Evidence.Fraudulent;
            merchandise_not_as_described?: Evidence.MerchandiseNotAsDescribed;
            no_valid_authorization?: Evidence.NoValidAuthorization;
            not_received?: Evidence.NotReceived;
            other?: Evidence.Other;
            /**
             * The reason for filing the dispute. Its value will match the field containing the evidence.
             */
            reason: Evidence.Reason;
            service_not_as_described?: Evidence.ServiceNotAsDescribed;
        }
        type LossReason = 'cardholder_authentication_issuer_liability' | 'eci5_token_transaction_with_tavv' | 'excess_disputes_in_timeframe' | 'has_not_met_the_minimum_dispute_amount_requirements' | 'invalid_duplicate_dispute' | 'invalid_incorrect_amount_dispute' | 'invalid_no_authorization' | 'invalid_use_of_disputes' | 'merchandise_delivered_or_shipped' | 'merchandise_or_service_as_described' | 'not_cancelled' | 'other' | 'refund_issued' | 'submitted_beyond_allowable_time_limit' | 'transaction_3ds_required' | 'transaction_approved_after_prior_fraud_dispute' | 'transaction_authorized' | 'transaction_electronically_read' | 'transaction_qualifies_for_visa_easy_payment_service' | 'transaction_unattended';
        type Status = 'expired' | 'lost' | 'submitted' | 'unsubmitted' | 'won';
        interface Treasury {
            /**
             * The Treasury [DebitReversal](https://docs.stripe.com/api/treasury/debit_reversals) representing this Issuing dispute
             */
            debit_reversal: string | null;
            /**
             * The Treasury [ReceivedDebit](https://docs.stripe.com/api/treasury/received_debits) that is being disputed.
             */
            received_debit: string;
        }
        namespace Evidence {
            interface Canceled {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation: string | File | null;
                /**
                 * Date when order was canceled.
                 */
                canceled_at: number | null;
                /**
                 * Whether the cardholder was provided with a cancellation policy.
                 */
                cancellation_policy_provided: boolean | null;
                /**
                 * Reason for canceling the order.
                 */
                cancellation_reason: string | null;
                /**
                 * Date when the cardholder expected to receive the product.
                 */
                expected_at: number | null;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation: string | null;
                /**
                 * Description of the merchandise or service that was purchased.
                 */
                product_description: string | null;
                /**
                 * Whether the product was a merchandise or service.
                 */
                product_type: Canceled.ProductType | null;
                /**
                 * Result of cardholder's attempt to return the product.
                 */
                return_status: Canceled.ReturnStatus | null;
                /**
                 * Date when the product was returned or attempted to be returned.
                 */
                returned_at: number | null;
            }
            interface Duplicate {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation: string | File | null;
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
                 */
                card_statement: string | File | null;
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
                 */
                cash_receipt: string | File | null;
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
                 */
                check_image: string | File | null;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation: string | null;
                /**
                 * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
                 */
                original_transaction: string | null;
            }
            interface Fraudulent {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation: string | File | null;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation: string | null;
            }
            interface MerchandiseNotAsDescribed {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation: string | File | null;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation: string | null;
                /**
                 * Date when the product was received.
                 */
                received_at: number | null;
                /**
                 * Description of the cardholder's attempt to return the product.
                 */
                return_description: string | null;
                /**
                 * Result of cardholder's attempt to return the product.
                 */
                return_status: MerchandiseNotAsDescribed.ReturnStatus | null;
                /**
                 * Date when the product was returned or attempted to be returned.
                 */
                returned_at: number | null;
            }
            interface NoValidAuthorization {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation: string | File | null;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation: string | null;
            }
            interface NotReceived {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation: string | File | null;
                /**
                 * Date when the cardholder expected to receive the product.
                 */
                expected_at: number | null;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation: string | null;
                /**
                 * Description of the merchandise or service that was purchased.
                 */
                product_description: string | null;
                /**
                 * Whether the product was a merchandise or service.
                 */
                product_type: NotReceived.ProductType | null;
            }
            interface Other {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation: string | File | null;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation: string | null;
                /**
                 * Description of the merchandise or service that was purchased.
                 */
                product_description: string | null;
                /**
                 * Whether the product was a merchandise or service.
                 */
                product_type: Other.ProductType | null;
            }
            type Reason = 'canceled' | 'duplicate' | 'fraudulent' | 'merchandise_not_as_described' | 'no_valid_authorization' | 'not_received' | 'other' | 'service_not_as_described';
            interface ServiceNotAsDescribed {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation: string | File | null;
                /**
                 * Date when order was canceled.
                 */
                canceled_at: number | null;
                /**
                 * Reason for canceling the order.
                 */
                cancellation_reason: string | null;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation: string | null;
                /**
                 * Date when the product was received.
                 */
                received_at: number | null;
            }
            namespace Canceled {
                type ProductType = 'merchandise' | 'service';
                type ReturnStatus = 'merchant_rejected' | 'successful';
            }
            namespace MerchandiseNotAsDescribed {
                type ReturnStatus = 'merchant_rejected' | 'successful';
            }
            namespace NotReceived {
                type ProductType = 'merchandise' | 'service';
            }
            namespace Other {
                type ProductType = 'merchandise' | 'service';
            }
        }
    }
}
export declare namespace Issuing {
    interface DisputeCreateParams {
        /**
         * The dispute amount in the card's currency and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal). If not set, defaults to the full transaction amount.
         */
        amount?: number;
        /**
         * Evidence provided for the dispute.
         */
        evidence?: DisputeCreateParams.Evidence;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
        /**
         * The ID of the issuing transaction to create a dispute for. For transaction on Treasury FinancialAccounts, use `treasury.received_debit`.
         */
        transaction?: string;
        /**
         * Params for disputes related to Treasury FinancialAccounts
         */
        treasury?: DisputeCreateParams.Treasury;
    }
    namespace DisputeCreateParams {
        interface Evidence {
            /**
             * Evidence provided when `reason` is 'canceled'.
             */
            canceled?: Emptyable<Evidence.Canceled>;
            /**
             * Evidence provided when `reason` is 'duplicate'.
             */
            duplicate?: Emptyable<Evidence.Duplicate>;
            /**
             * Evidence provided when `reason` is 'fraudulent'.
             */
            fraudulent?: Emptyable<Evidence.Fraudulent>;
            /**
             * Evidence provided when `reason` is 'merchandise_not_as_described'.
             */
            merchandise_not_as_described?: Emptyable<Evidence.MerchandiseNotAsDescribed>;
            /**
             * Evidence provided when `reason` is 'no_valid_authorization'.
             */
            no_valid_authorization?: Emptyable<Evidence.NoValidAuthorization>;
            /**
             * Evidence provided when `reason` is 'not_received'.
             */
            not_received?: Emptyable<Evidence.NotReceived>;
            /**
             * Evidence provided when `reason` is 'other'.
             */
            other?: Emptyable<Evidence.Other>;
            /**
             * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
             */
            reason?: Evidence.Reason;
            /**
             * Evidence provided when `reason` is 'service_not_as_described'.
             */
            service_not_as_described?: Emptyable<Evidence.ServiceNotAsDescribed>;
        }
        interface Treasury {
            /**
             * The ID of the ReceivedDebit to initiate an Issuings dispute for.
             */
            received_debit: string;
        }
        namespace Evidence {
            interface Canceled {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Date when order was canceled.
                 */
                canceled_at?: Emptyable<number>;
                /**
                 * Whether the cardholder was provided with a cancellation policy.
                 */
                cancellation_policy_provided?: Emptyable<boolean>;
                /**
                 * Reason for canceling the order.
                 */
                cancellation_reason?: Emptyable<string>;
                /**
                 * Date when the cardholder expected to receive the product.
                 */
                expected_at?: Emptyable<number>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Description of the merchandise or service that was purchased.
                 */
                product_description?: Emptyable<string>;
                /**
                 * Whether the product was a merchandise or service.
                 */
                product_type?: Emptyable<Canceled.ProductType>;
                /**
                 * Result of cardholder's attempt to return the product.
                 */
                return_status?: Emptyable<Canceled.ReturnStatus>;
                /**
                 * Date when the product was returned or attempted to be returned.
                 */
                returned_at?: Emptyable<number>;
            }
            interface Duplicate {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
                 */
                card_statement?: Emptyable<string>;
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
                 */
                cash_receipt?: Emptyable<string>;
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
                 */
                check_image?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
                 */
                original_transaction?: string;
            }
            interface Fraudulent {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
            }
            interface MerchandiseNotAsDescribed {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Date when the product was received.
                 */
                received_at?: Emptyable<number>;
                /**
                 * Description of the cardholder's attempt to return the product.
                 */
                return_description?: Emptyable<string>;
                /**
                 * Result of cardholder's attempt to return the product.
                 */
                return_status?: Emptyable<MerchandiseNotAsDescribed.ReturnStatus>;
                /**
                 * Date when the product was returned or attempted to be returned.
                 */
                returned_at?: Emptyable<number>;
            }
            interface NoValidAuthorization {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
            }
            interface NotReceived {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Date when the cardholder expected to receive the product.
                 */
                expected_at?: Emptyable<number>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Description of the merchandise or service that was purchased.
                 */
                product_description?: Emptyable<string>;
                /**
                 * Whether the product was a merchandise or service.
                 */
                product_type?: Emptyable<NotReceived.ProductType>;
            }
            interface Other {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Description of the merchandise or service that was purchased.
                 */
                product_description?: Emptyable<string>;
                /**
                 * Whether the product was a merchandise or service.
                 */
                product_type?: Emptyable<Other.ProductType>;
            }
            type Reason = 'canceled' | 'duplicate' | 'fraudulent' | 'merchandise_not_as_described' | 'no_valid_authorization' | 'not_received' | 'other' | 'service_not_as_described';
            interface ServiceNotAsDescribed {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Date when order was canceled.
                 */
                canceled_at?: Emptyable<number>;
                /**
                 * Reason for canceling the order.
                 */
                cancellation_reason?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Date when the product was received.
                 */
                received_at?: Emptyable<number>;
            }
            namespace Canceled {
                type ProductType = 'merchandise' | 'service';
                type ReturnStatus = 'merchant_rejected' | 'successful';
            }
            namespace MerchandiseNotAsDescribed {
                type ReturnStatus = 'merchant_rejected' | 'successful';
            }
            namespace NotReceived {
                type ProductType = 'merchandise' | 'service';
            }
            namespace Other {
                type ProductType = 'merchandise' | 'service';
            }
        }
    }
}
export declare namespace Issuing {
    interface DisputeRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Issuing {
    interface DisputeUpdateParams {
        /**
         * The dispute amount in the card's currency and in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
         */
        amount?: number;
        /**
         * Evidence provided for the dispute.
         */
        evidence?: DisputeUpdateParams.Evidence;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Emptyable<MetadataParam>;
    }
    namespace DisputeUpdateParams {
        interface Evidence {
            /**
             * Evidence provided when `reason` is 'canceled'.
             */
            canceled?: Emptyable<Evidence.Canceled>;
            /**
             * Evidence provided when `reason` is 'duplicate'.
             */
            duplicate?: Emptyable<Evidence.Duplicate>;
            /**
             * Evidence provided when `reason` is 'fraudulent'.
             */
            fraudulent?: Emptyable<Evidence.Fraudulent>;
            /**
             * Evidence provided when `reason` is 'merchandise_not_as_described'.
             */
            merchandise_not_as_described?: Emptyable<Evidence.MerchandiseNotAsDescribed>;
            /**
             * Evidence provided when `reason` is 'no_valid_authorization'.
             */
            no_valid_authorization?: Emptyable<Evidence.NoValidAuthorization>;
            /**
             * Evidence provided when `reason` is 'not_received'.
             */
            not_received?: Emptyable<Evidence.NotReceived>;
            /**
             * Evidence provided when `reason` is 'other'.
             */
            other?: Emptyable<Evidence.Other>;
            /**
             * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
             */
            reason?: Evidence.Reason;
            /**
             * Evidence provided when `reason` is 'service_not_as_described'.
             */
            service_not_as_described?: Emptyable<Evidence.ServiceNotAsDescribed>;
        }
        namespace Evidence {
            interface Canceled {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Date when order was canceled.
                 */
                canceled_at?: Emptyable<number>;
                /**
                 * Whether the cardholder was provided with a cancellation policy.
                 */
                cancellation_policy_provided?: Emptyable<boolean>;
                /**
                 * Reason for canceling the order.
                 */
                cancellation_reason?: Emptyable<string>;
                /**
                 * Date when the cardholder expected to receive the product.
                 */
                expected_at?: Emptyable<number>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Description of the merchandise or service that was purchased.
                 */
                product_description?: Emptyable<string>;
                /**
                 * Whether the product was a merchandise or service.
                 */
                product_type?: Emptyable<Canceled.ProductType>;
                /**
                 * Result of cardholder's attempt to return the product.
                 */
                return_status?: Emptyable<Canceled.ReturnStatus>;
                /**
                 * Date when the product was returned or attempted to be returned.
                 */
                returned_at?: Emptyable<number>;
            }
            interface Duplicate {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
                 */
                card_statement?: Emptyable<string>;
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
                 */
                cash_receipt?: Emptyable<string>;
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
                 */
                check_image?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
                 */
                original_transaction?: string;
            }
            interface Fraudulent {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
            }
            interface MerchandiseNotAsDescribed {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Date when the product was received.
                 */
                received_at?: Emptyable<number>;
                /**
                 * Description of the cardholder's attempt to return the product.
                 */
                return_description?: Emptyable<string>;
                /**
                 * Result of cardholder's attempt to return the product.
                 */
                return_status?: Emptyable<MerchandiseNotAsDescribed.ReturnStatus>;
                /**
                 * Date when the product was returned or attempted to be returned.
                 */
                returned_at?: Emptyable<number>;
            }
            interface NoValidAuthorization {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
            }
            interface NotReceived {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Date when the cardholder expected to receive the product.
                 */
                expected_at?: Emptyable<number>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Description of the merchandise or service that was purchased.
                 */
                product_description?: Emptyable<string>;
                /**
                 * Whether the product was a merchandise or service.
                 */
                product_type?: Emptyable<NotReceived.ProductType>;
            }
            interface Other {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Description of the merchandise or service that was purchased.
                 */
                product_description?: Emptyable<string>;
                /**
                 * Whether the product was a merchandise or service.
                 */
                product_type?: Emptyable<Other.ProductType>;
            }
            type Reason = 'canceled' | 'duplicate' | 'fraudulent' | 'merchandise_not_as_described' | 'no_valid_authorization' | 'not_received' | 'other' | 'service_not_as_described';
            interface ServiceNotAsDescribed {
                /**
                 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
                 */
                additional_documentation?: Emptyable<string>;
                /**
                 * Date when order was canceled.
                 */
                canceled_at?: Emptyable<number>;
                /**
                 * Reason for canceling the order.
                 */
                cancellation_reason?: Emptyable<string>;
                /**
                 * Explanation of why the cardholder is disputing this transaction.
                 */
                explanation?: Emptyable<string>;
                /**
                 * Date when the product was received.
                 */
                received_at?: Emptyable<number>;
            }
            namespace Canceled {
                type ProductType = 'merchandise' | 'service';
                type ReturnStatus = 'merchant_rejected' | 'successful';
            }
            namespace MerchandiseNotAsDescribed {
                type ReturnStatus = 'merchant_rejected' | 'successful';
            }
            namespace NotReceived {
                type ProductType = 'merchandise' | 'service';
            }
            namespace Other {
                type ProductType = 'merchandise' | 'service';
            }
        }
    }
}
export declare namespace Issuing {
    interface DisputeListParams extends PaginationParams {
        /**
         * Only return Issuing disputes that were created during the given date interval.
         */
        created?: RangeQueryParam | number;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Select Issuing disputes with the given status.
         */
        status?: DisputeListParams.Status;
        /**
         * Select the Issuing dispute for the given transaction.
         */
        transaction?: string;
    }
    namespace DisputeListParams {
        type Status = 'expired' | 'lost' | 'submitted' | 'unsubmitted' | 'won';
    }
}
export declare namespace Issuing {
    interface DisputeSubmitParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Emptyable<MetadataParam>;
    }
}
