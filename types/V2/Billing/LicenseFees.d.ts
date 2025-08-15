// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The LicenseFee object.
         */
        interface LicenseFee {
          /**
           * The ID of the LicenseFee.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.license_fee';

          /**
           * Whether this LicenseFee is active. Inactive LicenseFees cannot be used in new activations or be modified.
           */
          active: boolean;

          /**
           * Timestamp of when the object was created.
           */
          created: string;

          /**
           * The currency of this LicenseFee.
           */
          currency: string;

          /**
           * A customer-facing name for the LicenseFee.
           * This name is used in Stripe-hosted products like the Customer Portal and Checkout. It does not show up on Invoices.
           * Maximum length of 250 characters.
           */
          display_name: string;

          /**
           * The ID of the LicenseFee's most recently created version.
           */
          latest_version: string;

          /**
           * The LicensedItem that this license fee binds to.
           */
          licensed_item: Stripe.V2.Billing.LicensedItem;

          /**
           * The ID of the version that will be used by all Subscriptions when no specific version is specified.
           */
          live_version: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * An internal key you can use to search for a particular LicenseFee. Maximum length of 200 characters.
           */
          lookup_key: string | null;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * The interval for assessing service.
           */
          service_interval: LicenseFee.ServiceInterval;

          /**
           * The length of the interval for assessing service. For example, set this to 3 and `service_interval` to `"month"` in
           * order to specify quarterly service.
           */
          service_interval_count: number;

          /**
           * The Stripe Tax tax behavior - whether the license fee is inclusive or exclusive of tax.
           */
          tax_behavior: LicenseFee.TaxBehavior;

          /**
           * Defines whether the tiering price should be graduated or volume-based. In volume-based tiering, the maximum
           * quantity within a period determines the per-unit price. In graduated tiering, the pricing changes as the quantity
           * grows into new tiers. Can only be set if `tiers` is set.
           */
          tiering_mode: LicenseFee.TieringMode | null;

          /**
           * Each element represents a pricing tier. Cannot be set if `unit_amount` is provided.
           */
          tiers: Array<LicenseFee.Tier>;

          /**
           * Apply a transformation to the reported usage or set quantity before computing the amount billed.
           */
          transform_quantity: LicenseFee.TransformQuantity | null;

          /**
           * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal
           * places. Cannot be set if `tiers` is provided.
           */
          unit_amount: string | null;
        }

        namespace LicenseFee {
          type ServiceInterval = 'day' | 'month' | 'week' | 'year';

          type TaxBehavior = 'exclusive' | 'inclusive';

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
