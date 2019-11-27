declare namespace Stripe {
  /**
   * The Evidence object.
   */
  interface Evidence {
    /**
     * Evidence to support a fraudulent dispute. This will only be present if your dispute's `reason` is `fraudulent`.
     */
    fraudulent?: EvidenceFraudulent | null;

    /**
     * Evidence to support an uncategorized dispute. This will only be present if your dispute's `reason` is `other`.
     */
    other?: EvidenceOther | null;
  }
}