declare namespace Stripe {
  /**
   * The FraudDetails object.
   */
  interface FraudDetails {
    /**
     * Assessments from Stripe. If set, the value is `fraudulent`.
     */
    stripe_report?: string;

    /**
     * Assessments reported by you. If set, possible values of are `safe` and `fraudulent`.
     */
    user_report?: string;
  }
}