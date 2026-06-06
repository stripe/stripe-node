// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
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
  export import VerificationReportListParams = IdentityNamespace0.VerificationReportListParams;
  export import VerificationReportRetrieveParams = IdentityNamespace0.VerificationReportRetrieveParams;
  export {VerificationReport};
  export import VerificationSessionListParams = IdentityNamespace1.VerificationSessionListParams;
  export import VerificationSessionCreateParams = IdentityNamespace1.VerificationSessionCreateParams;
  export import VerificationSessionRetrieveParams = IdentityNamespace1.VerificationSessionRetrieveParams;
  export import VerificationSessionUpdateParams = IdentityNamespace1.VerificationSessionUpdateParams;
  export import VerificationSessionCancelParams = IdentityNamespace1.VerificationSessionCancelParams;
  export import VerificationSessionRedactParams = IdentityNamespace1.VerificationSessionRedactParams;
  export {VerificationSession};
}
