import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
import {Stripe} from './stripe.core.js';

// Initialize the Stripe class with Web platform functions
Stripe.initialize(new WebPlatformFunctions());

// Create a callable wrapper for backward compatibility
const StripeConstructor = function(
  this: any,
  key: string,
  config?: Record<string, unknown>
): any {
  // Support calling without `new`
  if (!(this instanceof StripeConstructor)) {
    return new Stripe(key, config);
  }
  // If called with `new`, return a new Stripe instance
  return new Stripe(key, config);
} as any;

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

module.exports = StripeConstructor;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = StripeConstructor;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = StripeConstructor;
