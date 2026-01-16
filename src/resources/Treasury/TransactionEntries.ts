// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Transaction} from './Transactions.js';
import {CreditReversal} from './CreditReversals.js';
import {DebitReversal} from './DebitReversals.js';
import {InboundTransfer} from './InboundTransfers.js';
import {OutboundPayment} from './OutboundPayments.js';
import {OutboundTransfer} from './OutboundTransfers.js';
import {ReceivedCredit} from './ReceivedCredits.js';
import {ReceivedDebit} from './ReceivedDebits.js';
import * as Issuing from './../Issuing/index.js';
import {PaginationParams, RangeQueryParam} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class TransactionEntryResource extends StripeResource {
  /**
   * Retrieves a list of TransactionEntry objects.
   */
  list(
    params: Treasury.TransactionEntryListParams,
    options?: RequestOptions
  ): ApiListPromise<TransactionEntry>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/treasury/transaction_entries',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves a TransactionEntry object.
   */
  retrieve(
    id: string,
    params?: Treasury.TransactionEntryRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<TransactionEntry>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<TransactionEntry>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/treasury/transaction_entries/{id}',
    }).call(this, ...args);
  }
}
export interface TransactionEntry {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'treasury.transaction_entry';

  /**
   * Change to a FinancialAccount's balance
   */
  balance_impact: Treasury.TransactionEntry.BalanceImpact;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * When the TransactionEntry will impact the FinancialAccount's balance.
   */
  effective_at: number;

  /**
   * The FinancialAccount associated with this object.
   */
  financial_account: string;

  /**
   * Token of the flow associated with the TransactionEntry.
   */
  flow: string | null;

  /**
   * Details of the flow associated with the TransactionEntry.
   */
  flow_details?: Treasury.TransactionEntry.FlowDetails | null;

  /**
   * Type of the flow associated with the TransactionEntry.
   */
  flow_type: Treasury.TransactionEntry.FlowType;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The Transaction associated with this object.
   */
  transaction: string | Transaction;

  /**
   * The specific money movement that generated the TransactionEntry.
   */
  type: Treasury.TransactionEntry.Type;
}
export namespace Treasury {
  export namespace TransactionEntry {
    export interface BalanceImpact {
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

    export interface FlowDetails {
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

    export type FlowType =
      | 'credit_reversal'
      | 'debit_reversal'
      | 'inbound_transfer'
      | 'issuing_authorization'
      | 'other'
      | 'outbound_payment'
      | 'outbound_transfer'
      | 'received_credit'
      | 'received_debit';

    export type Type =
      | 'credit_reversal'
      | 'credit_reversal_posting'
      | 'debit_reversal'
      | 'inbound_transfer'
      | 'inbound_transfer_return'
      | 'issuing_authorization_hold'
      | 'issuing_authorization_release'
      | 'other'
      | 'outbound_payment'
      | 'outbound_payment_cancellation'
      | 'outbound_payment_failure'
      | 'outbound_payment_posting'
      | 'outbound_payment_return'
      | 'outbound_transfer'
      | 'outbound_transfer_cancellation'
      | 'outbound_transfer_failure'
      | 'outbound_transfer_posting'
      | 'outbound_transfer_return'
      | 'received_credit'
      | 'received_debit';

    export namespace FlowDetails {
      export type Type =
        | 'credit_reversal'
        | 'debit_reversal'
        | 'inbound_transfer'
        | 'issuing_authorization'
        | 'other'
        | 'outbound_payment'
        | 'outbound_transfer'
        | 'received_credit'
        | 'received_debit';
    }
  }
}
export namespace Treasury {
  export interface TransactionEntryRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Treasury {
  export interface TransactionEntryListParams extends PaginationParams {
    /**
     * Returns objects associated with this FinancialAccount.
     */
    financial_account: string;

    /**
     * Only return TransactionEntries that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    effective_at?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The results are in reverse chronological order by `created` or `effective_at`. The default is `created`.
     */
    order_by?: TransactionEntryListParams.OrderBy;

    /**
     * Only return TransactionEntries associated with this Transaction.
     */
    transaction?: string;
  }

  export namespace TransactionEntryListParams {
    export type OrderBy = 'created' | 'effective_at';
  }
}
