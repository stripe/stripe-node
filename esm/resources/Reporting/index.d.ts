import { StripeClient } from '../../stripe.core.js';
import { ReportRunResource } from './ReportRuns.js';
import { ReportTypeResource } from './ReportTypes.js';
export { ReportRun } from './ReportRuns.js';
export { ReportType } from './ReportTypes.js';
export declare class Reporting {
    private readonly stripe;
    reportRuns: ReportRunResource;
    reportTypes: ReportTypeResource;
    constructor(stripe: StripeClient);
}
