declare namespace Stripe {
  /**
   * The Multibanco object.
   */
  interface Multibanco {
    entity?: string | null;

    reference?: string | null;

    refund_account_holder_address_city?: string | null;

    refund_account_holder_address_country?: string | null;

    refund_account_holder_address_line1?: string | null;

    refund_account_holder_address_line2?: string | null;

    refund_account_holder_address_postal_code?: string | null;

    refund_account_holder_address_state?: string | null;

    refund_account_holder_name?: string | null;

    refund_iban?: string | null;
  }
}