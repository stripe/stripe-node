// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  VerificationReport,
  VerificationReportResource,
} from './VerificationReports.js';
import {
  VerificationSession,
  VerificationSessionResource,
} from './VerificationSessions.js';

export {VerificationReport} from './VerificationReports.js';
export {VerificationSession} from './VerificationSessions.js';

export class Identity {
  verificationReports: VerificationReportResource;
  verificationSessions: VerificationSessionResource;

  constructor(private readonly stripe: Stripe) {
    this.verificationReports = new VerificationReportResource(stripe);
    this.verificationSessions = new VerificationSessionResource(stripe);
  }
}

export declare namespace Identity {
  export {VerificationReport};
  export {VerificationSession};
}
