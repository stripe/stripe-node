// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {ApiKey, ApiKeyResource} from './ApiKeys.js';

export {ApiKey} from './ApiKeys.js';

export class Iam {
  apiKeys: ApiKeyResource;

  constructor(private readonly stripe: Stripe) {
    this.apiKeys = new ApiKeyResource(stripe);
  }
}

export declare namespace Iam {
  export {ApiKey};
}
