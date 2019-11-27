declare namespace Stripe {
  /**
   * The Location object.
   */
  interface Location {
    /**
     * The city where the payment originated.
     */
    city?: string | null;

    /**
     * Two-letter ISO code representing the country where the payment originated.
     */
    country?: string | null;

    /**
     * The geographic latitude where the payment originated.
     */
    latitude?: number | null;

    /**
     * The geographic longitude where the payment originated.
     */
    longitude?: number | null;

    /**
     * The state/county/province/region where the payment originated.
     */
    region?: string | null;
  }
}