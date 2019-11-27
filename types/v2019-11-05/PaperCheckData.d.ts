declare namespace Stripe {
  /**
   * The PaperCheckData object.
   */
  interface PaperCheckData {
    /**
     * String unix time for the available date.
     */
    available_at?: string;

    /**
     * Invoice ID associated with the paper check.
     */
    invoices?: string;
  }
}