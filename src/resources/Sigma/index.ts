// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {ScheduledQueryRunResource} from './ScheduledQueryRuns.js';

export {ScheduledQueryRun} from './ScheduledQueryRuns.js';

export class Sigma {
  scheduledQueryRuns: ScheduledQueryRunResource;

  constructor(private readonly stripe: Stripe) {
    this.scheduledQueryRuns = new ScheduledQueryRunResource(stripe);
  }
}
