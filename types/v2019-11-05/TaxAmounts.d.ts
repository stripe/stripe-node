declare namespace Stripe {
  /**
   * The TaxAmount object.
   */
  interface TaxAmount {
    /**
     * The amount, in %s, of the tax.
     */
    amount?: number;

    /**
     * Whether this tax amount is inclusive or exclusive.
     */
    inclusive?: boolean;

    /**
     * The tax rate that was applied to get this tax amount.
     */
    tax_rate?: string | TaxRate;
  }
}