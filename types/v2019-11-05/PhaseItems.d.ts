declare namespace Stripe {
  /**
   * The PhaseItem object.
   */
  interface PhaseItem {
    /**
     * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
     */
    billing_thresholds?: BillingThresholds | null;

    /**
     * ID of the plan to which the customer should be subscribed.
     */
    plan?: string | Plan;

    /**
     * Quantity of the plan to which the customer should be subscribed.
     */
    quantity?: number | null;

    /**
     * The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`.
     */
    tax_rates?: Array<TaxRate> | null;
  }
}