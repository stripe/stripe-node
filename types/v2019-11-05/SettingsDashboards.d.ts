declare namespace Stripe {
  /**
   * The SettingsDashboard object.
   */
  interface SettingsDashboard {
    /**
     * The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts.
     */
    display_name?: string | null;

    /**
     * The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones).
     */
    timezone?: string | null;
  }
}