declare namespace Stripe {
  /**
   * The Individual object.
   */
  interface Individual {
    /**
     * The date of birth of this cardholder.
     */
    dob?: DateOfBirth | null;

    /**
     * The first name of this cardholder.
     */
    first_name?: string;

    /**
     * The last name of this cardholder.
     */
    last_name?: string;

    /**
     * Government-issued ID document for this cardholder.
     */
    verification?: Verification | null;
  }
}