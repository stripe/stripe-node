declare namespace Stripe {
  /**
   * The Klarna object.
   */
  interface Klarna {
    background_image_url?: string;

    client_token?: string | null;

    first_name?: string;

    last_name?: string;

    locale?: string;

    logo_url?: string;

    page_title?: string;

    pay_later_asset_urls_descriptive?: string;

    pay_later_asset_urls_standard?: string;

    pay_later_name?: string;

    pay_later_redirect_url?: string;

    pay_now_asset_urls_descriptive?: string;

    pay_now_asset_urls_standard?: string;

    pay_now_name?: string;

    pay_now_redirect_url?: string;

    pay_over_time_asset_urls_descriptive?: string;

    pay_over_time_asset_urls_standard?: string;

    pay_over_time_name?: string;

    pay_over_time_redirect_url?: string;

    payment_method_categories?: string;

    purchase_country?: string;

    purchase_type?: string;

    redirect_url?: string;

    shipping_first_name?: string;

    shipping_last_name?: string;
  }
}