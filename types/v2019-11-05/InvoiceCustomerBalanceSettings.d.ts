declare namespace Stripe {
  /**
   * The InvoiceCustomerBalanceSettings object.
   */
  interface InvoiceCustomerBalanceSettings {
    /**
     * Controls whether a customer balance applied to this invoice should be consumed and not credited or debited back to the customer if voided.
     */
    consume_applied_balance_on_void?: boolean;
  }
}