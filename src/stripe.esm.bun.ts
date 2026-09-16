import {BunPlatformFunctions} from './platform/BunPlatformFunctions.js';
export {Decimal} from './Decimal.js';
import {Stripe} from './stripe.core.js';

// Initialize the StripeClient class with Bun platform functions
Stripe.initialize(new BunPlatformFunctions());

export {Stripe};
export default Stripe;
