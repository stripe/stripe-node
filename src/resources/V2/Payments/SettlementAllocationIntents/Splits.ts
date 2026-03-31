// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {SettlementAllocationIntentSplit} from './../../../V2/Payments/SettlementAllocationIntentSplits.js';
import {V2Amount} from './../../V2Amounts.js';
import {MetadataParam} from '../../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
const stripeMethod = StripeResource.method;

export class SplitResource extends StripeResource {
  /**
   * List SettlementAllocationIntentSplits API.
   */
  list(
    id: string,
    params?: V2.Payments.SettlementAllocationIntents.SplitListParams,
    options?: RequestOptions
  ): ApiListPromise<SettlementAllocationIntentSplit>;
  list(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<SettlementAllocationIntentSplit>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath:
        '/v2/payments/settlement_allocation_intents/{settlement_allocation_intent_id}/splits',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create SettlementAllocationIntentSplit API.
   */
  create(
    id: string,
    params: V2.Payments.SettlementAllocationIntents.SplitCreateParams,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntentSplit>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v2/payments/settlement_allocation_intents/{settlement_allocation_intent_id}/splits',
    }).call(this, ...args);
  }

  /**
   * Retrieve SettlementAllocationIntentSplit API.
   */
  retrieve(
    settlementAllocationIntentId: string,
    id: string,
    params?: V2.Payments.SettlementAllocationIntents.SplitRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntentSplit>>;
  retrieve(
    settlementAllocationIntentId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntentSplit>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath:
        '/v2/payments/settlement_allocation_intents/{settlement_allocation_intent_id}/splits/{id}',
    }).call(this, ...args);
  }

  /**
   * Cancel SettlementAllocationIntentSplit API.
   */
  cancel(
    settlementAllocationIntentId: string,
    id: string,
    params?: V2.Payments.SettlementAllocationIntents.SplitCancelParams,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntentSplit>>;
  cancel(
    settlementAllocationIntentId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntentSplit>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v2/payments/settlement_allocation_intents/{settlement_allocation_intent_id}/splits/{id}/cancel',
    }).call(this, ...args);
  }
}
export namespace V2 {
  export namespace Payments {
    export namespace SettlementAllocationIntents {
      export interface SplitCreateParams {
        /**
         * The target account for settling the SettlementAllocationIntentSplit.
         */
        account: string;

        /**
         * The amount and currency of the SettlementAllocationIntentSplit.
         */
        amount: V2Amount;

        /**
         * The type of the fund transfer.
         */
        type: SplitCreateParams.Type;

        /**
         * Metadata associated with the SettlementAllocationIntentSplit.
         */
        metadata?: MetadataParam;
      }

      export namespace SplitCreateParams {
        export type Type = 'credit' | 'debit';
      }
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export namespace SettlementAllocationIntents {
      export interface SplitRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export namespace SettlementAllocationIntents {
      export interface SplitListParams {
        /**
         * The page size.
         */
        limit?: number;

        /**
         * Filter the SettlementAllocationIntentSplits by status.
         */
        status?: SplitListParams.Status;
      }

      export namespace SplitListParams {
        export type Status = 'canceled' | 'pending' | 'settled';
      }
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export namespace SettlementAllocationIntents {
      export interface SplitCancelParams {}
    }
  }
}
