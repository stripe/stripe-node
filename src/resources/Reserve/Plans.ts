// File generated from our OpenAPI spec

import {Metadata, OtherString} from '../../shared.js';
import {RequestOptions} from '../../lib.js';
export interface Plan {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'reserve.plan';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Indicates which party created this ReservePlan.
   */
  created_by: Plan.CreatedBy;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). An unset currency indicates that the plan applies to all currencies.
   */
  currency: string | null;

  /**
   * The balance destination to which the reserved funds are sent.
   */
  destination: Plan.Destination;

  /**
   * Time at which the ReservePlan was disabled.
   */
  disabled_at: number | null;

  fixed_release?: Plan.FixedRelease;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  manual_release?: Plan.ManualRelease;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The percent of each Charge to reserve.
   */
  percent: number;

  rolling_release?: Plan.RollingRelease;

  /**
   * The current status of the ReservePlan. The ReservePlan only affects charges if it is `active`.
   */
  status: Plan.Status;

  /**
   * The type of the ReservePlan.
   */
  type: Plan.Type;
}
export namespace Plan {
  export type CreatedBy = 'application' | 'stripe' | OtherString;

  export type Destination = 'other' | 'risk_reserved' | 'settlement_reserved';

  export interface FixedRelease {
    /**
     * The time after which all reserved funds are requested for release.
     */
    release_after: number;

    /**
     * The time at which reserved funds are scheduled for release, automatically set to midnight UTC of the day after `release_after`.
     */
    scheduled_release: number;
  }

  export interface ManualRelease {}

  export interface RollingRelease {
    /**
     * The number of days to reserve funds before releasing.
     */
    days_after_charge: number;

    /**
     * The time at which the ReservePlan expires.
     */
    expires_on: number | null;
  }

  export type Status = 'active' | 'disabled' | 'expired' | 'other';

  export type Type =
    | 'fixed_release'
    | 'manual_release'
    | 'other'
    | 'rolling_release';
}
