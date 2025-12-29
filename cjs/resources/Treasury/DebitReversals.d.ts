import { StripeResource } from '../../StripeResource.js';
import { Transaction } from './Transactions.js';
import { MetadataParam, PaginationParams, Metadata } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class DebitReversalResource extends StripeResource {
    /**
     * Returns a list of DebitReversals.
     */
    list(params: Treasury.DebitReversalListParams, options?: RequestOptions): ApiListPromise<DebitReversal>;
    /**
     * Reverses a ReceivedDebit and creates a DebitReversal object.
     */
    create(params: Treasury.DebitReversalCreateParams, options?: RequestOptions): Promise<Response<DebitReversal>>;
    /**
     * Retrieves a DebitReversal object.
     */
    retrieve(id: string, params?: Treasury.DebitReversalRetrieveParams, options?: RequestOptions): Promise<Response<DebitReversal>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<DebitReversal>>;
}
export interface DebitReversal {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'treasury.debit_reversal';
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
     * The FinancialAccount to reverse funds from.
     */
    financial_account: string | null;
    /**
     * A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
     */
    hosted_regulatory_receipt_url: string | null;
    /**
     * Other flows linked to a DebitReversal.
     */
    linked_flows: Treasury.DebitReversal.LinkedFlows | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;
    /**
     * The rails used to reverse the funds.
     */
    network: Treasury.DebitReversal.Network;
    /**
     * The ReceivedDebit being reversed.
     */
    received_debit: string;
    /**
     * Status of the DebitReversal
     */
    status: Treasury.DebitReversal.Status;
    status_transitions: Treasury.DebitReversal.StatusTransitions;
    /**
     * The Transaction associated with this object.
     */
    transaction: string | Transaction | null;
}
export declare namespace Treasury {
    namespace DebitReversal {
        interface LinkedFlows {
            /**
             * Set if there is an Issuing dispute associated with the DebitReversal.
             */
            issuing_dispute: string | null;
        }
        type Network = 'ach' | 'card';
        type Status = 'failed' | 'processing' | 'succeeded';
        interface StatusTransitions {
            /**
             * Timestamp describing when the DebitReversal changed status to `completed`.
             */
            completed_at: number | null;
        }
    }
}
export declare namespace Treasury {
    interface DebitReversalCreateParams {
        /**
         * The ReceivedDebit to reverse.
         */
        received_debit: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
    }
}
export declare namespace Treasury {
    interface DebitReversalRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Treasury {
    interface DebitReversalListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Only return DebitReversals for the ReceivedDebit ID.
         */
        received_debit?: string;
        /**
         * Only return DebitReversals for a given resolution.
         */
        resolution?: DebitReversalListParams.Resolution;
        /**
         * Only return DebitReversals for a given status.
         */
        status?: DebitReversalListParams.Status;
    }
    namespace DebitReversalListParams {
        type Resolution = 'lost' | 'won';
        type Status = 'canceled' | 'completed' | 'processing';
    }
}
