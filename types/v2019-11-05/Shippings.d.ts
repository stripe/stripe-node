declare namespace Stripe {
  /**
   * The Shipping object.
   */
  interface Shipping {
    address?: Address;

    /**
     * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
     */
    carrier?: string | null;

    /**
     * A unix timestamp representing a best estimate of when the card will be delivered.
     */
    eta?: number | null;

    /**
     * Recipient name.
     */
    name?: string;

    /**
     * Deprecated field. It always return null and will be removed in the next client library major version
     */
    phone?: string | null;

    /**
     * The delivery status of the card. One of `pending`, `shipped`, `delivered`, `returned`, `failure`, or `canceled`.
     */
    status?: string | null;

    /**
     * A tracking number for a card shipment.
     */
    tracking_number?: string | null;

    /**
     * A link to the shipping carrier's site where you can view detailed information about a card shipment.
     */
    tracking_url?: string | null;

    /**
     * One of `bulk` or `individual`. Bulk shipments will be grouped and mailed together, while individual ones will not.
     */
    type?: string;
  }
}