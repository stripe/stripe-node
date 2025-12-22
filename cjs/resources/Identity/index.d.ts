import { StripeClient } from '../../stripe.core.js';
import { VerificationReportResource } from './VerificationReports.js';
import { VerificationSessionResource } from './VerificationSessions.js';
export { VerificationReport } from './VerificationReports.js';
export { VerificationSession } from './VerificationSessions.js';
export declare class Identity {
    private readonly stripe;
    verificationReports: VerificationReportResource;
    verificationSessions: VerificationSessionResource;
    constructor(stripe: StripeClient);
}
