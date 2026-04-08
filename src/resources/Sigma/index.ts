// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Sigma as SigmaNamespace0,
  ScheduledQueryRun,
  ScheduledQueryRunResource,
} from './ScheduledQueryRuns.js';

export {ScheduledQueryRun} from './ScheduledQueryRuns.js';

export class Sigma {
  scheduledQueryRuns: ScheduledQueryRunResource;

  constructor(private readonly stripe: Stripe) {
    this.scheduledQueryRuns = new ScheduledQueryRunResource(stripe);
  }
}

export declare namespace Sigma {
  export type ScheduledQueryRunListParams = SigmaNamespace0.ScheduledQueryRunListParams;
  export type ScheduledQueryRunRetrieveParams = SigmaNamespace0.ScheduledQueryRunRetrieveParams;
  export {ScheduledQueryRun};
}
