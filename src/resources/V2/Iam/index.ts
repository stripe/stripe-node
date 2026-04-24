// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  ActivityLog,
  ActivityLogResource,
} from './ActivityLogs.js';
import {V2 as V2Namespace1, ApiKey, ApiKeyResource} from './ApiKeys.js';

export {ActivityLog} from './ActivityLogs.js';
export {ApiKey} from './ApiKeys.js';

export class Iam {
  activityLogs: ActivityLogResource;
  apiKeys: ApiKeyResource;

  constructor(private readonly stripe: Stripe) {
    this.activityLogs = new ActivityLogResource(stripe);
    this.apiKeys = new ApiKeyResource(stripe);
  }
}

export declare namespace Iam {
  export type ActivityLogListParams = V2Namespace0.Iam.ActivityLogListParams;
  export {ActivityLog};
  export type ApiKeyListParams = V2Namespace1.Iam.ApiKeyListParams;
  export type ApiKeyCreateParams = V2Namespace1.Iam.ApiKeyCreateParams;
  export type ApiKeyRetrieveParams = V2Namespace1.Iam.ApiKeyRetrieveParams;
  export type ApiKeyUpdateParams = V2Namespace1.Iam.ApiKeyUpdateParams;
  export type ApiKeyExpireParams = V2Namespace1.Iam.ApiKeyExpireParams;
  export type ApiKeyRotateParams = V2Namespace1.Iam.ApiKeyRotateParams;
  export {ApiKey};
}
