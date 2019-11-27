declare namespace Stripe {
  /**
   * The Parameters object.
   */
  interface Parameters {
    /**
     * The set of output columns requested for inclusion in the report run.
     */
    columns?: Array<string>;

    /**
     * Connected account ID by which to filter the report run.
     */
    connected_account?: string;

    /**
     * Currency of objects to be included in the report run.
     */
    currency?: string;

    /**
     * Ending timestamp of data to be included in the report run (exclusive).
     */
    interval_end?: number;

    /**
     * Starting timestamp of data to be included in the report run.
     */
    interval_start?: number;

    /**
     * Payout ID by which to filter the report run.
     */
    payout?: string;

    /**
     * Category of balance transactions to be included in the report run.
     */
    reporting_category?: string;
  }
}