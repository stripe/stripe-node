// File generated from our OpenAPI spec

import {OtherString} from '../../../shared.js';
export interface GroupSpendModifier {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.group_spend_modifier';

  /**
   * The ID of the billing group this spend modifier is associated with.
   */
  billing_group: string;

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
  max_billing_period_spend?: GroupSpendModifier.MaxBillingPeriodSpend;

  /**
   * The type of the spend modifier.
   */
  type: GroupSpendModifier.Type;
}
export namespace GroupSpendModifier {
  export interface MaxBillingPeriodSpend {
    /**
     * The billing alert associated with the maximum spend threshold.
     */
    alert: string;

    /**
     * The maximum invoice spend, measured in custom pricing units.
     */
    amount: MaxBillingPeriodSpend.Amount;

    /**
     * The timestamp from which this spend modifier is effective.
     */
    effective_from: string;

    /**
     * The timestamp until which this spend modifier is effective. If not set, the modifier is effective indefinitely.
     */
    effective_until?: string;
  }

  export type Type = 'max_billing_period_spend' | OtherString;

  export namespace MaxBillingPeriodSpend {
    export interface Amount {
      /**
       * The custom pricing unit amount. Present if type is `custom_pricing_unit`.
       */
      custom_pricing_unit?: Amount.CustomPricingUnit;

      /**
       * The type of the spend modifier amount.
       */
      type: Amount.Type;
    }

    export namespace Amount {
      export interface CustomPricingUnit {
        /**
         * The ID of the custom pricing unit.
         */
        id: string;

        /**
         * The decimal value of custom pricing units, represented as a string.
         */
        value: string;
      }

      export type Type = 'custom_pricing_unit' | OtherString;
    }
  }
}
