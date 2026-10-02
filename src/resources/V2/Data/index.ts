// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {V2 as V2Namespace0, QueryRun, QueryRunResource} from './QueryRuns.js';
import {V2 as V2Namespace1, Report, ReportResource} from './Reports.js';
import {
  V2 as V2Namespace2,
  ReportRun,
  ReportRunResource,
} from './ReportRuns.js';
import {V2 as V2Namespace3, Schema, SchemaResource} from './Schemas.js';
import {Analytics} from './Analytics/index.js';
import {Reporting} from './Reporting/index.js';

export {QueryRun} from './QueryRuns.js';
export {Report} from './Reports.js';
export {ReportRun} from './ReportRuns.js';
export {Schema} from './Schemas.js';

export class Data {
  queryRuns: QueryRunResource;
  reports: ReportResource;
  reportRuns: ReportRunResource;
  schemas: SchemaResource;
  analytics: Analytics;
  reporting: Reporting;

  constructor(private readonly stripe: Stripe) {
    this.queryRuns = new QueryRunResource(stripe);
    this.reports = new ReportResource(stripe);
    this.reportRuns = new ReportRunResource(stripe);
    this.schemas = new SchemaResource(stripe);
    this.analytics = new Analytics(stripe);
    this.reporting = new Reporting(stripe);
  }
}

export declare namespace Data {
  export import QueryRunCreateParams = V2Namespace0.Data.QueryRunCreateParams;
  export import QueryRunRetrieveParams = V2Namespace0.Data.QueryRunRetrieveParams;
  export {QueryRun, QueryRunResource};
  export import ReportListParams = V2Namespace1.Data.ReportListParams;
  export import ReportRetrieveParams = V2Namespace1.Data.ReportRetrieveParams;
  export {Report, ReportResource};
  export import ReportRunCreateParams = V2Namespace2.Data.ReportRunCreateParams;
  export import ReportRunRetrieveParams = V2Namespace2.Data.ReportRunRetrieveParams;
  export {ReportRun, ReportRunResource};
  export import SchemaListParams = V2Namespace3.Data.SchemaListParams;
  export import SchemaRetrieveParams = V2Namespace3.Data.SchemaRetrieveParams;
  export {Schema, SchemaResource};
  export {Analytics};
  export {Reporting};
}
