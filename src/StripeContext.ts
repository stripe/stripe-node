export class StripeContext {
  private readonly _segments: string[];

  /**
   * Initialize a StripeContext with the given segments.
   */
  constructor(segments?: string[]) {
    this._segments = segments ? [...segments] : [];
  }

  /**
   * Parse a context string into a StripeContext instance.
   */
  static parse(contextString: string): StripeContext {
    if (!contextString) {
      return new StripeContext([]);
    }
    return new StripeContext(contextString.split('/'));
  }

  /**
   * Create a new StripeContext with the last segment removed.
   *
   * @throws {Error} If context has no segments to remove
   */
  parent(): StripeContext {
    if (this._segments.length === 0) {
      throw new Error('Cannot get parent of empty context');
    }
    return new StripeContext(this._segments.slice(0, -1));
  }

  /**
   * Create a new StripeContext with an additional segment appended.
   */
  child(segment: string): StripeContext {
    return new StripeContext([...this._segments, segment]);
  }

  /**
   * Convert the StripeContext to its string representation.
   */
  toString(): string {
    return this._segments.join('/');
  }
}