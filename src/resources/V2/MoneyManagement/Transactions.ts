// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {
  MetadataParam,
  LegacyV2DateTimeRangeQueryParam,
  Metadata,
  OtherString,
} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class TransactionResource extends StripeResource {
  /**
   * Returns a list of Transactions that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.TransactionListParams,
    options?: RequestOptions
  ): V2ListPromise<Transaction> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/transactions',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves the details of a Transaction by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.TransactionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/transactions/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates an existing Transaction. You can update its description and metadata.
   */
  update(
    id: string,
    params?: V2.MoneyManagement.TransactionUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/transactions/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Creates a fresh hosted URL for a Transaction's regulatory receipt.
   */
  refreshRegulatoryReceipt(
    id: string,
    params?: V2.MoneyManagement.TransactionRefreshRegulatoryReceiptParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/transactions/${encodeURIComponent(
        id
      )}/refresh_regulatory_receipt`,
      params,
      options
    ) as any;
  }
}
export interface Transaction {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.transaction';

  /**
   * The amount of the Transaction.
   */
  amount: V2Amount;

  /**
   * The change to the FinancialAccount's balance. This is the sum of the balance impacts of this Transaction's
   * TransactionEntries with `effective_at` timestamps in the past.
   */
  balance_impact: Transaction.BalanceImpact;

  /**
   * Open Enum. A category used to classify the Transaction.
   */
  category: Transaction.Category;

  /**
   * Details about the counterparty to this Transaction.
   */
  counterparty?: Transaction.Counterparty;

  /**
   * Time at which the object was created. Represented as an RFC 3339 timestamp in UTC with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
   */
  created: string;

  /**
   * A description of the Transaction. When applicable, the description is copied from the flow object when
   * the Transaction is created. You can update it using the Update Transaction endpoint.
   */
  description?: string;

  /**
   * The ID of the FinancialAccount affected by this Transaction.
   */
  financial_account: string;

  /**
   * Details about the flow object that created the Transaction, such as an InboundTransfer or OutboundPayment.
   * `flow.type` identifies the kind of object. The corresponding field contains its ID, when available:
   * for an InboundTransfer, `flow.inbound_transfer` contains the InboundTransfer's ID. Pass that ID to
   * the `flow` parameter on List Transactions.
   */
  flow?: Transaction.Flow;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information
   * about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * Hosted transaction receipt that is provided when money movement is considered regulated under Stripe's money transmission licenses. If not applicable, `regulatory_receipt.status` will be `not_applicable` and no URL will be provided unless you opt in by calling `/refresh_regulatory_receipt`.
   */
  regulatory_receipt: Transaction.RegulatoryReceipt;

  /**
   * Closed Enum. The current status of the Transaction.
   * A Transaction is `pending` if either `balance_impact.inbound_pending` or `balance_impact.outbound_pending` is non-zero.
   * A Transaction is `posted` if only `balance_impact.available` is non-zero.
   * A Transaction is `void` if there is no balance impact.
   * `posted` and `void` are terminal states, and no additional TransactionEntries will be added to the Transaction.
   */
  status: Transaction.Status;

  /**
   * Timestamps for when the Transaction transitioned to each status.
   */
  status_transitions: Transaction.StatusTransitions;
}
export namespace Transaction {
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

  export interface Counterparty {
    /**
     * Name of the counterparty.
     */
    name?: string;
  }

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

  export interface RegulatoryReceipt {
    /**
     * Current availability of the regulatory receipt.
     */
    status: RegulatoryReceipt.Status;

    /**
     * Hosted URL for the receipt.
     */
    url?: string;

    /**
     * Time until which `url` is valid.
     */
    url_expires_at?: string;
  }

  export type Status = 'pending' | 'posted' | 'void';

  export interface StatusTransitions {
    /**
     * The time at which the Transaction became `posted`. Only present when `status` is `posted`.
     */
    posted_at?: string;

    /**
     * The time at which the Transaction became `void`. Only present when `status` is `void`.
     */
    void_at?: string;
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

  export namespace RegulatoryReceipt {
    export type Status =
      | 'available'
      | 'not_applicable'
      | 'pending'
      | 'url_expired';
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface TransactionRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface TransactionUpdateParams {
      /**
       * A description of the Transaction, up to 100 characters. Pass `null` to clear the description,
       * or omit this parameter to leave it unchanged.
       */
      description?: string;

      /**
       * Set of key-value pairs that you can attach to the Transaction. Individual keys can be unset by posting
       * null to them.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface TransactionListParams {
      /**
       * Filter for Transactions created within a specified time range.
       */
      created?: TransactionListParams.Created | LegacyV2DateTimeRangeQueryParam;

      /**
       * Filter for Transactions belonging to a specific FinancialAccount. This filter only supports filtering by the FinancialAccount's ID.
       */
      financial_account?: string;

      /**
       * Filter for Transactions created by a specific flow object. This filter only supports filtering by
       * the flow object's ID, such as `ibt_123` for an InboundTransfer. A value that doesn't match a flow ID
       * returns an empty list.
       */
      flow?: string;

      /**
       * The page limit.
       */
      limit?: number;
    }

    export namespace TransactionListParams {
      export interface Created {
        /**
         * Filter for objects created after the specified timestamp.
         */
        gt?: string;

        /**
         * Filter for objects created at or after the specified timestamp.
         */
        gte?: string;

        /**
         * Filter for objects created before the specified timestamp.
         */
        lt?: string;

        /**
         * Filter for objects created at or before the specified timestamp.
         */
        lte?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface TransactionRefreshRegulatoryReceiptParams {}
  }
}
