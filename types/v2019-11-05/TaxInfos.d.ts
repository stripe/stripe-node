declare namespace Stripe {
  /**
   * The TaxInfo object.
   */
  interface TaxInfo {
    /**
     * The customer's tax ID number.
     */
    tax_id?: string | null;

    /**
     * The type of ID number.
     */
    type?: string;
  }
}