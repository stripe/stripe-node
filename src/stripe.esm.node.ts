import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {createStripe} from './stripe.core.js';
export {Decimal} from './Decimal.js';

export const Stripe = createStripe(new NodePlatformFunctions());
export default Stripe;
