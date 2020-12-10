// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The OrderItem object.
     */
    interface OrderItem {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'order_item';

      /**
       * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the line item.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Description of the line item, meant to be displayable to the user (e.g., `"Express shipping"`).
       */
      description: string;

      /**
       * The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU).
       */
      parent: string | Stripe.Sku | null;

      /**
       * A positive integer representing the number of instances of `parent` that are included in this order item. Applicable/present only if `type` is `sku`.
       */
      quantity: number | null;

      /**
       * The type of line item. One of `sku`, `tax`, `shipping`, or `discount`.
       */
      type: string;
    }
  }
}
