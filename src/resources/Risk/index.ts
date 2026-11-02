// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Risk as RiskNamespace0, Form, FormResource} from './Forms.js';

export {Form} from './Forms.js';

export class Risk {
  forms: FormResource;

  constructor(private readonly stripe: Stripe) {
    this.forms = new FormResource(stripe);
  }
}

export declare namespace Risk {
  export import FormRetrieveParams = RiskNamespace0.FormRetrieveParams;
  export import FormUpdateParams = RiskNamespace0.FormUpdateParams;
  export {Form, FormResource};
}
