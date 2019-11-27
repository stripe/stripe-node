declare namespace Stripe {
  /**
   * The ThresholdItemReason object.
   */
  interface ThresholdItemReason {
    /**
     * The IDs of the line items that triggered the threshold invoice.
     */
    line_item_ids?: Array<string>;

    /**
     * The quantity threshold boundary that applied to the given line item.
     */
    usage_gte?: number;
  }
}