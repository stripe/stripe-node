// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Privacy as PrivacyNamespace0,
  RedactionJob,
  RedactionJobResource,
} from './RedactionJobs.js';
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
  export type RedactionJobListParams = PrivacyNamespace0.RedactionJobListParams;
  export type RedactionJobCreateParams = PrivacyNamespace0.RedactionJobCreateParams;
  export type RedactionJobRetrieveParams = PrivacyNamespace0.RedactionJobRetrieveParams;
  export type RedactionJobUpdateParams = PrivacyNamespace0.RedactionJobUpdateParams;
  export type RedactionJobCancelParams = PrivacyNamespace0.RedactionJobCancelParams;
  export type RedactionJobRunParams = PrivacyNamespace0.RedactionJobRunParams;
  export type RedactionJobValidateParams = PrivacyNamespace0.RedactionJobValidateParams;
  export type RedactionJobListValidationErrorsParams = PrivacyNamespace0.RedactionJobListValidationErrorsParams;
  export {RedactionJob};
  export {RedactionJobValidationError};
}
