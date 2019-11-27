declare namespace Stripe {
  /**
   * The CodeVerificationFlow object.
   */
  interface CodeVerificationFlow {
    /**
     * The number of attempts remaining to authenticate the source object with a verification code.
     */
    attempts_remaining?: number;

    /**
     * The status of the code verification, either `pending` (awaiting verification, `attempts_remaining` should be greater than 0), `succeeded` (successful verification) or `failed` (failed verification, cannot be verified anymore as `attempts_remaining` should be 0).
     */
    status?: string;
  }
}