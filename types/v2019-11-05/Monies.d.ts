declare namespace Stripe {
  /**
   * The Money object.
   */
  interface Money {
    /**
     * Balance amount.
     */
    amount?: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    source_types?: SourceTypes;
  }
}