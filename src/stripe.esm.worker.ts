import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
export {Decimal} from './Decimal.js';
import {Stripe} from './stripe.core.js';

// Initialize the StripeClient class with Web platform functions
Stripe.initialize(new WebPlatformFunctions());

export default Stripe;
