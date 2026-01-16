/**
 * The StripeContext class provides an immutable container and convenience methods for interacting with the `Stripe-Context` header. All methods return a new instance of StripeContext.
 * You can use it whenever you're initializing a `Stripe` instance or sending `stripeContext` with a request. It's also found in the `EventNotification.context` property.
 */
export declare class StripeContext {
    private readonly _segments;
    /**
     * Creates a new StripeContext with the given segments.
     */
    constructor(segments?: string[]);
    /**
     * Gets a copy of the segments of this Context.
     */
    get segments(): Array<string>;
    /**
     * Creates a new StripeContext with an additional segment appended.
     */
    push(segment: string): StripeContext;
    /**
     * Creates a new StripeContext with the last segment removed.
     * If there are no segments, throws an error.
     */
    pop(): StripeContext;
    /**
     * Converts this context to its string representation.
     */
    toString(): string;
    /**
     * Parses a context string into a StripeContext instance.
     */
    static parse(contextStr?: string | null): StripeContext;
}
