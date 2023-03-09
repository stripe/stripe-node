import { WebPlatformFunctions } from './platform/WebPlatformFunctions.js';
import { createStripe } from './stripe.common.js';
export const Stripe = createStripe(new WebPlatformFunctions());
export default Stripe;
