import { StripeResource } from '../../StripeResource.js';
import { TransactionEntry } from './TransactionEntries.js';
import { CreditReversal } from './CreditReversals.js';
import { DebitReversal } from './DebitReversals.js';
import { InboundTransfer } from './InboundTransfers.js';
import { OutboundPayment } from './OutboundPayments.js';
import { OutboundTransfer } from './OutboundTransfers.js';
import { ReceivedCredit } from './ReceivedCredits.js';
import { ReceivedDebit } from './ReceivedDebits.js';
import * as Issuing from './../Issuing/index.js';
import { PaginationParams, RangeQueryParam } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response, ApiList } from '../../lib.js';
export declare class TransactionResource extends StripeResource {
    /**
     * Retrieves a list of Transaction objects.
     */
    list(params: Treasury.TransactionListParams, options?: RequestOptions): ApiListPromise<Transaction>;
    /**
     * Retrieves the details of an existing Transaction.
     */
    retrieve(id: string, params?: Treasury.TransactionRetrieveParams, options?: RequestOptions): Promise<Response<Transaction>>;
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
    object: 'treasury.transaction';
    /**
     * Amount (in cents) transferred.
     */
    amount: number;
    /**
     * Change to a FinancialAccount's balance
     */
    balance_impact: Treasury.Transaction.BalanceImpact;
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
     * A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints.
     */
    entries?: ApiList<TransactionEntry> | null;
    /**
     * The FinancialAccount associated with this object.
     */
    financial_account: string;
    /**
     * ID of the flow that created the Transaction.
     */
    flow: string | null;
    /**
     * Details of the flow that created the Transaction.
     */
    flow_details?: Treasury.Transaction.FlowDetails | null;
    /**
     * Type of the flow that created the Transaction.
     */
    flow_type: Treasury.Transaction.FlowType;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Status of the Transaction.
     */
    status: Treasury.Transaction.Status;
    status_transitions: Treasury.Transaction.StatusTransitions;
}
export declare namespace Treasury {
    namespace Transaction {
        interface BalanceImpact {
            /**
             * The change made to funds the user can spend right now.
             */
            cash: number;
            /**
             * The change made to funds that are not spendable yet, but will become available at a later time.
             */
            inbound_pending: number;
            /**
             * The change made to funds in the account, but not spendable because they are being held for pending outbound flows.
             */
            outbound_pending: number;
        }
        interface FlowDetails {
            /**
             * You can reverse some [ReceivedCredits](https://api.stripe.com#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
             */
            credit_reversal?: CreditReversal;
            /**
             * You can reverse some [ReceivedDebits](https://api.stripe.com#received_debits) depending on their network and source flow. Reversing a ReceivedDebit leads to the creation of a new object known as a DebitReversal.
             */
            debit_reversal?: DebitReversal;
            /**
             * Use [InboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers) to add funds to your [FinancialAccount](https://api.stripe.com#financial_accounts) via a PaymentMethod that is owned by you. The funds will be transferred via an ACH debit.
             *
             * Related guide: [Moving money with Treasury using InboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers)
             */
            inbound_transfer?: InboundTransfer;
            /**
             * When an [issued card](https://docs.stripe.com/issuing) is used to make a purchase, an Issuing `Authorization`
             * object is created. [Authorizations](https://docs.stripe.com/issuing/purchases/authorizations) must be approved for the
             * purchase to be completed successfully.
             *
             * Related guide: [Issued card authorizations](https://docs.stripe.com/issuing/purchases/authorizations)
             */
            issuing_authorization?: Issuing.Authorization;
            /**
             * Use [OutboundPayments](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments) to send funds to another party's external bank account or [FinancialAccount](https://api.stripe.com#financial_accounts). To send money to an account belonging to the same user, use an [OutboundTransfer](https://api.stripe.com#outbound_transfers).
             *
             * Simulate OutboundPayment state changes with the `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods can only be called on test mode objects.
             *
             * Related guide: [Moving money with Treasury using OutboundPayment objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments)
             */
            outbound_payment?: OutboundPayment;
            /**
             * Use [OutboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers) to transfer funds from a [FinancialAccount](https://api.stripe.com#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, use [OutboundPayments](https://api.stripe.com#outbound_payments) instead. You can send funds over ACH rails or through a domestic wire transfer to a user's own external bank account.
             *
             * Simulate OutboundTransfer state changes with the `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods can only be called on test mode objects.
             *
             * Related guide: [Moving money with Treasury using OutboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers)
             */
            outbound_transfer?: OutboundTransfer;
            /**
             * ReceivedCredits represent funds sent to a [FinancialAccount](https://api.stripe.com#financial_accounts) (for example, via ACH or wire). These money movements are not initiated from the FinancialAccount.
             */
            received_credit?: ReceivedCredit;
            /**
             * ReceivedDebits represent funds pulled from a [FinancialAccount](https://api.stripe.com#financial_accounts). These are not initiated from the FinancialAccount.
             */
            received_debit?: ReceivedDebit;
            /**
             * Type of the flow that created the Transaction. Set to the same value as `flow_type`.
             */
            type: FlowDetails.Type;
        }
        type FlowType = 'credit_reversal' | 'debit_reversal' | 'inbound_transfer' | 'issuing_authorization' | 'other' | 'outbound_payment' | 'outbound_transfer' | 'received_credit' | 'received_debit';
        type Status = 'open' | 'posted' | 'void';
        interface StatusTransitions {
            /**
             * Timestamp describing when the Transaction changed status to `posted`.
             */
            posted_at: number | null;
            /**
             * Timestamp describing when the Transaction changed status to `void`.
             */
            void_at: number | null;
        }
        namespace FlowDetails {
            type Type = 'credit_reversal' | 'debit_reversal' | 'inbound_transfer' | 'issuing_authorization' | 'other' | 'outbound_payment' | 'outbound_transfer' | 'received_credit' | 'received_debit';
        }
    }
}
export declare namespace Treasury {
    interface TransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Treasury {
    interface TransactionListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;
        /**
         * Only return Transactions that were created during the given date interval.
         */
        created?: RangeQueryParam | number;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * The results are in reverse chronological order by `created` or `posted_at`. The default is `created`.
         */
        order_by?: TransactionListParams.OrderBy;
        /**
         * Only return Transactions that have the given status: `open`, `posted`, or `void`.
         */
        status?: TransactionListParams.Status;
        /**
         * A filter for the `status_transitions.posted_at` timestamp. When using this filter, `status=posted` and `order_by=posted_at` must also be specified.
         */
        status_transitions?: TransactionListParams.StatusTransitions;
    }
    namespace TransactionListParams {
        type OrderBy = 'created' | 'posted_at';
        type Status = 'open' | 'posted' | 'void';
        interface StatusTransitions {
            /**
             * Returns Transactions with `posted_at` within the specified range.
             */
            posted_at?: RangeQueryParam | number;
        }
    }
}
