declare namespace Stripe {
  /**
   * The Requirements object.
   */
  interface Requirements {
    /**
     * Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
     */
    currently_due?: Array<string>;

    /**
     * Fields that need to be collected assuming all volume thresholds are reached. As fields are needed, they are moved to `currently_due` and the account's `current_deadline` is set.
     */
    eventually_due?: Array<string>;

    /**
     * Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable payouts for the person's account.
     */
    past_due?: Array<string>;

    /**
     * Fields that may become required depending on the results of verification or review. An empty array unless an asynchronous verification is pending. If verification fails, the fields in this array become required and move to `currently_due` or `past_due`.
     */
    pending_verification?: Array<string>;
  }
}