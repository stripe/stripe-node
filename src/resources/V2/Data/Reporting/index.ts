// File generated from our OpenAPI spec

import {Stripe} from '../../../../stripe.core.js';
import {QueryRun, QueryRunResource} from './QueryRuns.js';

export {QueryRun} from './QueryRuns.js';

export class Reporting {
  queryRuns: QueryRunResource;

  constructor(private readonly stripe: Stripe) {
    this.queryRuns = new QueryRunResource(stripe);
  }
}

export declare namespace Reporting {
  export {QueryRun};
}
