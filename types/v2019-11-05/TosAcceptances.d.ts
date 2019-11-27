declare namespace Stripe {
  /**
   * The TosAcceptance object.
   */
  interface TosAcceptance {
    /**
     * The Unix timestamp marking when the Stripe Services Agreement was accepted by the account representative
     */
    date?: number | null;

    /**
     * The IP address from which the Stripe Services Agreement was accepted by the account representative
     */
    ip?: string | null;

    /**
     * The user agent of the browser from which the Stripe Services Agreement was accepted by the account representative
     */
    user_agent?: string | null;
  }
}