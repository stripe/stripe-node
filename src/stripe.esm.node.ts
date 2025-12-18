import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {Stripe as StripeClass} from './stripe.core.js';

// Initialize the Stripe class with Node platform functions
StripeClass.initialize(new NodePlatformFunctions());

export const Stripe = StripeClass;
export default Stripe;
