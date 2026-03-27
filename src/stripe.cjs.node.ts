import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {Stripe} from './stripe.core.js';

// Initialize the Stripe class with Node platform functions
Stripe.initialize(new NodePlatformFunctions());

// Create a callable wrapper for backward compatibility
// eslint-disable-next-line func-style
const StripeConstructor = function(
  this: any,
  key: string,
  config?: Record<string, unknown>
): Stripe {
  // Support calling without `new`
  if (!(this instanceof StripeConstructor)) {
    return new Stripe(key, config);
  }
  // If called with `new`, return a new Stripe instance
  return new Stripe(key, config);
};

// Copy all static properties from Stripe to the wrapper
Object.setPrototypeOf(StripeConstructor, Stripe);
Object.setPrototypeOf(StripeConstructor.prototype, Stripe.prototype);

// Copy static properties explicitly
for (const key of Object.getOwnPropertyNames(Stripe)) {
  if (key !== 'length' && key !== 'prototype' && key !== 'name') {
    Object.defineProperty(StripeConstructor, key, {
      value: (Stripe as any)[key],
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
}
// Re-export the Decimal type so that CJS consumers can use
// Stripe.Decimal as a type (e.g., `const d: Stripe.Decimal`).
// Without this, `export =` only carries the function signature, not the
// merged namespace from stripe.core.ts.
declare namespace StripeConstructor {
  export type Decimal = import('./shared.js').Decimal;
}
export = StripeConstructor;
