// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {Report, ReportResource} from './Reports.js';
import {ReportRun, ReportRunResource} from './ReportRuns.js';

export {Report} from './Reports.js';
export {ReportRun} from './ReportRuns.js';

export class Reporting {
  reports: ReportResource;
  reportRuns: ReportRunResource;

  constructor(private readonly stripe: Stripe) {
    this.reports = new ReportResource(stripe);
    this.reportRuns = new ReportRunResource(stripe);
  }
}

export declare namespace Reporting {
  export {Report};
  export {ReportRun};
}
