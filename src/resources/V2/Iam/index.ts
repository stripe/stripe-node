// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {V2 as V2Namespace0, ApiKey, ApiKeyResource} from './ApiKeys.js';

export {ApiKey} from './ApiKeys.js';

export class Iam {
  apiKeys: ApiKeyResource;

  constructor(private readonly stripe: Stripe) {
    this.apiKeys = new ApiKeyResource(stripe);
  }
}

export declare namespace Iam {
  export type ApiKeyListParams = V2Namespace0.Iam.ApiKeyListParams;
  export type ApiKeyCreateParams = V2Namespace0.Iam.ApiKeyCreateParams;
  export type ApiKeyRetrieveParams = V2Namespace0.Iam.ApiKeyRetrieveParams;
  export type ApiKeyUpdateParams = V2Namespace0.Iam.ApiKeyUpdateParams;
  export type ApiKeyExpireParams = V2Namespace0.Iam.ApiKeyExpireParams;
  export type ApiKeyRotateParams = V2Namespace0.Iam.ApiKeyRotateParams;
  export {ApiKey};
}
