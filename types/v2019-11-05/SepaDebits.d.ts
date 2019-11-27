declare namespace Stripe {
  /**
   * The SepaDebit object.
   */
  interface SepaDebit {
    bank_code?: string | null;

    branch_code?: string | null;

    country?: string | null;

    fingerprint?: string | null;

    last4?: string | null;

    mandate_reference?: string | null;

    mandate_url?: string | null;
  }
}