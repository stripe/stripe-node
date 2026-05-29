// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  DelegatedCheckout as DelegatedCheckoutNamespace0,
  RequestedSession,
  RequestedSessionResource,
} from './RequestedSessions.js';
import {Order} from './Orders.js';
import {OrderEvent} from './OrderEvents.js';

export {RequestedSession} from './RequestedSessions.js';
export {Order} from './Orders.js';
export {OrderEvent} from './OrderEvents.js';

export class DelegatedCheckout {
  requestedSessions: RequestedSessionResource;

  constructor(private readonly stripe: Stripe) {
    this.requestedSessions = new RequestedSessionResource(stripe);
  }
}

export declare namespace DelegatedCheckout {
  export import RequestedSessionRetrieveParams = DelegatedCheckoutNamespace0.RequestedSessionRetrieveParams;
  export import RequestedSessionUpdateParams = DelegatedCheckoutNamespace0.RequestedSessionUpdateParams;
  export import RequestedSessionCreateParams = DelegatedCheckoutNamespace0.RequestedSessionCreateParams;
  export import RequestedSessionConfirmParams = DelegatedCheckoutNamespace0.RequestedSessionConfirmParams;
  export import RequestedSessionExpireParams = DelegatedCheckoutNamespace0.RequestedSessionExpireParams;
  export import RequestedSessionListOrdersParams = DelegatedCheckoutNamespace0.RequestedSessionListOrdersParams;
  export {RequestedSession};
  export {Order};
  export {OrderEvent};
}
