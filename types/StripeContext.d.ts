// This is a manually maintained file

declare module 'stripe' {
  namespace Stripe {
    /**
     * StripeContext represents a context path for Stripe API requests.
     * The context is used to access child accounts by adding segments,
     * or parent accounts by removing segments.
     */
    class StripeContext {
      /**
       * Initialize a StripeContext with the given segments.
       */
      constructor(segments?: string[]);

      /**
       * Parse a context string into a StripeContext instance.
       */
      static parse(contextString: string): StripeContext;

      /**
       * Create a new StripeContext with the last segment removed.
       * @throws {Error} If context has no segments to remove
       */
      parent(): StripeContext;

      /**
       * Create a new StripeContext with an additional segment appended.
       */
      child(segment: string): StripeContext;

      /**
       * Convert the StripeContext to its string representation.
       */
      toString(): string;
    }
  }
}
