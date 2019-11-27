declare namespace Stripe {
  /**
   * The AchDebit object.
   */
  interface AchDebit {
    bank_name?: string | null;

    country?: string | null;

    fingerprint?: string | null;

    last4?: string | null;

    routing_number?: string | null;

    type?: string | null;
  }
}