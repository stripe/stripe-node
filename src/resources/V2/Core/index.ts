// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {Account, AccountResource} from './Accounts.js';
import {
  AccountEvaluation,
  AccountEvaluationResource,
} from './AccountEvaluations.js';
import {AccountLink, AccountLinkResource} from './AccountLinks.js';
import {AccountToken, AccountTokenResource} from './AccountTokens.js';
import {BatchJob, BatchJobResource} from './BatchJobs.js';
import {
  ClaimableSandbox,
  ClaimableSandboxResource,
} from './ClaimableSandboxes.js';
import {
  ConnectionSession,
  ConnectionSessionResource,
} from './ConnectionSessions.js';
import {
  EventBase,
  EventNotification,
  Event,
  Events,
  V2 as V2EventsNamespace,
  EventResource,
} from './Events.js';
import {
  V2 as V2Namespace4,
  EventDestination,
  EventDestinationResource,
} from './EventDestinations.js';
import {AccountPersonToken} from './AccountPersonTokens.js';
import {AccountPerson} from './AccountPersons.js';
import {Vault} from './Vault/index.js';

export {Account} from './Accounts.js';
export {AccountEvaluation} from './AccountEvaluations.js';
export {AccountLink} from './AccountLinks.js';
export {AccountToken} from './AccountTokens.js';
export {BatchJob} from './BatchJobs.js';
export {ClaimableSandbox} from './ClaimableSandboxes.js';
export {ConnectionSession} from './ConnectionSessions.js';
export {Event} from './Events.js';
export {EventDestination} from './EventDestinations.js';
export {AccountPersonToken} from './AccountPersonTokens.js';
export {AccountPerson} from './AccountPersons.js';

export class Core {
  accounts: AccountResource;
  accountEvaluations: AccountEvaluationResource;
  accountLinks: AccountLinkResource;
  accountTokens: AccountTokenResource;
  batchJobs: BatchJobResource;
  claimableSandboxes: ClaimableSandboxResource;
  connectionSessions: ConnectionSessionResource;
  events: EventResource;
  eventDestinations: EventDestinationResource;
  vault: Vault;

  constructor(private readonly stripe: Stripe) {
    this.accounts = new AccountResource(stripe);
    this.accountEvaluations = new AccountEvaluationResource(stripe);
    this.accountLinks = new AccountLinkResource(stripe);
    this.accountTokens = new AccountTokenResource(stripe);
    this.batchJobs = new BatchJobResource(stripe);
    this.claimableSandboxes = new ClaimableSandboxResource(stripe);
    this.connectionSessions = new ConnectionSessionResource(stripe);
    this.events = new EventResource(stripe);
    this.eventDestinations = new EventDestinationResource(stripe);
    this.vault = new Vault(stripe);
  }
}

export declare namespace Core {
  export type AccountListParams = V2Namespace0.Core.AccountListParams;
  export type AccountCreateParams = V2Namespace0.Core.AccountCreateParams;
  export type AccountRetrieveParams = V2Namespace0.Core.AccountRetrieveParams;
  export type AccountUpdateParams = V2Namespace0.Core.AccountUpdateParams;
  export type AccountCloseParams = V2Namespace0.Core.AccountCloseParams;
  export {Account};
  export {AccountEvaluation};
  export {AccountLink};
  export type AccountTokenCreateParams = V2Namespace2.Core.AccountTokenCreateParams;
  export type AccountTokenRetrieveParams = V2Namespace2.Core.AccountTokenRetrieveParams;
  export {AccountToken};
  export {BatchJob};
  export {ClaimableSandbox};
  export {ConnectionSession};
  export {EventBase, Event, EventNotification, Events};
  export type EventDestinationListParams = V2Namespace4.Core.EventDestinationListParams;
  export type EventDestinationCreateParams = V2Namespace4.Core.EventDestinationCreateParams;
  export type EventDestinationDeleteParams = V2Namespace4.Core.EventDestinationDeleteParams;
  export type EventDestinationRetrieveParams = V2Namespace4.Core.EventDestinationRetrieveParams;
  export type EventDestinationUpdateParams = V2Namespace4.Core.EventDestinationUpdateParams;
  export type EventDestinationDisableParams = V2Namespace4.Core.EventDestinationDisableParams;
  export type EventDestinationEnableParams = V2Namespace4.Core.EventDestinationEnableParams;
  export type EventDestinationPingParams = V2Namespace4.Core.EventDestinationPingParams;
  export {EventDestination};
  export {AccountPersonToken};
  export {AccountPerson};
  export {Vault};
}
