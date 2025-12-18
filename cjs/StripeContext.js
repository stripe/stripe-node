"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeContext = void 0;
/**
 * The StripeContext class provides an immutable container and convenience methods for interacting with the `Stripe-Context` header. All methods return a new instance of StripeContext.
 * You can use it whenever you're initializing a `Stripe` instance or sending `stripeContext` with a request. It's also found in the `EventNotification.context` property.
 */
class StripeContext {
    /**
     * Creates a new StripeContext with the given segments.
     */
    constructor(segments = []) {
        this._segments = [...segments];
    }
    /**
     * Gets a copy of the segments of this Context.
     */
    get segments() {
        return [...this._segments];
    }
    /**
     * Creates a new StripeContext with an additional segment appended.
     */
    push(segment) {
        if (!segment) {
            throw new Error('Segment cannot be null or undefined');
        }
        return new StripeContext([...this._segments, segment]);
    }
    /**
     * Creates a new StripeContext with the last segment removed.
     * If there are no segments, throws an error.
     */
    pop() {
        if (this._segments.length === 0) {
            throw new Error('Cannot pop from an empty context');
        }
        return new StripeContext(this._segments.slice(0, -1));
    }
    /**
     * Converts this context to its string representation.
     */
    toString() {
        return this._segments.join('/');
    }
    /**
     * Parses a context string into a StripeContext instance.
     */
    static parse(contextStr) {
        if (!contextStr) {
            return new StripeContext([]);
        }
        return new StripeContext(contextStr.split('/'));
    }
}
exports.StripeContext = StripeContext;
