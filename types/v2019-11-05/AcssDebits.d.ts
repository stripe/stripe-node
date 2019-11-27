declare namespace Stripe {
  /**
   * The AcssDebit object.
   */
  interface AcssDebit {
    bank_address_city?: string | null;

    bank_address_line_1?: string | null;

    bank_address_line_2?: string | null;

    bank_address_postal_code?: string | null;

    bank_name?: string | null;

    category?: string | null;

    country?: string | null;

    fingerprint?: string | null;

    last4?: string | null;

    routing_number?: string | null;
  }
}