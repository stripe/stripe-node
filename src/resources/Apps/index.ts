// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Apps as AppsNamespace0, Secret, SecretResource} from './Secrets.js';

export {Secret} from './Secrets.js';

export class Apps {
  secrets: SecretResource;

  constructor(private readonly stripe: Stripe) {
    this.secrets = new SecretResource(stripe);
  }
}

export declare namespace Apps {
  export type SecretListParams = AppsNamespace0.SecretListParams;
  export type SecretCreateParams = AppsNamespace0.SecretCreateParams;
  export type SecretFindParams = AppsNamespace0.SecretFindParams;
  export type SecretDeleteWhereParams = AppsNamespace0.SecretDeleteWhereParams;
  export {Secret};
}
