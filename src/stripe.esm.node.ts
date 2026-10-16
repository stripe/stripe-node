import {Stripe, createStripe} from './stripe.core.js';
import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';

export * from './stripe.barrel.js';

createStripe(new NodePlatformFunctions());

export {Stripe, createStripe};
export default Stripe;
