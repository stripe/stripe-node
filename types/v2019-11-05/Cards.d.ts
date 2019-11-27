declare namespace Stripe {
  /**
   * The Card object.
   */
  interface Card {
    address_line1_check?: string | null;

    address_zip_check?: string | null;

    brand?: string | null;

    country?: string | null;

    cvc_check?: string | null;

    description?: string;

    dynamic_last4?: string | null;

    exp_month?: number | null;

    exp_year?: number | null;

    fingerprint?: string;

    funding?: string | null;

    iin?: string;

    issuer?: string;

    last4?: string | null;

    name?: string | null;

    three_d_secure?: string;

    tokenization_method?: string | null;
  }
}