// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Secret, SecretResource} from './Secrets.js';

export {Secret} from './Secrets.js';

export class Apps {
  secrets: SecretResource;

  constructor(private readonly stripe: Stripe) {
    this.secrets = new SecretResource(stripe);
  }
}

export declare namespace Apps {
  export {Secret};
}
