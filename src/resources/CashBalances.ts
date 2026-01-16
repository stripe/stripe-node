// File generated from our OpenAPI spec

import {RequestOptions} from '../lib.js';
export interface CashBalance {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'cash_balance';

  /**
   * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
   */
  available: {
    [key: string]: number;
  } | null;

  /**
   * The ID of the customer whose cash balance this object represents.
   */
  customer: string;

  /**
   * The ID of an Account representing a customer whose cash balance this object represents.
   */
  customer_account: string | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  settings: CashBalance.Settings;
}
export namespace CashBalance {
  export interface Settings {
    /**
     * The configuration for how funds that land in the customer cash balance are reconciled.
     */
    reconciliation_mode: Settings.ReconciliationMode;

    /**
     * A flag to indicate if reconciliation mode returned is the user's default or is specific to this customer cash balance
     */
    using_merchant_default: boolean;
  }

  export namespace Settings {
    export type ReconciliationMode = 'automatic' | 'manual';
  }
}
