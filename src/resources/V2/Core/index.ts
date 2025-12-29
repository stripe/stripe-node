// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {Account, AccountResource} from './Accounts.js';
import {AccountLink, AccountLinkResource} from './AccountLinks.js';
import {AccountToken, AccountTokenResource} from './AccountTokens.js';
import {
  Event,
  Events,
  EventBase,
  EventNotification,
  EventResource,
} from './Events.js';
import {
  EventDestination,
  EventDestinationResource,
} from './EventDestinations.js';
import {AccountPersonToken} from './AccountPersonTokens.js';
import {AccountPerson} from './AccountPersons.js';

export {Account} from './Accounts.js';
export {AccountLink} from './AccountLinks.js';
export {AccountToken} from './AccountTokens.js';
export {Event} from './Events.js';
export {EventDestination} from './EventDestinations.js';

export class Core {
  accounts: AccountResource;
  accountLinks: AccountLinkResource;
  accountTokens: AccountTokenResource;
  events: EventResource;
  eventDestinations: EventDestinationResource;

  constructor(private readonly stripe: Stripe) {
    this.accounts = new AccountResource(stripe);
    this.accountLinks = new AccountLinkResource(stripe);
    this.accountTokens = new AccountTokenResource(stripe);
    this.events = new EventResource(stripe);
    this.eventDestinations = new EventDestinationResource(stripe);
  }
}

export declare namespace Core {
  export {Account};
  export {AccountLink};
  export {AccountToken};
  export {EventBase};
  export {EventDestination};
  export {AccountPersonToken};
  export {AccountPerson};
  export {Event, Events, EventNotification};
}
