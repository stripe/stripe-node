import { Stripe } from '../../stripe.core.js';
import { VerificationReport, VerificationReportResource } from './VerificationReports.js';
import { VerificationSession, VerificationSessionResource } from './VerificationSessions.js';
export { VerificationReport } from './VerificationReports.js';
export { VerificationSession } from './VerificationSessions.js';
export declare class Identity {
    private readonly stripe;
    verificationReports: VerificationReportResource;
    verificationSessions: VerificationSessionResource;
    constructor(stripe: Stripe);
}
export declare namespace Identity {
    export { VerificationReport };
    export { VerificationSession };
}
