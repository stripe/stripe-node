// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Hold} from './Holds.js';
import {Plan} from './Plans.js';
import {Dispute} from './../Disputes.js';
import {Refund} from './../Refunds.js';
import {PaginationParams, Metadata} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class ReleaseResource extends StripeResource {
  /**
   * Returns a list of ReserveReleases previously created. The ReserveReleases are returned in sorted order, with the most recent ReserveReleases appearing first.
   */
  list(
    params?: Reserve.ReleaseListParams,
    options?: RequestOptions
  ): ApiListPromise<Release> {
    return this._makeRequest('GET', '/v1/reserve/releases', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieve a ReserveRelease.
   */
  retrieve(
    id: string,
    params?: Reserve.ReleaseRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Release>> {
    return this._makeRequest(
      'GET',
      `/v1/reserve/releases/${id}`,
      params,
      options
    ) as any;
  }
}
export interface Release {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'reserve.release';

  /**
   * Amount released. A positive integer representing how much is released in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
   */
  amount: number;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Indicates which party created this ReserveRelease.
   */
  created_by: Reserve.Release.CreatedBy;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The reason for the ReserveRelease, indicating why the funds were released.
   */
  reason: Reserve.Release.Reason;

  /**
   * The release timestamp of the funds.
   */
  released_at: number;

  /**
   * The ReserveHold this ReserveRelease is associated with.
   */
  reserve_hold: string | Hold | null;

  /**
   * The ReservePlan ID this ReserveRelease is associated with. This field is only populated if a ReserveRelease is created by a ReservePlan disable operation, or from a scheduled ReservedHold expiry.
   */
  reserve_plan: string | Plan | null;

  source_transaction?: Reserve.Release.SourceTransaction;
}
export namespace Reserve {
  export namespace Release {
    export type CreatedBy = 'application' | 'stripe';

    export type Reason =
      | 'bulk_hold_expiry'
      | 'hold_released_early'
      | 'hold_reversed'
      | 'plan_disabled';

    export interface SourceTransaction {
      /**
       * The ID of the dispute.
       */
      dispute?: string | Dispute;

      /**
       * The ID of the refund.
       */
      refund?: string | Refund;

      /**
       * The type of source transaction.
       */
      type: SourceTransaction.Type;
    }

    export namespace SourceTransaction {
      export type Type = 'dispute' | 'refund';
    }
  }
}
export namespace Reserve {
  export interface ReleaseRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Reserve {
  export interface ReleaseListParams extends PaginationParams {
    /**
     * Only return ReserveReleases associated with the currency specified by this currency code. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return ReserveReleases associated with the ReserveHold specified by this ReserveHold ID.
     */
    reserve_hold?: string;

    /**
     * Only return ReserveReleases associated with the ReservePlan specified by this ReservePlan ID.
     */
    reserve_plan?: string;
  }
}
