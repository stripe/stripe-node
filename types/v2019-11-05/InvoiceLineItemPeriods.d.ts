declare namespace Stripe {
  /**
   * The InvoiceLineItemPeriod object.
   */
  interface InvoiceLineItemPeriod {
    /**
     * End of the line item's billing period
     */
    end?: number;

    /**
     * Start of the line item's billing period
     */
    start?: number;
  }
}