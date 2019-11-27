declare namespace Stripe {
  /**
   * The Verification object.
   */
  interface Verification {
    /**
     * Verification status, one of `pending`, `unavailable`, `unverified`, or `verified`.
     */
    status?: Verification.Status;

    /**
     * Verified address.
     */
    verified_address?: string | null;

    /**
     * Verified name.
     */
    verified_name?: string | null;
  }

  namespace Verification {
    type Status = 'pending' | 'unavailable' | 'unverified' | 'verified'
  }
}