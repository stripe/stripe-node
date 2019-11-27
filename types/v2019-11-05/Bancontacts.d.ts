declare namespace Stripe {
  /**
   * The Bancontact object.
   */
  interface Bancontact {
    bank_code?: string | null;

    bank_name?: string | null;

    bic?: string | null;

    iban_last4?: string | null;

    preferred_language?: string | null;

    statement_descriptor?: string | null;
  }
}