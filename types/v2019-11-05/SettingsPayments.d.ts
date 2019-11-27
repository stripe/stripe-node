declare namespace Stripe {
  /**
   * The SettingsPayments object.
   */
  interface SettingsPayments {
    /**
     * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
     */
    statement_descriptor?: string | null;

    /**
     * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only)
     */
    statement_descriptor_kana?: string | null;

    /**
     * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only)
     */
    statement_descriptor_kanji?: string | null;
  }
}