declare namespace Stripe {
  /**
   * The SepaCreditTransferData object.
   */
  interface SepaCreditTransferData {
    /**
     * Reference associated with the transfer.
     */
    reference?: string;

    /**
     * Sender's bank account IBAN.
     */
    sender_iban?: string;

    /**
     * Sender's name.
     */
    sender_name?: string;
  }
}