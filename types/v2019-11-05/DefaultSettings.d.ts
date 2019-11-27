declare namespace Stripe {
  /**
   * The DefaultSettings object.
   */
  interface DefaultSettings {
    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
     */
    billing_thresholds?: BillingThresholds | null;

    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions.
     */
    collection_method?: DefaultSettings.CollectionMethod | null;

    /**
     * ID of the default payment method for the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
     */
    default_payment_method?: string | PaymentMethod | null;

    /**
     * The subscription schedule's default invoice settings.
     */
    invoice_settings?: InvoiceSettings | null;
  }

  namespace DefaultSettings {
    type CollectionMethod = 'charge_automatically' | 'send_invoice'
  }
}