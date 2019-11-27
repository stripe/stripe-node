declare namespace Stripe {
  /**
   * The Ideal object.
   */
  interface Ideal {
    bank?: string | null;

    bic?: string | null;

    iban_last4?: string | null;

    statement_descriptor?: string | null;
  }
}