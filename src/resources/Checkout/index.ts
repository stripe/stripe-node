// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Session, SessionResource} from './Sessions.js';

export {Session} from './Sessions.js';

export class Checkout {
  sessions: SessionResource;

  constructor(private readonly stripe: Stripe) {
    this.sessions = new SessionResource(stripe);
  }
}

export declare namespace Checkout {
  export {Session};
}
