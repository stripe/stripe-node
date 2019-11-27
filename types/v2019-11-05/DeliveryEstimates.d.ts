declare namespace Stripe {
  /**
   * The DeliveryEstimate object.
   */
  interface DeliveryEstimate {
    /**
     * If `type` is `"exact"`, `date` will be the expected delivery date in the format YYYY-MM-DD.
     */
    date?: string;

    /**
     * If `type` is `"range"`, `earliest` will be be the earliest delivery date in the format YYYY-MM-DD.
     */
    earliest?: string;

    /**
     * If `type` is `"range"`, `latest` will be the latest delivery date in the format YYYY-MM-DD.
     */
    latest?: string;

    /**
     * The type of estimate. Must be either `"range"` or `"exact"`.
     */
    type?: string;
  }
}