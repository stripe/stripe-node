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
  export import RedactionJobListParams = PrivacyNamespace0.RedactionJobListParams;
  export import RedactionJobCreateParams = PrivacyNamespace0.RedactionJobCreateParams;
  export import RedactionJobRetrieveParams = PrivacyNamespace0.RedactionJobRetrieveParams;
  export import RedactionJobUpdateParams = PrivacyNamespace0.RedactionJobUpdateParams;
  export import RedactionJobCancelParams = PrivacyNamespace0.RedactionJobCancelParams;
  export import RedactionJobRunParams = PrivacyNamespace0.RedactionJobRunParams;
  export import RedactionJobValidateParams = PrivacyNamespace0.RedactionJobValidateParams;
  export import RedactionJobListValidationErrorsParams = PrivacyNamespace0.RedactionJobListValidationErrorsParams;
  export {RedactionJob};
  export {RedactionJobValidationError};
}
