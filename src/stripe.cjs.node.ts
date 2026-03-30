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
export = StripeConstructor;
