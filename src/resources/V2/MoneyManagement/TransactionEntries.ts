// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {RangeQueryParam, OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class TransactionEntryResource extends StripeResource {
  /**
   * Returns a list of TransactionEntries that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.TransactionEntryListParams,
    options?: RequestOptions
  ): V2ListPromise<TransactionEntry> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/transaction_entries',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves the details of a TransactionEntry by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.TransactionEntryRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<TransactionEntry>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/transaction_entries/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface TransactionEntry {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.transaction_entry';

  /**
   * The change to the FinancialAccount's balance that takes effect at this TransactionEntry's `effective_at` timestamp.
   */
  balance_impact: TransactionEntry.BalanceImpact;

  /**
   * Time at which the object was created. Represented as an RFC 3339 timestamp in UTC with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
   */
  created: string;

  /**
   * Time at which the TransactionEntry affects the FinancialAccount balance. This can be in the past or future.
   */
  effective_at: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The ID of the Transaction that this TransactionEntry belongs to.
   */
  transaction: string;

  /**
   * Details copied from the Transaction that this TransactionEntry belongs to.
   */
  transaction_details: TransactionEntry.TransactionDetails;
}
export namespace TransactionEntry {
  export interface BalanceImpact {
    /**
     * The change to the available balance.
     */
    available: V2Amount;

    /**
     * The change to the `inbound_pending` balance.
     */
    inbound_pending: V2Amount;

    /**
     * The change to the `outbound_pending` balance.
     */
    outbound_pending: V2Amount;
  }

  export interface TransactionDetails {
    /**
     * Open Enum. The category of this TransactionEntry's parent Transaction.
     */
    category: TransactionDetails.Category;

    /**
     * The ID of the FinancialAccount affected by this Transaction.
     */
    financial_account: string;

    /**
     * Details about the flow object that created the Transaction this entry belongs to, such as an
     * InboundTransfer or OutboundPayment. `transaction_details.flow.type` identifies the kind of object.
     * The corresponding field contains its ID, when available: for an InboundTransfer,
     * `transaction_details.flow.inbound_transfer` contains the InboundTransfer's ID. To list entries for
     * the parent Transaction, pass the TransactionEntry's `transaction` ID to the `transaction` parameter
     * on List Transaction Entries.
     */
    flow?: TransactionDetails.Flow;
  }

  export namespace TransactionDetails {
    export type Category =
      | 'adjustment'
      | 'currency_conversion'
      | 'inbound_transfer'
      | 'inbound_transfer_reversal'
      | 'outbound_payment'
      | 'outbound_payment_reversal'
      | 'outbound_transfer'
      | 'outbound_transfer_reversal'
      | 'received_credit'
      | 'received_credit_reversal'
      | 'received_debit'
      | 'received_debit_reversal'
      | 'stripe_fee'
      | 'stripe_fee_tax'
      | OtherString;

    export interface Flow {
      /**
       * If applicable, the ID of the Adjustment that created this Transaction.
       */
      adjustment?: string;

      /**
       * When available, the ID of the CurrencyConversion that created this Transaction.
       */
      currency_conversion?: string;

      /**
       * If applicable, the ID of the FeeBatch that created this Transaction.
       */
      fee_batch?: string;

      /**
       * If applicable, the ID of the InboundTransfer that created this Transaction.
       */
      inbound_transfer?: string;

      /**
       * If applicable, the ID of the OutboundPayment that created this Transaction.
       */
      outbound_payment?: string;

      /**
       * If applicable, the ID of the OutboundTransfer that created this Transaction.
       */
      outbound_transfer?: string;

      /**
       * If applicable, the ID of the ReceivedCredit that created this Transaction.
       */
      received_credit?: string;

      /**
       * If applicable, the ID of the ReceivedDebit that created this Transaction.
       */
      received_debit?: string;

      /**
       * Open Enum. The type of flow that created the Transaction. When available, the flow's ID is provided in the corresponding field.
       */
      type: Flow.Type;
    }

    export namespace Flow {
      export type Type =
        | 'adjustment'
        | 'currency_conversion'
        | 'fee_batch'
        | 'inbound_transfer'
        | 'outbound_payment'
        | 'outbound_transfer'
        | 'received_credit'
        | 'received_debit'
        | OtherString;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface TransactionEntryRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface TransactionEntryListParams {
      /**
       * Filter for TransactionEntries created within a specified time range.
       */
      created?: RangeQueryParam;

      /**
       * The page limit.
       */
      limit?: number;

      /**
       * Filter for TransactionEntries belonging to a specific Transaction. This filter only supports
       * filtering by a Transaction ID, which appears in each TransactionEntry's `transaction` field.
       */
      transaction?: string;
    }
  }
}
