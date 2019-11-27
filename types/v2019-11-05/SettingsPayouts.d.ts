declare namespace Stripe {
  /**
   * The SettingsPayouts object.
   */
  interface SettingsPayouts {
    /**
     * A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See our [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances) documentation for details. Default value is `true` for Express accounts and `false` for Custom accounts.
     */
    debit_negative_balances?: boolean;

    schedule?: PayoutSchedule;

    /**
     * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
     */
    statement_descriptor?: string | null;
  }
}