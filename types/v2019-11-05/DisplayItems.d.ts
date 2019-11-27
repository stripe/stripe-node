declare namespace Stripe {
  /**
   * The DisplayItem object.
   */
  interface DisplayItem {
    /**
     * Amount for the display item.
     */
    amount?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    custom?: Custom;

    plan?: Plan;

    /**
     * Quantity of the display item being purchased.
     */
    quantity?: number;

    sku?: Sku;

    /**
     * The type of display item. One of `custom`, `plan` or `sku`
     */
    type?: string;
  }
}