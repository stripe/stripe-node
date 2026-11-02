// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {V2 as V2Namespace0, Account, AccountResource} from './Accounts.js';
import {
  V2 as V2Namespace1,
  AccountEvaluation,
  AccountEvaluationResource,
} from './AccountEvaluations.js';
import {
  V2 as V2Namespace2,
  AccountLink,
  AccountLinkResource,
} from './AccountLinks.js';
import {
  V2 as V2Namespace3,
  AccountSession,
  AccountSessionResource,
} from './AccountSessions.js';
import {
  V2 as V2Namespace4,
  AccountToken,
  AccountTokenResource,
} from './AccountTokens.js';
import {
  V2 as V2Namespace5,
  ApprovalRequest,
  ApprovalRequestResource,
} from './ApprovalRequests.js';
import {V2 as V2Namespace6, BatchJob, BatchJobResource} from './BatchJobs.js';
import {
  V2 as V2Namespace7,
  ClaimableSandbox,
  ClaimableSandboxResource,
} from './ClaimableSandboxes.js';
import {
  V2 as V2Namespace8,
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
  V2 as V2Namespace10,
  EventDestination,
  EventDestinationResource,
} from './EventDestinations.js';
import {V2 as V2Namespace11, FeeBatch, FeeBatchResource} from './FeeBatches.js';
import {V2 as V2Namespace12, FeeEntry, FeeEntryResource} from './FeeEntries.js';
import {AccountPersonToken} from './AccountPersonTokens.js';
import {AccountPerson} from './AccountPersons.js';
import {Health} from './Health/index.js';
import {Vault} from './Vault/index.js';

export {Account} from './Accounts.js';
export {AccountEvaluation} from './AccountEvaluations.js';
export {AccountLink} from './AccountLinks.js';
export {AccountSession} from './AccountSessions.js';
export {AccountToken} from './AccountTokens.js';
export {ApprovalRequest} from './ApprovalRequests.js';
export {BatchJob} from './BatchJobs.js';
export {ClaimableSandbox} from './ClaimableSandboxes.js';
export {ConnectionSession} from './ConnectionSessions.js';
export {Event} from './Events.js';
export {EventDestination} from './EventDestinations.js';
export {FeeBatch} from './FeeBatches.js';
export {FeeEntry} from './FeeEntries.js';
export {AccountPersonToken} from './AccountPersonTokens.js';
export {AccountPerson} from './AccountPersons.js';

export class Core {
  accounts: AccountResource;
  accountEvaluations: AccountEvaluationResource;
  accountLinks: AccountLinkResource;
  accountSessions: AccountSessionResource;
  accountTokens: AccountTokenResource;
  approvalRequests: ApprovalRequestResource;
  batchJobs: BatchJobResource;
  claimableSandboxes: ClaimableSandboxResource;
  connectionSessions: ConnectionSessionResource;
  events: EventResource;
  eventDestinations: EventDestinationResource;
  feeBatches: FeeBatchResource;
  feeEntries: FeeEntryResource;
  health: Health;
  vault: Vault;

  constructor(private readonly stripe: Stripe) {
    this.accounts = new AccountResource(stripe);
    this.accountEvaluations = new AccountEvaluationResource(stripe);
    this.accountLinks = new AccountLinkResource(stripe);
    this.accountSessions = new AccountSessionResource(stripe);
    this.accountTokens = new AccountTokenResource(stripe);
    this.approvalRequests = new ApprovalRequestResource(stripe);
    this.batchJobs = new BatchJobResource(stripe);
    this.claimableSandboxes = new ClaimableSandboxResource(stripe);
    this.connectionSessions = new ConnectionSessionResource(stripe);
    this.events = new EventResource(stripe);
    this.eventDestinations = new EventDestinationResource(stripe);
    this.feeBatches = new FeeBatchResource(stripe);
    this.feeEntries = new FeeEntryResource(stripe);
    this.health = new Health(stripe);
    this.vault = new Vault(stripe);
  }
}

