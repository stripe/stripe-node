// File generated from our OpenAPI spec

import {RequestOptions} from '../lib.js';
export interface PaymentMethodBalance {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'payment_method_balance';

  /**
   * The time at which the balance was calculated. Measured in seconds since the Unix epoch.
   */
  as_of: number;

  /**
   * BalanceEntry contain information about every individual balance type of a card.
   */
  balance: PaymentMethodBalance.Balance;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
}
export namespace PaymentMethodBalance {
  export interface Balance {
    /**
     * The available FR Meal Voucher balances.
     */
    fr_meal_voucher: Balance.FrMealVoucher | null;
  }

  export namespace Balance {
    export interface FrMealVoucher {
      /**
       * The hashes of balances and amounts for available balances.
       */
      available: Array<FrMealVoucher.Available> | null;
    }

    export namespace FrMealVoucher {
      export interface Available {
        /**
         * The amount of the balance.
         */
        amount: number;

        /**
         * The currency of the balance.
         */
        currency: string;
      }
    }
  }
}
