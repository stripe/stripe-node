import { Stripe } from '../../stripe.core.js';
import { ReportRun, ReportRunResource } from './ReportRuns.js';
import { ReportType, ReportTypeResource } from './ReportTypes.js';
export { ReportRun } from './ReportRuns.js';
export { ReportType } from './ReportTypes.js';
export declare class Reporting {
    private readonly stripe;
    reportRuns: ReportRunResource;
    reportTypes: ReportTypeResource;
    constructor(stripe: Stripe);
}
export declare namespace Reporting {
    export { ReportRun };
    export { ReportType };
}
