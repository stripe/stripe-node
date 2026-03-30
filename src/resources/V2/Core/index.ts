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
  EventResource,
} from './Events.js';
import {
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
  export {Account};
  export {AccountEvaluation};
  export {AccountLink};
  export {AccountToken};
  export {BatchJob};
  export {ClaimableSandbox};
  export {ConnectionSession};
  export {EventBase, Event, EventNotification, Events};
  export {EventDestination};
  export {AccountPersonToken};
  export {AccountPerson};
  export {Vault};
}
