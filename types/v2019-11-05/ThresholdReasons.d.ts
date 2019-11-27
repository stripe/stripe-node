declare namespace Stripe {
  /**
   * The ThresholdReason object.
   */
  interface ThresholdReason {
    /**
     * The total invoice amount threshold boundary if it triggered the threshold invoice.
     */
    amount_gte?: number | null;

    /**
     * Indicates which line items triggered a threshold invoice.
     */
    item_reasons?: Array<ThresholdItemReason>;
  }
}