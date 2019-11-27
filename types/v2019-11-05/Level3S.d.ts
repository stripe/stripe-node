declare namespace Stripe {
  /**
   * The Level3 object.
   */
  interface Level3 {
    customer_reference?: string;

    line_items?: Array<LineItem>;

    merchant_reference?: string;

    shipping_address_zip?: string;

    shipping_amount?: number;

    shipping_from_zip?: string;
  }
}