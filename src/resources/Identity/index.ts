// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {BlocklistEntry, BlocklistEntryResource} from './BlocklistEntries.js';
import {
  VerificationReport,
  VerificationReportResource,
} from './VerificationReports.js';
import {
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
  export {VerificationSession};
}
