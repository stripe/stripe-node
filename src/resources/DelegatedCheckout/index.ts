// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
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
  export {RequestedSession};
}
