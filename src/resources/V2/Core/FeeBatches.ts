// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class FeeBatchResource extends StripeResource {
  /**
   * List FeeBatches optionally filtered by collection_record.
   */
  list(
    params?: V2.Core.FeeBatchListParams,
    options?: RequestOptions
  ): ApiListPromise<FeeBatch> {
    return this._makeRequest('GET', '/v2/core/fee_batches', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieve a FeeBatch by id.
   */
  retrieve(
    id: string,
    params?: V2.Core.FeeBatchRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FeeBatch>> {
    return this._makeRequest(
      'GET',
      `/v2/core/fee_batches/${id}`,
      params,
      options
    ) as any;
  }
}
export interface FeeBatch {
  /**
   * Unique identifier for the FeeBatch.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.fee_batch';

  /**
   * Adjustments applied to this batch.
   */
  adjustments?: V2.Core.FeeBatch.Adjustments;

  /**
   * The total fee amount billed in this batch.
   */
  amount: V2Amount;

  /**
   * The entity that collected this batch.
   */
  collected_by: V2.Core.FeeBatch.CollectedBy;

  /**
   * The money movement records associated with collecting this batch.
   */
  collection_records: Array<V2.Core.FeeBatch.CollectionRecord>;

  /**
   * Timestamp of when this batch was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode, or `false` if in test mode.
   */
  livemode: boolean;

  /**
   * The current state of this batch.
   */
  status: V2.Core.FeeBatch.Status;

  /**
   * Timestamps for each status transition.
   */
  status_transitions: V2.Core.FeeBatch.StatusTransitions;

  /**
   * The tax amount included in this batch.
   */
  tax?: V2.Core.FeeBatch.Tax;
}
export namespace V2 {
  export namespace Core {
    export namespace FeeBatch {
      export interface Adjustments {
        /**
         * The amount of tax adjusted for this batch.
         */
        tax_adjustment?: V2Amount;
      }

      export interface CollectedBy {
        /**
         * The type of entity that collected this batch.
         */
        type: CollectedBy.Type;
      }

      export interface CollectionRecord {
        /**
         * The fee amount collected via this record.
         */
        amount: V2Amount;

        /**
         * The ID of the associated v1 balance transaction.
         */
        balance_transaction?: string;

        /**
         * The ID of the associated credit transaction.
         */
        credit_transaction?: string;

        /**
         * The ID of the associated v2 money management transaction.
         */
        money_management_transaction?: string;

        /**
         * The ID of the associated accounts-receivable invoice.
         */
        payable_invoice?: string;

        /**
         * The tax amount collected via this record.
         */
        tax?: CollectionRecord.Tax;

        /**
         * The type of money movement object.
         */
        type: CollectionRecord.Type;
      }

      export type Status = 'billed' | 'pending';

      export interface StatusTransitions {
        /**
         * Timestamp of when the batch transitioned to BILLED, if applicable.
         */
        billed_at?: string;
      }

      export interface Tax {
        /**
         * The tax amount included in this batch.
         */
        amount: V2Amount;
      }

      export namespace CollectedBy {
        export type Type = 'application' | 'network' | 'stripe';
      }

      export namespace CollectionRecord {
        export interface Tax {
          /**
           * The tax amount collected via this record.
           */
          amount: V2Amount;
        }

        export type Type =
          | 'balance_transaction'
          | 'credit_transaction'
          | 'money_management_transaction'
          | 'payable_invoice';
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface FeeBatchRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface FeeBatchListParams {
      /**
       * Filter to return only FeeBatches associated with this collection record ID.
       */
      collection_record?: string;

      /**
       * Filter for FeeBatches created at the exact specified timestamp.
       */
      created?: string;

      /**
       * Filter for FeeBatches created after the specified timestamp (exclusive).
       */
      created_gt?: string;

      /**
       * Filter for FeeBatches created at or after the specified timestamp (inclusive).
       */
      created_gte?: string;

      /**
       * Filter for FeeBatches created before the specified timestamp (exclusive).
       */
      created_lt?: string;

      /**
       * Filter for FeeBatches created at or before the specified timestamp (inclusive).
       */
      created_lte?: string;

      /**
       * Maximum number of results to return per page. Defaults to 20.
       */
      limit?: number;
    }
  }
}
