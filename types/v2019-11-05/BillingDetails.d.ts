declare namespace Stripe {
  /**
   * The BillingDetails object.
   */
  interface BillingDetails {
    /**
     * Billing address.
     */
    address?: Address | null;

    /**
     * Email address.
     */
    email?: string | null;

    /**
     * Full name.
     */
    name?: string | null;

    /**
     * Billing phone number (including extension).
     */
    phone?: string | null;
  }
}