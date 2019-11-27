declare namespace Stripe {
  /**
   * The StatusTransitions object.
   */
  interface StatusTransitions {
    canceled?: number | null;

    fulfiled?: number | null;

    paid?: number | null;

    returned?: number | null;
  }
}