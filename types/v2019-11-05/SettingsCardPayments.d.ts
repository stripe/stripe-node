declare namespace Stripe {
  /**
   * The SettingsCardPayments object.
   */
  interface SettingsCardPayments {
    decline_on?: DeclineChargeOn;

    /**
     * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
     */
    statement_descriptor_prefix?: string | null;
  }
}