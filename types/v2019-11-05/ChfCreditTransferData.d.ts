declare namespace Stripe {
  /**
   * The ChfCreditTransferData object.
   */
  interface ChfCreditTransferData {
    /**
     * Reference associated with the transfer.
     */
    reference?: string;

    /**
     * Sender's country address.
     */
    sender_address_country?: string;

    /**
     * Sender's line 1 address.
     */
    sender_address_line1?: string;

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