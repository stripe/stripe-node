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
  export import AccountListParams = V2Namespace0.Core.AccountListParams;
  export import AccountCreateParams = V2Namespace0.Core.AccountCreateParams;
  export import AccountRetrieveParams = V2Namespace0.Core.AccountRetrieveParams;
  export import AccountUpdateParams = V2Namespace0.Core.AccountUpdateParams;
  export import AccountCloseParams = V2Namespace0.Core.AccountCloseParams;
  export {Account, AccountResource};
  export import AccountLinkCreateParams = V2Namespace1.Core.AccountLinkCreateParams;
  export {AccountLink, AccountLinkResource};
  export import AccountTokenCreateParams = V2Namespace2.Core.AccountTokenCreateParams;
  export import AccountTokenRetrieveParams = V2Namespace2.Core.AccountTokenRetrieveParams;
  export {AccountToken, AccountTokenResource};
  export import BatchJobCreateParams = V2Namespace3.Core.BatchJobCreateParams;
  export import BatchJobRetrieveParams = V2Namespace3.Core.BatchJobRetrieveParams;
  export import BatchJobCancelParams = V2Namespace3.Core.BatchJobCancelParams;
  export {BatchJob, BatchJobResource};
  export import EventListParams = V2EventsNamespace.Core.EventListParams;
  export import EventRetrieveParams = V2EventsNamespace.Core.EventRetrieveParams;
  export {EventBase, Event, EventNotification, Events, EventResource};
  export import EventDestinationListParams = V2Namespace5.Core.EventDestinationListParams;
  export import EventDestinationCreateParams = V2Namespace5.Core.EventDestinationCreateParams;
  export import EventDestinationDeleteParams = V2Namespace5.Core.EventDestinationDeleteParams;
  export import EventDestinationRetrieveParams = V2Namespace5.Core.EventDestinationRetrieveParams;
  export import EventDestinationUpdateParams = V2Namespace5.Core.EventDestinationUpdateParams;
  export import EventDestinationDisableParams = V2Namespace5.Core.EventDestinationDisableParams;
  export import EventDestinationEnableParams = V2Namespace5.Core.EventDestinationEnableParams;
  export import EventDestinationPingParams = V2Namespace5.Core.EventDestinationPingParams;
  export {EventDestination, EventDestinationResource};
  export {AccountPersonToken};
  export {AccountPerson};
  export {Vault};
}
