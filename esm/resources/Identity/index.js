// File generated from our OpenAPI spec
import { VerificationReportResource, } from './VerificationReports.js';
import { VerificationSessionResource, } from './VerificationSessions.js';
export class Identity {
    constructor(stripe) {
        this.stripe = stripe;
        this.verificationReports = new VerificationReportResource(stripe);
        this.verificationSessions = new VerificationSessionResource(stripe);
    }
}
//# sourceMappingURL=index.js.map