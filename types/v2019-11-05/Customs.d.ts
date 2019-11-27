declare namespace Stripe {
  /**
   * The Custom object.
   */
  interface Custom {
    /**
     * The description of the line item.
     */
    description?: string | null;

    /**
     * The images of the line item.
     */
    images?: Array<string> | null;

    /**
     * The name of the line item.
     */
    name?: string;
  }
}