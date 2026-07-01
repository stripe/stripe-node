import * as _Error from './Error.js';
import {Stripe as StripeClass} from './stripe.core.js'
import {RequestSender} from './RequestSender.js';
import {StripeResource} from './StripeResource.js';
import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {PlatformFunctions} from './platform/PlatformFunctions.js';

type RequestSenderFactory = (stripe: StripeClass) => RequestSender;

const defaultRequestSenderFactory: RequestSenderFactory = (stripe) =>
  new RequestSender(stripe, StripeResource.MAX_BUFFERED_REQUEST_METRICS);

// For backward compatibility, export createStripe as a factory function
export function createStripe(
  platformFunctions: PlatformFunctions,
  requestSender: RequestSenderFactory = defaultRequestSenderFactory
): typeof StripeClass {
  // Initialize static properties
  StripeClass.initialize(platformFunctions, requestSender);

  return StripeClass;
}

import * as Stripe from './stripe.barrel.js'

createStripe(new NodePlatformFunctions());

export default Stripe;
