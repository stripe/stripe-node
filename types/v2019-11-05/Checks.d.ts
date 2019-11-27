declare namespace Stripe {
  /**
   * The Checks object.
   */
  interface Checks {
    /**
     * If a address line1 was provided, results of the check, one of 'pass', 'failed', 'unavailable' or 'unchecked'.
     */
    address_line1_check?: string | null;

    /**
     * If a address postal code was provided, results of the check, one of 'pass', 'failed', 'unavailable' or 'unchecked'.
     */
    address_postal_code_check?: string | null;

    /**
     * If a CVC was provided, results of the check, one of 'pass', 'failed', 'unavailable' or 'unchecked'.
     */
    cvc_check?: string | null;
  }
}