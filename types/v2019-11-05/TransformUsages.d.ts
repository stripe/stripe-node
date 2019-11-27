declare namespace Stripe {
  /**
   * The TransformUsage object.
   */
  interface TransformUsage {
    /**
     * Divide usage by this number.
     */
    divide_by?: number;

    /**
     * After division, either round the result `up` or `down`.
     */
    round?: TransformUsage.Round;
  }

  namespace TransformUsage {
    type Round = 'down' | 'up'
  }
}