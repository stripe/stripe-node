// File generated from our OpenAPI spec

import {RequestOptions} from '../../../lib.js';
export interface CadenceSpendModifier {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.cadence_spend_modifier';

  /**
   * The ID of the Billing Cadence this spend modifier is associated with.
   */
  billing_cadence: string;

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Max invoice spend details. Present if type is `max_billing_period_spend`.
   */
  max_billing_period_spend?: V2.Billing.CadenceSpendModifier.MaxBillingPeriodSpend;

  /**
   * The type of the spend modifier.
   */
  type: 'max_billing_period_spend';
}
export namespace V2 {
  export namespace Billing {
    export namespace CadenceSpendModifier {
      export interface MaxBillingPeriodSpend {
        /**
         * The billing alert associated with the maximum spend threshold.
         */
        alert: string;

        /**
         * The maximum amount of invoice spend.
         */
        amount: MaxBillingPeriodSpend.Amount;

        /**
         * The configuration for the overage rate for the custom pricing unit.
         */
        custom_pricing_unit_overage_rate: MaxBillingPeriodSpend.CustomPricingUnitOverageRate;

        /**
         * The timestamp from which this spend modifier is effective.
         */
        effective_from: string;

        /**
         * The timestamp until which this spend modifier is effective. If not set, the modifier is effective indefinitely.
         */
        effective_until?: string;
      }

      export namespace MaxBillingPeriodSpend {
        export interface Amount {
          /**
           * The custom pricing unit amount. Present if type is `custom_pricing_unit`.
           */
          custom_pricing_unit?: Amount.CustomPricingUnit;

          /**
           * The type of the spend modifier amount.
           */
          type: 'custom_pricing_unit';
        }

        export interface CustomPricingUnitOverageRate {
          /**
           * ID of the custom pricing unit overage rate.
           */
          id: string;
        }

        export namespace Amount {
          export interface CustomPricingUnit {
            /**
             * The id of the custom pricing unit.
             */
            id?: string;

            /**
             * The decimal value of custom pricing units, represented as a string.
             */
            value: string;
          }
        }
      }
    }
  }
}
