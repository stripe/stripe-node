declare namespace Stripe {
  /**
   * The EvidenceOther object.
   */
  interface EvidenceOther {
    /**
     * Brief freeform text explaining why you are disputing this transaction.
     */
    dispute_explanation?: string;

    /**
     * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional file evidence supporting your dispute.
     */
    uncategorized_file?: string | File | null;
  }
}