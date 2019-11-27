declare namespace Stripe {
  /**
   * The OrderItem object.
   */
  interface OrderItem {
    /**
     * The amount (price) for this order item.
     */
    amount?: number | null;

    /**
     * This currency of this order item. Required when `amount` is present.
     */
    currency?: string | null;

    /**
     * Human-readable description for this order item.
     */
    description?: string | null;

    /**
     * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
     */
    quantity?: number;

    /**
     * The type of this order item. Must be `sku`, `tax`, or `shipping`.
     */
    type?: string | null;
  }
}