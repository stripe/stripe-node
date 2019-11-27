declare namespace Stripe {
  /**
   * The GbpCreditTransferData object.
   */
  interface GbpCreditTransferData {
    /**
     * Bank account fingerprint associated with the transfer.
     */
    fingerprint?: string;

    /**
     * Last 4 digits of account number associated with the transfer.
     */
    last4?: string;

    /**
     * Sender entered arbitrary information about the transfer.
     */
    reference?: string;

    /**
     * Sender name associated with the transfer.
     */
    sender_name?: string;

    /**
     * Sort code associated with the transfer.
     */
    sort_code?: string;
  }
}