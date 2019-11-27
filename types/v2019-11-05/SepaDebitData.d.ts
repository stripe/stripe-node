declare namespace Stripe {
  /**
   * The SepaDebitData object.
   */
  interface SepaDebitData {
    /**
     * SEPA creditor ID.
     */
    creditor_identifier?: string;

    /**
     * Last 4 digits of the account number associated with the debit.
     */
    last4?: string;

    /**
     * Mandate reference associated with the debit.
     */
    mandate_reference?: string;
  }
}