declare namespace Stripe {
  /**
   * The BacsDebitData object.
   */
  interface BacsDebitData {
    /**
     * Last 4 digits of the account number associated with the debit.
     */
    last4?: string;
  }
}