// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {V2 as V2Namespace0, Form, FormResource} from './Forms.js';

export {Form} from './Forms.js';

export class Risk {
  forms: FormResource;

  constructor(private readonly stripe: Stripe) {
    this.forms = new FormResource(stripe);
  }
}

export declare namespace Risk {
  export import FormRetrieveParams = V2Namespace0.Risk.FormRetrieveParams;
  export import FormUpdateParams = V2Namespace0.Risk.FormUpdateParams;
  export {Form, FormResource};
}
