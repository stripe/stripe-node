import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
import {Stripe} from './stripe.core.js';

// Initialize the Stripe class with Web platform functions
Stripe.initialize(new WebPlatformFunctions());

// Callable constructor: supports both `new Stripe()` and `Stripe()` for CJS consumers.
// typeof Stripe provides the construct signature and static members; the intersection
// adds a call signature for backward compatibility.
type StripeCallableConstructor = typeof Stripe & {
  (key: string, config?: Record<string, unknown>): Stripe;
};

// @ts-expect-error: function expression lacks a construct signature, but at runtime
// the prototype chain wiring below makes both `new StripeConstructor()` and
// `StripeConstructor()` work correctly.
// eslint-disable-next-line func-style
const StripeConstructor: StripeCallableConstructor = function(
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
