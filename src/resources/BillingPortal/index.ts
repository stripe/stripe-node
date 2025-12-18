// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {ConfigurationResource} from './Configurations.js';
import {SessionResource} from './Sessions.js';

export {Configuration} from './Configurations.js';
export {Session} from './Sessions.js';

export class BillingPortal {
  configurations: ConfigurationResource;
  sessions: SessionResource;

  constructor(private readonly stripe: Stripe) {
    this.configurations = new ConfigurationResource(stripe);
    this.sessions = new SessionResource(stripe);
  }
}
