// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Tax {
        /**
         * A ManualRule holds tax rates for a BillableItem. It can hold at most 5 distinct tax rates.
         */
        interface ManualRule {
          /**
           * The ID of the ManualRule object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.tax.manual_rule';

          /**
           * The time at which the ManualRule object was created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Location where the rule applies.
           */
          location?: ManualRule.Location;

          /**
           * Products associated with the rule.
           */
          products: Array<ManualRule.Product>;

          /**
           * Tax rates to be applied.
           */
          scheduled_tax_rates: Array<ManualRule.ScheduledTaxRate>;

          /**
           * The status of the ManualRule object.
           */
          status: ManualRule.Status;
        }

        namespace ManualRule {
          interface Location {
            /**
             * Country ISO-3166.
             */
            country: string;

            /**
             * State ISO-3166.
             */
            state?: string;
          }

          interface Product {
            /**
             * The type of the product.
             */
            type: Product.Type;

            /**
             * The licensed item identifier.
             */
            licensed_item?: string;

            /**
             * The metered item identifier.
             */
            metered_item?: string;

            /**
             * The tax code for the product.
             */
            tax_code?: string;
          }

          namespace Product {
            type Type = 'licensed_item' | 'metered_item' | 'tax_code';
          }

          interface ScheduledTaxRate {
            /**
             * The tax rates to be applied.
             */
            rates: Array<ScheduledTaxRate.Rate>;

            /**
             * The start time for the tax rate.
             */
            starts_at?: string;
          }

          namespace ScheduledTaxRate {
            interface Rate {
              /**
               * Country of the tax rate.
               */
              country?: string;

              /**
               * Description of the tax rate.
               */
              description?: string;

              /**
               * Display name of the tax rate as it will be shown on the invoice.
               */
              display_name: string;

              /**
               * Jurisdiction of the tax rate should apply as it will be shown on the invoice.
               */
              jurisdiction?: string;

              /**
               * Percentage of the tax rate. Must be positive and maximum of 4 decimal points.
               */
              percentage: string;

              /**
               * State of the tax rate.
               */
              state?: string;
            }
          }

          type Status = 'active' | 'inactive';
        }
      }
    }
  }
}
