declare namespace Stripe {
  /**
   * The Address object.
   */
  interface Address {
    /**
     * City/District/Suburb/Town/Village.
     */
    city: string | null;

    /**
     * 2-letter country code.
     */
    country: string | null;

    /**
     * Address line 1 (Street address/PO Box/Company name).
     */
    line1: string | null;

    /**
     * Address line 2 (Apartment/Suite/Unit/Building).
     */
    line2: string | null;

    /**
     * ZIP or postal code.
     */
    postal_code: string | null;

    /**
     * State/County/Province/Region.
     */
    state: string | null;
  }
}
