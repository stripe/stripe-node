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
  export import ActivityLogListParams = V2Namespace0.Iam.ActivityLogListParams;
  export {ActivityLog};
  export import ApiKeyListParams = V2Namespace1.Iam.ApiKeyListParams;
  export import ApiKeyCreateParams = V2Namespace1.Iam.ApiKeyCreateParams;
  export import ApiKeyRetrieveParams = V2Namespace1.Iam.ApiKeyRetrieveParams;
  export import ApiKeyUpdateParams = V2Namespace1.Iam.ApiKeyUpdateParams;
  export import ApiKeyExpireParams = V2Namespace1.Iam.ApiKeyExpireParams;
  export import ApiKeyRotateParams = V2Namespace1.Iam.ApiKeyRotateParams;
  export {ApiKey};
}
