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
  AccountToken,
  AccountTokenResource,
} from './AccountTokens.js';
import {
  V2 as V2Namespace4,
  ApprovalRequest,
  ApprovalRequestResource,
} from './ApprovalRequests.js';
import {V2 as V2Namespace5, BatchJob, BatchJobResource} from './BatchJobs.js';
import {
  V2 as V2Namespace6,
  ClaimableSandbox,
  ClaimableSandboxResource,
} from './ClaimableSandboxes.js';
import {
  V2 as V2Namespace7,
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
  V2 as V2Namespace9,
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
export {ApprovalRequest} from './ApprovalRequests.js';
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
  approvalRequests: ApprovalRequestResource;
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
    this.approvalRequests = new ApprovalRequestResource(stripe);
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
  export type AccountEvaluationCreateParams = V2Namespace1.Core.AccountEvaluationCreateParams;
  export {AccountEvaluation};
  export type AccountLinkCreateParams = V2Namespace2.Core.AccountLinkCreateParams;
  export {AccountLink};
  export type AccountTokenCreateParams = V2Namespace3.Core.AccountTokenCreateParams;
  export type AccountTokenRetrieveParams = V2Namespace3.Core.AccountTokenRetrieveParams;
  export {AccountToken};
  export type ApprovalRequestListParams = V2Namespace4.Core.ApprovalRequestListParams;
  export type ApprovalRequestRetrieveParams = V2Namespace4.Core.ApprovalRequestRetrieveParams;
  export type ApprovalRequestCancelParams = V2Namespace4.Core.ApprovalRequestCancelParams;
  export type ApprovalRequestExecuteParams = V2Namespace4.Core.ApprovalRequestExecuteParams;
  export type ApprovalRequestSubmitParams = V2Namespace4.Core.ApprovalRequestSubmitParams;
  export {ApprovalRequest};
  export type BatchJobCreateParams = V2Namespace5.Core.BatchJobCreateParams;
  export type BatchJobRetrieveParams = V2Namespace5.Core.BatchJobRetrieveParams;
  export type BatchJobCancelParams = V2Namespace5.Core.BatchJobCancelParams;
  export {BatchJob};
  export type ClaimableSandboxCreateParams = V2Namespace6.Core.ClaimableSandboxCreateParams;
  export type ClaimableSandboxRetrieveParams = V2Namespace6.Core.ClaimableSandboxRetrieveParams;
  export type ClaimableSandboxRenewOnboardingLinkParams = V2Namespace6.Core.ClaimableSandboxRenewOnboardingLinkParams;
  export {ClaimableSandbox};
  export type ConnectionSessionCreateParams = V2Namespace7.Core.ConnectionSessionCreateParams;
  export type ConnectionSessionRetrieveParams = V2Namespace7.Core.ConnectionSessionRetrieveParams;
  export {ConnectionSession};
  export type EventListParams = V2EventsNamespace.Core.EventListParams;
  export type EventRetrieveParams = V2EventsNamespace.Core.EventRetrieveParams;
  export {EventBase, Event, EventNotification, Events};
  export type EventDestinationListParams = V2Namespace9.Core.EventDestinationListParams;
  export type EventDestinationCreateParams = V2Namespace9.Core.EventDestinationCreateParams;
  export type EventDestinationDeleteParams = V2Namespace9.Core.EventDestinationDeleteParams;
  export type EventDestinationRetrieveParams = V2Namespace9.Core.EventDestinationRetrieveParams;
  export type EventDestinationUpdateParams = V2Namespace9.Core.EventDestinationUpdateParams;
  export type EventDestinationDisableParams = V2Namespace9.Core.EventDestinationDisableParams;
  export type EventDestinationEnableParams = V2Namespace9.Core.EventDestinationEnableParams;
  export type EventDestinationPingParams = V2Namespace9.Core.EventDestinationPingParams;
  export {EventDestination};
  export {AccountPersonToken};
  export {AccountPerson};
  export {Vault};
}
