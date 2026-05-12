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
  export import ReportRunListParams = ReportingNamespace0.ReportRunListParams;
  export import ReportRunCreateParams = ReportingNamespace0.ReportRunCreateParams;
  export import ReportRunRetrieveParams = ReportingNamespace0.ReportRunRetrieveParams;
  export {ReportRun};
  export import ReportTypeListParams = ReportingNamespace1.ReportTypeListParams;
  export import ReportTypeRetrieveParams = ReportingNamespace1.ReportTypeRetrieveParams;
  export {ReportType};
}
