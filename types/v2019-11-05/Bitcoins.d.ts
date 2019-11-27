declare namespace Stripe {
  /**
   * The Bitcoin object.
   */
  interface Bitcoin {
    address?: string | null;

    amount?: number | null;

    amount_charged?: number | null;

    amount_received?: number | null;

    amount_returned?: number | null;

    refund_address?: string | null;
  }
}