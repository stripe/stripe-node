import {ExtensibilityPlatformFunctions} from './platform/ExtensibilityPlatformFunctions.js';
import {Stripe} from './stripe.core.js';
import {StripeConfig} from './lib.js';

// Initialize the Stripe class with Extensibility platform functions
Stripe.initialize(new ExtensibilityPlatformFunctions());

type StripeCallableConstructor = typeof Stripe & {
  (key?: string, config?: StripeConfig): Stripe;
  new (key?: string, config?: StripeConfig): Stripe;
};

// Callable constructor: supports both `new Stripe()` and `Stripe()` for CJS consumers.
// typeof Stripe provides the construct signature and static members; the intersection
// adds a call signature for backward compatibility.
const StripeConstructor: StripeCallableConstructor = (function(
  this: any,
  key?: string,
  config?: StripeConfig
): Stripe {
  // Support calling without `new`
  if (!(this instanceof StripeConstructor)) {
    return new Stripe(key || '', config);
  }
  return new Stripe(key || '', config);
} as unknown) as StripeCallableConstructor;

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
