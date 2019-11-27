declare namespace Stripe {
  /**
   * The AchCreditTransferData object.
   */
  interface AchCreditTransferData {
    /**
     * Customer data associated with the transfer.
     */
    customer_data?: string;

    /**
     * Bank account fingerprint associated with the transfer.
     */
    fingerprint?: string;

    /**
     * Last 4 digits of the account number associated with the transfer.
     */
    last4?: string;

    /**
     * Routing number associated with the transfer.
     */
    routing_number?: string;
  }
}