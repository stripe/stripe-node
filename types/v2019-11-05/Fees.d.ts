declare namespace Stripe {
  /**
   * The Fee object.
   */
  interface Fee {
    /**
     * Amount of the fee, in cents.
     */
    amount?: number;

    application?: string | null;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;

    /**
     * Type of the fee, one of: `application_fee`, `stripe_fee` or `tax`.
     */
    type?: string;
  }
}