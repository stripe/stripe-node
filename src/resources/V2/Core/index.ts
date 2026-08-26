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
  V2 as V2Namespace3,
  ApprovalRequest,
  ApprovalRequestResource,
} from './ApprovalRequests.js';
import {V2 as V2Namespace4, BatchJob, BatchJobResource} from './BatchJobs.js';
import {
  EventBase,
  EventNotification,
  Event,
  Events,
  V2 as V2EventsNamespace,
  EventResource,
} from './Events.js';
import {
  V2 as V2Namespace6,
  EventDestination,
  EventDestinationResource,
} from './EventDestinations.js';
import {AccountPersonToken} from './AccountPersonTokens.js';
import {AccountPerson} from './AccountPersons.js';
import {Vault} from './Vault/index.js';

export {Account} from './Accounts.js';
export {AccountLink} from './AccountLinks.js';
export {AccountToken} from './AccountTokens.js';
export {ApprovalRequest} from './ApprovalRequests.js';
export {BatchJob} from './BatchJobs.js';
export {Event} from './Events.js';
export {EventDestination} from './EventDestinations.js';
export {AccountPersonToken} from './AccountPersonTokens.js';
export {AccountPerson} from './AccountPersons.js';

export class Core {
  accounts: AccountResource;
  accountLinks: AccountLinkResource;
  accountTokens: AccountTokenResource;
  approvalRequests: ApprovalRequestResource;
  batchJobs: BatchJobResource;
  events: EventResource;
  eventDestinations: EventDestinationResource;
  vault: Vault;

  constructor(private readonly stripe: Stripe) {
    this.accounts = new AccountResource(stripe);
    this.accountLinks = new AccountLinkResource(stripe);
    this.accountTokens = new AccountTokenResource(stripe);
    this.approvalRequests = new ApprovalRequestResource(stripe);
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
  export import ApprovalRequestListParams = V2Namespace3.Core.ApprovalRequestListParams;
  export import ApprovalRequestRetrieveParams = V2Namespace3.Core.ApprovalRequestRetrieveParams;
  export import ApprovalRequestUpdateParams = V2Namespace3.Core.ApprovalRequestUpdateParams;
  export import ApprovalRequestCancelParams = V2Namespace3.Core.ApprovalRequestCancelParams;
  export {ApprovalRequest, ApprovalRequestResource};
  export import BatchJobCreateParams = V2Namespace4.Core.BatchJobCreateParams;
  export import BatchJobRetrieveParams = V2Namespace4.Core.BatchJobRetrieveParams;
  export import BatchJobCancelParams = V2Namespace4.Core.BatchJobCancelParams;
  export {BatchJob, BatchJobResource};
  export import EventListParams = V2EventsNamespace.Core.EventListParams;
  export import EventRetrieveParams = V2EventsNamespace.Core.EventRetrieveParams;
  export {EventBase, Event, EventNotification, Events, EventResource};
  export import EventDestinationListParams = V2Namespace6.Core.EventDestinationListParams;
  export import EventDestinationCreateParams = V2Namespace6.Core.EventDestinationCreateParams;
  export import EventDestinationDeleteParams = V2Namespace6.Core.EventDestinationDeleteParams;
  export import EventDestinationRetrieveParams = V2Namespace6.Core.EventDestinationRetrieveParams;
  export import EventDestinationUpdateParams = V2Namespace6.Core.EventDestinationUpdateParams;
  export import EventDestinationDisableParams = V2Namespace6.Core.EventDestinationDisableParams;
  export import EventDestinationEnableParams = V2Namespace6.Core.EventDestinationEnableParams;
  export import EventDestinationPingParams = V2Namespace6.Core.EventDestinationPingParams;
  export {EventDestination, EventDestinationResource};
  export {AccountPersonToken};
  export {AccountPerson};
  export {Vault};
}
