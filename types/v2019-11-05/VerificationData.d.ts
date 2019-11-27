declare namespace Stripe {
  /**
   * The VerificationData object.
   */
  interface VerificationData {
    /**
     * One of `match`, `mismatch`, or `not_provided`.
     */
    address_line1_check?: string;

    /**
     * One of `match`, `mismatch`, or `not_provided`.
     */
    address_zip_check?: string;

    /**
     * One of `exempt`, `failure`, `none`, or `success`.
     */
    authentication?: string;

    /**
     * One of `match`, `mismatch`, or `not_provided`.
     */
    cvc_check?: string;
  }
}