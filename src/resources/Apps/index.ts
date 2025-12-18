// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {SecretResource} from './Secrets.js';

export {Secret} from './Secrets.js';

export class Apps {
  secrets: SecretResource;

  constructor(private readonly stripe: Stripe) {
    this.secrets = new SecretResource(stripe);
  }
}
