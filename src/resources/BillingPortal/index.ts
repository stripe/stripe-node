// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  BillingPortal as BillingPortalNamespace0,
  Configuration,
  ConfigurationResource,
} from './Configurations.js';
import {
  BillingPortal as BillingPortalNamespace1,
  Session,
  SessionResource,
} from './Sessions.js';

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

export declare namespace BillingPortal {
  export type ConfigurationListParams = BillingPortalNamespace0.ConfigurationListParams;
  export type ConfigurationCreateParams = BillingPortalNamespace0.ConfigurationCreateParams;
  export type ConfigurationRetrieveParams = BillingPortalNamespace0.ConfigurationRetrieveParams;
  export type ConfigurationUpdateParams = BillingPortalNamespace0.ConfigurationUpdateParams;
  export {Configuration};
  export type SessionCreateParams = BillingPortalNamespace1.SessionCreateParams;
  export {Session};
}
