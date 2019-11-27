declare namespace Stripe {
  /**
   * The Wechat object.
   */
  interface Wechat {
    prepay_id?: string;

    qr_code_url?: string | null;

    statement_descriptor?: string;
  }
}