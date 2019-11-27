declare namespace Stripe {
  /**
   * The PayoutSchedule object.
   */
  interface PayoutSchedule {
    /**
     * The number of days charges for the account will be held before being paid out.
     */
    delay_days?: number;

    /**
     * How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`.
     */
    interval?: string;

    /**
     * The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
     */
    monthly_anchor?: number;

    /**
     * The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly.
     */
    weekly_anchor?: string;
  }
}