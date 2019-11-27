declare namespace Stripe {
  /**
   * The Details object.
   */
  interface Details {
    /**
     * Additional fields which are only required for some users.
     */
    additional?: Array<string>;

    /**
     * Fields which every account must eventually provide.
     */
    minimum?: Array<string>;
  }
}