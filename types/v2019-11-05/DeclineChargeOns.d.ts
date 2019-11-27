declare namespace Stripe {
  /**
   * The DeclineChargeOn object.
   */
  interface DeclineChargeOn {
    /**
     * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
     */
    avs_failure?: boolean;

    /**
     * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
     */
    cvc_failure?: boolean;
  }
}