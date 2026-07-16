// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class FeeEntryResource extends StripeResource {
  /**
   * List FeeEntries optionally filtered by incurred_by, fee_batch, or collection_record (at most one filter at a time).
   */
  list(
    params?: V2.Core.FeeEntryListParams,
    options?: RequestOptions
  ): V2ListPromise<FeeEntry> {
    return this._makeRequest('GET', '/v2/core/fee_entries', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieve a FeeEntry by id.
   */
  retrieve(
    id: string,
    params?: V2.Core.FeeEntryRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FeeEntry>> {
    return this._makeRequest(
      'GET',
      `/v2/core/fee_entries/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface FeeEntry {
  /**
   * Unique identifier for the FeeEntry.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.fee_entry';

  /**
   * The fee amount.
   */
  amount: FeeEntry.Amount;

  /**
   * The entity that assessed this fee.
   */
  charged_by: FeeEntry.ChargedBy;

  /**
   * Timestamp of when this fee entry was created.
   */
  created: string;

  /**
   * The ID of the FeeBatch that collected this fee, if any.
   */
  fee_batch?: string;

  /**
   * The usage event that caused this fee to be assessed.
   */
  incurred_by: FeeEntry.IncurredBy;

  /**
   * Has the value `true` if the object exists in live mode, or `false` if in test mode.
   */
  livemode: boolean;

  /**
   * The reason this fee entry was created.
   */
  reason: FeeEntry.Reason;

  /**
   * The tax portion of the fee, if applicable.
   */
  tax?: FeeEntry.Tax;

  /**
   * The category of this fee.
   */
  type: FeeEntry.Type;
}
export namespace FeeEntry {
  export interface Amount {
    /**
     * A lowercase alpha3 currency code like "usd"
     * For the taxonomy label choice, see SECURE_FRAMEWORKS-2849.
     */
    currency: string;

    /**
     * In major units like "1.23" for 1.23 USD
     * For the taxonomy label choice, see SECURE_FRAMEWORKS-2849.
     */
    value: string;
  }

  export interface ChargedBy {
    /**
     * Details for a fee charged by a Connect application.
     */
    application?: ChargedBy.Application;

    /**
     * Details for a fee charged by the payment network.
     */
    network?: ChargedBy.Network;

    /**
     * Details for a fee charged by Stripe.
     */
    stripe?: ChargedBy.Stripe;

    /**
     * The type of entity that charged this fee.
     */
    type: ChargedBy.Type;
  }

  export interface IncurredBy {
    /**
     * The account that incurred the usage (may differ from the billing account).
     */
    account?: string;

    /**
     * Public API object id, e.g. ch_xxx.
     */
    id: string;

    /**
     * Timestamp of when the usage event occurred.
     */
    occurred_at?: string;

    /**
     * Public API object type: "charge", "payment", "refund", "dispute", "payout", etc.
     */
    type: string;
  }

  export type Reason =
    | 'other'
    | 'processing_fee'
    | 'refund'
    | 'refund_failure'
    | 'reprice'
    | 'tier_true_up'
    | OtherString;

  export interface Tax {
    /**
     * The tax amount calculated for this fee.
     */
    amount: Tax.Amount;
  }

  export type Type =
    | 'application_fee'
    | 'passthrough_fee'
    | 'stripe_fee'
    | OtherString;

  export namespace ChargedBy {
    export interface Application {
      /**
       * Human-readable product name, e.g. "Card payments - Stripe fee".
       */
      feature_name?: string;
    }

    export interface Network {
      /**
       * Human-readable product name, e.g. "Card payments - Stripe fee".
       */
      feature_name?: string;
    }

    export interface Stripe {
      /**
       * Human-readable product name, e.g. "Card payments - Stripe fee".
       */
      feature_name?: string;
    }

    export type Type = 'application' | 'network' | 'stripe' | OtherString;
  }

  export namespace Tax {
    export interface Amount {
      /**
       * A lowercase alpha3 currency code like "usd"
       * For the taxonomy label choice, see SECURE_FRAMEWORKS-2849.
       */
      currency: string;

      /**
       * In major units like "1.23" for 1.23 USD
       * For the taxonomy label choice, see SECURE_FRAMEWORKS-2849.
       */
      value: string;
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface FeeEntryRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface FeeEntryListParams {
      /**
       * Filter by money movement id (e.g. txn_xxx, bt_xxx).
       */
      collection_record?: string;

      /**
       * Filter for FeeEntries created at the exact specified timestamp.
       */
      created?: string;

      /**
       * Filter for FeeEntries created after the specified timestamp (exclusive).
       */
      created_gt?: string;

      /**
       * Filter for FeeEntries created at or after the specified timestamp (inclusive).
       */
      created_gte?: string;

      /**
       * Filter for FeeEntries created before the specified timestamp (exclusive).
       */
      created_lt?: string;

      /**
       * Filter for FeeEntries created at or before the specified timestamp (inclusive).
       */
      created_lte?: string;

      /**
       * Filter by fee batch id (fb_xxx).
       */
      fee_batch?: string;

      /**
       * Filter by usage object id (e.g. ch_xxx, py_xxx).
       */
      incurred_by?: string;

      /**
       * Maximum number of results to return per page. Defaults to 20.
       */
      limit?: number;
    }
  }
}
