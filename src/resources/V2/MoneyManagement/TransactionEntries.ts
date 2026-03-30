// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Amount} from './../../V2/Amounts.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class TransactionEntryResource extends StripeResource {
  /**
   * Returns a list of TransactionEntries that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.TransactionEntryListParams,
    options?: RequestOptions
  ): ApiListPromise<TransactionEntry>;
  list(options?: RequestOptions): ApiListPromise<TransactionEntry>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/transaction_entries',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of a TransactionEntry by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.TransactionEntryRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<TransactionEntry>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<TransactionEntry>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/transaction_entries/{id}',
    }).call(this, ...args);
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
   * The delta to the FinancialAccount's balance.
   */
  balance_impact: V2.MoneyManagement.TransactionEntry.BalanceImpact;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * Time at which the entry impacted (or will impact if it's in the future) the FinancialAccount balance.
   */
  effective_at: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The Transaction that this TransactionEntry belongs to.
   */
  transaction: string;

  /**
   * Details copied from the transaction that this TransactionEntry belongs to.
   */
  transaction_details: V2.MoneyManagement.TransactionEntry.TransactionDetails;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace TransactionEntry {
      export interface BalanceImpact {
        /**
         * Impact to the available balance.
         */
        available: Amount;

        /**
         * Impact to the inbound_pending balance.
         */
        inbound_pending: Amount;

        /**
         * Impact to the outbound_pending balance.
         */
        outbound_pending: Amount;
      }

      export interface TransactionDetails {
        /**
         * Closed Enum for now, and will be turned into an Open Enum soon. A descriptive category used to classify the Transaction.
         */
        category: TransactionDetails.Category;

        /**
         * Indicates the FinancialAccount affected by this Transaction.
         */
        financial_account: string;

        /**
         * Details about the Flow object that created the Transaction.
         */
        flow?: TransactionDetails.Flow;
      }

      export namespace TransactionDetails {
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
       * The page limit.
       */
      limit?: number;

      /**
       * Filter for TransactionEntries belonging to a Transaction.
       */
      transaction?: string;
    }
  }
}
