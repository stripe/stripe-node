// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {RedactionJob, RedactionJobResource} from './RedactionJobs.js';
import {RedactionJobValidationError} from './RedactionJobValidationErrors.js';

export {RedactionJob} from './RedactionJobs.js';
export {RedactionJobValidationError} from './RedactionJobValidationErrors.js';

export class Privacy {
  redactionJobs: RedactionJobResource;

  constructor(private readonly stripe: Stripe) {
    this.redactionJobs = new RedactionJobResource(stripe);
  }
}

export declare namespace Privacy {
  export {RedactionJob};
  export {RedactionJobValidationError};
}
