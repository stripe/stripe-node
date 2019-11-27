declare namespace Stripe {
  /**
   * The Installments object.
   */
  interface Installments {
    /**
     * Installment plans that may be selected for this PaymentIntent.
     */
    available_plans?: Array<Plan> | null;

    /**
     * Whether Installments are enabled for this PaymentIntent.
     */
    enabled?: boolean;

    /**
     * Installment plan selected for this PaymentIntent.
     */
    plan?: Plan | null;
  }
}