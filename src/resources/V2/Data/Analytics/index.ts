// File generated from our OpenAPI spec

import {Stripe} from '../../../../stripe.core.js';
import {V2 as V2Namespace0, MetricQueryResource} from './MetricQuery.js';
import {MetricQueryResult} from './MetricQueryResults.js';

export {MetricQueryResult} from './MetricQueryResults.js';

export class Analytics {
  metricQueries: MetricQueryResource;

  constructor(private readonly stripe: Stripe) {
    this.metricQueries = new MetricQueryResource(stripe);
  }
}

export declare namespace Analytics {
  export {MetricQueryResult};
}
