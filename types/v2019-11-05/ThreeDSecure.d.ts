declare namespace Stripe {
  /**
   * The ThreeDSecure object.
   */
  interface ThreeDSecure {
    /**
     * Whether or not authentication was performed. 3D Secure will succeed without authentication when the card is not enrolled.
     */
    authenticated?: boolean;

    /**
     * Whether or not 3D Secure succeeded.
     */
    succeeded?: boolean;

    /**
     * The version of 3D Secure that was used for this payment.
     */
    version?: string;
  }
}