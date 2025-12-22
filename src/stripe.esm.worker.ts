import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
import {StripeClient} from './stripe.core.js';

// Initialize the StripeClient class with Web platform functions
StripeClient.initialize(new WebPlatformFunctions());

export const Stripe = StripeClient;
export default Stripe;
