declare namespace Stripe {
  /**
   * The VisaCheckout object.
   */
  interface VisaCheckout {
    /**
     * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    billing_address?: Address | null;

    /**
     * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    email?: string | null;

    /**
     * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    name?: string | null;

    /**
     * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    shipping_address?: Address | null;
  }
}