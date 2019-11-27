declare namespace Stripe {
  /**
   * The Online object.
   */
  interface Online {
    /**
     * The IP address from which the Mandate was accepted by the customer.
     */
    ip_address?: string | null;

    /**
     * The user agent of the browser from which the Mandate was accepted by the customer.
     */
    user_agent?: string | null;
  }
}