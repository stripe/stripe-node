import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {createStripe} from './stripe.common.js';

export const Stripe = createStripe(new NodePlatformFunctions());
export default Stripe;
