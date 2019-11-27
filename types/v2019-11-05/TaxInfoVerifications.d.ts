declare namespace Stripe {
  /**
   * The TaxInfoVerification object.
   */
  interface TaxInfoVerification {
    /**
     * The state of verification for this customer. Possible values are `unverified`, `pending`, or `verified`.
     */
    status?: string | null;

    /**
     * The official name associated with the tax ID returned from the external provider.
     */
    verified_name?: string | null;
  }
}