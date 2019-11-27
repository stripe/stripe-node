declare namespace Stripe {
  /**
   * The LineItem object.
   */
  interface LineItem {
    discount_amount?: number | null;

    product_code?: string;

    product_description?: string;

    quantity?: number | null;

    tax_amount?: number | null;

    unit_cost?: number | null;
  }
}