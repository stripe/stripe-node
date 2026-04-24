// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  ActivityLog,
  ActivityLogResource,
} from './ActivityLogs.js';

export {ActivityLog} from './ActivityLogs.js';

export class Iam {
  activityLogs: ActivityLogResource;

  constructor(private readonly stripe: Stripe) {
    this.activityLogs = new ActivityLogResource(stripe);
  }
}

export declare namespace Iam {
  export type ActivityLogListParams = V2Namespace0.Iam.ActivityLogListParams;
  export {ActivityLog};
}
