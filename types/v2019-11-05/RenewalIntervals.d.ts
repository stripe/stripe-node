declare namespace Stripe {
  /**
   * The RenewalInterval object.
   */
  interface RenewalInterval {
    /**
     * Interval at which to renew the subscription schedule for when it ends.
     */
    interval?: RenewalInterval.Interval;

    /**
     * Number of intervals to renew the subscription schedule for when it ends.
     */
    length?: number;
  }

  namespace RenewalInterval {
    type Interval = 'day' | 'month' | 'week' | 'year'
  }
}