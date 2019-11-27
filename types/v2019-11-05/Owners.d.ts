declare namespace Stripe {
  /**
   * The Owner object.
   */
  interface Owner {
    /**
     * Owner's address.
     */
    address?: Address | null;

    /**
     * Owner's email address.
     */
    email?: string | null;

    /**
     * Owner's full name.
     */
    name?: string | null;

    /**
     * Owner's phone number (including extension).
     */
    phone?: string | null;

    /**
     * Verified owner's address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    verified_address?: Address | null;

    /**
     * Verified owner's email address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    verified_email?: string | null;

    /**
     * Verified owner's full name. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    verified_name?: string | null;

    /**
     * Verified owner's phone number (including extension). Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    verified_phone?: string | null;
  }
}