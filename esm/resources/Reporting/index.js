// File generated from our OpenAPI spec
import { ReportRunResource } from './ReportRuns.js';
import { ReportTypeResource } from './ReportTypes.js';
export class Reporting {
    constructor(stripe) {
        this.stripe = stripe;
        this.reportRuns = new ReportRunResource(stripe);
        this.reportTypes = new ReportTypeResource(stripe);
    }
}
//# sourceMappingURL=index.js.map