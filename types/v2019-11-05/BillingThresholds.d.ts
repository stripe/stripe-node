declare namespace Stripe {
  /**
   * The BillingThresholds object.
   */
  interface BillingThresholds {
    /**
     * Usage threshold that triggers the subscription to create an invoice
     */
    usage_gte?: number | null;
  }
}