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
  export import SecretListParams = AppsNamespace0.SecretListParams;
  export import SecretCreateParams = AppsNamespace0.SecretCreateParams;
  export import SecretFindParams = AppsNamespace0.SecretFindParams;
  export import SecretDeleteWhereParams = AppsNamespace0.SecretDeleteWhereParams;
  export {Secret};
}
