declare namespace Stripe {
  namespace Radar {
    /**
     * The Rule object.
     */
    interface Rule {
      /**
       * The action taken on the payment.
       */
      action: string;

      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * The predicate to evaluate the payment against.
       */
      predicate: string;
    }
  }
}