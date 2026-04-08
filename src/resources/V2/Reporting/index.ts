// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {V2 as V2Namespace0, Report, ReportResource} from './Reports.js';
import {
  V2 as V2Namespace1,
  ReportRun,
  ReportRunResource,
} from './ReportRuns.js';

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
  export type ReportRetrieveParams = V2Namespace0.Reporting.ReportRetrieveParams;
  export {Report};
  export type ReportRunCreateParams = V2Namespace1.Reporting.ReportRunCreateParams;
  export type ReportRunRetrieveParams = V2Namespace1.Reporting.ReportRunRetrieveParams;
  export {ReportRun};
}
