// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {Account, AccountResource} from './Accounts.js';
import {AccountLink, AccountLinkResource} from './AccountLinks.js';
import {AccountToken, AccountTokenResource} from './AccountTokens.js';
import {BatchJob, BatchJobResource} from './BatchJobs.js';
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
export {AccountLink} from './AccountLinks.js';
export {AccountToken} from './AccountTokens.js';
export {BatchJob} from './BatchJobs.js';
export {Event} from './Events.js';
export {EventDestination} from './EventDestinations.js';

export class Core {
  accounts: AccountResource;
  accountLinks: AccountLinkResource;
  accountTokens: AccountTokenResource;
  batchJobs: BatchJobResource;
  events: EventResource;
  eventDestinations: EventDestinationResource;
  vault: Vault;

  constructor(private readonly stripe: Stripe) {
    this.accounts = new AccountResource(stripe);
    this.accountLinks = new AccountLinkResource(stripe);
    this.accountTokens = new AccountTokenResource(stripe);
    this.batchJobs = new BatchJobResource(stripe);
    this.events = new EventResource(stripe);
    this.eventDestinations = new EventDestinationResource(stripe);
    this.vault = new Vault(stripe);
  }
}

export declare namespace Core {
  export {Account};
  export {AccountLink};
  export {AccountToken};
  export {BatchJob};
  export {EventBase, Event, EventNotification, Events};
  export {EventDestination};
  export {AccountPersonToken};
  export {AccountPerson};
  export {Vault};
}
