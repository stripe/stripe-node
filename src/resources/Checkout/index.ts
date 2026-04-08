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
  export type SessionListParams = CheckoutNamespace0.SessionListParams;
  export type SessionCreateParams = CheckoutNamespace0.SessionCreateParams;
  export type SessionRetrieveParams = CheckoutNamespace0.SessionRetrieveParams;
  export type SessionUpdateParams = CheckoutNamespace0.SessionUpdateParams;
  export type SessionApproveParams = CheckoutNamespace0.SessionApproveParams;
  export type SessionExpireParams = CheckoutNamespace0.SessionExpireParams;
  export type SessionListLineItemsParams = CheckoutNamespace0.SessionListLineItemsParams;
  export {Session};
}
