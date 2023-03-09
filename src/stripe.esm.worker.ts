import {WebPlatformFunctions} from './platform/WebPlatformFunctions.js';
import {createStripe} from './createStripe.js';

export const Stripe = createStripe(new WebPlatformFunctions());
export default Stripe;
