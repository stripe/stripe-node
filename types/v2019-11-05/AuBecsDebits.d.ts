declare namespace Stripe {
  /**
   * The AuBecsDebit object.
   */
  interface AuBecsDebit {
    bsb_number?: string | null;

    fingerprint?: string | null;

    last4?: string | null;
  }
}