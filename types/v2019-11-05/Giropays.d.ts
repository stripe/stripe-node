declare namespace Stripe {
  /**
   * The Giropay object.
   */
  interface Giropay {
    bank_code?: string | null;

    bank_name?: string | null;

    bic?: string | null;

    statement_descriptor?: string | null;
  }
}