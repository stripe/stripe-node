// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Checkout as CheckoutNamespace0,
  Session,
  SessionResource,
} from './Sessions.js';

export {Session} from './Sessions.js';

export class Checkout {
  sessions: SessionResource;

  constructor(private readonly stripe: Stripe) {
    this.sessions = new SessionResource(stripe);
  }
}

export declare namespace Checkout {
  export import SessionListParams = CheckoutNamespace0.SessionListParams;
  export import SessionCreateParams = CheckoutNamespace0.SessionCreateParams;
  export import SessionRetrieveParams = CheckoutNamespace0.SessionRetrieveParams;
  export import SessionUpdateParams = CheckoutNamespace0.SessionUpdateParams;
  export import SessionExpireParams = CheckoutNamespace0.SessionExpireParams;
  export import SessionListLineItemsParams = CheckoutNamespace0.SessionListLineItemsParams;
  export {Session};
}
