// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  EvaluationOutcome,
  EvaluationOutcomeResource,
} from './EvaluationOutcomes.js';
import {V2 as V2Namespace1, Form, FormResource} from './Forms.js';

export {EvaluationOutcome} from './EvaluationOutcomes.js';
export {Form} from './Forms.js';

export class Risk {
  evaluationOutcomes: EvaluationOutcomeResource;
  forms: FormResource;

  constructor(private readonly stripe: Stripe) {
    this.evaluationOutcomes = new EvaluationOutcomeResource(stripe);
    this.forms = new FormResource(stripe);
  }
}

export declare namespace Risk {
  export import EvaluationOutcomeListParams = V2Namespace0.Risk.EvaluationOutcomeListParams;
  export import EvaluationOutcomeRetrieveParams = V2Namespace0.Risk.EvaluationOutcomeRetrieveParams;
  export {EvaluationOutcome, EvaluationOutcomeResource};
  export import FormRetrieveParams = V2Namespace1.Risk.FormRetrieveParams;
  export import FormUpdateParams = V2Namespace1.Risk.FormUpdateParams;
  export {Form, FormResource};
}
