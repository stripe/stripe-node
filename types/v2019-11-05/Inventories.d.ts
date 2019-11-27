declare namespace Stripe {
  /**
   * The Inventory object.
   */
  interface Inventory {
    /**
     * The count of inventory available. Will be present if and only if `type` is `finite`.
     */
    quantity?: number | null;

    /**
     * Inventory type. Possible values are `finite`, `bucket` (not quantified), and `infinite`.
     */
    type?: string;

    /**
     * An indicator of the inventory available. Possible values are `in_stock`, `limited`, and `out_of_stock`. Will be present if and only if `type` is `bucket`.
     */
    value?: string | null;
  }
}