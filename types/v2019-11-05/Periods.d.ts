declare namespace Stripe {
  /**
   * The Period object.
   */
  interface Period {
    /**
     * The end date of this usage period. All usage up to and including this point in time is included.
     */
    end?: number | null;

    /**
     * The start date of this usage period. All usage after this point in time is included.
     */
    start?: number | null;
  }
}