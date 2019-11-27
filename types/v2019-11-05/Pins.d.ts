declare namespace Stripe {
  /**
   * The Pin object.
   */
  interface Pin {
    /**
     * The status of the pin. One of `blocked` or `active`.
     */
    status?: string;
  }
}