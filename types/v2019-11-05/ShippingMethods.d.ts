declare namespace Stripe {
  /**
   * The ShippingMethod object.
   */
  interface ShippingMethod {
    /**
     * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the line item.
     */
    amount?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * The estimated delivery date for the given shipping method. Can be either a specific date or a range.
     */
    delivery_estimate?: DeliveryEstimate | null;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Unique identifier for the object.
     */
    id?: string;
  }
}