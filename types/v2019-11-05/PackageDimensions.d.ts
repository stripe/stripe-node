declare namespace Stripe {
  /**
   * The PackageDimensions object.
   */
  interface PackageDimensions {
    /**
     * Height, in inches.
     */
    height?: number;

    /**
     * Length, in inches.
     */
    length?: number;

    /**
     * Weight, in ounces.
     */
    weight?: number;

    /**
     * Width, in inches.
     */
    width?: number;
  }
}