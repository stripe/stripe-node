declare namespace Stripe {
  /**
   * The DateOfBirth object.
   */
  interface DateOfBirth {
    /**
     * The day of birth, between 1 and 31.
     */
    day?: number | null;

    /**
     * The month of birth, between 1 and 12.
     */
    month?: number | null;

    /**
     * The four-digit year of birth.
     */
    year?: number | null;
  }
}