declare namespace Stripe {
  /**
   * The EvidenceFraudulent object.
   */
  interface EvidenceFraudulent {
    /**
     * Brief freeform text explaining why you are disputing this transaction.
     */
    dispute_explanation?: string | null;

    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional file evidence supporting your dispute.
     */
    uncategorized_file?: string | File | null;
  }
}