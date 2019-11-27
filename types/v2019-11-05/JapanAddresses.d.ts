declare namespace Stripe {
  /**
   * The JapanAddress object.
   */
  interface JapanAddress {
    /**
     * City/Ward.
     */
    city?: string | null;

    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country?: string | null;

    /**
     * Block/Building number.
     */
    line1?: string | null;

    /**
     * Building details.
     */
    line2?: string | null;

    /**
     * Zip/Postal Code.
     */
    postal_code?: string | null;

    /**
     * Prefecture.
     */
    state?: string | null;

    /**
     * Town/cho-me.
     */
    town?: string | null;
  }
}