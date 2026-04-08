// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  Billing as BillingNamespace0,
  MeterUsage,
  MeterUsageResource,
} from './MeterUsage.js';
import {MeterUsageRow} from './MeterUsageRows.js';

export {MeterUsage} from './MeterUsage.js';
export {MeterUsageRow} from './MeterUsageRows.js';

export class Analytics {
  meterUsages: MeterUsageResource;

  constructor(private readonly stripe: Stripe) {
    this.meterUsages = new MeterUsageResource(stripe);
  }
}

export declare namespace Analytics {
  export type MeterUsageRetrieveParams = BillingNamespace0.Analytics.MeterUsageRetrieveParams;
  export {MeterUsage};
  export {MeterUsageRow};
}
