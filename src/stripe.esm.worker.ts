import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
import {Stripe as StripeClass} from './stripe.core.js';

// Initialize the Stripe class with Web platform functions
StripeClass.initialize(new WebPlatformFunctions());

export const Stripe = StripeClass;
export default Stripe;
