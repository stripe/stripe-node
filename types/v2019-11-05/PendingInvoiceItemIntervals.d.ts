declare namespace Stripe {
  /**
   * The PendingInvoiceItemInterval object.
   */
  interface PendingInvoiceItemInterval {
    /**
     * Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
     */
    interval?: PendingInvoiceItemInterval.Interval;

    /**
     * The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
     */
    interval_count?: number;
  }

  namespace PendingInvoiceItemInterval {
    type Interval = 'day' | 'month' | 'week' | 'year'
  }
}