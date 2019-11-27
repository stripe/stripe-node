declare namespace Stripe {
  /**
   * The CustomerAcceptance object.
   */
  interface CustomerAcceptance {
    /**
     * The time at which the customer accepted the Mandate.
     */
    accepted_at?: number | null;

    offline?: Offline;

    online?: Online;

    /**
     * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
     */
    type?: CustomerAcceptance.Type;
  }

  namespace CustomerAcceptance {
    type Type = 'offline' | 'online'
  }
}