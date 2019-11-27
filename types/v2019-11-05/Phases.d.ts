declare namespace Stripe {
  /**
   * The Phase object.
   */
  interface Phase {
    /**
     * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account during this phase of the schedule.
     */
    application_fee_percent?: number | null;

    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
     */
    billing_thresholds?: BillingThresholds | null;

    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions.
     */
    collection_method?: Phase.CollectionMethod | null;

    /**
     * ID of the coupon to use during this phase of the subscription schedule.
     */
    coupon?: string | Coupon | null;

    /**
     * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
     */
    default_payment_method?: string | PaymentMethod | null;

    default_tax_rates?: Array<TaxRate> | null;

    /**
     * The end of this phase of the subscription schedule.
     */
    end_date?: number;

    /**
     * The subscription schedule's default invoice settings.
     */
    invoice_settings?: InvoiceSettings | null;

    /**
     * Plans to subscribe during this phase of the subscription schedule.
     */
    plans?: Array<PhaseItem>;

    /**
     * The start of this phase of the subscription schedule.
     */
    start_date?: number;

    /**
     * If provided, each invoice created during this phase of the subscription schedule will apply the tax rate, increasing the amount billed to the customer.
     */
    tax_percent?: number | null;

    /**
     * When the trial ends within the phase.
     */
    trial_end?: number | null;
  }

  namespace Phase {
    type CollectionMethod = 'charge_automatically' | 'send_invoice'
  }
}