declare namespace Stripe {
  /**
   * The Tier object.
   */
  interface Tier {
    /**
     * Price for the entire tier.
     */
    flat_amount?: number | null;

    /**
     * Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
     */
    flat_amount_decimal?: string | null;

    /**
     * Per unit price for units relevant to the tier.
     */
    unit_amount?: number | null;

    /**
     * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
     */
    unit_amount_decimal?: string | null;

    /**
     * Up to and including to this quantity will be contained in the tier.
     */
    up_to?: number | null;
  }
}