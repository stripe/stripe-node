// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {V2 as V2Namespace0, Account, AccountResource} from './Accounts.js';
import {
  V2 as V2Namespace1,
  AccountLink,
  AccountLinkResource,
} from './AccountLinks.js';
import {
  V2 as V2Namespace2,
  AccountToken,
  AccountTokenResource,
} from './AccountTokens.js';
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

export {Account} from './Accounts.js';
export {AccountLink} from './AccountLinks.js';
export {AccountToken} from './AccountTokens.js';
export {Event} from './Events.js';
export {EventDestination} from './EventDestinations.js';
export {AccountPersonToken} from './AccountPersonTokens.js';
export {AccountPerson} from './AccountPersons.js';

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
  export type AccountListParams = V2Namespace0.Core.AccountListParams;
  export type AccountCreateParams = V2Namespace0.Core.AccountCreateParams;
  export type AccountRetrieveParams = V2Namespace0.Core.AccountRetrieveParams;
  export type AccountUpdateParams = V2Namespace0.Core.AccountUpdateParams;
  export type AccountCloseParams = V2Namespace0.Core.AccountCloseParams;
  export {Account};
  export type AccountLinkCreateParams = V2Namespace1.Core.AccountLinkCreateParams;
  export {AccountLink};
  export type AccountTokenCreateParams = V2Namespace2.Core.AccountTokenCreateParams;
  export type AccountTokenRetrieveParams = V2Namespace2.Core.AccountTokenRetrieveParams;
  export {AccountToken};
  export type EventListParams = V2EventsNamespace.Core.EventListParams;
  export type EventRetrieveParams = V2EventsNamespace.Core.EventRetrieveParams;
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
}
