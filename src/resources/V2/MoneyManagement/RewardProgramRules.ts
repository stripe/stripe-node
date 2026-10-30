// File generated from our OpenAPI spec

import {Decimal, OtherString} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface RewardProgramRule {
  /**
   * Unique identifier for the RewardProgramRule.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.reward_program_rule';

  /**
   * Conditions that must be true for this rule to match a card transaction. Empty means the rule matches
   * all transactions.
   */
  condition: RewardProgramRule.Condition;

  /**
   * Time at which the RewardProgramRule was created.
   */
  created: string;

  /**
   * Whether this object exists in livemode or testmode.
   */
  livemode: boolean;

  /**
   * Human-readable name for this rule. Max 250 characters.
   */
  name: string;

  /**
   * The reward to grant when this rule matches.
   */
  reward: RewardProgramRule.Reward;

  /**
   * The ID of the RewardProgram this rule belongs to. Immutable after creation.
   */
  reward_program: string;

  /**
   * The status of the RewardProgramRule. Inactive by default on creation; use activate/deactivate to
   * change.
   */
  status: RewardProgramRule.Status;
}
export namespace RewardProgramRule {
  export interface Condition {
    /**
     * Card-spend specific matching condition.
     */
    card_spend?: Condition.CardSpend;
  }

  export interface Reward {
    /**
     * Cashback reward configuration.
     */
    cashback: Reward.Cashback;
  }

  export type Status = 'active' | 'inactive' | OtherString;

  export namespace Condition {
    export interface CardSpend {
      /**
       * Merchant Category Code include/exclude configuration. Omitted means the rule matches all MCCs.
       */
      merchant_category_codes?: CardSpend.MerchantCategoryCodes;
    }

    export namespace CardSpend {
      export interface MerchantCategoryCodes {
        /**
         * Four-digit Merchant Category Codes to explicitly exclude. Takes precedence over `included`.
         */
        excluded: Array<string>;

        /**
         * Four-digit Merchant Category Codes to include. An empty list matches all MCCs.
         */
        included: Array<string>;
      }
    }
  }

  export namespace Reward {
    export interface Cashback {
      /**
       * Cashback rate as a percentage, represented as a decimal string. For example, `"2"` represents 2% and
       * `"1.5"` represents 1.5%. Must be greater than `"0"` and less than or equal to `"100"`.
       */
      rate: Decimal;
    }
  }
}
