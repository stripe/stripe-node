// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Identity as IdentityNamespace0,
  BlocklistEntry,
  BlocklistEntryResource,
} from './BlocklistEntries.js';
import {
  Identity as IdentityNamespace1,
  VerificationReport,
  VerificationReportResource,
} from './VerificationReports.js';
import {
  Identity as IdentityNamespace2,
  VerificationSession,
  VerificationSessionResource,
} from './VerificationSessions.js';

export {BlocklistEntry} from './BlocklistEntries.js';
export {VerificationReport} from './VerificationReports.js';
export {VerificationSession} from './VerificationSessions.js';

export class Identity {
  blocklistEntries: BlocklistEntryResource;
  verificationReports: VerificationReportResource;
  verificationSessions: VerificationSessionResource;

  constructor(private readonly stripe: Stripe) {
    this.blocklistEntries = new BlocklistEntryResource(stripe);
    this.verificationReports = new VerificationReportResource(stripe);
    this.verificationSessions = new VerificationSessionResource(stripe);
  }
}

export declare namespace Identity {
  export type BlocklistEntryListParams = IdentityNamespace0.BlocklistEntryListParams;
  export type BlocklistEntryCreateParams = IdentityNamespace0.BlocklistEntryCreateParams;
  export type BlocklistEntryRetrieveParams = IdentityNamespace0.BlocklistEntryRetrieveParams;
  export type BlocklistEntryDisableParams = IdentityNamespace0.BlocklistEntryDisableParams;
  export {BlocklistEntry};
  export type VerificationReportListParams = IdentityNamespace1.VerificationReportListParams;
  export type VerificationReportRetrieveParams = IdentityNamespace1.VerificationReportRetrieveParams;
  export {VerificationReport};
  export type VerificationSessionListParams = IdentityNamespace2.VerificationSessionListParams;
  export type VerificationSessionCreateParams = IdentityNamespace2.VerificationSessionCreateParams;
  export type VerificationSessionRetrieveParams = IdentityNamespace2.VerificationSessionRetrieveParams;
  export type VerificationSessionUpdateParams = IdentityNamespace2.VerificationSessionUpdateParams;
  export type VerificationSessionCancelParams = IdentityNamespace2.VerificationSessionCancelParams;
  export type VerificationSessionRedactParams = IdentityNamespace2.VerificationSessionRedactParams;
  export {VerificationSession};
}
