// File generated from our OpenAPI spec

import {Stripe} from '../../../../stripe.core.js';
import {V2 as V2Namespace0, QueryRun, QueryRunResource} from './QueryRuns.js';

export {QueryRun} from './QueryRuns.js';

export class Reporting {
  queryRuns: QueryRunResource;

  constructor(private readonly stripe: Stripe) {
    this.queryRuns = new QueryRunResource(stripe);
  }
}

export declare namespace Reporting {
  export type QueryRunCreateParams = V2Namespace0.Data.Reporting.QueryRunCreateParams;
  export type QueryRunRetrieveParams = V2Namespace0.Data.Reporting.QueryRunRetrieveParams;
  export {QueryRun};
}
