declare namespace Stripe {
  /**
   * The Sofort object.
   */
  interface Sofort {
    bank_code?: string | null;

    bank_name?: string | null;

    bic?: string | null;

    country?: string | null;

    iban_last4?: string | null;

    preferred_language?: string | null;

    statement_descriptor?: string | null;
  }
}