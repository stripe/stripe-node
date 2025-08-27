// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The LicenseFeeVersion object.
         */
        interface LicenseFeeVersion {
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
           * Defines whether the tiering price should be graduated or volume-based. In volume-based tiering, the maximum
           * quantity within a period determines the per-unit price. In graduated tiering, the pricing changes as the quantity
           * grows into new tiers. Can only be set if `tiers` is set.
           */
          tiering_mode: LicenseFeeVersion.TieringMode | null;

          /**
           * Each element represents a pricing tier. Cannot be set if `unit_amount` is provided.
           */
          tiers: Array<LicenseFeeVersion.Tier>;

          /**
           * Apply a transformation to the reported usage or set quantity before computing the amount billed.
           */
          transform_quantity: LicenseFeeVersion.TransformQuantity | null;

          /**
           * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal
           * places. Cannot be set if `tiers` is provided.
           */
          unit_amount: string | null;
        }

        namespace LicenseFeeVersion {
          interface Tier {
            /**
             * Price for the entire tier, represented as a decimal string in minor currency units with at most 12 decimal places.
             */
            flat_amount: string | null;

            /**
             * Per-unit price for units included in this tier, represented as a decimal string in minor currency units with at
             * most 12 decimal places.
             */
            unit_amount: string | null;

            /**
             * Up to and including this quantity will be contained in the tier. Only one of `up_to_decimal` and `up_to_inf` may
             * be set.
             */
            up_to_decimal: string | null;

            /**
             * No upper bound to this tier. Only one of `up_to_decimal` and `up_to_inf` may be set.
             */
            up_to_inf: 'inf' | null;
          }

          type TieringMode = 'graduated' | 'volume';

          interface TransformQuantity {
            /**
             * Divide usage by this number.
             */
            divide_by: number;

            /**
             * After division, round the result up or down.
             */
            round: TransformQuantity.Round;
          }

          namespace TransformQuantity {
            type Round = 'down' | 'up';
          }
        }
      }
    }
  }
}
