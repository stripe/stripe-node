// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class TransactionResource extends StripeResource {
  /**
   * Returns a list of Transactions that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.TransactionListParams,
    options?: RequestOptions
  ): ApiListPromise<Transaction>;
  list(options?: RequestOptions): ApiListPromise<Transaction>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/transactions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of a Transaction by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.TransactionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Transaction>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/transactions/{id}',
    }).call(this, ...args);
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
   * The delta to the FinancialAccount's balance. The balance_impact for the Transaction is equal to sum of its
   * TransactionEntries that have `effective_at`s in the past.
   */
  balance_impact: V2.MoneyManagement.Transaction.BalanceImpact;

  /**
   * Open Enum. A descriptive category used to classify the Transaction.
   */
  category: V2.MoneyManagement.Transaction.Category;

  /**
   * Counterparty to this Transaction.
   */
  counterparty?: V2.MoneyManagement.Transaction.Counterparty;

  /**
   * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * Description of this Transaction. When applicable, the description is copied from the Flow object at the time
   * of transaction creation.
   */
  description?: string;

  /**
   * Indicates the FinancialAccount affected by this Transaction.
   */
  financial_account: string;

  /**
   * Details about the Flow object that created the Transaction.
   */
  flow?: V2.MoneyManagement.Transaction.Flow;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Closed Enum. Current status of the Transaction.
   * A Transaction is `pending` if either `balance_impact.inbound_pending` or `balance_impact.outbound_pending` is non-zero.
   * A Transaction is `posted` if only `balance_impact.available` is non-zero.
   * A Transaction is `void` if there is no balance impact.
   * `posted` and `void` are terminal states, and no additional entries will be added to the Transaction.
   */
  status: V2.MoneyManagement.Transaction.Status;

  /**
   * Timestamps for when the Transaction transitioned to a particular status.
   */
  status_transitions: V2.MoneyManagement.Transaction.StatusTransitions;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace Transaction {
      export interface BalanceImpact {
        /**
         * Impact to the available balance.
         */
        available: V2Amount;

        /**
         * Impact to the inbound_pending balance.
         */
        inbound_pending: V2Amount;

        /**
         * Impact to the outbound_pending balance.
         */
        outbound_pending: V2Amount;
      }

      export type Category =
        | 'adjustment'
        | 'currency_conversion'
        | 'inbound_transfer'
        | 'outbound_payment'
        | 'outbound_transfer'
        | 'received_credit'
        | 'received_debit'
        | 'return'
        | 'stripe_fee';

      export interface Counterparty {
        /**
         * Name of the counterparty.
         */
        name?: string;
      }

      export interface Flow {
        /**
         * Open Enum. Type of the flow that created the Transaction. The field matching this value will contain the ID of the flow.
         */
        type: Flow.Type;

        /**
         * If applicable, the ID of the Adjustment that created this Transaction.
         */
        adjustment?: string;

        /**
         * In the future, this will be the ID of the currency conversion that created this Transaction. For now, this field is always null.
         */
        currency_conversion?: string;

        /**
         * If applicable, the ID of the FeeTransaction that created this Transaction.
         */
        fee_transaction?: string;

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
      }

      export type Status = 'pending' | 'posted' | 'void';

      export interface StatusTransitions {
        /**
         * The time at which the Transaction became posted. Only present if status == posted.
         */
        posted_at?: string;

        /**
         * The time at which the Transaction became void. Only present if status == void.
         */
        void_at?: string;
      }

      export namespace Flow {
        export type Type =
          | 'adjustment'
          | 'currency_conversion'
          | 'fee_transaction'
          | 'inbound_transfer'
          | 'outbound_payment'
          | 'outbound_transfer'
          | 'received_credit'
          | 'received_debit';
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface TransactionRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface TransactionListParams {
      /**
       * Filter for Transactions created at an exact time.
       */
      created?: string;

      /**
       * Filter for Transactions created after the specified timestamp.
       */
      created_gt?: string;

      /**
       * Filter for Transactions created at or after the specified timestamp.
       */
      created_gte?: string;

      /**
       * Filter for Transactions created before the specified timestamp.
       */
      created_lt?: string;

      /**
       * Filter for Transactions created at or before the specified timestamp.
       */
      created_lte?: string;

      /**
       * Filter for Transactions belonging to a FinancialAccount.
       */
      financial_account?: string;

      /**
       * Filter for Transactions corresponding to a Flow.
       */
      flow?: string;

      /**
       * The page limit.
       */
      limit?: number;
    }
  }
}
