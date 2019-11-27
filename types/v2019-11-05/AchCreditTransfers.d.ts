declare namespace Stripe {
  /**
   * The AchCreditTransfer object.
   */
  interface AchCreditTransfer {
    account_number?: string | null;

    bank_name?: string | null;

    fingerprint?: string | null;

    refund_account_holder_name?: string | null;

    refund_account_holder_type?: string | null;

    refund_routing_number?: string | null;

    routing_number?: string | null;

    swift_code?: string | null;
  }
}