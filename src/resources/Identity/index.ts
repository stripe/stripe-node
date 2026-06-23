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
  export import BlocklistEntryListParams = IdentityNamespace0.BlocklistEntryListParams;
  export import BlocklistEntryCreateParams = IdentityNamespace0.BlocklistEntryCreateParams;
  export import BlocklistEntryRetrieveParams = IdentityNamespace0.BlocklistEntryRetrieveParams;
  export import BlocklistEntryDisableParams = IdentityNamespace0.BlocklistEntryDisableParams;
  export {BlocklistEntry, BlocklistEntryResource};
  export import VerificationReportListParams = IdentityNamespace1.VerificationReportListParams;
  export import VerificationReportRetrieveParams = IdentityNamespace1.VerificationReportRetrieveParams;
  export {VerificationReport, VerificationReportResource};
  export import VerificationSessionListParams = IdentityNamespace2.VerificationSessionListParams;
  export import VerificationSessionCreateParams = IdentityNamespace2.VerificationSessionCreateParams;
  export import VerificationSessionRetrieveParams = IdentityNamespace2.VerificationSessionRetrieveParams;
  export import VerificationSessionUpdateParams = IdentityNamespace2.VerificationSessionUpdateParams;
  export import VerificationSessionCancelParams = IdentityNamespace2.VerificationSessionCancelParams;
  export import VerificationSessionRedactParams = IdentityNamespace2.VerificationSessionRedactParams;
  export {VerificationSession, VerificationSessionResource};
}
