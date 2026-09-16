import {DenoPlatformFunctions} from './platform/DenoPlatformFunctions.js';
export {Decimal} from './Decimal.js';
import {Stripe} from './stripe.core.js';

// Initialize the StripeClient class with Deno platform functions
Stripe.initialize(new DenoPlatformFunctions());

export {Stripe};
export default Stripe;
