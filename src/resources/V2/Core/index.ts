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
import {V2 as V2Namespace3, BatchJob, BatchJobResource} from './BatchJobs.js';
import {
  EventBase,
  EventNotification,
  Event,
  Events,
  V2 as V2EventsNamespace,
  EventResource,
} from './Events.js';
import {
  V2 as V2Namespace5,
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
export {AccountPersonToken} from './AccountPersonTokens.js';
export {AccountPerson} from './AccountPersons.js';

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
  export type BatchJobCreateParams = V2Namespace3.Core.BatchJobCreateParams;
  export type BatchJobRetrieveParams = V2Namespace3.Core.BatchJobRetrieveParams;
  export type BatchJobCancelParams = V2Namespace3.Core.BatchJobCancelParams;
  export {BatchJob};
  export type EventListParams = V2EventsNamespace.Core.EventListParams;
  export type EventRetrieveParams = V2EventsNamespace.Core.EventRetrieveParams;
  export {EventBase, Event, EventNotification, Events};
  export type EventDestinationListParams = V2Namespace5.Core.EventDestinationListParams;
  export type EventDestinationCreateParams = V2Namespace5.Core.EventDestinationCreateParams;
  export type EventDestinationDeleteParams = V2Namespace5.Core.EventDestinationDeleteParams;
  export type EventDestinationRetrieveParams = V2Namespace5.Core.EventDestinationRetrieveParams;
  export type EventDestinationUpdateParams = V2Namespace5.Core.EventDestinationUpdateParams;
  export type EventDestinationDisableParams = V2Namespace5.Core.EventDestinationDisableParams;
  export type EventDestinationEnableParams = V2Namespace5.Core.EventDestinationEnableParams;
  export type EventDestinationPingParams = V2Namespace5.Core.EventDestinationPingParams;
  export {EventDestination};
  export {AccountPersonToken};
  export {AccountPerson};
  export {Vault};
}
