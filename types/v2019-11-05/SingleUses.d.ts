declare namespace Stripe {
  /**
   * The SingleUse object.
   */
  interface SingleUse {
    /**
     * On a single use mandate, the amount of the payment.
     */
    amount?: number;

    /**
     * On a single use mandate, the currency of the payment.
     */
    currency?: string;
  }
}