import {ExtensibilityPlatformFunctions} from './platform/ExtensibilityPlatformFunctions.js';
export {Decimal} from './Decimal.js';
import {Stripe as StripeCore} from './stripe.core.js';
import {StripeConfig} from './lib.js';

// Initialize the Stripe class with Extensibility platform functions
StripeCore.initialize(new ExtensibilityPlatformFunctions());

type ExtensibilityStripeConstructor = typeof StripeCore & {
  new (key?: string, config?: StripeConfig): StripeCore;
};

const Stripe = StripeCore as ExtensibilityStripeConstructor;
export {Stripe};
export default Stripe;
