// File generated from our OpenAPI spec

import {Decimal} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface LicenseFeeVersion {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.license_fee_version';

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * The ID of the parent License Fee.
   */
  license_fee_id: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Defines whether the tiering price is graduated or volume-based. In volume-based tiering, the maximum
   * quantity within a period determines the per-unit price. In graduated tiering, the pricing changes as the quantity
   * grows into new tiers. Can only be set if `tiers` is set.
   */
  tiering_mode?: V2.Billing.LicenseFeeVersion.TieringMode;

  /**
   * Each element represents a pricing tier. Cannot be set if `unit_amount` is provided.
   */
  tiers: Array<V2.Billing.LicenseFeeVersion.Tier>;

  /**
   * Apply a transformation to the reported usage or set quantity before computing the amount billed.
   */
  transform_quantity?: V2.Billing.LicenseFeeVersion.TransformQuantity;

  /**
   * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal
   * places. Cannot be set if `tiers` is provided.
   */
  unit_amount?: string;
}
export namespace V2 {
  export namespace Billing {
    export namespace LicenseFeeVersion {
      export type TieringMode = 'graduated' | 'volume';

      export interface Tier {
        /**
         * Price for the entire tier, represented as a decimal string in minor currency units with at most 12 decimal places.
         */
        flat_amount?: string;

        /**
         * Per-unit price for units included in this tier, represented as a decimal string in minor currency units with at
         * most 12 decimal places.
         */
        unit_amount?: string;

        /**
         * Up to and including this quantity is contained in the tier. Only one of `up_to_decimal` and `up_to_inf` may
         * be set.
         */
        up_to_decimal?: Decimal;

        /**
         * No upper bound to this tier. Only one of `up_to_decimal` and `up_to_inf` may be set.
         */
        up_to_inf?: 'inf';
      }

      export interface TransformQuantity {
        /**
         * Divide usage by this number.
         */
        divide_by: bigint;

        /**
         * After division, round the result up or down.
         */
        round: TransformQuantity.Round;
      }

      export namespace TransformQuantity {
        export type Round = 'down' | 'up';
      }
    }
  }
}