export declare namespace Core {
  export import AccountListParams = V2Namespace0.Core.AccountListParams;
  export import AccountCreateParams = V2Namespace0.Core.AccountCreateParams;
  export import AccountRetrieveParams = V2Namespace0.Core.AccountRetrieveParams;
  export import AccountUpdateParams = V2Namespace0.Core.AccountUpdateParams;
  export import AccountCloseParams = V2Namespace0.Core.AccountCloseParams;
  export import AccountRejectParams = V2Namespace0.Core.AccountRejectParams;
  export import AccountUnrejectParams = V2Namespace0.Core.AccountUnrejectParams;
  export {Account, AccountResource};
  export import AccountEvaluationCreateParams = V2Namespace1.Core.AccountEvaluationCreateParams;
  export {AccountEvaluation, AccountEvaluationResource};
  export import AccountLinkCreateParams = V2Namespace2.Core.AccountLinkCreateParams;
  export {AccountLink, AccountLinkResource};
  export import AccountSessionCreateParams = V2Namespace3.Core.AccountSessionCreateParams;
  export {AccountSession, AccountSessionResource};
  export import AccountTokenCreateParams = V2Namespace4.Core.AccountTokenCreateParams;
  export import AccountTokenRetrieveParams = V2Namespace4.Core.AccountTokenRetrieveParams;
  export {AccountToken, AccountTokenResource};
  export import ApprovalRequestListParams = V2Namespace5.Core.ApprovalRequestListParams;
  export import ApprovalRequestRetrieveParams = V2Namespace5.Core.ApprovalRequestRetrieveParams;
  export import ApprovalRequestUpdateParams = V2Namespace5.Core.ApprovalRequestUpdateParams;
  export import ApprovalRequestCancelParams = V2Namespace5.Core.ApprovalRequestCancelParams;
  export {ApprovalRequest, ApprovalRequestResource};
  export import BatchJobCreateParams = V2Namespace6.Core.BatchJobCreateParams;
  export import BatchJobRetrieveParams = V2Namespace6.Core.BatchJobRetrieveParams;
  export import BatchJobCancelParams = V2Namespace6.Core.BatchJobCancelParams;
  export {BatchJob, BatchJobResource};
  export import ClaimableSandboxCreateParams = V2Namespace7.Core.ClaimableSandboxCreateParams;
  export import ClaimableSandboxRetrieveParams = V2Namespace7.Core.ClaimableSandboxRetrieveParams;
  export import ClaimableSandboxRenewOnboardingLinkParams = V2Namespace7.Core.ClaimableSandboxRenewOnboardingLinkParams;
  export {ClaimableSandbox, ClaimableSandboxResource};
  export import ConnectionSessionCreateParams = V2Namespace8.Core.ConnectionSessionCreateParams;
  export import ConnectionSessionRetrieveParams = V2Namespace8.Core.ConnectionSessionRetrieveParams;
  export {ConnectionSession, ConnectionSessionResource};
  export import EventListParams = V2EventsNamespace.Core.EventListParams;
  export import EventRetrieveParams = V2EventsNamespace.Core.EventRetrieveParams;
  export {EventBase, Event, EventNotification, Events, EventResource};
  export import EventDestinationListParams = V2Namespace10.Core.EventDestinationListParams;
  export import EventDestinationCreateParams = V2Namespace10.Core.EventDestinationCreateParams;
  export import EventDestinationDeleteParams = V2Namespace10.Core.EventDestinationDeleteParams;
  export import EventDestinationRetrieveParams = V2Namespace10.Core.EventDestinationRetrieveParams;
  export import EventDestinationUpdateParams = V2Namespace10.Core.EventDestinationUpdateParams;
  export import EventDestinationDisableParams = V2Namespace10.Core.EventDestinationDisableParams;
  export import EventDestinationEnableParams = V2Namespace10.Core.EventDestinationEnableParams;
  export import EventDestinationPingParams = V2Namespace10.Core.EventDestinationPingParams;
  export {EventDestination, EventDestinationResource};
  export import FeeBatchListParams = V2Namespace11.Core.FeeBatchListParams;
  export import FeeBatchRetrieveParams = V2Namespace11.Core.FeeBatchRetrieveParams;
  export {FeeBatch, FeeBatchResource};
  export import FeeEntryListParams = V2Namespace12.Core.FeeEntryListParams;
  export import FeeEntryRetrieveParams = V2Namespace12.Core.FeeEntryRetrieveParams;
  export {FeeEntry, FeeEntryResource};
  export {AccountPersonToken};
  export {AccountPerson};
  export {Health};
  export {Vault};
}
