// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Plan} from './Plans.js';
import {Charge} from './../Charges.js';
import {PaginationParams, Metadata} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class HoldResource extends StripeResource {
  /**
   * Returns a list of ReserveHolds previously created. The ReserveHolds are returned in sorted order, with the most recent ReserveHolds appearing first.
   */
  list(
    params?: Reserve.HoldListParams,
    options?: RequestOptions
  ): ApiListPromise<Hold> {
    return this._makeRequest('GET', '/v1/reserve/holds', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieve a ReserveHold.
   */
  retrieve(
    id: string,
    params?: Reserve.HoldRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Hold>> {
    return this._makeRequest(
      'GET',
      `/v1/reserve/holds/${id}`,
      params,
      options
    ) as any;
  }
}
export interface Hold {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'reserve.hold';

  /**
   * Amount reserved. A positive integer representing how much is reserved in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
   */
  amount: number;

  /**
   * Amount in cents that can be released from this ReserveHold
   */
  amount_releasable?: number;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Indicates which party created this ReserveHold.
   */
  created_by: Reserve.Hold.CreatedBy;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * Whether there are any funds available to release on this ReserveHold. Note that if the ReserveHold is in the process of being released, this could be false, even though the funds haven't been fully released yet.
   */
  is_releasable?: boolean;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The reason for the ReserveHold.
   */
  reason: Reserve.Hold.Reason;

  release_schedule: Reserve.Hold.ReleaseSchedule;

  /**
   * The ReservePlan which produced this ReserveHold (i.e., resplan_123)
   */
  reserve_plan: string | Plan | null;

  /**
   * The Charge which funded this ReserveHold (e.g., ch_123)
   */
  source_charge: string | Charge | null;

  /**
   * Which source balance type this ReserveHold reserves funds from. One of `bank_account`, `card`, or `fpx`.
   */
  source_type: Reserve.Hold.SourceType;
}
export namespace Reserve {
  export namespace Hold {
    export type CreatedBy = 'application' | 'stripe';

    export type Reason = 'charge' | 'standalone';

    export interface ReleaseSchedule {
      /**
       * The time after which the ReserveHold is requested to be released.
       */
      release_after: number | null;

      /**
       * The time at which the ReserveHold is scheduled to be released, automatically set to midnight UTC of the day after `release_after`.
       */
      scheduled_release: number | null;
    }

    export type SourceType = 'bank_account' | 'card' | 'fpx';
  }
}
export namespace Reserve {
  export interface HoldRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Reserve {
  export interface HoldListParams extends PaginationParams {
    /**
     * Only return ReserveHolds associated with the currency specified by this currency code. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return ReserveHolds that are releasable.
     */
    is_releasable?: boolean;

    reason?: HoldListParams.Reason;

    /**
     * Only return ReserveHolds associated with the ReservePlan specified by this ReservePlan ID.
     */
    reserve_plan?: string;

    /**
     * Only return ReserveHolds associated with the ReserveRelease specified by this ReserveRelease ID.
     */
    reserve_release?: string;

    /**
     * Only return ReserveHolds associated with the Charge specified by this source charge ID.
     */
    source_charge?: string;
  }

  export namespace HoldListParams {
    export type Reason = 'charge' | 'standalone';
  }
}
