import { StripeResource } from '../../StripeResource.js';
import { PaginationParams, RangeQueryParam } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class TransactionResource extends StripeResource {
    /**
     * Returns a list of Financial Connections Transaction objects.
     */
    list(params: FinancialConnections.TransactionListParams, options?: RequestOptions): ApiListPromise<Transaction>;
    /**
     * Retrieves the details of a Financial Connections Transaction
     */
    retrieve(id: string, params?: FinancialConnections.TransactionRetrieveParams, options?: RequestOptions): Promise<Response<Transaction>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Transaction>>;
}
export interface Transaction {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'financial_connections.transaction';
    /**
     * The ID of the Financial Connections Account this transaction belongs to.
     */
    account: string;
    /**
     * The amount of this transaction, in cents (or local equivalent).
     */
    amount: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The description of this transaction.
     */
    description: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The status of the transaction.
     */
    status: FinancialConnections.Transaction.Status;
    status_transitions: FinancialConnections.Transaction.StatusTransitions;
    /**
     * Time at which the transaction was transacted. Measured in seconds since the Unix epoch.
     */
    transacted_at: number;
    /**
     * The token of the transaction refresh that last updated or created this transaction.
     */
    transaction_refresh: string;
    /**
     * Time at which the object was last updated. Measured in seconds since the Unix epoch.
     */
    updated: number;
}
export declare namespace FinancialConnections {
    namespace Transaction {
        type Status = 'pending' | 'posted' | 'void';
        interface StatusTransitions {
            /**
             * Time at which this transaction posted. Measured in seconds since the Unix epoch.
             */
            posted_at: number | null;
            /**
             * Time at which this transaction was voided. Measured in seconds since the Unix epoch.
             */
            void_at: number | null;
        }
    }
}
export declare namespace FinancialConnections {
    interface TransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace FinancialConnections {
    interface TransactionListParams extends PaginationParams {
        /**
         * The ID of the Financial Connections Account whose transactions will be retrieved.
         */
        account: string;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * A filter on the list based on the object `transacted_at` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
         */
        transacted_at?: RangeQueryParam | number;
        /**
         * A filter on the list based on the object `transaction_refresh` field. The value can be a dictionary with the following options:
         */
        transaction_refresh?: TransactionListParams.TransactionRefresh;
    }
    namespace TransactionListParams {
        interface TransactionRefresh {
            /**
             * Return results where the transactions were created or updated by a refresh that took place after this refresh (non-inclusive).
             */
            after: string;
        }
    }
}
