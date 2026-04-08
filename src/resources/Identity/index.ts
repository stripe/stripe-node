// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {BlocklistEntry, BlocklistEntryResource} from './BlocklistEntries.js';
import {
  Identity as IdentityNamespace0,
  VerificationReport,
  VerificationReportResource,
} from './VerificationReports.js';
import {
  Identity as IdentityNamespace1,
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
  export {BlocklistEntry};
  export {VerificationReport};
  export type VerificationSessionListParams = IdentityNamespace1.VerificationSessionListParams;
  export type VerificationSessionCreateParams = IdentityNamespace1.VerificationSessionCreateParams;
  export type VerificationSessionRetrieveParams = IdentityNamespace1.VerificationSessionRetrieveParams;
  export type VerificationSessionUpdateParams = IdentityNamespace1.VerificationSessionUpdateParams;
  export type VerificationSessionCancelParams = IdentityNamespace1.VerificationSessionCancelParams;
  export type VerificationSessionRedactParams = IdentityNamespace1.VerificationSessionRedactParams;
  export {VerificationSession};
}
