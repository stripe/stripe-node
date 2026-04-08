// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Reporting as ReportingNamespace0,
  ReportRun,
  ReportRunResource,
} from './ReportRuns.js';
import {
  Reporting as ReportingNamespace1,
  ReportType,
  ReportTypeResource,
} from './ReportTypes.js';

export {ReportRun} from './ReportRuns.js';
export {ReportType} from './ReportTypes.js';

export class Reporting {
  reportRuns: ReportRunResource;
  reportTypes: ReportTypeResource;

  constructor(private readonly stripe: Stripe) {
    this.reportRuns = new ReportRunResource(stripe);
    this.reportTypes = new ReportTypeResource(stripe);
  }
}

export declare namespace Reporting {
  export type ReportRunListParams = ReportingNamespace0.ReportRunListParams;
  export type ReportRunCreateParams = ReportingNamespace0.ReportRunCreateParams;
  export type ReportRunRetrieveParams = ReportingNamespace0.ReportRunRetrieveParams;
  export {ReportRun};
  export type ReportTypeListParams = ReportingNamespace1.ReportTypeListParams;
  export type ReportTypeRetrieveParams = ReportingNamespace1.ReportTypeRetrieveParams;
  export {ReportType};
}
