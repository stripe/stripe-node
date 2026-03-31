// File generated from our OpenAPI spec

import {V2Amount} from './../V2Amounts.js';
import {Metadata} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface SettlementAllocationIntentSplit {
  /**
   * Unique identifier for the SettlementAllocationIntentSplit.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.payments.settlement_allocation_intent_split';

  /**
   * The account id against which the SettlementAllocationIntentSplit should be settled.
   */
  account: string;

  /**
   * The amount and currency of the SettlementAllocationIntentSplit.
   */
  amount: V2Amount;

  /**
   * Timestamp at which SettlementAllocationIntentSplit was created.
   */
  created: string;

  /**
   * Details about the Flow object that settled the split.
   */
  flow?: V2.Payments.SettlementAllocationIntentSplit.Flow;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Metadata associated with the SettlementAllocationIntentSplit.
   */
  metadata?: Metadata;

  /**
   * The ID of the SettlementAllocationIntent that this split belongs to.
   */
  settlement_allocation_intent: string;

  /**
   * The status of the SettlementAllocationIntentSplit.
   */
  status: V2.Payments.SettlementAllocationIntentSplit.Status;

  /**
   * The type of the SettlementAllocationIntentSplit.
   */
  type: V2.Payments.SettlementAllocationIntentSplit.Type;
}
export namespace V2 {
  export namespace Payments {
    export namespace SettlementAllocationIntentSplit {
      export interface Flow {
        /**
         * Type of the flow linked to the transaction which settled the SettlementAllocationIntentSplit. The field matching this value will contain the ID of the flow.
         */
        type: Flow.Type;

        /**
         * If applicable, the ID of the OutboundPayment that created this transaction.
         */
        outbound_payment?: string;

        /**
         * If applicable, the ID of the OutboundTransfer that created this transaction.
         */
        outbound_transfer?: string;

        /**
         * If applicable, the ID of the ReceivedCredit that created this transaction.
         */
        received_credit?: string;
      }

      export type Status = 'canceled' | 'pending' | 'settled';

      export type Type = 'credit' | 'debit';

      export namespace Flow {
        export type Type =
          | 'outbound_payment'
          | 'outbound_transfer'
          | 'received_credit';
      }
    }
  }
}
