// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  DelegatedCheckout as DelegatedCheckoutNamespace0,
  RequestedSession,
  RequestedSessionResource,
} from './RequestedSessions.js';

export {RequestedSession} from './RequestedSessions.js';

export class DelegatedCheckout {
  requestedSessions: RequestedSessionResource;

  constructor(private readonly stripe: Stripe) {
    this.requestedSessions = new RequestedSessionResource(stripe);
  }
}

export declare namespace DelegatedCheckout {
  export type RequestedSessionRetrieveParams = DelegatedCheckoutNamespace0.RequestedSessionRetrieveParams;
  export type RequestedSessionUpdateParams = DelegatedCheckoutNamespace0.RequestedSessionUpdateParams;
  export type RequestedSessionCreateParams = DelegatedCheckoutNamespace0.RequestedSessionCreateParams;
  export type RequestedSessionConfirmParams = DelegatedCheckoutNamespace0.RequestedSessionConfirmParams;
  export type RequestedSessionExpireParams = DelegatedCheckoutNamespace0.RequestedSessionExpireParams;
  export {RequestedSession};
}
