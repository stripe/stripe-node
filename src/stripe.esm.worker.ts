import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
import {createStripe} from './stripe.core.js';
export {Decimal} from './Decimal.js';

export const Stripe = createStripe(new WebPlatformFunctions());
export default Stripe;
